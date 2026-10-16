# FocusFlow

A responsive student productivity dashboard with no build step. Lenis 1.3.27 and GSAP 3.15.0 are pinned and bundled locally.

## Run

Open `dist/index.html` in a modern browser, or serve `dist` with any static HTTP server (recommended for consistent local storage behavior). For example: `python -m http.server 5173 --directory dist`, then visit http://localhost:5173.

## Features

- Create, edit, delete and complete assignments with title, subject, deadline and priority.
- Daily view separates overdue, today and completed assignments. All assignments and completed views are available separately.
- Search and combine subject and priority filters.
- Drag assignments across High, Medium and Low priority columns. Editing a card provides a keyboard and touch alternative.
- Daily progress ring, current-month calendar and upcoming seven-day deadlines.
- Local storage persists assignments and theme; cross-tab changes synchronize. Storage failure is surfaced and session state remains usable.
- Responsive layout, native accessible dialogs, visible keyboard focus and reduced motion support.
- Shortcuts: N to create, / to search, 1/2/3 to navigate, ? for help, Escape to close dialogs, Ctrl/Cmd+Z to undo the latest deletion.

## State management

`dist/app.js` owns one array of task objects (`id`, `title`, `subject`, `deadline`, `priority`, `completed`). Mutations flow through `save()`, which writes the array to `localStorage` and rerenders the views. Counts, grouped lists, filters, calendar markers and completion percentage are derived from that array rather than stored separately. View, search and filter state are transient; theme preference is stored independently. Deadlines use local calendar dates to avoid UTC day shifts. First launch seeds sample assignments relative to the current date; an intentionally empty saved task list stays empty.

Source: `dist/index.html`, `dist/style.css`, `dist/app.js`. Google Fonts are optional; system font fallbacks work offline. Task data stays in the browser on this device; there is no account or backend synchronization.

## Motion

Lenis uses one GSAP ticker, converting seconds to milliseconds. Native touch scrolling is preserved. Reduced motion disables both smoothing and entrance animations, including live preference changes. Native dialogs stop background smoothing and allow their own scroll. GSAP owns a scoped entrance timeline and completion feedback; instances, ticker callbacks and observers are cleaned up on pagehide and restored after back/forward cache navigation. The core app remains usable if motion libraries fail to load.

Library sources: https://github.com/darkroomengineering/lenis and https://gsap.com. Lenis uses the MIT license; GSAP retains its Standard License header.
