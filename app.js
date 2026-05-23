// =============================================================
// app.js — all the interactive behaviour for Chinese Flashcards
// =============================================================
//
// How the three files work together:
//   index.html  → defines the structure (elements, IDs, forms)
//   style.css   → defines the appearance (colours, layout, animation)
//   app.js      → defines the behaviour (what happens when you click)
//
// This file is loaded last (at the bottom of index.html), so by
// the time this code runs, every HTML element already exists in
// the page and is ready to be found and manipulated.
// =============================================================


// ---- STATE --------------------------------------------------
// These variables hold the app's "memory" while the page is open.
// They live at the top level so every function below can reach them.
// When you refresh the page, these reset — that's why we also use
// localStorage (see the PERSISTENCE section below).
// -------------------------------------------------------------

let cards = [];           // all cards, loaded from localStorage
let filteredCards = [];   // the subset shown in Review after applying a tag filter
let currentIndex  = 0;   // which card in filteredCards is currently displayed
let activeFilter  = "All"; // which filter button is active ("All" or a tag name)
let editingIndex  = -1;   // -1 = add mode; any other value = index in cards[] of card being edited
let quizCards     = [];   // shuffled copy of cards for the current quiz round
let quizIndex     = 0;    // which question we are on (0-based)
let quizScore     = 0;    // number of correct answers so far
let quizMode      = "forward"; // "forward" = Chinese→English | "reverse" = English→Chinese
let quizFilter    = "All"; // which tag/deck to quiz ("All" or a tag name)
var exploreMode   = "families"; // "families" or "sounds" — which sub-view is active


// ---- SUPABASE -----------------------------------------------
// Supabase is the cloud backend. Replace the two placeholder values
// below with YOUR keys from Supabase → Project Settings → Data API → Settings tab.
//
// The anon key is safe to put here — it is designed to be public.
// Your data is protected by Row Level Security (the policies we set up).
// -------------------------------------------------------------

const SUPABASE_URL = "https://keitclticucntfggpujh.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlaXRjbHRpY3VjbnRmZ2dwdWpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1MDgxNjgsImV4cCI6MjA5NTA4NDE2OH0.j-BMtPNqWIuhws4RYxnsUxOY2Letgsm0WHaaSTd2_-Y";
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

var currentUser = null; // filled in by initAuth() on page load

// Called once at page load. Checks whether the user is already signed in.
async function initAuth() {
  var { data } = await sb.auth.getSession();
  currentUser = data.session ? data.session.user : null;
  updateAuthButton();
  if (currentUser) {
    await downloadCards();
    renderTagCheckboxes(); // refresh the Add-tab tag list with cloud data
  }
}

// Updates the Sign In / Sign Out button in the header.
function updateAuthButton() {
  var btn = document.getElementById("auth-btn");
  if (!btn) return;
  if (currentUser) {
    var name = currentUser.email.split("@")[0];
    btn.textContent = "Sign Out (" + name + ")";
    btn.onclick = signOutUser;
  } else {
    btn.textContent = "Sign In";
    btn.onclick = signInWithGoogle;
  }
}

// Redirects to Google for sign-in. Google sends the user back to this page.
function signInWithGoogle() {
  sb.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: window.location.href }
  });
}

// Signs out and reloads the page so everything resets cleanly.
function signOutUser() {
  sb.auth.signOut().then(function() { window.location.reload(); });
}

// ---- FIELD MAPPING ------------------------------------------
// The app uses different field names than the Supabase table columns.
//   App field     →  Supabase column
//   meaningThai   →  thai
//   interval      →  interval_days
//   nextReview    →  due_at
// cardToRow() converts a card to a Supabase row before saving.
// rowToCard() converts a Supabase row back to a card after loading.
// -------------------------------------------------------------

function cardToRow(card) {
  if (!card.id) card.id = crypto.randomUUID(); // give the card a UUID if it doesn't have one
  return {
    id:            card.id,
    user_id:       currentUser.id,
    character:     card.character   || "",
    pinyin:        card.pinyin      || "",
    meaning:       card.meaning     || "",
    thai:          card.meaningThai || "",
    tags:          card.tags        || [],
    known:         card.known       || false,
    interval_days: card.interval    || 1,
    due_at:        card.nextReview  || null,
    ease_factor:   card.easeFactor  || 2.5,
    review_count:  card.reviewCount || 0,
  };
}

function rowToCard(row) {
  return {
    id:          row.id,
    character:   row.character     || "",
    pinyin:      row.pinyin        || "",
    meaning:     row.meaning       || "",
    meaningThai: row.thai          || "",
    tags:        row.tags          || [],
    known:       row.known         || false,
    interval:    row.interval_days || 1,
    nextReview:  row.due_at        || null,
    easeFactor:  row.ease_factor   || 2.5,
    reviewCount: row.review_count  || 0,
  };
}

// ---- CLOUD SYNC ---------------------------------------------

// Sends all cards to Supabase. "upsert" = insert new ones + update existing ones.
async function uploadCards() {
  if (!currentUser) return;
  cards.forEach(function(c) { if (!c.id) c.id = crypto.randomUUID(); });
  var rows = cards.map(cardToRow);
  var { error } = await sb.from("cards").upsert(rows, { onConflict: "id" });
  if (error) console.error("Sync error:", error.message);
}

// Loads all cards from Supabase and replaces the local cards array.
async function downloadCards() {
  if (!currentUser) return;
  var { data, error } = await sb.from("cards").select("*").eq("user_id", currentUser.id);
  if (error) { console.error("Load error:", error.message); return; }

  if (data.length === 0 && cards.length > 0) {
    // First time signing in: migrate existing local cards to the cloud.
    cards.forEach(function(c) { if (!c.id) c.id = crypto.randomUUID(); });
    await uploadCards();
    return;
  }

  cards = data.map(rowToCard);
  localStorage.setItem("flashcards", JSON.stringify(cards)); // keep local cache in sync
}


// ---- THEMES -------------------------------------------------
// setTheme(name) swaps the data-theme attribute on <html>.
// CSS picks this up instantly — every var(--color-...) updates.
// To add a new theme later:
//   1. Add a [data-theme="X"] block in style.css
//   2. Add one object to THEMES below
//   3. Add one swatch button in index.html
// -------------------------------------------------------------

const THEMES = [
  { name: "ink",  label: "Ink & Parchment" },
  { name: "dark", label: "Dark Mode"        },
  { name: "neon", label: "Neon Futuristic"  },
  { name: "cute", label: "Cute Mode"        },
];

function setTheme(themeName) {
  document.documentElement.setAttribute("data-theme", themeName);
  localStorage.setItem("flashcards-theme", themeName);
  document.querySelectorAll(".theme-swatch").forEach(function(btn) {
    btn.classList.toggle("active-swatch", btn.dataset.themeName === themeName);
  });
}

function loadTheme() {
  var saved = localStorage.getItem("flashcards-theme") || "ink";
  setTheme(saved);
}


// ---- CARD BACK PARTICLES ------------------------------------
// Floating dots that drift upward on the card back.
// Start when the card flips to the back; stop when it flips forward.
// Colors are read from the active CSS theme automatically.
// -------------------------------------------------------------

var particleAnimId = null;

function startCardParticles() {
  var canvas = document.getElementById("card-back-canvas");
  if (!canvas) return;
  var ctx = canvas.getContext("2d");

  canvas.width  = canvas.offsetWidth  || 400;
  canvas.height = canvas.offsetHeight || 280;

  var style  = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue("--color-accent").trim();
  var muted  = style.getPropertyValue("--color-muted").trim();

  var particles = [];
  for (var i = 0; i < 18; i++) {
    particles.push({
      x:         Math.random() * canvas.width,
      y:         Math.random() * canvas.height,
      r:         Math.random() * 2.5 + 0.8,
      speed:     Math.random() * 0.5 + 0.15,
      drift:     (Math.random() - 0.5) * 0.4,
      alpha:     Math.random() * 0.5 + 0.1,
      maxAlpha:  Math.random() * 0.35 + 0.15,
      fadeSpeed: Math.random() * 0.004 + 0.002,
      color:     i % 3 === 0 ? accent : muted,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(function(p) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
      p.y -= p.speed;
      p.x += p.drift;
      p.alpha -= p.fadeSpeed;
      if (p.alpha <= 0 || p.y < -p.r) {
        p.x     = Math.random() * canvas.width;
        p.y     = canvas.height + p.r;
        p.alpha = p.maxAlpha;
        p.drift = (Math.random() - 0.5) * 0.4;
        p.speed = Math.random() * 0.5 + 0.15;
      }
    });
    ctx.globalAlpha = 1;
    particleAnimId = requestAnimationFrame(draw);
  }

  stopCardParticles();
  draw();
}

function stopCardParticles() {
  if (particleAnimId) {
    cancelAnimationFrame(particleAnimId);
    particleAnimId = null;
  }
  var canvas = document.getElementById("card-back-canvas");
  if (canvas) {
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}


// ---- PERSISTENCE --------------------------------------------
// localStorage is a tiny key-value store built into every browser.
// It can only hold strings, so we convert our array using JSON:
//   JSON.stringify([...])  →  turns the array into a JSON text string
//   JSON.parse("...")      →  turns a JSON text string back into an array
//
// The data survives page refreshes, closing the tab, and restarting
// the browser. It is wiped only if you clear browser data.
// -------------------------------------------------------------

function loadCards() {
  // getItem returns null if this key has never been saved before
  const stored = localStorage.getItem("flashcards");
  cards = stored ? JSON.parse(stored) : [];
  // "stored ? ... : []" means: if stored is not null, parse it; otherwise use []

  // Migration: fill in meaningThai from STARTER_DECKS for any saved cards that lack it.
  var deckLookup = {};
  STARTER_DECKS.forEach(function(deck) {
    deck.cards.forEach(function(c) {
      if (c.meaningThai && !deckLookup[c.character]) {
        deckLookup[c.character] = c.meaningThai;
      }
    });
  });
  var migrated = false;
  cards.forEach(function(card) {
    if (!card.meaningThai && deckLookup[card.character]) {
      card.meaningThai = deckLookup[card.character];
      migrated = true;
    }
  });
  if (migrated) { saveCards(); }
}

function saveCards() {
  localStorage.setItem("flashcards", JSON.stringify(cards));
  if (currentUser) uploadCards(); // also save to the cloud when signed in
}

function getDeckRank(tag) {
  var total = cards.filter(function(c) { return c.tags.includes(tag); }).length;
  if (total === 0) return { label: "", emoji: "", pct: 0, known: 0, total: 0 };
  var known = cards.filter(function(c) { return c.tags.includes(tag) && c.known; }).length;
  var pct = Math.round(known / total * 100);
  if (pct >= 100) return { label: "PLATINUM", emoji: "💎", pct: 100, known: known, total: total };
  if (pct >= 75)  return { label: "GOLD",     emoji: "🥇", pct: pct, known: known, total: total };
  if (pct >= 50)  return { label: "SILVER",   emoji: "🥈", pct: pct, known: known, total: total };
  if (pct >= 1)   return { label: "BRONZE",   emoji: "🥉", pct: pct, known: known, total: total };
  return { label: "", emoji: "", pct: 0, known: 0, total: total };
}

function xpBarHTML(tag) {
  var r = getDeckRank(tag);
  if (!r.label) {
    return '<div class="xp-bar-wrap">' +
      '<div class="xp-bar-track"><div class="xp-bar-fill" style="width:0%"></div></div>' +
      '<span class="xp-label">0 / ' + r.total + ' known</span>' +
    '</div>';
  }
  return '<div class="xp-bar-wrap">' +
    '<div class="xp-bar-track xp-' + r.label.toLowerCase() + '">' +
      '<div class="xp-bar-fill" style="width:' + r.pct + '%"></div>' +
    '</div>' +
    '<span class="xp-label">' + r.emoji + ' ' + r.label + ' · ' + r.known + ' / ' + r.total + ' known</span>' +
  '</div>';
}


// ---- EXPORT -------------------------------------------------
// Converts the cards array to a JSON file and triggers a download.
// No server needed — the browser creates a temporary URL for the data.
// -------------------------------------------------------------

function exportDeck() {
  const json = JSON.stringify(cards, null, 2); // null, 2 = pretty-print with 2-space indent
  const blob = new Blob([json], { type: "application/json" });
  const url  = URL.createObjectURL(blob);

  const a    = document.createElement("a");
  a.href     = url;
  a.download = "flashcards.json";
  a.click();

  URL.revokeObjectURL(url); // free the temporary URL immediately after triggering download
}


// ---- IMPORT -------------------------------------------------
// Reads a .json file the user selects, parses it, and merges
// the cards in — skipping any whose character already exists.
// -------------------------------------------------------------

function importDeck(event) {
  const file = event.target.files[0];
  if (!file) { return; }

  const reader = new FileReader();
  reader.onload = function(e) {
    let imported;
    try {
      imported = JSON.parse(e.target.result);
    } catch (err) {
      showImportMsg("That file doesn't look like valid JSON. Try exporting a deck first.");
      return;
    }

    if (!Array.isArray(imported)) {
      showImportMsg("File format not recognised. Expected an array of cards.");
      return;
    }

    const existing = new Set(cards.map(function(c) { return c.character; }));

    let added = 0, skipped = 0;
    imported.forEach(function(card) {
      if (card.character && !existing.has(card.character)) {
        cards.push({
          character: card.character,
          pinyin:    card.pinyin    || "",
          meaning:   card.meaning   || "",
          tags:      Array.isArray(card.tags) ? card.tags : [],
          known:     card.known     || false
        });
        existing.add(card.character);
        added++;
      } else {
        skipped++;
      }
    });

    saveCards();
    event.target.value = ""; // reset so the same file can be re-imported later

    const msg = added + " card" + (added === 1 ? "" : "s") + " imported" +
      (skipped > 0 ? ", " + skipped + " duplicate" + (skipped === 1 ? "" : "s") + " skipped" : "") + ".";
    showImportMsg(msg);
  };

  reader.readAsText(file);
}

function showImportMsg(text) {
  const el = document.getElementById("import-msg");
  el.textContent   = text;
  el.style.display = "block";
  setTimeout(function() { el.style.display = "none"; }, 3000);
}


// ---- TAB SWITCHING ------------------------------------------
// The app has two "screens": Add Card and Review Cards.
// We fake navigation by showing one <section> and hiding the other.
// The HTML calls switchTab('add') or switchTab('review') via onclick.
// -------------------------------------------------------------

function switchTab(tab) {
  // Show only the requested section; hide the others.
  document.getElementById("section-add").style.display     = (tab === "add")     ? "" : "none";
  document.getElementById("section-review").style.display  = (tab === "review")  ? "" : "none";
  document.getElementById("section-quiz").style.display    = (tab === "quiz")    ? "" : "none";
  document.getElementById("section-decks").style.display   = (tab === "decks")   ? "" : "none";
  document.getElementById("section-explore").style.display = (tab === "explore") ? "" : "none";

  // classList.toggle(class, bool) adds the class when bool is true, removes it when false.
  document.getElementById("tab-add").classList.toggle("active",     tab === "add");
  document.getElementById("tab-review").classList.toggle("active",  tab === "review");
  document.getElementById("tab-quiz").classList.toggle("active",    tab === "quiz");
  document.getElementById("tab-decks").classList.toggle("active",   tab === "decks");
  document.getElementById("tab-explore").classList.toggle("active", tab === "explore");

  if (tab === "add") {
    // If the user clicks the Add tab while an edit is in progress, cancel the edit cleanly.
    if (editingIndex !== -1) {
      editingIndex = -1;
      document.getElementById("submit-btn").textContent  = "Add Card";
      document.getElementById("add-heading").textContent = "Add a New Card";
    }
    renderTagCheckboxes();
  } else if (tab === "review") {
    renderReview();
  } else if (tab === "quiz") {
    renderQuizStart();
  } else if (tab === "decks") {
    renderDecks();
  } else if (tab === "explore") {
    renderExplore();
  }
}


// ---- TAG CHECKBOXES -----------------------------------------
// Builds the checkbox list in the Add form from whatever tags
// currently exist across all cards. Called each time the Add tab opens.
// -------------------------------------------------------------

function renderTagCheckboxes() {
  const container = document.getElementById("tag-checkboxes");
  container.innerHTML = ""; // clear any previously rendered checkboxes

  // Collect every unique tag that exists across all cards.
  // Same logic as renderFilterButtons() — a Set ignores duplicates.
  const tagSet = new Set();
  cards.forEach(function(card) {
    card.tags.forEach(function(tag) { tagSet.add(tag); });
  });

  // Create one checkbox-label per tag using the same style as the old hard-coded ones.
  tagSet.forEach(function(tag) {
    const label = document.createElement("label");
    label.className = "checkbox-label";
    label.innerHTML = '<input type="checkbox" name="tag" value="' + tag + '" /> ' + tag;
    container.appendChild(label);
  });
}


// ---- ADDING A CARD ------------------------------------------
// Called when the user submits the "Add a New Card" form.
// The HTML calls addCard(event) via onsubmit="addCard(event)".
// -------------------------------------------------------------

function addCard(event) {
  // A form's default behaviour is to reload the page on submit —
  // that would wipe all our data. This line cancels that.
  event.preventDefault();

  // Read what the user typed in the three text boxes.
  // .trim() removes any accidental leading/trailing spaces.
  const character    = document.getElementById("input-character").value.trim();
  const pinyin       = document.getElementById("input-pinyin").value.trim();
  const meaning      = document.getElementById("input-meaning").value.trim();
  const meaningThai  = document.getElementById("input-thai").value.trim();

  // Find every checkbox with name="tag" that is currently checked,
  // then collect just their values (e.g. ["HSK1", "Food"]).
  const checkedBoxes = document.querySelectorAll('input[name="tag"]:checked');
  const tags = Array.from(checkedBoxes).map(function(box) { return box.value; });
  // Array.from converts the NodeList (like an array but not quite) into a real array.
  // .map runs a function on each item and returns a new array of the results.

  // Also collect the free-text new tag if the user typed one.
  const newTag = document.getElementById("input-new-tag").value.trim();
  if (newTag && !tags.includes(newTag)) {
    tags.push(newTag);
  }

  if (editingIndex !== -1) {
    // Edit mode: replace the card at editingIndex, keeping its known state.
    cards[editingIndex] = { id: cards[editingIndex].id, character, pinyin, meaning, meaningThai, tags, known: cards[editingIndex].known, interval: cards[editingIndex].interval, nextReview: cards[editingIndex].nextReview };
    editingIndex = -1;
    document.getElementById("submit-btn").textContent  = "Add Card";
    document.getElementById("add-heading").textContent = "Add a New Card";
    saveCards();
    event.target.reset();
    switchTab("review");
  } else {
    // Add mode: push a brand-new card.
    // { character, pinyin, meaning, tags } is shorthand for
    // { character: character, pinyin: pinyin, ... }
    cards.push({ id: crypto.randomUUID(), character, pinyin, meaning, meaningThai, tags, known: false, interval: 1, nextReview: null });
    saveCards();
    event.target.reset();
    // Show the "Card saved!" confirmation for 2 seconds, then hide it.
    const msg = document.getElementById("add-confirmation");
    msg.style.display = "block";
    setTimeout(function() {
      msg.style.display = "none";
    }, 2000);
  }
  // setTimeout(fn, ms) schedules fn to run after ms milliseconds.
}


// ---- REVIEW: FILTER BUTTONS ---------------------------------
// Builds the row of tag-filter buttons above the flashcard.
// Called every time the Review screen is rendered.
// -------------------------------------------------------------

function renderFilterButtons() {
  const bar = document.getElementById("filter-bar");
  bar.innerHTML = ""; // wipe any previously rendered buttons

  // Collect every unique tag that exists across all cards.
  // A Set automatically ignores duplicate values.
  const tagSet = new Set();
  cards.forEach(function(card) {
    card.tags.forEach(function(tag) { tagSet.add(tag); });
  });

  // Put "All" and "Due Today" first, then tags sorted so HSK 1-6 come next in level
  // order, followed by all other tags alphabetically.
  const today    = new Date().toISOString().slice(0, 10);
  const dueCount = cards.filter(function(c) {
    return !c.nextReview || c.nextReview <= today;
  }).length;
  const sortedTags = Array.from(tagSet).sort(function(a, b) {
    var aHsk = a.match(/^HSK\s*(\d)/i);
    var bHsk = b.match(/^HSK\s*(\d)/i);
    if (aHsk && bHsk) { return parseInt(aHsk[1]) - parseInt(bHsk[1]); }
    if (aHsk) { return -1; }
    if (bHsk) { return  1; }
    return a.localeCompare(b);
  });
  const allTags = ["All", "Due Today (" + dueCount + ")"].concat(sortedTags);

  // Create one <button> per tag and add it to the filter bar.
  allTags.forEach(function(tag) {
    const btn = document.createElement("button");
    btn.className   = "filter-btn";
    btn.textContent = tag;

    // Highlight the button that matches the currently active filter.
    if (tag === activeFilter) {
      btn.classList.add("active-filter");
    }

    btn.onclick = function() {
      activeFilter = tag; // remember the new filter choice
      currentIndex = 0;   // always start at the first card when filter changes
      renderReview();     // rebuild the whole review screen with the new filter
    };

    bar.appendChild(btn); // attach the button to the page
  });
}


// ---- REVIEW: MAIN RENDER ------------------------------------
// The entry point for the Review screen.
// Decides whether to show the card, or the "no cards" message.
// -------------------------------------------------------------

function renderReview() {
  renderFilterButtons(); // always rebuild the filter bar first

  // Apply the active filter to decide which cards to show.
  if (activeFilter === "All") {
    filteredCards = cards; // show everything
  } else if (activeFilter.startsWith("Due Today")) {
    const today = new Date().toISOString().slice(0, 10);
    filteredCards = cards.filter(function(card) {
      return !card.nextReview || card.nextReview <= today;
    });
  } else {
    filteredCards = cards.filter(function(card) {
      return card.tags.includes(activeFilter);
    });
  }

  const emptyMsg = document.getElementById("empty-message");
  const cardArea  = document.getElementById("card-area");

  if (filteredCards.length === 0) {
    // No cards to show — display the "Add some cards first" message.
    emptyMsg.style.display = "block";
    cardArea.style.display  = "none";
  } else {
    emptyMsg.style.display = "none";
    cardArea.style.display  = "block";

    // Guard: if we deleted a card, currentIndex might now point
    // past the end of the array. Clamp it to the last valid position.
    if (currentIndex >= filteredCards.length) {
      currentIndex = filteredCards.length - 1;
    }

    renderCard(currentIndex);
  }
}


// ---- REVIEW: RENDER ONE CARD --------------------------------
// Puts the data from one card into the DOM elements that display it.
// -------------------------------------------------------------

function renderCard(index) {
  currentIndex = index;
  const card = filteredCards[index];

  // Write the card's text into the corresponding HTML elements.
  document.getElementById("card-character").textContent = card.character;
  document.getElementById("card-pinyin").textContent    = card.pinyin;
  document.getElementById("card-meaning").textContent   = card.meaning;

  document.getElementById("card-meaning-thai").textContent = card.meaningThai || "";

  // Update the "Card X of Y" counter.
  // index is 0-based internally, but humans count from 1, so we add 1.
  document.getElementById("card-counter").textContent =
    "Card " + (index + 1) + " of " + filteredCards.length;

  // Build the tag pills on both faces of the card.
  renderTagPills("card-tags-front", card.tags);
  renderTagPills("card-tags-back",  card.tags);

  // Always start on the front face — remove .flipped if it was there.
  document.getElementById("card-inner").classList.remove("flipped");
  stopCardParticles();
  hideCardExamples();

  // Reflect this card's known/not-yet state on the buttons and progress line.
  renderKnownButtons(card.known);
  renderProgress();
}


// Helper: fills a tag container with small pill-shaped <span> elements.
function renderTagPills(containerId, tags) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // clear any old pills
  tags.forEach(function(tag) {
    const span = document.createElement("span");
    span.className   = "tag-pill";
    span.textContent = tag;
    container.appendChild(span);
  });
}


// ---- FLIP ---------------------------------------------------
// Toggles the CSS class that triggers the 3D rotation animation.
// The animation is defined entirely in style.css (.card-inner.flipped).
// This function just adds or removes that class.
// -------------------------------------------------------------

function flipCard() {
  var inner = document.getElementById("card-inner");
  inner.classList.toggle("flipped");
  if (inner.classList.contains("flipped")) {
    startCardParticles();
    renderCardExamples();
  } else {
    stopCardParticles();
    hideCardExamples();
  }
}

function renderCardExamples() {
  var panel = document.getElementById("card-examples");
  var card  = filteredCards[currentIndex];
  if (!panel || !card) return;
  var exs = (typeof CHARACTER_EXAMPLES !== "undefined")
              ? CHARACTER_EXAMPLES[card.character] : null;
  if (!exs || exs.length === 0) { panel.style.display = "none"; return; }
  var html = '<p class="examples-label">Examples</p>';
  exs.forEach(function(e) {
    html += '<div class="example-row">'
          + '<span class="ex-word">'    + e.word    + '</span>'
          + '<span class="ex-pinyin">'  + e.pinyin  + '</span>'
          + '<span class="ex-meaning">' + e.meaning + '</span>'
          + '</div>';
  });
  panel.innerHTML = html;
  panel.style.display = "block";
}

function hideCardExamples() {
  var panel = document.getElementById("card-examples");
  if (panel) panel.style.display = "none";
}


// ---- SPEAK --------------------------------------------------
// Reads the current card's Chinese character aloud using the
// browser's built-in Text-to-Speech engine. No library needed.
// -------------------------------------------------------------

function speakCard(event) {
  event.stopPropagation(); // stop the click bubbling up to the card and flipping it

  const text = document.getElementById("card-character").textContent;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "zh-CN"; // Mandarin Chinese voice

  window.speechSynthesis.cancel(); // stop anything already playing
  window.speechSynthesis.speak(utterance);
}


// ---- NAVIGATION ---------------------------------------------
// Move to the previous or next card.
// "Wraps around" — Next on the last card goes to the first, and vice versa.
// -------------------------------------------------------------

function prevCard() {
  // Without the + filteredCards.length, going back from index 0 would give -1,
  // which is an invalid array index. Adding the length and taking the modulo
  // wraps -1 around to the last index.
  currentIndex = (currentIndex - 1 + filteredCards.length) % filteredCards.length;
  renderCard(currentIndex);
}

function nextCard() {
  // % is the modulo (remainder) operator.
  // When currentIndex reaches filteredCards.length, the remainder is 0,
  // which wraps us back to the first card.
  currentIndex = (currentIndex + 1) % filteredCards.length;
  renderCard(currentIndex);
}


// ---- DELETE -------------------------------------------------
// Removes the currently displayed card from the cards array.
// -------------------------------------------------------------

function deleteCard() {
  // Get a reference to the card object we are looking at.
  const cardToDelete = filteredCards[currentIndex];

  // Find that same object in the full (unfiltered) cards array.
  // indexOf returns the position, or -1 if not found.
  const realIndex = cards.indexOf(cardToDelete);

  if (realIndex !== -1) {
    // splice(start, deleteCount) removes deleteCount items from the array
    // starting at position start. Here we remove exactly 1 card.
    cards.splice(realIndex, 1);
    saveCards(); // persist immediately
  }

  // Re-render the review screen. renderReview will clamp currentIndex
  // if the deletion made it go out of bounds.
  renderReview();
}


// ---- EDIT ---------------------------------------------------
// Opens the current card in the Add form so the user can fix it.
// Sets editingIndex so addCard() knows to update rather than push.
// -------------------------------------------------------------

function editCard() {
  const card = filteredCards[currentIndex];

  // Switch to the Add tab FIRST — before setting editingIndex,
  // so switchTab's "cancel edit on tab click" guard doesn't fire.
  switchTab("add");

  editingIndex = cards.indexOf(card);

  // Pre-fill the text fields with the card's current values.
  document.getElementById("input-character").value = card.character;
  document.getElementById("input-pinyin").value    = card.pinyin;
  document.getElementById("input-meaning").value   = card.meaning;
  document.getElementById("input-thai").value      = card.meaningThai || "";

  // Uncheck every tag checkbox, then re-check only the ones this card has.
  document.querySelectorAll('input[name="tag"]').forEach(function(box) {
    box.checked = card.tags.includes(box.value);
  });

  // Signal edit mode in the UI.
  document.getElementById("submit-btn").textContent  = "Save Changes";
  document.getElementById("add-heading").textContent = "Edit Card";
}


// ---- KNOW-IT / NOT-YET -----------------------------------------
// Records whether the user knew the current card, saves it, and
// updates the button highlight and progress counter.
// ----------------------------------------------------------------

function markKnown(isKnown) {
  const cardToUpdate = filteredCards[currentIndex];
  const realIndex = cards.indexOf(cardToUpdate);
  if (realIndex !== -1) {
    cards[realIndex].known = isKnown;
    updateSpacedRepetition(cards[realIndex], isKnown);
    saveCards();
  }
  renderReview();
}

// Schedules the card's next review based on whether the user knew it.
// Know it → interval doubles (caps at 60 days). Not yet → resets to 1 day.
function updateSpacedRepetition(card, knew) {
  if (knew) {
    card.interval = Math.min((card.interval || 1) * 2, 60);
  } else {
    card.interval = 1;
  }
  const next = new Date();
  next.setDate(next.getDate() + card.interval);
  card.nextReview = next.toISOString().slice(0, 10);
}

// Highlights whichever button matches the card's current state.
function renderKnownButtons(isKnown) {
  document.getElementById("btn-know").classList.toggle("active-know",   isKnown === true);
  document.getElementById("btn-noyet").classList.toggle("active-noyet", isKnown !== true);
}

// Updates the "X / Y known" line using the current filtered set.
function renderProgress() {
  const knownCount = filteredCards.filter(function(c) { return c.known; }).length;
  document.getElementById("progress-line").textContent =
    knownCount + " / " + filteredCards.length + " known";
}


// ---- QUIZ ---------------------------------------------------
// A state machine with four screens:
//   quiz-start    → quiz-question → quiz-feedback → (loop or quiz-done)
// showQuizScreen() hides all four, then reveals just the requested one.
// -------------------------------------------------------------

function showQuizScreen(id) {
  ["quiz-start", "quiz-question", "quiz-feedback", "quiz-done"].forEach(function(s) {
    document.getElementById(s).style.display = (s === id) ? "" : "none";
  });
}

function renderQuizFilterButtons() {
  var bar = document.getElementById("quiz-filter-bar");
  bar.innerHTML = "";

  var tagSet = new Set();
  cards.forEach(function(card) {
    card.tags.forEach(function(tag) { tagSet.add(tag); });
  });

  var sortedTags = Array.from(tagSet).sort(function(a, b) {
    var aHsk = a.match(/^HSK\s*(\d)/i);
    var bHsk = b.match(/^HSK\s*(\d)/i);
    if (aHsk && bHsk) { return parseInt(aHsk[1]) - parseInt(bHsk[1]); }
    if (aHsk) { return -1; }
    if (bHsk) { return  1; }
    return a.localeCompare(b);
  });

  ["All"].concat(sortedTags).forEach(function(tag) {
    var btn = document.createElement("button");
    btn.className = "filter-btn";
    if (tag === "All") {
      btn.textContent = "All";
    } else {
      var r = getDeckRank(tag);
      btn.textContent = (r.emoji ? r.emoji + " " : "") + tag;
    }
    if (tag === quizFilter) { btn.classList.add("active-filter"); }
    btn.onclick = function() {
      quizFilter = tag;
      renderQuizStart();
    };
    bar.appendChild(btn);
  });
}

function renderQuizStart() {
  renderQuizFilterButtons();

  var pool = quizFilter === "All"
    ? cards
    : cards.filter(function(c) { return c.tags.includes(quizFilter); });

  var count = pool.length;
  document.getElementById("quiz-start-msg").textContent =
    count === 0
      ? (cards.length === 0
          ? "No cards yet — add some in the Add Card tab."
          : "No cards match that filter.")
      : count + " card" + (count === 1 ? "" : "s") + " ready.";
  showQuizScreen("quiz-start");
}

// Fisher-Yates shuffle: returns a new randomly-ordered copy of the array.
function shuffleArray(arr) {
  const a = arr.slice(); // copy so the original is untouched
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

function setQuizMode(mode) {
  quizMode = mode;
  document.getElementById("dir-forward").classList.toggle("active-filter", mode === "forward");
  document.getElementById("dir-reverse").classList.toggle("active-filter", mode === "reverse");
  document.getElementById("dir-thai").classList.toggle("active-filter", mode === "thai");
}

function startQuiz() {
  var pool = quizFilter === "All"
    ? cards
    : cards.filter(function(c) { return c.tags.includes(quizFilter); });
  if (quizMode === "thai") {
    pool = pool.filter(function(c) { return c.meaningThai && c.meaningThai.trim(); });
  }
  if (pool.length === 0) { return; }
  quizCards = shuffleArray(pool);
  quizIndex = 0;
  quizScore = 0;
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const card = quizCards[quizIndex];
  document.getElementById("quiz-counter").textContent =
    "Question " + (quizIndex + 1) + " of " + quizCards.length;

  if (quizMode === "forward") {
    // Show character + pinyin; show input form; hide meaning + reveal button.
    document.getElementById("quiz-character").textContent          = card.character;
    document.getElementById("quiz-pinyin").textContent             = card.pinyin;
    document.getElementById("quiz-meaning").textContent            = "";
    document.getElementById("quiz-forward-form").style.display     = "none";
    document.getElementById("quiz-reveal-btn").style.display       = "";
    showQuizScreen("quiz-question");
  } else if (quizMode === "thai") {
    // Show Thai meaning only; user guesses the Chinese character.
    document.getElementById("quiz-character").textContent          = "";
    document.getElementById("quiz-pinyin").textContent             = "";
    document.getElementById("quiz-meaning").textContent            = card.meaningThai || "";
    document.getElementById("quiz-forward-form").style.display     = "none";
    document.getElementById("quiz-reveal-btn").style.display       = "";
    showQuizScreen("quiz-question");
  } else {
    // Show meaning only; hide character/pinyin + input form; show reveal button.
    document.getElementById("quiz-character").textContent          = "";
    document.getElementById("quiz-pinyin").textContent             = "";
    document.getElementById("quiz-meaning").textContent            = card.meaning;
    document.getElementById("quiz-forward-form").style.display     = "none";
    document.getElementById("quiz-reveal-btn").style.display       = "";
    showQuizScreen("quiz-question");
  }
}

function revealAnswer() {
  const card = quizCards[quizIndex];
  if (quizMode === "forward") {
    document.getElementById("quiz-verdict").textContent = card.meaning;
    document.getElementById("quiz-verdict").className   = "quiz-verdict";
    if (card.meaningThai) {
      document.getElementById("quiz-verdict").innerHTML +=
        '<br><span class="thai-in-quiz">' + card.meaningThai + '</span>';
    }
  } else if (quizMode === "thai") {
    document.getElementById("quiz-verdict").textContent = card.character;
    document.getElementById("quiz-verdict").className   = "card-character";
    document.getElementById("quiz-reveal").textContent  = card.pinyin;
  } else {
    document.getElementById("quiz-verdict").textContent = card.character;
    document.getElementById("quiz-verdict").className   = "card-character";
    document.getElementById("quiz-reveal").textContent  = card.pinyin;
  }
  document.getElementById("quiz-next-btn").style.display    = "none";
  document.getElementById("quiz-self-report").style.display = "";
  showQuizScreen("quiz-feedback");
}

function selfReport(correct) {
  var card = quizCards[quizIndex];
  var realCard = cards.find(function(c) { return c.character === card.character; });
  if (realCard) {
    realCard.known = correct;
    updateSpacedRepetition(realCard, correct);
    saveCards();
  }
  if (correct) { quizScore++; }
  nextQuestion();
}

function submitAnswer(event) {
  event.preventDefault();
  const userAnswer = document.getElementById("quiz-answer").value.trim().toLowerCase();
  const card = quizCards[quizIndex];

  // Accept any slash-separated part of the meaning (case-insensitive).
  // e.g. "hello / how are you" → accepts "hello" OR "how are you"
  const parts = card.meaning.split("/").map(function(p) { return p.trim().toLowerCase(); });
  const correct = parts.includes(userAnswer);

  if (correct) { quizScore++; }

  document.getElementById("quiz-verdict").textContent = correct ? "✓ Correct!" : "✗ Not quite.";
  document.getElementById("quiz-verdict").className   =
    "quiz-verdict " + (correct ? "verdict-correct" : "verdict-wrong");
  document.getElementById("quiz-reveal").textContent  = "Answer: " + card.meaning;
  document.getElementById("quiz-next-btn").style.display    = "";
  document.getElementById("quiz-self-report").style.display = "none";
  showQuizScreen("quiz-feedback");
}

function nextQuestion() {
  quizIndex++;
  if (quizIndex < quizCards.length) {
    renderQuizQuestion();
  } else {
    document.getElementById("quiz-score").textContent =
      "You got " + quizScore + " / " + quizCards.length + " correct!";
    showQuizScreen("quiz-done");
  }
}


// ---- MY DECKS -----------------------------------------------
// Shows all tags the user has on their cards, with options to
// delete all cards in that tag, or just strip the tag label.
// -------------------------------------------------------------

function renderMyDecks() {
  var section = document.getElementById("my-decks-section");
  var grid    = document.getElementById("my-decks-grid");
  grid.innerHTML = "";

  // Gather every unique tag currently on any card.
  var tagSet = new Set();
  cards.forEach(function(card) {
    card.tags.forEach(function(tag) { tagSet.add(tag); });
  });

  if (tagSet.size === 0) {
    section.style.display = "none";
    return;
  }
  section.style.display = "";

  var sortedTags = Array.from(tagSet).sort(function(a, b) {
    var aHsk = a.match(/^HSK\s*(\d)/i);
    var bHsk = b.match(/^HSK\s*(\d)/i);
    if (aHsk && bHsk) { return parseInt(aHsk[1]) - parseInt(bHsk[1]); }
    if (aHsk) { return -1; }
    if (bHsk) { return  1; }
    return a.localeCompare(b);
  });

  sortedTags.forEach(function(tag) {
    var count = cards.filter(function(c) { return c.tags.includes(tag); }).length;

    var tile = document.createElement("div");
    tile.className = "deck-tile my-deck-tile";
    tile.innerHTML =
      '<div class="deck-tile-name">' + tag + '</div>' +
      xpBarHTML(tag) +
      '<div class="deck-tile-count">' + count + ' card' + (count === 1 ? '' : 's') + '</div>' +
      '<button class="btn-delete my-deck-delete-btn">Delete</button>' +
      '<div class="my-deck-confirm" style="display:none;">' +
        '<p class="my-deck-confirm-msg">What should happen to the cards?</p>' +
        '<button class="btn-nav my-deck-confirm-btn" ' +
          'onclick="deleteUserDeck(\'' + tag.replace(/'/g, "\\'") + '\', \'tag\')">Keep cards, remove tag</button>' +
        '<button class="btn-delete my-deck-confirm-btn" ' +
          'onclick="deleteUserDeck(\'' + tag.replace(/'/g, "\\'") + '\', \'cards\')">Delete cards too</button>' +
      '</div>';

    // Wire the Delete button to toggle the confirm panel.
    tile.querySelector(".my-deck-delete-btn").onclick = function() {
      var confirm = tile.querySelector(".my-deck-confirm");
      confirm.style.display = confirm.style.display === "none" ? "" : "none";
    };

    grid.appendChild(tile);
  });
}

function deleteUserDeck(tag, mode) {
  // Strip the tag from every card that has it.
  cards.forEach(function(c) {
    c.tags = c.tags.filter(function(t) { return t !== tag; });
  });

  if (mode === "cards") {
    // Remove cards that are now tagless — they belonged exclusively to this deck.
    // Cards that still have other tags (e.g. HSK1) are kept.
    cards = cards.filter(function(c) { return c.tags.length > 0; });
  }

  saveCards();
  renderDecks();
}


// ---- STARTER DECKS ------------------------------------------
// renderDecks() builds the tile grid from STARTER_DECKS (in decks.js).
// loadDeck(id) adds all cards from one deck to localStorage,
// skipping any character that already exists in the user's collection.
// -------------------------------------------------------------

function renderDecks() {
  renderMyDecks();

  var grid = document.getElementById("decks-grid");
  grid.innerHTML = "";

  // Sort so HSK 1-6 always appear first (in level order), then thematic decks.
  var sorted = STARTER_DECKS.slice().sort(function(a, b) {
    var aNum = a.id.startsWith("hsk") ? parseInt(a.id.slice(3)) : Infinity;
    var bNum = b.id.startsWith("hsk") ? parseInt(b.id.slice(3)) : Infinity;
    return aNum - bNum;
  });

  sorted.forEach(function(deck) {
    var tile = document.createElement("div");
    tile.className = "deck-tile";

    // A deck is "already loaded" if every character is in the collection WITH this deck's tag.
    // Checking by tag (not just character) means deleting a deck's tag correctly re-enables
    // the Load button, even if some characters also appear in other decks (e.g. HSK).
    var allLoaded = deck.cards.every(function(c) {
      return cards.some(function(card) {
        return card.character === c.character && card.tags.includes(deck.tag);
      });
    });

    var btnHtml = allLoaded
      ? '<button class="btn-primary deck-load-btn deck-loaded-btn" disabled>' +
          '&#10003; Loaded</button>'
      : '<button class="btn-primary deck-load-btn" ' +
          'onclick="loadDeck(\'' + deck.id + '\', this)">Load Deck</button>';

    tile.innerHTML =
      '<div class="deck-tile-name">' + deck.name + '</div>' +
      '<div class="deck-tile-desc">' + deck.description + '</div>' +
      '<div class="deck-tile-count">' + deck.cards.length + ' words</div>' +
      btnHtml;

    grid.appendChild(tile);
  });
}

function loadDeck(id, btn) {
  // Find the deck by its id string.
  var deck = STARTER_DECKS.find(function(d) { return d.id === id; });
  if (!deck) { return; }

  var added = 0;
  deck.cards.forEach(function(c) {
    var existing = cards.find(function(card) { return card.character === c.character; });
    if (existing) {
      // Character already in collection — just add this deck's tag if missing.
      if (!existing.tags.includes(deck.tag)) {
        existing.tags.push(deck.tag);
        added++;
      }
      // Backfill meaningThai if the saved card is missing it.
      if (!existing.meaningThai && c.meaningThai) {
        existing.meaningThai = c.meaningThai;
      }
    } else {
      // Brand-new character — push a fresh card.
      cards.push({
        character:   c.character,
        pinyin:      c.pinyin,
        meaning:     c.meaning,
        meaningThai: c.meaningThai || "",
        tags:        [deck.tag],
        known:       false,
        interval:    1,
        nextReview:  null
      });
      added++;
    }
  });

  saveCards();

  // Refresh My Decks so the newly loaded deck appears immediately.
  renderMyDecks();

  // Update the button immediately so the user sees feedback right away.
  if (btn) {
    btn.textContent = "✓ Loaded";
    btn.disabled = true;
    btn.classList.add("deck-loaded-btn");
  }

  // Also show a brief toast message at the bottom of the section.
  var msg = document.getElementById("deck-load-msg");
  if (added > 0) {
    msg.textContent = added + " card" + (added === 1 ? "" : "s") + " added from \"" + deck.name + "\"!";
  } else {
    msg.textContent = "All cards from \"" + deck.name + "\" are already in your collection.";
  }
  msg.style.display = "block";
  setTimeout(function() { msg.style.display = "none"; }, 3500);
}


// ---- EXPLORE ------------------------------------------------
// Two sub-views inside the Explore tab:
//   "families" → grid of character family tiles → detail view
//   "sounds"   → grouped homophones (same pinyin + tone)
// -------------------------------------------------------------

function switchExplore(mode) {
  exploreMode = mode;
  document.getElementById("explore-btn-families").classList.toggle("active-explore", mode === "families");
  document.getElementById("explore-btn-sounds").classList.toggle("active-explore",   mode === "sounds");
  renderExplore();
}

function renderExplore() {
  if (exploreMode === "families") {
    renderFamilies();
  } else {
    renderSoundAlikes();
  }
}

function renderFamilies() {
  var content = document.getElementById("explore-content");
  var html = '<div class="explore-grid">';
  CHARACTER_FAMILIES.forEach(function(fam) {
    var badge = fam.type === "phonetic"
      ? '<span class="family-badge badge-phonetic">Phonetic</span>'
      : '<span class="family-badge badge-semantic">Semantic</span>';
    html +=
      '<div class="family-tile" onclick="renderFamilyDetail(\'' + fam.id + '\')">' +
        '<div class="family-tile-char">' + fam.component + '</div>' +
        '<div class="family-tile-meaning">' + fam.componentMeaning + '</div>' +
        '<div class="family-tile-count">' + fam.members.length + ' chars</div>' +
        badge +
      '</div>';
  });
  html += '</div>';
  content.innerHTML = html;
}

function renderFamilyDetail(id) {
  var fam = CHARACTER_FAMILIES.find(function(f) { return f.id === id; });
  if (!fam) { return; }

  var inDeck = new Set(cards.map(function(c) { return c.character; }));

  var html =
    '<button class="explore-back-btn" onclick="renderFamilies()">&#8592; Back</button>' +
    '<div class="family-component-header">' +
      '<div class="family-component-big">' + fam.component + '</div>' +
      '<div class="family-tile-meaning">' + fam.componentPinyin + ' — ' + fam.componentMeaning + '</div>' +
      '<div class="family-desc">' + fam.description + '</div>' +
    '</div>' +
    '<div class="member-grid">';

  fam.members.forEach(function(m) {
    var alreadyIn = inDeck.has(m.character);
    var btnClass  = alreadyIn ? 'member-add-btn in-deck' : 'member-add-btn';
    var btnLabel  = alreadyIn ? '&#10003; In deck' : '+ Add';
    var btnExtra  = alreadyIn ? 'disabled' : '';
    var tag = 'Family:' + fam.component;
    html +=
      '<div class="member-card">' +
        '<div class="member-char">' + m.character + '</div>' +
        '<div class="member-pinyin">' + m.pinyin + '</div>' +
        '<div class="member-meaning">' + m.meaning + '</div>' +
        '<button class="' + btnClass + '" ' + btnExtra + ' ' +
          'onclick="addFromExplore(\'' + m.character.replace(/'/g, "\\'") + '\',\'' +
            m.pinyin.replace(/'/g, "\\'") + '\',\'' +
            m.meaning.replace(/'/g, "\\'") + '\',\'' +
            tag.replace(/'/g, "\\'") + '\', this)">' +
          btnLabel +
        '</button>' +
      '</div>';
  });

  html += '</div>';
  document.getElementById("explore-content").innerHTML = html;
}

function renderSoundAlikes() {
  var inDeck = new Set(cards.map(function(c) { return c.character; }));
  var html = '';

  SOUND_ALIKES.forEach(function(group) {
    html +=
      '<div class="sound-group">' +
        '<div class="sound-group-header">' + group.pinyin + '</div>' +
        '<div class="sound-group-desc">' + group.description + '</div>' +
        '<div class="member-grid">';

    group.members.forEach(function(m) {
      var alreadyIn = inDeck.has(m.character);
      var btnClass  = alreadyIn ? 'member-add-btn in-deck' : 'member-add-btn';
      var btnLabel  = alreadyIn ? '&#10003; In deck' : '+ Add';
      var btnExtra  = alreadyIn ? 'disabled' : '';
      html +=
        '<div class="member-card">' +
          '<div class="member-char">' + m.character + '</div>' +
          '<div class="member-pinyin">' + group.pinyin + '</div>' +
          '<div class="member-meaning">' + m.meaning + '</div>' +
          '<button class="' + btnClass + '" ' + btnExtra + ' ' +
            'onclick="addFromExplore(\'' + m.character.replace(/'/g, "\\'") + '\',\'' +
              group.pinyin.replace(/'/g, "\\'") + '\',\'' +
              m.meaning.replace(/'/g, "\\'") + '\',\'Sounds\', this)">' +
            btnLabel +
          '</button>' +
        '</div>';
    });

    html += '</div></div>';
  });

  document.getElementById("explore-content").innerHTML = html;
}

function addFromExplore(character, pinyin, meaning, tag, btn) {
  // Guard: do nothing if the character is already in the deck.
  if (cards.some(function(c) { return c.character === character; })) { return; }

  cards.push({
    character:  character,
    pinyin:     pinyin,
    meaning:    meaning,
    tags:       [tag],
    known:      false,
    interval:   1,
    nextReview: null
  });
  saveCards();

  // Update the button in place — no full re-render needed.
  if (btn) {
    btn.textContent = '✓ In deck';
    btn.disabled    = true;
    btn.classList.add('in-deck');
  }
}


// ---- STARTUP ------------------------------------------------
// This runs once, immediately when the browser loads this script.
// It reads any previously saved cards from localStorage so the
// user's deck is ready before they interact with anything.
// Everything else is driven by user actions (clicks and form submits).
// -------------------------------------------------------------

loadCards();
loadTheme();
initAuth(); // check Supabase session; downloads cloud cards if signed in


// ---- AUTO-PINYIN --------------------------------------------
// Fires on every keystroke in the character field.
// Converts what the user typed to tone-marked pinyin and puts it
// in the pinyin field, so tone marks never need to be typed manually.
// -------------------------------------------------------------

document.getElementById("input-character").addEventListener("input", function() {
  const chars = this.value.trim();
  const pinyinField = document.getElementById("input-pinyin");
  if (chars) {
    pinyinField.value = pinyinPro.pinyin(chars, { toneType: "symbol" });
  } else {
    pinyinField.value = "";
  }
});
