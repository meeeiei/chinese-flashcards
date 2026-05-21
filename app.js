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
}

function saveCards() {
  localStorage.setItem("flashcards", JSON.stringify(cards));
}


// ---- TAB SWITCHING ------------------------------------------
// The app has two "screens": Add Card and Review Cards.
// We fake navigation by showing one <section> and hiding the other.
// The HTML calls switchTab('add') or switchTab('review') via onclick.
// -------------------------------------------------------------

function switchTab(tab) {
  // Show only the requested section; hide the other two.
  document.getElementById("section-add").style.display    = (tab === "add")    ? "" : "none";
  document.getElementById("section-review").style.display = (tab === "review") ? "" : "none";
  document.getElementById("section-quiz").style.display   = (tab === "quiz")   ? "" : "none";

  // classList.toggle(class, bool) adds the class when bool is true, removes it when false.
  document.getElementById("tab-add").classList.toggle("active",    tab === "add");
  document.getElementById("tab-review").classList.toggle("active", tab === "review");
  document.getElementById("tab-quiz").classList.toggle("active",   tab === "quiz");

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
  const character = document.getElementById("input-character").value.trim();
  const pinyin    = document.getElementById("input-pinyin").value.trim();
  const meaning   = document.getElementById("input-meaning").value.trim();

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
    cards[editingIndex] = { character, pinyin, meaning, tags, known: cards[editingIndex].known };
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
    cards.push({ character, pinyin, meaning, tags, known: false });
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

  // Put "All" first, then every unique tag in the order they were added.
  const allTags = ["All"].concat(Array.from(tagSet));

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
  } else {
    filteredCards = cards.filter(function(card) {
      return card.tags.includes(activeFilter);
    });
    // .filter returns a new array containing only the cards
    // whose tags array includes the activeFilter string.
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

  // Update the "Card X of Y" counter.
  // index is 0-based internally, but humans count from 1, so we add 1.
  document.getElementById("card-counter").textContent =
    "Card " + (index + 1) + " of " + filteredCards.length;

  // Build the tag pills on both faces of the card.
  renderTagPills("card-tags-front", card.tags);
  renderTagPills("card-tags-back",  card.tags);

  // Always start on the front face — remove .flipped if it was there.
  document.getElementById("card-inner").classList.remove("flipped");

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
  document.getElementById("card-inner").classList.toggle("flipped");
  // .toggle adds the class if it is absent, removes it if it is present.
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

  // Pre-fill the three text fields with the card's current values.
  document.getElementById("input-character").value = card.character;
  document.getElementById("input-pinyin").value    = card.pinyin;
  document.getElementById("input-meaning").value   = card.meaning;

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
    saveCards();
  }
  renderKnownButtons(isKnown);
  renderProgress();
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

function renderQuizStart() {
  const count = cards.length;
  document.getElementById("quiz-start-msg").textContent =
    count === 0
      ? "No cards yet — add some in the Add Card tab."
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
}

function startQuiz() {
  if (cards.length === 0) { return; }
  quizCards = shuffleArray(cards);
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
    document.getElementById("quiz-forward-form").style.display     = "";
    document.getElementById("quiz-reveal-btn").style.display       = "none";
    document.getElementById("quiz-answer").value = "";
    showQuizScreen("quiz-question");
    document.getElementById("quiz-answer").focus();
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
  // Reuse the feedback screen: show the character large, pinyin below, then self-report buttons.
  document.getElementById("quiz-verdict").textContent = card.character;
  document.getElementById("quiz-verdict").className   = "card-character";
  document.getElementById("quiz-reveal").textContent  = card.pinyin;
  document.getElementById("quiz-next-btn").style.display    = "none";
  document.getElementById("quiz-self-report").style.display = "";
  showQuizScreen("quiz-feedback");
}

function selfReport(correct) {
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


// ---- STARTUP ------------------------------------------------
// This runs once, immediately when the browser loads this script.
// It reads any previously saved cards from localStorage so the
// user's deck is ready before they interact with anything.
// Everything else is driven by user actions (clicks and form submits).
// -------------------------------------------------------------

loadCards();


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
