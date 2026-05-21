# Chinese Flashcards — Roadmap

A step-by-step plan for growing this app over time.
Each rung builds directly on the one before it.

---

## Rung 1 — Core flashcard app ✅ Done
Add, flip, navigate, delete cards. Tags + localStorage.

## Rung 1.5 — Auto-pinyin
Type only the character; app auto-fills pinyin with tone marks.
Solves the "how do I type tones" problem permanently.

## Rung 2 — Know-it / Not-yet buttons + progress
Two buttons below the card. Track per-card score and show progress (e.g. "4 / 7 known").

## Rung 3 — Edit cards
Edit button reopens a card in the Add form for fixing typos.

## Rung 4 — Custom tags
Free-form tag input. Filter bar + checkboxes generated from data.

## Rung 5 — Audio pronunciation 🎤
Speaker button uses the browser's built-in Text-to-Speech to read the Chinese aloud.
(Best single feature for actually learning Chinese.)

## Rung 6 — Quiz mode
A "Quiz" tab. App hides the meaning, you type it, app scores you.

## Rung 7 — Deploy online (use on your phone)
Push to GitHub, deploy to Vercel. Now the app has a real URL.
Open it on your phone — daily use begins.

## Rung 8 — Import / Export deck
Download deck as JSON, import a JSON file to merge cards.
Useful before account sync exists.

## Rung 9 — Spaced repetition
Simplified SM-2 algorithm. Hard cards appear more often, easy cards less often.

## Rung 10 — Accounts + cloud sync
Google sign-in. Cards sync across devices. Real backend (Firebase or Supabase).

## Rung 11 — Browser extension (quick capture from laptop)
Highlight any Chinese word on any webpage → right-click → add to deck.

## Rung 12 — Mobile app + share extension
Real iOS/Android app with Expo. Share a word from any app on your phone into your deck.
The original dream.

---

## Notes
- Rungs 1–9 need nothing beyond a text editor and a browser.
- Rung 10 introduces servers and accounts.
- Rungs 11–12 unlock the "capture from anywhere" dream.
- You can reorder if a different rung becomes more urgent.
