# Style Lab operations

The portable app is in `style-lab/`. It is a Vinext/React website on Cloudflare Workers with Drizzle and the D1 binding `DB`. It displays studies, saves user preferences and builds next-round briefs. Image generation takes place separately through the available image-generation tools.

## Source and current deployment

| Item | Handover value |
| --- | --- |
| Live URL | https://lcl-style-lab.hyltmark.chatgpt.site/ |
| Audience | Owner-private at the last deployment; no access change during handover. |
| Sites project | `appgprj_6ac16db087d88191942977c0910bcdd0` |
| Exported source commit | `9fb1c4b6514a38e3996a8346d8172316510cb588` |
| Last successful deployment | `appgdep_6ac2d340d2b4819181447eaa58fa69e3` |
| Last version | `appgprj_6ac16db087d88191942977c0910bcdd0~appgver_b074d3cbd9fc81919da42550c812ab84` |
| Gallery | Thirteen rounds, sixty-three unique final studies; latest round has two images and fifteen traits per image. |

These identifiers are context, not credentials. The 214 portable source and asset files are byte-for-byte exported from the managed source commit; [style-lab-source.json](../../style-lab-source.json) records hashes and the exclusion of one generated TypeScript cache. The managed checkout at `sites/lcl-style-lab/` remains separate and ignored. Choose one working source and deliberately synchronize before deployment; edits to the portable snapshot do not update the managed checkout or live site automatically.

## Local setup and checks

Use Node.js >=22.13 and npm. No API key is needed for the portable preview.

```sh
cd style-lab
npm run install:ci
npm run dev -- --port 3000
```

Open the printed localhost URL. Portable mode defaults when `.sites-runtime/execution-profile.json` is absent; preview supplies mock sign-in (`seedy@sites.test`) and local D1 state. Keep dependencies, `.wrangler`, `.sites-runtime` and environment files out of Git. Stop the server with Ctrl+C.

```sh
node node_modules/typescript/bin/tsc --noEmit
npm run build
```

From the root, run `node scripts/check-handover.mjs` to check source integrity, gallery IDs/images and current handover links. Snapshot integrity verifies the initial transfer; after intentional app edits, the old manifest is historical and its mismatch should be reviewed rather than hidden.

The original source passed TypeScript and the Sites production build. The latest pair loaded at full size in the live comparison. Local label save/reload and more/less/neutral cycling passed; local test ratings were restored to neutral. Earlier batch objects and neutral generated briefs were preserved. The export check verifies identical source bytes; dependencies have not been installed a second time just to duplicate those checks.

## Important files

| Path relative to `style-lab/` | Purpose |
| --- | --- |
| `app/data.ts` | Batches, study IDs, descriptors, trait keys and brief generation. |
| `app/lab.tsx` | Review cards, autosave, comparison, browser drafts and JSON download. |
| `app/api/reviews/route.ts` | Authenticated GET/PUT of image reviews; validates study and trait keys. |
| `app/api/rounds/route.ts` | Authenticated round submission; requires all overall verdicts and generates the brief. |
| `app/chatgpt-auth.ts` | Sites identity and sign-in/sign-out paths. |
| `db/schema.ts`, `drizzle/` | Two review tables and migration history. |
| `.openai/hosting.json` | Project association, D1 `DB`, no R2 binding. |
| `public/images/`, `provenance/` | Published images and prompt records. |
| `vite.config.ts`, `build/`, `scripts/` | Worker build, local preview and portable execution support. |

The snapshot's original README includes early station-specific instructions and a suggested six-study balance. Those are historical defaults. Use the current per-batch scene lock and [handover](handover.md): the provision hall differs from the station, and the latest artifact problem calls for a small clean comparison.

## Feedback and account handover

The database has `image_reviews`, keyed by `(user_id, image_id)`, and `round_reviews`, keyed by `(user_id, batch_id)`. Reads/writes are scoped to the authenticated Site user. Image rows contain verdicts, trait ratings, notes and timestamps; round rows contain saved intention, generated brief and submission time.

Keep/Mix/Pass is an overall verdict. Trait labels cycle neutral → more → less → neutral. Image feedback autosaves; next-round direction is a browser draft until Finish review saves the completed round. Each study needs an overall verdict before submission. An unsubmitted round or a neutral trait is not approval.

The Git clone contains no production database export and grants no Site access. The current owner can use the lab's Download review control to export their feedback and pass it to the next person. Such an export is evidence to read, not automatic permission to rewrite database identities or manufacture votes. Direct conversational preferences are already summarized in the handover and style guide.

For another account, establish Site access with the current owner or create a separately owned project. A different account does not automatically inherit the old owner's review rows even if it can view the app. When creating a new Site, associate its own project ID, keep the D1 binding `DB` and apply the existing migrations through the hosting workflow. Preserve the old private project until transfer plans are explicit.

## Continuing an exploration round

1. Read the user's latest direct feedback, saved review/brief if available, and the relevant research note. Resolve contradictions explicitly; do not infer a final winner from an assistant's ranking.
2. Use the current scene lock and selected clean master. Avoid repeatedly editing descendants with degraded surfaces. Keep actual HUD separate from physical decals and embodied interfaces.
3. Save new outputs, exact prompts and parent/reference roles under `images/style-lab/round-NN/`. Inspect actual camera, anatomy, count, palette, material and UI drift; retain drafts.
4. Copy reviewed final assets into `style-lab/public/images/`, provenance into `style-lab/provenance/`, and append a new batch in `app/data.ts`. Use new globally unique prefixed IDs. Preserve every existing study ID and reviewed trait key; add descriptors only where useful.
5. Update research notes, direct preference status, index and change log. Verify build, asset paths, comparison and review persistence locally. Use disposable local reviews rather than entering production test votes.
6. To update the existing hosted Site, use the current Sites skill and native tools with authorized project access. Open/synchronize its managed source, build/package through the Sites workflow, then deploy the returned source commit and archive to the same private project. Preserve audience, D1 binding and migrations. Verify terminal deployment success and the rendered live result.

Read the installed Sites skill at continuation time; plugin versions and tool contracts can change. Do not rely on old `/private/tmp` helpers or old machine-specific plugin paths. Obtain credentials through native tools and keep them out of source and prompt records. This handover does not redeploy or change sharing.
