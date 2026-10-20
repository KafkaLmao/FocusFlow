# FocusFlow

A mostly monochrome student productivity workspace with restrained deep red accents and two interchangeable layouts: a sticky-note bulletin and the regular dashboard. Task data and appearance preferences are shared across both layouts.

## Run and build

The ready-to-serve application is in `dist`. Run `python -m http.server 5173 --directory dist`, then open http://localhost:5173. Use a server rather than a file URL for predictable local-storage behavior.

To change the React completion effect, install Node.js 22 or newer, then run:

```sh
npm ci
npm run build
npm test
```

There is no backend, account or cross-device synchronization. Browser data stays on this device. The static output includes React, React DOM, Three.js, GSAP and Lenis locally; Google Fonts have system-font fallbacks.

## Features

- Create, edit, delete and complete assignments with a title, subject, deadline and priority.
- Optional multiline notes for ideas, checklists and next steps.
- Bulletin/Dashboard selector, persisted independently from dark/light preference. Switching layouts preserves all tasks, filters and completion states.
- Daily tasks, overdue tasks, upcoming deadlines and completed views.
- Search plus subject/priority filters; drag-and-drop priority board with a keyboard/touch editing alternative.
- Physical card dragging with mouse, pen or touch: use the six-dot grip on any unfinished assignment. A lifted card follows the pointer; drop into a board column or the centered High/Medium/Low bins. While a note is picked up, page scrolling is locked (wheel, touch, keyboard and smooth-scroll inertia); normal scrolling returns after a drop or cancellation. Touch scrolling stays available on the card body outside a drag. Escape, an outside drop or an interrupted gesture cancels. Priority changes persist and support Undo. Focus a grip and use Left/Right or Home/End for the same action with the keyboard.
- Current-month calendar with deadline markers, retained on mobile, and the next seven days of deadlines.
- SVG daily completion ring with a subtle burgundy gradient.
- Completion briefly crumples a small paper representation of the task using the actual React Bits PaperCrumple component. The effect plays in both layouts. Rapid completions retain only the latest waiting effect; undo cancels the matching effect. WebGL failures use a small CSS fallback. Reduced motion skips decorative completion animation.
- Undo the most recent completion/uncompletion or deletion using the toast's Undo button or Ctrl/Cmd+Z. Completed tasks remain accessible in Completed and can be marked incomplete there at any time.
- Shortcuts: N to create, / to search, 1/2/3 to navigate, ? for help, Escape to close dialogs.
- Local persistence, cross-tab task/theme/layout updates, storage-failure feedback, and an intentionally empty task list remains empty.

## State management

`dist/app.js` owns a task array containing `id`, `title`, optional `notes`, `subject`, `deadline`, `priority`, `completed`, optional `plannedFor` and optional `completedAt`. Every mutation goes through `save()`, which stores the array in the existing `focusflow.tasks.v1` local-storage key and rerenders derived lists, statistics and calendar markers. Existing saved tasks are compatible; no migration or reset is required. Deadline comparisons use local calendar dates. First launch seeds sample tasks relative to the current date.

Search, filters, navigation and one-step undo are session state. `focusflow.layout` and `focusflow.theme` persist separately. Completing a task saves immediately, then calls an optional presentation-only React island. The animation never owns or delays task state.

`dist/refinements.css` makes small presentation changes to the original interface: tighter spacing, less repeated helper text and deep red gradients on the primary action, active navigation and selected date, with a faint tint on the paper notes. The typefaces, bulletin rotation, layout controls, progress gauge and centered priority bins are retained. The daily ring uses a theme-aware SVG gradient. No task state or storage keys change.

`dist/drag.js` owns only the transient pointer gesture, drag preview and centered priority bins. It commits a valid drop through `FocusFlowData.changePriority()`, which updates the same canonical task array, records Undo, saves and renders. Moving across a priority filter clears that filter so the moved card stays visible. No drag positions or duplicate task state are persisted.

## React Bits integration

`src/components/PaperCrumple.jsx` and its CSS come from https://reactbits.dev/r/PaperCrumple-JS-CSS.json, documented at https://reactbits.dev/micro/paper-crumple. The component is adapted with `autoCrumple` and `onReady` for automatic task-completion playback. The original pointer-controlled behavior remains available when autoplay is not enabled.

`src/completion.jsx` renders a locally generated paper texture using the task title/subject, manages the queue, handles errors/reduced motion, and unmounts/disposes the effect. No task data is sent to React Bits or an image service. `build.mjs` bundles this island into `dist/completion.js` and `dist/completion.css`; the rest of the dashboard stays plain JavaScript.

React Bits uses MIT + Commons Clause; its license is included at `src/components/REACT-BITS-LICENSE.md` and in the served output. React and Three.js license notices are retained in the generated bundle's legal-notice file. GSAP and Lenis retain their original license headers.

Lenis uses one GSAP ticker with millisecond conversion and native touch scrolling. Native dialogs stop background smoothing. Reduced motion disables smoothing and entrance effects. Page lifecycle cleanup removes owned instances and observers.

## Verification

`npm test` checks task mutations, notes, progress totals, completion-event dispatch, completion undo/cancellation, deletion undo, filters, priority changes, both theme states and persistence, both workspace layouts and persistence, calendar retention, and empty-state persistence using a minimal DOM adapter. These tests do not verify browser layout or WebGL rendering. A visual browser/device check is still needed for those paths.

## Vanta background

Vanta DOTS 0.5.24 adds an optional grayscale dot field behind the workspace. It defaults to off for new visitors, respects existing saved preferences and uses low opacity when enabled so assignments stay prominent. It shares the existing Three.js 0.180.0 bundle with PaperCrumple. The vendored effect has a small constructor adapter to accept an explicitly injected Three.js module instead of requiring a global. `showLines` is disabled and touch/mouse/gyro controls are off. Light/dark changes update the point material directly. The Background toggle persists locally; reduced motion and hidden tabs destroy the animation. Context failures retain a static background. Teardown disposes the Vanta scene and renderer. Source and MIT license: `src/vendor/vanta`, https://github.com/tengbao/vanta. Physical-device GPU verification is still required.

## New-note pinning

New assignments in Bulletin get a GSAP paper-settle and pushpin-press animation. The note remains immediately usable; reduced motion shows the final pinned state directly. Existing tasks do not animate on edit or reload. A new assignment that does not match the current daily/completed view or filters is revealed in the appropriate list. `dist/pin.js` owns and cleans up the short animation; the pin is decorative SVG and follows the theme.

## Overall Slosh Gauge

The right column shows a compact, static React Bits SloshGauge from https://reactbits.dev/micro/slosh-gauge, using the JS/CSS source at https://reactbits.dev/r/SloshGauge-JS-CSS.json. The 64 x 108 gauge updates without liquid bounce, keeping the daily ring and tasks visually dominant. The existing React island renders it read-only with `round(completed / total * 100)`, counting every assignment regardless of filters or layout. Empty lists show 0%. All completed tasks show 100%. Add, delete, complete, reopen, undo and cross-tab updates feed fresh counts from the canonical task array. Theme changes update the monochrome liquid and tank colors. Tick gradients were removed to preserve the no-gradient design. The existing React Bits license also covers this component. The calendar remains directly below the gauge.

## Daily workflow improvements

- **Do today** plans a task for the current local date without changing its deadline. It appears in My day under Planned for today. The editor has the same planning checkbox. Planning/unplanning supports Undo. The daily ring counts tasks due today plus tasks planned today; the right-hand gauge still counts all assignments.
- **All assignments** includes active and completed work. The priority board contains unfinished tasks; Completed contains completed tasks. New completions record an ISO timestamp, preserved when editing and restored by Undo. Existing tasks remain compatible; old completion timestamps are not invented.
- **Calendar** has previous/next month buttons and selectable days. A selected day filters assignments by deadline. New assignments default to that day. Back to today returns to the daily view.
- **Filtering** shows active filters and a Clear filters action. Sidebar navigation clears stale filters; search includes notes. Sorting supports deadline, priority or title.
- **Backup** exports a versioned JSON file locally. Import validates the entire file before merging missing IDs and keeps existing tasks unchanged. Malformed, duplicate, oversized and impossible-date records are rejected. If storage is full, nothing is merged. No files are uploaded. Backups provide manual portability; they are not automatic cloud sync.
- **Accessibility** adds native date buttons, selected navigation states and keyboard focus restoration after completing/planning tasks.

`npm test` now also runs `workflow-test.cjs`, covering actual view scopes, unchanged deadlines during planning, completion history, undo, calendar navigation and date filtering, notes search, sorting, strict backup validation, idempotent import and atomic storage failure. These are state/DOM-adapter checks, not visual browser or device checks.

`drag-test.cjs` checks the pointer controller's pickup threshold, preview movement, target highlighting, mouse/touch commits, touch capture transfer, cancellation, interrupted gestures, scroll locking/unlocking, scrolling-surface exclusions and keyboard moves using a minimal DOM adapter. Smoke tests also check priority Undo, persistence, invalid/completed-task rejection and filter handling. Real browser and physical touch-device checks remain necessary for layout and native gesture behavior.

`npm run test:browser` runs `browser-test.cjs` in installed Chrome with Playwright available (`npm install --no-save --package-lock=false playwright`, or set `FOCUSFLOW_PLAYWRIGHT` to an existing Playwright module). It starts its own local static server and uses isolated browser profiles with disposable fixtures. Checks cover light/dark priority colors (High red, Medium amber, Low green), quiet defaults, gauge dimensions, mouse and emulated touch dragging, centered priority bins, drag scroll locking/unlocking, priority persistence, Undo, keyboard moves, native touch scrolling, completion effects, reduced motion and overflow down to 320px. Screenshots are written to ignored `.test-artifacts/`. These are actual Chrome checks with mobile emulation; they do not replace testing on a physical phone.
