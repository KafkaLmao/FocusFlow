# FocusFlow

A monochrome student productivity workspace with two interchangeable layouts: a sticky-note bulletin and the regular dashboard. Task data and appearance preferences are shared across both layouts.

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
- Current-month calendar with deadline markers, retained on mobile, and the next seven days of deadlines.
- SVG daily completion ring, with no CSS gradients.
- Completion crumples a paper representation of the task using the actual React Bits PaperCrumple component. The effect plays in both layouts. Rapid completions queue; undo cancels the matching effect. WebGL failures use a small CSS fallback. Reduced motion skips decorative completion animation.
- Undo the most recent completion/uncompletion or deletion using the toast's Undo button or Ctrl/Cmd+Z. Completed tasks remain accessible in Completed and can be marked incomplete there at any time.
- Shortcuts: N to create, / to search, 1/2/3 to navigate, ? for help, Escape to close dialogs.
- Local persistence, cross-tab task/theme/layout updates, storage-failure feedback, and an intentionally empty task list remains empty.

## State management

`dist/app.js` owns a task array containing `id`, `title`, optional `notes`, `subject`, `deadline`, `priority` and `completed`. Every mutation goes through `save()`, which stores the array in the existing `focusflow.tasks.v1` local-storage key and rerenders derived lists, statistics and calendar markers. Existing saved tasks are compatible; no migration or reset is required. Deadline comparisons use local calendar dates. First launch seeds sample tasks relative to the current date.

Search, filters, navigation and one-step undo are session state. `focusflow.layout` and `focusflow.theme` persist separately. Completing a task saves immediately, then calls an optional presentation-only React island. The animation never owns or delays task state.

## React Bits integration

`src/components/PaperCrumple.jsx` and its CSS come from https://reactbits.dev/r/PaperCrumple-JS-CSS.json, documented at https://reactbits.dev/micro/paper-crumple. The component is adapted with `autoCrumple` and `onReady` for automatic task-completion playback. The original pointer-controlled behavior remains available when autoplay is not enabled.

`src/completion.jsx` renders a locally generated paper texture using the task title/subject, manages the queue, handles errors/reduced motion, and unmounts/disposes the effect. No task data is sent to React Bits or an image service. `build.mjs` bundles this island into `dist/completion.js` and `dist/completion.css`; the rest of the dashboard stays plain JavaScript.

React Bits uses MIT + Commons Clause; its license is included at `src/components/REACT-BITS-LICENSE.md` and in the served output. React and Three.js license notices are retained in the generated bundle's legal-notice file. GSAP and Lenis retain their original license headers.

Lenis uses one GSAP ticker with millisecond conversion and native touch scrolling. Native dialogs stop background smoothing. Reduced motion disables smoothing and entrance effects. Page lifecycle cleanup removes owned instances and observers.

## Verification

`npm test` checks task mutations, notes, progress totals, completion-event dispatch, completion undo/cancellation, deletion undo, filters, priority changes, both theme states and persistence, both workspace layouts and persistence, calendar retention, and empty-state persistence using a minimal DOM adapter. These tests do not verify browser layout or WebGL rendering. A visual browser/device check is still needed for those paths.

## Vanta background

Vanta DOTS 0.5.24 adds a subtle grayscale dot field behind the workspace. It shares the existing Three.js 0.180.0 bundle with PaperCrumple. The vendored effect has a small constructor adapter to accept an explicitly injected Three.js module instead of requiring a global. `showLines` is disabled and touch/mouse/gyro controls are off. Light/dark changes update the point material directly. The Background toggle persists locally; reduced motion and hidden tabs destroy the animation. Context failures retain a static background. Teardown disposes the Vanta scene and renderer. Source and MIT license: `src/vendor/vanta`, https://github.com/tengbao/vanta. Browser/GPU verification is still required.
