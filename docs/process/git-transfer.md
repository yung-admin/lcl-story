# Git transfer

The user confirmed `yung-admin/lcl-story` as the destination on 2026-10-06. Use `master` and the remote `git@github.com:yung-admin/lcl-story.git`. The original repository history is retained, including the original machine's previously unpushed `7dc5488` source-collection commit. The new handover sits above that history; no force push is needed.

On the original machine, the default `github.com` SSH key authenticates as the repository owner `yung-admin`. The `github-personal` alias authenticates as `hyltmark`; after checking, the user requested the other key. This checkout uses SSH with macOS Keychain, batch mode and strict host-key checking. A new collaborator should use their own authorized GitHub credentials.

## Repository boundaries

`style-lab/` contains 214 committed source and asset files exported from the separate managed Sites repository. It is an ordinary directory in this root repository, not a submodule. [style-lab-source.json](../../style-lab-source.json) records the exported commit and SHA-256 hashes. The original `sites/` managed checkout remains on this machine, ignored by the root repository. Do not force-add it: a nested Git pointer would not transfer the website files to a normal clone.

`images/` contains generated images, drafts, references and exact prompt manifests. `style-lab/public/images/` intentionally duplicates the published subset so that the app can run directly from a clone. The ten supplied inbox references are copied into `inbox/`. No included project image was over 4 MiB at handover inspection. The artwork makes this a larger repository; no Git LFS dependency is imposed for the initial transfer.

Dependencies, caches, local databases, runtime profiles and `.env*` files are ignored. The existing absolute paths in historical inventories and prompt manifests are provenance only; a new clone should use its local copies. Referenced artwork has no established authorship/license in these records; generated studies and reference files remain distinct.

The final transfer audit includes all 214 portable source files and excludes one generated TypeScript cache present in the managed commit. All gallery assets and handover links resolve. The Git-eligible collection totals about 387 MiB across 437 files, with a largest file of 3.89 MiB; the managed checkout and runtime state are excluded.

## Continuing with Git

From the repository root:

```sh
node scripts/check-handover.mjs
git add README.md AGENTS.md .gitignore .cursor _archive docs legacy images inbox style-lab style-lab-source.json scripts project-inventory.json
git diff --cached --stat
git diff --cached --name-only
git commit -m "Update LCL documentation and style studies"
git push origin master
```

Review staged files before committing; the hosted feedback database is not included. The main project remote is separate from the managed Sites source repository. Keep subsequent pushes on the confirmed branch unless a different branch is requested.

After cloning, the next person starts with [README](../../README.md) and [handover](handover.md), runs the root check, then installs the app dependencies under `style-lab/`. Access to the old hosted project and a review export, if wanted, are separate from Git transfer.
