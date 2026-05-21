# CLAUDE.md

# Chinese Flashcards

## About the user
- Complete beginner who has never coded before
- Learning Chinese; this app is also a learning project for coding
- Prefers explanations alongside code, not just finished output
- Windows machine, uses Chinese IME for character input

## Working style
- Always enter plan mode before writing or editing code
- Explain each new concept in plain language the first time it appears
- One file or one feature at a time; wait for approval between steps
- When suggesting changes, point to specific line numbers

## Tech choices (Rung 1)
- Plain HTML + CSS + JavaScript, no frameworks, no build tools
- Data stored in localStorage under key "chinese-flashcards"
- Card data shape: { id, character, pinyin, meaning, tags: [] }
- Three files only: index.html, style.css, app.js

## Out of scope (until I say otherwise)
- No backend, no accounts, no online sync yet
- No frameworks (React, Vue, etc.) — stay vanilla until I'm ready