# Phase 5 — Final QA and classroom delivery

Date: 2026-11-03 (Asia/Shanghai). Repository: `xingyawang06-web/Rainy-mountain-adventure-3-stages`, branch `work`.
Approved Phase 4 baseline: `f905e7739fe67d11b3492458e46260cff919dc83`.

**Automated browser QA, disconnected-package simulation and static delivery audit passed. Actual Windows + 360 Browser + offline file:// classroom acceptance is NOT verified here and remains a teacher acceptance item.** No further redesign or teaching activity was introduced.

## What was actually executed

Environment: Debian GNU/Linux 13, system Chromium **154.0.8037.57**, headless Playwright, mouse/keyboard automation. No Windows or 360 Browser executable was available. Chromium was launched with `--no-sandbox` for this managed Linux test environment only; classroom users do not need launch flags.

| Check | Execution and result |
| --- | --- |
| Approved baseline | Existing `tests/phase4.cjs` passed before the fixes. |
| Complete final journey | `tests/phase5.cjs` passed at **1280×720, 1366×768, 1920×1080** through a temporary loopback HTTP test server. Every resolution earned all nine matches, answered all 14 questions, collected five clues, traversed all five road legs, awarded three keys and completed roots/trunk/canopy/assignment through UI interaction. |
| Disconnected package | The same complete suite passed at all three resolutions with **Chromium networking disabled**, loading only ZIP-extracted local bytes through `tests/offline-harness.cjs`. Files were extracted under `/tmp/课堂 资料/雨山 冒险 USB/`; the simulated URL also contained Chinese characters and spaces. Each resolution used 35–36 intercepted local resource loads. **This uses an intercepted HTTP origin, not file://, Windows, a USB device or 360 Browser.** No HTTP server was required for this simulation. |
| Mode and interruption checks | Separate student/rehearsal progress, independent Gate 5 access, teacher notes hidden until Teacher Access, restored selections, Home interruption during walking, stopped audio, saved position, pause/resume and explicit teacher skip passed. |
| Audio rendering | Actual Web Audio PCM was measured for footsteps on every road leg and for synthesized button effects. Key awards created the expected tone voices. Mute removed active/scheduled voices immediately; no AudioContext was created before sound interaction or during an entirely muted walk. **PCM/voice measurements do not establish audible output from physical speakers.** |
| Drawing and history | Real mouse drawing exercised pen, highlighter, underline, ellipse, rectangle and arrow; eraser, undo/redo, clear-confirm/cancel, colors and size passed. Ink was exercised on landscape, field notes, challenge, clue reward, map, key maps, original evidence, tree and assignment. Screen association, evidence returns, panel close/reopen and scroll/resize/fullscreen alignment passed. |
| Layout and input | Scene bounds/aspect ratios, projection-sized fonts, reachable reveal controls, menu Enter/Escape, mouse and keyboard fullscreen, original image loading, native confirmation dialogs, and 390-pixel overflow checks passed. This was a browser viewport test, **not a physical projection/readability test**. |
| Permission/feature failures | `tests/phase5-compat.cjs` passed both through loopback HTTP and the disconnected local-package harness. Controlled cases removed Object.hasOwn/Array.at/Web Audio, rejected audio resume/fullscreen, removed fullscreen, disabled CSS animations, interrupted the door transition, and enabled reduced motion. These are **simulations in Chromium 154**, not actual older Chromium or 360 tests. |
| Errors and dependencies | Completed final full-flow runs reported no page JavaScript errors, missing resources or external runtime requests. No dependencies were installed. |

The old Phase 1–3 UI drivers predate the collapsed menu and sheets. Their checks are covered by the current Phase 5 suite and current compatibility/mode cases; they remain historical scripts, not separately claimed current passes.

## Verified problems and minimal corrections

Only **game.js** and **annotations.js** runtime code changed; index.html, styles.css and the approved visual design are unchanged.

1. **Evidence reader:** removing `Object.hasOwn` reproduced `TypeError: Object.hasOwn is not a function`, preventing evidence access. Replaced its single use with `Object.prototype.hasOwnProperty.call`.
2. **Annotation/last-element helper:** removing `Array.prototype.at` reproduced `points.at is not a function` during real mouse drawing, leaving no rendered ink. Replaced the two annotation uses with ordinary array indexing and the road fallback's corresponding use with the same equivalent indexing. All six drawing tools and the road fallback passed afterward without Array.at.
3. **Audio permission rejection:** rejecting `AudioContext.resume()` during walking reproduced an unhandled rejected promise. Added a catch to that promise to display a sound-permission message. Walking and learning remain available; rejection, immediate mute and arrival now pass with no unhandled page error.

No polyfills, external libraries, teaching changes, image edits, layout changes or replacement assets were added. Test-driver expectations were adapted to the approved current interface, rather than changing working gameplay to fit historical selectors.

## Content and package verification

`python3 tests/audit-offline.py` passed:

- Exactly **four essential runtime files**: index.html, styles.css, game.js, annotations.js.
- All **11 original PNGs** present, byte-identical to the approved baseline; both original DOCX files likewise unchanged.
- All **15 numbered paragraphs** compared directly with the original numbered-text Word document, including continuation paragraphs; wording/punctuation match after whitespace normalization.
- Approved teaching-data fingerprints match: questions/answers/feedback, clue cards, vocabulary, evidence mappings, objectives, synthesis templates, prompts, tree concepts and assignment. In particular Historical Connection remains **P1/P5/P15**; Gate 4's revised question retains answer B and P3.
- Four objective strings and their order unchanged. The homepage has no ICAP/local-runtime explanatory paragraphs beneath them.
- Exact-case relative paths, percent-encoded spaces, UTF-8 text, PNG dimensions, Windows case-collision checks and the runtime SHA-256 manifest pass. ZIP contents were integrity-tested, extracted and compared byte-for-byte.
- No runtime fetch/XHR, module import, CDN, remote API, remote font, online audio or server dependency. The SVG namespace `http://www.w3.org/2000/svg` is an identifier, not a network resource.

`RUNTIME_SHA256.txt` covers the four runtime files and eleven images. The game does not need to read this manifest. The original Word documents, QA scripts and documentation are not runtime dependencies, but are retained in the complete delivery.

## Static Windows / 360 compatibility review

This section is a **code review**, not certification of a particular browser build.

| Area | Finding / classroom action |
| --- | --- |
| Speed Mode vs IE | Use 360's **Chromium Speed Mode (极速模式)**. IE Compatibility Mode (兼容模式) cannot parse the game's existing modern JavaScript and lacks required layout/input APIs. IE is outside the supported scope and was not tested. |
| Older Chromium | Optional chaining/nullish coalescing require a modern parser; remaining logical assignment syntax is ES2021-era (Chromium 85+). Native CSS aspect-ratio is Chromium 88-era, and flex gap/min/clamp also require a modern engine. Thus **pre-88 engines are outside the reviewed feature floor**. This is a static lower bound, **not a claim that Chromium 88 or any specific 360 release passed**. Prefer a recent Chromium core. The unnecessary Chromium 92/93-era Array.at/Object.hasOwn dependencies have been removed. No broad transpilation or polyfill bundle was added. |
| Layout / transitions | Approved aspect-ratio, CSS transforms, clipping and animation layers remain. Final scene dimensions use JS-updated pixel height variables; essential framing does not depend on the older rules' unsupported `svh` declarations. The door transition completes via its own clock, including when CSS animations are disabled. Actual older-renderer visual differences still need checking. |
| Fullscreen | Standard Fullscreen API entry/exit passed. Missing/rejected API paths display a message and retain windowed gameplay. The reviewed modern Chromium floor has the standard API, so no speculative prefixed implementation was added; a legacy webkit-only implementation is not claimed. Use **F11** or the tested fallback browser if 360 declines the page API. |
| Audio | Existing AudioContext/webkitAudioContext support is retained, with explicit user interaction. Offline synthesized sounds need no files/services. Missing/denied audio does not block progression. Actual 360 autoplay policy and Windows/HDMI speaker output remain manual. |
| File loading | Classic deferred scripts and relative local images/styles are used, with no module CORS, fetch, service worker or server requirement. UTF-8 is declared. Spaces and Chinese paths passed Linux package/URL simulation, but **Windows drive letters, real USB access and local browser policy were not executed**. |
| Storage | No localStorage, IndexedDB or cookie dependence. Progress and ink are current-session memory only. Reload/close loses them. Restart clears current journey answers/clues/keys/reflections after confirmation, but not ink; per-screen Clear is separately confirmed and undoable. Written field notes can be saved; there is no annotation-image export. |
| SVG / pointer / keyboard | SVG vector annotations, pointer capture and mouse/keyboard paths passed in current Chromium. Renderer event or device differences still require actual classroom acceptance. |
| Assets / fonts | Original local PNGs are preserved. System fonts are used with fallbacks; no downloadable fonts or audio exist. Do not rename files or separate the four runtime files from assets/. |

Teacher Access and Independent Rehearsal are local classroom controls, not authentication. Correct-answer data necessarily exists in the offline JavaScript; the verified requirement is that normal student/rehearsal UI does not expose teacher notes or unrevealed synthesis answers/controls.

## Unresolved tests and safest launch

Actual direct file loading was attempted in this environment and failed with:

    page.goto: net::ERR_BLOCKED_BY_ADMINISTRATOR at file:///workspace/Rainy-mountain-adventure-3-stages/index.html

The managed Chromium policy blocks file URLs. It was not altered or bypassed. Loopback HTTP results and intercepted offline simulation are **not proof of direct file:// execution**. The teacher's reported MacBook Air offline success is useful context but is not an independent Windows/360 test of this final build.

Still required: a real Windows machine; the actual installed 360 product/core and Speed Mode; double-click/Open With file:// from an extracted ordinary folder and USB; physically disconnected networking; classroom projector readability, speakers/HDMI and mouse/keyboard devices. School/browser restrictions can override normal local-file behavior.

Safest procedure: extract the complete **work** ZIP, copy to a local Windows folder, disconnect networking, explicitly open index.html in 360 **Speed Mode**, enable Teacher Access (and separate rehearsal if jumping directly to a stage), and run [the Chinese classroom checklist](CLASSROOM_CHECKLIST_ZH.md) before students enter. Prepare an **already installed and tested Chrome or Edge** fallback. Do not use IE mode, run inside the ZIP, introduce a server, install dependencies during class, or disable global browser security to work around policy. The game itself needs no installation or administrator privileges.

## Delivery status

The final work-branch commit records the minimal compatibility fixes, current full-flow and failure-case tests, integrity manifests, this report and the Chinese checklist. Refer to GitHub work HEAD for its commit ID (also provided in the delivery response). No merge into main or further development phase is included.

**Automated/static QA complete. Classroom Windows + 360 + offline file:// acceptance remains pending the teacher's checklist and final acceptance.**

## Stage 3 gate layout compatibility repair

The closed gate container had only absolutely positioned children and relied on
`aspect-ratio:1672/941` for height. Removing that declaration from the unpatched
work-branch CSS reproduced a zero-pixel-high scene in Chromium, clipping the gate
and locks. The original 1672×941 gate PNG now participates in normal flow, providing
height without aspect-ratio; doors and locks retain their overlay stacking.
Lock images provide natural height, with percentage/min/max sizing fallbacks and
explicit top/left positioning for the turning-key overlay. Teacher permissions,
progress, teaching text, annotations, images and animation definitions are unchanged.

The focused gate regression passes all four viewport sizes, all three modes, and
native/legacy CSS simulations. Existing Phase 5 compatibility/failure simulations
pass, as do protected image/document/teaching hashes and JavaScript syntax checks.
The runtime SHA-256 manifest was refreshed only for the intentional CSS change.
Physical Windows/360 Browser, its exact Chromium core, local file:// deployment,
and classroom input hardware still require the classroom checklist.
The complete Phase 5 gameplay suite also passed at 1280×720, 1366×768 and
1920×1080 using disconnected local-package simulation: nine vocabulary matches,
14 wrong/correct question paths, five clue rewards/walks, keys, door animation,
cultural tree, progress/mode isolation and all annotation tools/history. No
JavaScript/resource errors or external requests were reported.

## Current correction: complete rehearsal, progressive keys and arrival celebration

This section supersedes the earlier restriction that rehearsal alone could not
use Stage 3 reveal/award/tree controls. Both Independent Rehearsal and Teacher
Access now expose the same deliberate reveal sequence; teacher notes and ink
controls retain their existing presentation-mode behavior. Student journeys can
also complete Stage 3 without enabling Teacher Access.

All activities begin with the approved guiding question and original evidence
links. Keys 1/2/3 reveal 3/3/2 branches or clue cards, one click at a time. Shared
meaning stays unavailable until every required clue is revealed; awarding a key
requires a separate click after synthesis. Key artwork appears only after the
award. All three awards enable an explicit Open the double doors control, outside
the collapsed collection sheet. The original door animation then finishes onto
the landscape and a keyboard-accessible celebration with the exact requested
messages and Continue Our Journey. No tree reveal is allowed while it is pending.
The local original eight-note fanfare lasts four seconds, follows mute immediately,
and handles missing/denied audio without blocking the journey. Celebration state
belongs to each journey; redraws, Home/return and interrupted openings do not
repeat an already dismissed celebration. Roots, trunk and four canopy concepts
remain individually click-controlled after dismissal.

Verified on Linux Chromium 154:

- Separate complete three-stage UI journeys in Independent Rehearsal and Teacher
  Access: nine vocabulary matches, reconstruction, 14 questions, all five earned
  clue cards/walks, progressive keys/evidence, doors, celebration, complete tree
  and assignment. The rehearsal test records zero Teacher Access changes.
- Twelve arrival cases (both modes × sound, mute, denied audio, absent audio,
  interrupted opening and missing legacy CSS declarations). Verified eight-note
  scheduling, four-second duration, rendered nonzero audio PCM, immediate mute,
  no replay on redraw, focus cycling, no tree before dismissal and no popup on
  subsequent returns.
- Gate layout suite: native and legacy CSS at four viewport sizes, all three
  modes; the fcd055c gate image/lock sizing fix is unchanged. A percentage-based
  landscape spacer also prevents arrival/tree container collapse without
  aspect-ratio.
- Existing compatibility/failure suite: mode/progress isolation, walking/audio,
  missing Object.hasOwn/Array.at, all ink tools/history, denied/missing audio,
  denied/unavailable fullscreen, reduced motion and interrupted animation.
- Original asset/document/teaching/evidence/objective integrity and offline audit,
  JavaScript syntax, and whitespace checks. No external runtime dependencies added.

The broad old Stage 3 template fingerprint included permissions/rendering logic.
It was replaced by hashes of unchanged teaching-only scopes, each derived from
pre-correction HEAD and checked byte-for-byte against this implementation. Original
CONTENT, vocabulary/mappings/objectives, evidence and asset hashes remain intact.

Actual file:// navigation was attempted but returned ERR_BLOCKED_BY_ADMINISTRATOR
under the cloud browser policy. Offline local-byte interception is explicitly a
simulation. Physical Windows/360 Speed Mode, USB/local file policy, projector,
physical speakers and input hardware remain manual acceptance checks; no such
physical verification is claimed.

The full existing Phase 5 regression also passed at 1280×720, 1366×768 and
1920×1080, including actual UI-earned vocabulary/questions/clues, door transforms,
progress and annotation persistence, all six ink tools/history, sound/mute PCM,
fullscreen, resize/scroll alignment, tree/assignment and mobile overflow. No
JavaScript/resource errors or external requests were reported in those runs.
