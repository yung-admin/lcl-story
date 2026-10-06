# LCL — More Impact: Round 07

Date: 2026-10-04. Status: user-authorized exploration, awaiting review.

## Direction

The user prefers Opaque Signal over the clean round, but says the style is still unresolved. They want more impact and are undecided between grit and beauty; a contrasting layer such as UI is another possibility. They authorized the four proposed comparison branches. None of these images establishes a final style, cultural canon or gameplay rule.

All four are edits of [Opaque Signal](../../../images/style-lab/round-05/r05-05-gouache-signal.png), using built-in image_gen. The intended composition lock is the existing Bowl Watch hall, fixed elevated overhead oblique/trimetric near-parallel camera, five people in their positions, four serving trays/bowls, piers, stairs/gallery, bench/shelf, pipe and right service cart. No new narrative event was requested.

## Studies and actual results

| Study | Main experiment | Observation and comparison limit |
| --- | --- | --- |
| [Worn](../../../images/style-lab/round-07/r07-01-worn.png) | Grit with a history: use marks, rough materials and skilled repair | Coarse stone, chipped enamel, handprints and apparel patches are clearly visible. Wear also spreads across broad floor/pier surfaces; the result partly becomes generalized distress. Repeated handprints are literal motifs. Amber tasks and green states remain. |
| [Reverence](../../../images/style-lab/round-07/r07-02-reverence.png) | Solemn beauty through blue shadows, ivory, brass and functional ornament | Cooler stone, brass rails/trim, stepped-arch grilles and coral-rimmed bowls distinguish it. Beauty is mainly a palette/fitting change; modeled brushwork remains. Green machine state lenses changed to amber, so light and colour are not controlled. |
| [Protocol](../../../images/style-lab/round-07/r07-03-protocol.png) | Precise institutional graphics and a sparse UI over opaque painting | Two sharp screen-space cards and machine graphics create a clear second language. All five requested UI phrases are legible. Bay numbers 01–03 appear, but 04 is absent; a large emblem occupies the right fascia. Cards cover peripheral floor/gallery, leaving people/trays visible. The UI is painted into the raster concept, not implemented game UI. |
| [Keepsake](../../../images/style-lab/round-07/r07-04-keepsake.png) | Human ornament through a flatter leaf-and-loop motif family | Patterned apparel, bowls, bench cloth and cart textile read clearly. Decoration also spread onto the pipe and machine fascia, beyond the intended emphasis on human belongings. It therefore tests a more extensively decorated communal scene. Motifs do not establish an existing culture. |

Visual inspection found the five people, four trays and main camera/layout anchors retained in all four. Fine material, grille, label and fitting designs differ. Matching topology does not verify exact projection mathematics, gameplay readability in motion or a production rendering pipeline.

Our provisional interpretation: Worn increases physical weight but risks repetitive noise; Reverence makes functional fittings more attractive; Protocol gives the strongest separation between two visual languages; Keepsake makes cultural care immediately visible but may overdecorate the machinery. These are authored assessments; subsequent direct feedback is recorded below.

## User preference — 2026-10-04

The user explicitly said to keep Protocol's additional machine decals and UI, and approved the darker mood of Reverence. They asked to push both in-world graphics and screen UI harder, taking inspiration from Wipeout aesthetics. These are the selected transferable qualities for continuation; the statement does not separately approve every fitting, colour-state change or proposed allocation mechanic.

The user also introduced two `inbox/environment` images as an exploratory curveball. [Round 08](graphic-environment-tests.md) carries the selected graphics and mood forward, and tests those references separately. Worn and Keepsake received no explicit Pass verdict. Direct conversation preferences are recorded here; no hosted rating rows were manufactured from them.

## Review

The existing [Style Lab](https://lcl-style-lab.hyltmark.chatgpt.site/) adds Round 07, with **Style contrast** and **UI layer** labels alongside the 13 prior categories. Every image has an attention question. Review whole-image appeal separately from texture, mood, ornament and interface contrast. Earlier images, IDs, trait keys and reviews remain intact; no hosted preferences are entered on the user's behalf.

## Provenance

[Exact prompts and inspection notes](../../../images/style-lab/round-07/brief.json) record the parent and all four native generation outputs. Originals remain in the native generated-images directory; the four final PNGs are preserved in `images/style-lab/round-07/` and copied into the Site's public assets. Prompt provenance is also copied into the Site source.

## Verification

TypeScript and the production build passed. The six earlier batch descriptors and generated briefs match the prior source. All 34 image IDs are unique; each new study has 15 distinct trait keys. The four saved PNGs are 1672 × 941 and match the Site asset copies byte for byte; prompt copies match and this document's links resolve.

Local browser checks verified both new labels save and persist after reload. Test ratings were cycled back to neutral. Protocol/Keepsake comparison renders correctly locally and on the hosted Site, where the new review controls are enabled. No hosted preference votes were changed. The owned local preview tab and server were closed.

Published to the existing owner-private Site from source commit `a948031ada3eadc44c3c4ca89173a54283d85648`. Deployment `appgdep_6ac2a56c42148191ab2ab13befde402c` succeeded. Site identity, D1 database, migration history and owner-only audience were preserved. [Hosted comparison preview](../../../images/style-lab/round-07/live-comparison.png).
