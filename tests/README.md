# Current Phase 5 final QA

The classroom runtime needs no test runner, installation or server. Developer-only
checks require the already-available Python 3, Node.js, Playwright and Chromium.
No libraries were installed or bundled into the game for Phase 5.

    python3 tests/audit-offline.py
    node tests/phase5.cjs
    node tests/phase5-compat.cjs

The browser suites default to direct file://. If managed policy blocks that scheme,
GAME_URL may point to a temporary loopback test server. This is not a file:// test:

    GAME_URL=http://127.0.0.1:8765/index.html node tests/phase5.cjs
    GAME_URL=http://127.0.0.1:8765/index.html node tests/phase5-compat.cjs

Package/extraction and disconnected-package simulation (example):

    python3 tests/audit-offline.py --package /tmp/rainy-final.zip --extract '/tmp/课堂 资料/雨山 冒险 USB'
    PHASE5_OFFLINE_ROOT='/tmp/课堂 资料/雨山 冒险 USB/Rainy-mountain-adventure-3-stages-work' node tests/phase5.cjs
    PHASE5_OFFLINE_ROOT='/tmp/课堂 资料/雨山 冒险 USB/Rainy-mountain-adventure-3-stages-work' node tests/phase5-compat.cjs

The offline harness disables Chromium networking and fulfills a simulated HTTP
origin only from extracted local bytes. It does not launch an HTTP server, and it
is explicitly **not** actual file://, Windows, USB or 360 Browser verification.
The default Phase 5 full-flow suite earns all matches/questions/clues at each of
1280×720, 1366×768 and 1920×1080; it does not skip those stages with fixtures.
The separate compatibility suite uses documented fixtures/missing-API/permission
simulations. Both are described in ../QA_REPORT.md. Reports and screenshots are
printed/saved outside the classroom runtime (screenshots under /tmp).

RUNTIME_SHA256.txt and the protected/teaching JSON fingerprints detect unintended
content or asset changes. --write-manifest regenerates only the runtime manifest;
use it only following an intentional, reviewed runtime change, then repeat QA.
The approved teaching/asset fingerprints must not be regenerated to hide changes.

For actual Windows/360 acceptance use ../CLASSROOM_CHECKLIST_ZH.md. The historical
Phase 1–3 drivers below predate the current menu/sheets and were not claimed as
separate current passes. Phase 5 covers their intended teaching/mode/walking/ink
checks using current UI drivers; Phase 4 was also run as the approved baseline.

# Phase 4 baseline and historical development checks

# Current Phase 4 interface checks

Run the focused suite for the redesigned interface:

    node tests/phase4.cjs

Or, when managed browser policy blocks file://:

    GAME_URL=http://127.0.0.1:8765/index.html node tests/phase4.cjs

A temporary loopback server is a development test fallback only. The classroom
folder still opens directly using index.html, without installation or a server.

The suite verifies all three projection sizes (1280×720, 1366×768, 1920×1080),
unchanged homepage objective wording, classroom typography, the compact menu,
rehearsal/Teacher Access separation, scene bounds/aspect ratios, original evidence
returns, all three keys, moving doors, roots/trunk/four canopy examples, assignment,
progress and ink persistence, fullscreen and mobile overflow. At 1280×720 it also
completes the actual nine-word landscape and all fourteen questions, earns all five
clues, observes all five road walks and generated footstep PCM, tests mute, and
exercises every annotation tool/history plus scroll/resize/fullscreen alignment.
It checks for JavaScript/resource errors and external runtime requests.

PHASE4_QUICK=1 skips the full student flow using completed-stage fixtures, while
retaining layout, key/tree/evidence and annotation checks. The default command runs
the full focused suite. This is not Phase 5 classroom acceptance: Safari on the Mac,
physical speaker/stylus/whiteboard behavior, and final acceptance remain to verify.

The Phase 1–3 scripts below document their original baseline checks. Their direct
navigation and panel selectors predate the collapsed Adventure Menu and activity
sheets. They are retained as historical regression coverage and need updated UI
drivers before reuse for Phase 5; Phase 4 results refer to phase4.cjs, not those old
drivers. No tests or dependencies are needed to play the offline game.

# Offline adventure development checks

The classroom game needs no installation, build, server, or external library. Keep
index.html, styles.css, game.js, annotations.js, and the original assets directory
together, then open index.html.

These optional browser regression scripts require Playwright and Chromium in the
development environment only. They do not ship dependencies to the game.

With Playwright available:

    node tests/phase1.cjs
    node tests/stage3-regression.cjs
    node tests/phase3.cjs
    node tests/phase2.cjs

The scripts default to the local file:// index.html. Set CHROMIUM_PATH if Chromium
is not at /usr/bin/chromium. If a managed browser policy prohibits file://, set
GAME_URL to a temporary local test-server URL. A server test does not verify the
file:// protocol itself.

Phase 1 checks: the nine landscape expressions; student Stage 2 unlock; all 14
questions and five gate rewards; sequential progression and retries; road movement;
all three existing key evidence mappings (including Historical Connection P1/P5/P15);
exact paragraph text and return-state preservation; ink tools, individual erasing,
undo/redo, clear/cancel, screen-return persistence; scrolling, reflow, and fullscreen
alignment; hidden teacher notes; Home, stage switching, Restart, and audio controls.

Phase 3 checks at 1280×720 and 1920×1080 use a completed-gate fixture, then
award all three keys through actual teacher-led UI interaction. (Phase 1 and the
Stage 1/2 suite separately earn all five clues through actual student interaction.)
The tests sample both door transforms during animation, verify a landscape-only
arrival with no timed tree reveal, then exercise the three roots, trunk, and exactly
four canopy examples. Every teaching reveal is teacher-controlled. They check
original paragraph wording, evidence returns including final paragraph P15 and
oral-tradition P8, Historical Connection P1/P5/P15, shared tree ink, separate
assignment ink, all assignment prompts, key review, fullscreen, Home, stage
switching, Restart, interrupted door transitions, mobile and reduced motion.
Cross-stage regression also checks ink on challenge/landscape screens, real emulated
touch drawing, and Interact mode. Physical whiteboard/stylus input remains manual.

Manual classroom checks: open index.html with Internet disconnected; verify audible
sound/mute and visual projection quality; check the actual interactive whiteboard or
stylus hardware. Teacher presentation exposes notes/tools on the current journey.
Independent rehearsal uses separate progress. These are local classroom controls,
not authentication: answer data is necessarily present in the offline JavaScript.

Phase 2 focused checks use a completed-gate fixture for synthesis testing; Phase 1
separately earns all five clues through actual UI interactions. The focused checks
cover the complete gate art and attached-lock geometry; teacher-only progressive
Key 1 branches; simultaneous Clue Cards for Keys 2 and 3; every original evidence
link; knowledge-map and ink restoration; category reveal versus explicit key award;
revisiting collected keys; reference copies in independent rehearsal; navigation,
Restart, mobile/reduced motion; and no automatic reveal of the tree.

After all three keys, Phase 3 opens the original door panels and arrives at the
unchanged landscape. Only teacher clicks reveal the cultural roots, identity,
canopy examples, and personal-reflection assignment. The original tree PNG is
masked into aligned layers without modifying the artwork. Notes are optional;
there is no automatic grading, documentary requirement, or second drawing task.

# Comprehensive Stage 1/2 verification and walking fixes

    node tests/stages12-verification.cjs
    node tests/walking-interruptions.cjs

The first suite runs the real teaching flow at 1280×720 and 1920×1080: all nine
expressions, 24–26px labels, Stage 1 completion and unlock without Teacher Access,
all 14 wrong/correct answer paths, every gate's original-text paragraphs, and five
approved clue rewards. It measures the explorer's on-screen movement and stepping
poses on all five road legs, tests pause/resume and navigation interruptions,
resizing/fullscreen, immediate muting and unmuting, and a complete silent walk.
An AnalyserNode measures nonzero PCM from the actual Web Audio footstep output on
every leg. This verifies audio rendering, not sound heard through physical speakers.

The second suite uses completed-gate fixtures to focus on the road itself. It checks
midpoints against bands traced visually from the unchanged original map, captures
midpoint screenshots, tests annotation pause/resume, toolbar resize, reduced-motion
travel without bobbing, no audio initialization while muted, retained paused
positions and annotations after navigation, and an explicit teacher skip.

The map is framed before movement begins; image aspect ratios are reserved before
loading. Travel and footfall timing share a requestAnimationFrame clock. Leaving
or scrolling away from the map, hiding the document, pausing, or drawing stops the
walk and its audio; returning resumes the saved position. Mute stops active audio
sources immediately. Reduced motion disables body bobbing, not road traversal.

On a MacBook Air, open the local index.html with Internet disconnected and check
Safari/Chrome fullscreen behavior, audible volume through the intended speakers,
and any trackpad, stylus, or classroom whiteboard hardware. A managed browser may
block file:// entirely; the GAME_URL fallback is for development verification only.
The focused suite also verifies walking direction by checking the rendered image
transform, and interrupts an actively rendering footstep in the same browser task.
It checks that the source count immediately becomes zero and measures a silent
waveform after pause and mute, while muted road movement remains active.

# Phase 3 verification limits

In this managed Chromium environment, direct file:// navigation fails with
`net::ERR_BLOCKED_BY_ADMINISTRATOR`. Browser interactions were therefore tested
using a temporary loopback-only HTTP server, with zero external runtime requests.
This is a testing fallback, not a classroom requirement. All runtime scripts,
styles, original numbered text, images and Web Audio synthesis remain local;
there are no fetch calls, modules, CDNs or installed runtime dependencies.

On the MacBook Air, verify direct local opening in Safari/Chrome with the Internet
disconnected, audible speaker output and mute, fullscreen, and actual classroom
input hardware. Automated AnalyserNode measurements verify rendered footstep PCM,
not physical sound heard by a person. Progress and ink persist within the current
browser session; reopening/reloading starts a new learning journey.

# Gate layout compatibility regression

    node tests/gate-layout-compat.cjs

Checks the original gate image ratio and all three lock click targets in Student
Mode (completed-checkpoint fixture), Teacher Access, and Independent Rehearsal at
1280×720, 1366×768, 1920×1080 and 375×812. Repeats with aspect-ratio, inset,
and min()/clamp() dimensions removed before CSS parsing to exercise fallbacks.
Uses the disconnected local-byte harness; this is a CSS support simulation in
current Linux Chromium, not a physical Windows/360 Browser test.

# Stage 3 access, progressive synthesis and arrival correction

    node tests/stage3-complete-journey.cjs
    node tests/arrival-celebration.cjs

The complete journey suite earns all vocabulary matches, all five gates and clue
cards through UI actions separately in Independent Rehearsal and Teacher Access.
The rehearsal run never enables Teacher Access. Both runs reveal 3/3/2 clues one
at a time, reject early meaning/key awards, revisit evidence, award three keys,
explicitly open the doors, dismiss the celebration and manually build the entire
tree before reaching the assignment. The existing Phase 5 suite also retains its
full student Stage 1/2 and teacher Stage 3, annotation, audio and fullscreen checks.

The arrival suite uses completed-key fixtures only to isolate fanfare scheduling
and rendered PCM, immediate mute, denied/missing audio, interrupted transitions,
once-only popup/audio, keyboard focus and legacy CSS support. It attempts actual
Linux file:// separately and reports policy restrictions without treating the
local-byte simulation as Windows/360 verification.

The former Stage 3 fingerprint covered rendering and access logic together with
teaching content. That broad scope was split into unchanged teaching-only scopes
(questions, land connections, tree art/labels, assignment, discussion prompts and
insights). Every new hash was derived from the pre-correction work-branch source
and checked byte-for-byte against the correction; teaching data, evidence maps,
objectives and original asset hashes retain their previous fingerprints.

# Visible Cultural Identity Tree compatibility

    python3 tests/tree-rendering-compat.py

Requires the existing development Python Playwright and Pillow installations.
For each of four viewport sizes, both Independent Rehearsal and Teacher Access,
and native/legacy CSS, clicks through every root, trunk, canopy section and the
assignment. Checks nonzero layer/crop geometry, actual image loading and changed
artwork pixels after each reveal with labels hidden. Native rendering is compared
at each step against the frozen pre-fix clip-path template in
`fixtures/tree-artwork-before-compat.js`; this fixture is never used by the game.
Legacy simulation removes aspect-ratio, inset, clip-path/masks, animation and
min()/clamp() dimensions before CSS parsing. It does not represent physical 360
Browser or Windows/file:// verification.

The treeArtwork rendering fingerprint was intentionally updated for the new
crop-wrapper markup. The approved picture, teaching data, root/canopy labels,
trunk label, prompts, evidence, assignment and other teaching fingerprints remain
unchanged; the visual reference regression additionally protects the old reveal
boundaries and artwork alignment.

# Current four teaching updates

    node tests/teaching-updates.cjs

Checks exact objective titles/descriptions and assignment wording, projection-size
fonts and overflow, two manual crown reveals with no extra click, Task 1 ↔ Task 2
navigation and return to the tree. Also verifies separate persistent annotation
histories for the assignment screens. Runs in rehearsal and teacher modes at three
classroom resolutions and a mobile width. The full journey and Phase 5 drivers
now confirm all 14 Stage 2 challenges without any evidence text entry or second
progression click. The tree pixel/reference test uses two half-crown crops instead
of the previous four quarter-crown crops; roots/trunk crop coordinates are unchanged.
Only the six teaching fingerprints affected by the explicitly requested content
changes were updated. Source reading, questions/options, clue cards, evidence maps,
vocabulary and original assets retain their previous approved hashes.
