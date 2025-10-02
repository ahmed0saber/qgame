# QGame — Microfrontend Educational Games Platform

QGame is a lightweight, static web platform that integrates a collection of educational games at runtime. Each game is built as an independent microfrontend delivered as a Web Component (with Shadow DOM), hosted separately, and dynamically loaded into the platform.

- **Architecture**: Microfrontends via Web Components
- **Integration**: Runtime composition by loading `script.js` from each game’s GitHub Pages
- **Hosting**: Static site (works great on GitHub Pages and Cloudflare or any static host)


## Demo & Games

- Browse all QGame microfrontend repositories: `https://github.com/orgs/qgame-studio/repositories`


## Repository Structure

```text
.
├─ index.html            # Landing page (hero, top games, team)
├─ games.html            # All games listing page
├─ game.html             # Game runtime shell that mounts a game microfrontend
├─ components.js         # Navbar/Footer custom elements
├─ index.js              # Renders 4 random games on the landing page
├─ games.js              # Renders the full games catalog
├─ game.js               # Loads selected game microfrontend at runtime
├─ script.js             # Small site-wide script (mobile nav)
├─ style.css             # Site styles
├─ data/
│  └─ games.json        # Catalog of available games (metadata + slug)
└─ images/
   ├─ games/            # Game thumbnails `{slug}.webp`
   └─ ...
```


## How It Works

At navigation time, the platform resolves the selected game’s `slug` from the URL and injects the game microfrontend script from the game’s own GitHub Pages site. The game exposes a custom element named `game-component`, which the platform renders inside `game.html`.

- Catalog entry in `data/games.json` defines: `subject`, `title`, `description`, `slug`.
- Thumbnails live at `images/games/{slug}.webp`.
- The game runtime shell (`game.html`) includes a `<game-component></game-component>` element.
- The loader (`game.js`) injects the microfrontend script:


Each game repository must publish a `script.js` that registers the `game-component` custom element and renders the game inside its own Shadow DOM to encapsulate styles and markup.


## Local Development

Because the site fetches `./data/games.json`, you should run a static server locally (opening files via `file://` can block `fetch`).


## Add a New Game (Microfrontend Contract)

To integrate a new game, create a dedicated repo under the organization (or any host) and publish it via GitHub Pages at: `https://qgame-studio.github.io/{your-slug}/` with a top-level `script.js` that defines `game-component`.

1) In the game repo, expose a Web Component:

```javascript
class QGameMicrofrontend extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        /* Game-scoped styles */
      </style>
      <div id="root"></div>
    `;
    // Initialize your game inside #root (render UI, attach handlers, etc.)
  }
}

customElements.define('game-component', QGameMicrofrontend);
```

2) Enable GitHub Pages for the game repo so `script.js` is served at:
   `https://qgame-studio.github.io/{your-slug}/script.js`

3) In this platform repo:
   - Add a catalog entry to `data/games.json` with your `slug`.
   - Add a thumbnail at `images/games/{slug}.webp` (ideally 16:9 and optimized).

That’s it. Visiting `game.html?slug={your-slug}` will load your game at runtime.


## Styling and Encapsulation

- Platform styles live in `style.css` and apply to the shell (navbar, layout, cards, etc.).
- Games must scope their own styles within Shadow DOM to avoid leaking into the host or other games.
- Avoid global side effects in game scripts (no global CSS or DOM assumptions outside the component).


## Deployment

This platform is a static site:
- Host on GitHub Pages, Cloudflare, Netlify, or any static hosting.
- Ensure game repos publish their `script.js` in root directory via GitHub Pages or any static hosting before listing them here.

