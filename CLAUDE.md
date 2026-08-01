# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static, client-side "confession to crush" web page (Vietnamese: "Tặng Crush" / "một điều nho nhỏ tỏ tình với crush"). No build step, no backend, no package manager — open an HTML file in a browser to run it. All assets (images, music, sounds) are local files in `img/`, `imgthu/`, `music/`, and `sound/`.

## Running / developing

- Open `index.html` directly in a browser, or serve the folder over any static server (e.g. `python -m http.server`) so relative asset paths and audio autoplay behave correctly.
- There are no tests, linters, or build commands.

## Two parallel implementations of the main page

The root contains two distinct versions of the same experience — do not assume a change in one applies to the other:

1. **Template version** — driven by `js/main.js`, which reads a global `CONFIG` object and wires up jQuery + SweetAlert (`Swal.fire`). `main.js` expects a `config.js` defining `CONFIG` (see the `README.md` for the field-by-field template: `introTitle`, `title`, `btnYes`, `btnNo`, `question`, `reply`, `messLink`, etc.). Note: `config.js` is **not currently present** in the repo — it must be created from the README template for the template flow to work. Customizing the page for a new "crush" means editing these CONFIG fields, not the HTML.
2. **Standalone version** — `index.html` (and `index1.html`) is a large, self-contained page (~110KB) with all CSS and JavaScript inlined in `<script>`/`<style>` blocks. It does **not** load `js/main.js` or `config.js`; it has its own canvas particle animations, audio, and interaction logic. Edit content directly in the inlined markup/scripts here.

## Core interaction (template version, `js/main.js`)

The "gag" of the page: the **No** button (`#no`) evades the cursor so the user can only click **Yes** (`#yes`).
- First hover on `#no` → `switchButton()` swaps the Yes/No positions.
- Subsequent hovers → `moveButton()` teleports `#no` to a random spot.
- Clicking `#yes` opens a SweetAlert chain (question → reply input → acceptance message) and finally redirects to `CONFIG.messLink`.
- Small sound effects (`sound/duck.mp3`, `sound/Swish1.mp3`, `sound/tick.mp3`) fire on these interactions.

## Vendored sub-projects

`sinhnhatem-ne-master/` and `tiny-heart-master/` are separate, self-contained "happy birthday" web templates copied in from other GitHub repos (`tiny-heart` by IcedSoul et al.). They are independent of the root confession page and have their own `index.html` / `js/` — treat them as vendored third-party content unless a task specifically targets them.

## CSS

`css/style.css` and `css/spinload.css` support the template version (spinner/preloader shown while `main.js` initializes). The standalone `index.html` largely ignores these in favor of inline styles.
