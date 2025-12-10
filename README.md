# React Course Projects

A curated collection of mini React applications I built while progressing through a front‑end curriculum. Each folder is a stand-alone Vite project that focuses on a single concept—starting with JSX fundamentals and ramping up to state management, API calls, Tailwind UI design, and pagination.

## Highlights

- **Hands-on progression** – The repo mirrors a learning curve: props and components ➜ hooks ➜ side effects ➜ data persistence ➜ UI polish.
- **Vite + React 19 baseline** – Every project is scaffolded with the same toolchain, making it easy to jump between folders and re-use patterns.
- **Reusable snippets** – Need a quick reminder on form handling, two-way binding, localStorage, or Axios pagination? Each project is a ready-made reference.

## Repository Map

| Directory | Focus | Concepts / Libraries |
|-----------|-------|----------------------|
| `first-project/` | Hero + card layout starter | Component composition, basic styling |
| `03-props/` | Prop drilling practice | Reusable `<Card />` component with prop-based media |
| `04-cards-project/` | Job board UI | Array mapping, Lucide icons, responsive cards |
| `08-functions/` | Event playground | onClick, onChange, onWheel handlers |
| `09-useState/` | Counter widget | `useState` basics, multi-button interactions |
| `10-usestate-advance/` | Batched state updates | Functional updates for reliable increments |
| `11-form-handling/` | Form submission | Prevent default, basic validation hook |
| `12-two-way-binding/` | Controlled inputs | Syncing UI + state, clearing inputs |
| `13-note-app/` | Notes dashboard | Tailwind, list mutations, delete flow |
| `14-localstorage/` | Persistence demo | `localStorage` CRUD + JSON stringify/parse |
| `15-api-calling/` | API fetch list | Axios GET, async/await, rendering fetched data |
| `16-useeffect/` | Side-effect intro | `useEffect` with dependency array |
| `17-gallery-project/` | Paginated gallery | Axios + pagination state + loading UI |
| `ui-project/` | Landing page hero | Tailwind sections, props-driven testimonial cards |
| `18-react-router-dom/` | Router fundamentals | BrowserRouter, `Link`, basic `<Routes>` setup |
| `19-routing-advanced/` | Nested + dynamic routing | Route params, `<Outlet>`, programmatic navigation |

## Project Spotlights

### first-project — React scaffolding warm-up
- Navbar + card components with dedicated CSS modules.
- Good reference for structuring a small UI with top-level layout components.

### 03-props — Prop-driven components
- Demonstrates passing image URLs and names into a reusable `<Card />`.
- Useful template whenever you need to render mapped data with props only.

### 04-cards-project — Job board feed
- Populates a job listing array and maps it into rich cards with tags, pay bands, and locations.
- Integrates `lucide-react` icons for “Save” interactions.

### 08-functions — Event handling sandbox
- Logs keystrokes, button clicks, mouse moves, and wheel direction.
- Perfect for revisiting how React normalizes DOM events.

### 09 & 10 — State management drills
- `09-useState`: counter with reset/decrement/increment/+5 controls.
- `10-usestate-advance`: showcases why functional updates are needed when batching state changes in the same handler.

### 11 & 12 — Form workflows
- `11-form-handling`: basic form submit + preventDefault.
- `12-two-way-binding`: controlled input field that clears after submission.

### 13-note-app — Tailwind-powered CRUD UI
- Split-panel layout for adding and viewing notes.
- Uses arrays of objects, deletion via `splice`, and Tailwind classes for rapid styling.

### 14-localstorage — Persistence basics
- Demonstrates storing primitives and objects (via `JSON.stringify`) to `localStorage` and reading them back.

### 15-api-calling — Axios data fetching
- Fetches image metadata from `https://picsum.photos/v2/list`, stores in state, and renders authors on demand.

### 16-useeffect — Effect lifecycle
- Prints to console once thanks to an empty dependency array, paired with a click button to demonstrate rerenders.

### 17-gallery-project — Paginated gallery
- Combines Axios, pagination state, conditional loaders, and pagination guards for a better UX.

### ui-project — Landing page hero
- Tailwind-based hero/feature section with composable subcomponents (`Navbar`, `LeftContent`, `RightContent`) and prop-driven testimonial chips.

### 18-react-router-dom — Router starter kit
- Wraps the entire app in `<BrowserRouter>` and renders a shared `<Navbar />` with `Link` elements for Home, Product, About, and Contact, showcasing declarative navigation without reloads.
- Defines a clean `<Routes>` tree with one component per page, making it a quick reference for wiring up top-level routes in a single file.

### 19-routing-advanced — Nested & dynamic routing playground
- Adds stacked navigation bars: a standard `<Navbar />` for global links plus a `useNavigate`-powered utility bar (`Navbar2`) with “Return”, “Back”, and “Next” buttons for programmatic navigation shortcuts.
- Demonstrates nested routes under `/product` by pairing tab-like links with `<Outlet />`, rendering category pages (`Men`, `Women`, `Kids`) inline.
- Shows dynamic routing with `/courses/:id`, where `useParams()` injects the course slug into the detail page, and finishes with a catch-all `NotFound` route to guard unmatched URLs.

## Getting Started

All projects follow the same workflow. Example for `13-note-app/`:

```bash
cd 13-note-app
npm install
npm run dev
```

> Replace the folder name with any other project to explore it. Vite will print a local dev URL (default: <http://localhost:5173>).

### Requirements
- Node.js ≥ 18
- npm (bundled with Node)
- Optional: `pnpm` or `yarn` if you prefer alternate package managers.

## Common Tech Stack

- **Build tooling**: Vite 7, ESLint 9
- **UI runtime**: React 19 + React DOM
- **Styling**: Vanilla CSS plus Tailwind 4 (note-app, ui-project)
- **HTTP**: Axios for API demos
- **Icons**: `lucide-react` in card-based UIs

## Contributing / Extending

1. Pick a project folder and create a branch.
2. Keep each folder self-contained; duplicate shared utilities if needed.
3. Run `npm run lint` (when available) before opening a PR.

### Ideas to Explore Next
- Add unit tests for the stateful widgets (e.g., counters, forms).
- Introduce React Router in a new folder to practice client-side navigation.
- Refine the gallery with skeleton loaders or infinite scroll.

---

_Happy building! Each project is a snapshot of a specific React skill—clone, tweak, and remix them as you continue growing._
