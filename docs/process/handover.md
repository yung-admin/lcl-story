# LCL project handover

Updated 2026-10-06. This project is in visual exploration, with a functioning review lab and twenty older worldbuilding source documents. The immediate task is to review the fresh two-image comparison while retaining the appeal of original Grain. The final style and game production approach remain undecided.

## First reading

1. [Active style guide](../world/canon/style-guide.md) and [camera guide](../world/canon/camera-and-readability.md).
2. [World bible index](../world/canon/world-bible.md), then [core premise](../../legacy/core-idea.md) and [LCL](../../legacy/lcl.md).
3. [Drawing and light feedback](../research/notes/drawing-light-tests.md) and [clean rebuild](../research/notes/clean-rebuild-tests.md).
4. [Lab operations](style-lab-operations.md) for app development, feedback and deployment; [Git transfer](git-transfer.md) for the repository boundaries.

## Project and accepted direction

LCL / The Hush explores a future European world where infrastructure can remain maintained and functional while people are excluded from it. Human care, repair, ordinary life and a system's willingness to answer matter. Lore sources include the Architect, Terrans, Woy, Lucy and factions; competing origin accounts still need reconciliation. The [legacy collection](../world/canon/world-bible.md) is the source map, not a finished consolidated canon.

The game view is fixed elevated three-quarter oblique/trimetric with near-parallel projection, inspired by the play view of Fallout 1 and 2. It needs a continuous playable floor, readable character scale and interaction points. Exact projection angles and engine implementation remain open. Fallout is a reference for an engaging universe and play view, not a request to copy its setting.

The user approved the aesthetic revision on 2026-10-03. Keep functioning systems, skilled repair, municipal/industrial construction, purposeful lighting and sincere human comfort. Preserve [archived pre-revision documents](../../_archive/aesthetics-2026-10-03/legacy/visual-design.md). Generated visual experiments have not settled narrative alternatives or invented gameplay.

## Current visual preferences

| Element | Direct feedback and current status |
| --- | --- |
| Overall rendering | [Original Grain](../../images/style-lab/round-10/r10-01-grain.png) is the leading image and remains preferred over the six later grain variants. |
| Drawing | [Nib](../../images/style-lab/round-12/r12-01-nib.png) is liked: selective fine dark contours and pen-like marks. |
| Light edges | [Rim](../../images/style-lab/round-12/r12-03-rim.png) is liked: coloured edge highlights. Strength/distribution still need judgment on cleaner images. |
| Chroma and Engraved | Both undecided. Do not fold them into an accepted style by default. Etch and Folio have no inferred verdict. |
| Materials | Opaque Signal beat the clean-detail alternatives; opaque painted volume is a useful base. Watercolour was reopened and is not a final approved medium. |
| Environment | Conduit's rounded machinery, colouring and highlights are liked. Not every machine must be rounded. |
| Mood | Reverence's darker mood is liked; dark petrol, cream, coral and amber remain useful controls for the current hall. |
| Physical graphics | Protocol's tech decals were liked. Distinguish them from the actual HUD. |
| Screen UI | Overprint's compact dark actual HUD is preferred for footprint and overall design; white has appeal, dark feels easier on the eyes. Original Wipeout-inspired graphic confidence is desired. |
| Composition | Dominant silhouettes, quiet/dense areas and selective accent colour from the inbox environments can be used in particular places. These are separate from rendering tests. |

One stronger recurring colour per world/place was suggested by the user through Wes Anderson, but remains an experiment. Grain is a desired visual appearance, not proof of a particular physical painting process. Final renderer, regional colour system, device designs and UI implementation remain open.

## Where we stopped

The user likes original Grain, Nib and Rim but says repeated image referencing has accumulated heavy artifacts, making the differences hard to judge. Earlier derivatives inherited already compromised surfaces; most Round 12 studies independently edited Grain, while Etch and Engraved also had one additional refinement. Keep these images as preference evidence, with their texture limits.

[Round 13](../research/notes/clean-rebuild-tests.md) contains:

- [Fresh Grain](../../images/style-lab/round-13/r13-01-fresh-grain.png): a new text-only reconstruction with no raster parents.
- [Ink + Rim](../../images/style-lab/round-13/r13-02-ink-rim.png): one direct edit of that fresh baseline, omitting undecided Chroma and Engraved.

The fresh set changes machine proportions, person scale and HUD geometry relative to original Grain. It has cleaner, smoother modeled volumes and calmer surfaces, but still has painted mottling/chips and simplified hands. The hybrid retains the new layout and adds selective contours and cyan/amber glints; some glints are longer and reflections slightly brighter than requested. Neither is automatically accepted, and the pair is not a perfectly isolated filter experiment. The user has not yet reviewed it in this conversation.

## Next useful session

1. Review whether Fresh Grain retains the appeal of original Grain. Separate the new proportions/composition from the rendering judgment.
2. Compare Fresh Grain with Ink + Rim for drawing and edge-light strength. Ask for concrete preferences where the new images leave ambiguity.
3. If the baseline misses the original's appeal, improve the written brief before generating more descendants. Otherwise use the clean baseline directly for independent variants, with one major rendering change at a time.
4. Record exact prompts, parent/reference roles, retained drafts and actual drift. Keep the crisp HUD exempt from world grain and painting treatments.
5. Once the style is convincing, test a different environment and character/gameplay scale. Functional-console microdetail was judged too small a gain at the current stage; broad style remains the priority.

No new round is generated by this handover. Preserve the user's opportunity to judge the current pair before broadening again.

## Exploration history

The lab contains thirteen rounds and sixty-three unique final study IDs, plus retained drafts/proofs outside the final gallery count.

| Round | Direction and feedback |
| --- | --- |
| 01 | Eight broad alternatives on the station. |
| 02 | Darker watercolour; Embers had the nicest vibe, Wash felt most unique. |
| 03 | Wash/Embers combinations; Paper clearly preferred for pleasant mood and tech. |
| 04 | Paper applied to a provision monastery and ideas for a distinctive universe. |
| 05 | Medium/colour and supplied tech; Matte Signal and Opaque Signal favourites, leaning Opaque. |
| 06 | Very clean detail treatments; user still preferred Opaque. |
| 07 | Grit, solemn beauty, graphic UI and ornament; Protocol decals/UI and Reverence mood selected. |
| 08 | Stronger graphics and inbox environments; Overprint actual HUD and Conduit world qualities liked. |
| 09 | Physical interface states and architecture; user redirected from small gains to broad style. |
| 10 | Broad medium comparison; original Grain became the winner. |
| 11 | Six grain variants; original Grain still best. |
| 12 | Drawing/light: Nib and Rim liked, Chroma and Engraved undecided; accumulated artifacts hinder judgment. |
| 13 | Fresh Grain plus one Ink/Rim edit; awaits review. |

See the [research index](../index.md) for per-round observations and [change log](change-log.md) for decisions. Direct conversation feedback is documented separately from hosted review rows; it was not turned into invented votes.

## Files and transfer limits

The original sources were collected from the previous machine's `~/story/lcl`; [project-inventory.json](../../project-inventory.json) preserves collection-time hashes. The original folder was not rewritten. The portable copy now includes all ten supplied inbox reference files, including clothing references that have not been explored. The root `download (6).png` colour reference was fully transparent when inspected; its appeal remains unresolved. Reference authorship and production methods are unknown.

The committed website source is included in `style-lab/`. The ignored `sites/` directory is the original managed checkout, retained on the old machine. The [source manifest](../../style-lab-source.json) records every exported file and hash. The portable source includes its published image copies, so local preview does not depend on external image URLs.

Exact prompt records preserve historical absolute paths and native generation paths. They are provenance, not portable dependencies. Use repository copies under `images/`, `inbox/` or `style-lab/public/images/` on a new machine. Temporary build helpers, native image-output folders, installed dependencies and the old Codex chat are not required to understand or preview the project.

Hosted feedback is stored in the current owner's Sites D1 database, not this Git repository. A different account gets neither owner access nor the same user-scoped feedback automatically. Read [lab operations](style-lab-operations.md) before continuing hosted work. No feedback export, access change or ownership transfer was performed during this handover.

Historical Logos roadmaps, sample characters and migration claims in inherited process files are templates rather than established LCL work. Existing partial migration and unresolved lore should stay explicit.
