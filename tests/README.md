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
