# LCL and The Hush

Worldbuilding, art-direction research and a working visual review website for an overhead RPG. Start with the [handover](docs/process/handover.md), then the [project index](docs/index.md) and [active style guide](docs/world/canon/style-guide.md).

As of 2026-10-06, **original Grain, Nib and Rim are the preferred visual qualities**. Chroma and Engraved are undecided. The latest two-image clean rebuild awaits review; it does not replace original Grain. Final style, renderer and engine remain open.

| Folder | Contents |
| --- | --- |
| `legacy/` | Twenty LCL worldbuilding sources, including unresolved alternatives. |
| `docs/` | Current direction, research records, templates and process. |
| `images/` | Generated studies, retained drafts, exact prompts and live comparison proofs. |
| `inbox/` | Supplied environment, tech and clothing references, copied for portability. |
| `style-lab/` | Portable committed source and published assets for the review website. |
| `_archive/` | Earlier document versions; preserve for traceability. |

The [live Style Lab](https://lcl-style-lab.hyltmark.chatgpt.site/) is owner-private. A clone includes the app and art, but does not grant access to the hosted site, its database or the current owner's feedback. See [lab operations](docs/process/style-lab-operations.md) and [Git transfer](docs/process/git-transfer.md).

## Local preview

Use Node.js 22.13 or newer and npm:

```sh
cd style-lab
npm run install:ci
npm run dev -- --port 3000
```

Open the local URL printed by the server. Local sign-in and feedback are disposable preview data. The app records preferences and prepares briefs; images are generated separately, not by a website generation backend.

From the repository root, validate the portable snapshot, gallery assets and handover links:

```sh
node scripts/check-handover.mjs
```

The source manifest is [style-lab-source.json](style-lab-source.json). Historical absolute paths in prompt records describe generation provenance; use the repository copies when continuing on another machine.
