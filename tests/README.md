# Phase 1 development checks

The classroom game needs no installation, build, server, or external library. Keep
index.html, styles.css, game.js, annotations.js, and the original assets directory
together, then open index.html.

These optional browser regression scripts require Playwright and Chromium in the
development environment only. They do not ship dependencies to the game.

With Playwright available:

    node tests/phase1.cjs
    node tests/stage3-regression.cjs

Both scripts default to the local file:// index.html. Set CHROMIUM_PATH if Chromium
is not at /usr/bin/chromium. If a managed browser policy prohibits file://, set
GAME_URL to a temporary local test-server URL. A server test does not verify the
file:// protocol itself.

Phase 1 checks: the nine landscape expressions; student Stage 2 unlock; all 14
questions and five gate rewards; sequential progression and retries; road movement;
all three existing key evidence mappings (including Historical Connection P1/P5/P15);
exact paragraph text and return-state preservation; ink tools, individual erasing,
undo/redo, clear/cancel, screen-return persistence; scrolling, reflow, and fullscreen
alignment; hidden teacher notes; Home, stage switching, Restart, and audio controls.

Stage 3 regression checks preserve the pre-Phase-2 key, door, tree, and reflection
flow. They also exercise ink on the tree, a challenge, and a landscape with emulated
touch input, mobile layouts, and reduced motion.

Manual classroom checks: open index.html with Internet disconnected; verify audible
sound/mute and visual projection quality; check the actual interactive whiteboard or
stylus hardware. Teacher presentation exposes notes/tools on the current journey.
Independent rehearsal uses separate progress. These are local classroom controls,
not authentication: answer data is necessarily present in the offline JavaScript.
