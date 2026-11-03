# Rainy Mountain Adventure

An offline classroom adventure for N. Scott Momaday’s *The Way to Rainy Mountain*.
The approved immersive interface and teaching content are preserved.

Download the [GitHub work branch](https://github.com/xingyawang06-web/Rainy-mountain-adventure-3-stages/tree/work)
using **Code → Download ZIP**, extract the complete folder, and open `index.html`.
Keep these files together:

    index.html
    styles.css
    game.js
    annotations.js
    assets/                 (all 11 original PNG files, names unchanged)

No install, server, internet, external library, font, or audio download is required
by the game. Sounds are synthesized locally after user interaction. The original
Word documents remain unchanged; reading paragraphs are embedded in the game.
Tests and documentation are optional development/delivery files, not classroom
runtime dependencies. `RUNTIME_SHA256.txt` records the four runtime files and eleven
images for integrity checking; the game does not read it.

Use **Adventure Menu → Teacher Access / presentation** for teaching reveals and
annotations. **Independent Rehearsal** permits independent navigation with separate
progress and a complete self-directed reveal sequence, without Teacher Access.
Reveal each clue individually, reveal the shared meaning, then award each key.
After all three keys, choose **Open the double doors**. The arrival celebration
uses a local four-second fanfare when sound is enabled; **Continue Our Journey**
starts the manual Cultural Identity Tree sequence. Teacher Access retains
classroom presentation controls, teacher notes and annotation tools.
Progress and ink are session-only. Reload/close loses that session; save written
field notes if needed. Restart confirms before clearing the current journey’s
answers/clues/keys/reflections; clearing annotations is a separate per-screen action.

For a Windows classroom, use 360 Browser’s **Chromium Speed Mode / 极速模式**.
IE Compatibility Mode / 兼容模式 is not supported or verified. Prefer a recent
Chromium engine and prepare an already-tested Chrome/Edge fallback.

- [中文教室验收清单](CLASSROOM_CHECKLIST_ZH.md)
- [Phase 5 results and compatibility limits](QA_REPORT.md)
- [Development test commands](tests/README.md)

Automated results are Linux Chromium results and explicit feature/offline
simulations. They do not certify Windows, 360 Browser, physical equipment, or
local `file://` behavior in the classroom; complete the Chinese checklist there.
