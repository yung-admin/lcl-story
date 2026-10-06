# LCL Style Lab

Private review website for iterative LCL aesthetic exploration. Eight generated trimetric views of the same occupied station form round 01. Round 02 explores darker watercolour through six detailed treatments and one freer descriptive redraw. Round 03 combines Wash’s painting language with Embers’ warm atmosphere in four studies, including a fresh descriptive redraw. The gallery opens on the latest round; earlier reviews retain their original IDs and trait keys. Image generation uses the built-in image_gen tool in the Codex conversation; the website records preferences and prepares a brief, and does not claim to run a generation service.

## Review

Round 04 develops the provision monastery in three new Paper-style paintings. Technology, Culture and Mystery labels complement the eight visual categories, with a story question on each card. Scene constraints and the reference link now follow the selected batch; station rounds retain their original brief and feedback data.

- Keep / Mix / Pass gives an overall verdict. Click the selected verdict again to clear it.
- Click any authored trait label to cycle neutral → more → less → neutral.
- Lighting, goofiness, palette, materials, texture, filter, edges and mood are individually rated.
- Notes can describe preferences the labels do not capture. Compare two images or open a full study.
- Image feedback autosaves to authenticated D1 records. A browser draft protects interrupted saves. Next-round direction is a device draft until Finish review saves it with the round.
- Give all images an overall verdict, then finish the round. JSON export and a copyable brief are also available.

## Next rounds

1. Read `.openai/hosting.json` for the exact Sites project ID. Use native Sites database overview, then table-row tools with the returned exact binding/table names to read `round_reviews` and `image_reviews`. Paginate only using returned offsets. Do not infer acceptance from an unsubmitted round.
2. Read the completed brief and all prior rounds and prompts. Resolve contradictory preferences with distinct alternatives. Normally make six variants: two refinements, two hybrids, two genuinely new hypotheses. Change the balance if the user directs it. Neutral is not approval.
3. Reference the original station B to hold topology and camera, and selected previous images as style references. Preserve the closed gate and three character positions. Verify scene drift; image-generation promises alone are insufficient.
4. Generate with built-in image_gen and preserve originals. Add local PNGs and exact prompts under the project collection's `images/style-lab/round-NN/`, copy reviewed assets into this site's `public/images/`, and append an entry to `app/data.ts`.
5. Never replace earlier rounds, image IDs or trait keys once reviewed. New global image IDs must include a new round prefix. Record parent image IDs and the new hypothesis in the prompt manifest. Existing D1 records remain available.
6. Update documentation, verify app/API and images, package using the Sites source helper, and redeploy the same owner-private Site. Preserve project ID, D1 binding and migration history.

Rendering pipeline, engine, gameplay and exact projection angles remain open. Final style approval requires the user's explicit decision and further character, interaction and motion tests. These images are comparative concept hypotheses, not game screenshots.

## Runtime

Vinext / React on Cloudflare Workers with D1 `DB`. Identity comes from Sites ChatGPT sign-in. APIs reject missing identity and scope all reads/writes to the stable Site user ID. Production is owner-private. No API keys or connector permissions are needed.

Use Node >=22.13, `npm run dev`, `npm run db:generate` for schema additions, and the Sites build helper. Local portable preview provides mock sign-in. Hosted migrations are applied by Sites. Keep `.wrangler`, `.sites-runtime` and environment files ignored. Do not put source repository credentials in files.

## Verification

- TypeScript check and production build.
- Local API: unauthenticated requests, invalid bodies/traits and mismatched Origin rejected; eight upserts, trait/notes persistence, completion gate and next-round direction/brief verified.
- Browser: keep/mix choices, trait more/less cycle, two-image comparison, reload persistence and round submission verified.
- Local disposable QA records cleared; no production preference records seeded.

## Round 05: medium × colour

Five Bowl Watch derivatives use inbox technology references, compare matte versus wash and neutral versus recurring coral, then test opaque painting. New Colour system labels separate recurrence from palette. The root colour reference was fully transparent; no palette was inferred from it. Watercolour and the signature-colour hypothesis remain open, and per-study notes record the washes’ brightness drift. Earlier rounds and feedback are retained.

## Round 06: clean detail

Three Opaque Signal derivatives reduce surface noise and concentrate detail at functional interfaces. Precision and Quiet converged toward modeled shading; Graphic was refined toward flat planes and angular light patches. New Detail hierarchy labels and attention questions support review. Previous IDs, trait keys and briefs remain intact. Actual fine geometry/lighting drift is recorded per study; cleanliness and a final medium remain exploratory.

## Round 07: more impact

The user still prefers Opaque Signal but wants more impact. Four edits compare Worn (use marks and grit), Reverence (solemn beauty), Protocol (precise graphics and raster UI mockup), and Keepsake (human ornament). Style contrast and UI layer labels support separate feedback. Five people, four trays and main camera/layout anchors remain; per-study notes record material, state-colour, bay-number and ornament drift. UI copy and cultural motifs are proposals, not implemented gameplay or canon. Previous rounds and feedback are retained.

## Round 08: graphics and curveballs

Direct conversation feedback selects Protocol's machine decals/UI and Reverence's darker mood. Directive and Overprint push original Wipeout-inspired civic graphics in both world and raster HUD; one Overprint refinement creates angular dark modules beyond the initial ivory placards. Violet borrows cold/warm saturated light from one inbox/environment reference; Conduit borrows rounded mechanical depth from the other. World graphics and Environment influence labels complement UI layer, separating physical decals from HUD. Scene notes record incomplete physical numbering, mild material convergence and Conduit's shifted forms/figures. Previous descriptors, IDs, trait keys and briefs remain intact. User acceptance is in project documentation and new direction text; no hosted review rows were inferred.

## Round 09: physical interfaces

Direct preferences select Conduit's world and Overprint's actual compact dark screen UI; Protocol's physical decals remain relevant. Synthesis combines these without asserting final approval. Idle adds a recessed physical console, with Dispensing and Manual service edited from that common hardware parent; Service Spine explores architectural support. Physical interface and Machine state labels separate embodied information from HUD and decals. Exact native prompts, parent relationships and inspected drift are preserved in `provenance/round-09/brief.json`. Earlier descriptors, briefs, trait keys and review data remain intact. No production votes are seeded.

## Round 10: medium and grain

The user redirects from small functional detail changes to broad style, keeping the current scene, colour and mood. Six independent Synthesis edits test Grain, Drybrush, Impasto, Mezzotint, Screenprint and Dither. Medium and Grain labels join ten relevant visual categories; functional-state labels remain in their original rounds. Actual drift is recorded per study. Exact native prompts and parent provenance are preserved in `provenance/round-10/brief.json`. Earlier descriptors, trait keys, briefs and feedback remain intact; no production review votes are inferred.

## Round 11: Grain studies

The user selects Grain as the new winner. Six edits explore fine/coarse grain, tonal distribution, matte board tooth, painted pigment and restrained luminous rolloff from that selected reference. The current colour, mood, set and crisp screen UI stay as controls; actual differences and limitations are recorded. Twelve style traits remain relevant and prior rounds/trait keys/briefs/reviews remain intact. Exact prompts, native originals and parent provenance are in `provenance/round-11/brief.json`. Conversation selection is recorded in the direction, without manufacturing production votes.

## Round 12: drawing and light

Original Grain remains selected after Round 11. The user clarifies the next exploration concerns pen-like marks, tonal grain, drawing and light/colour rendering, rather than scene composition. Four focused studies and two hybrids edit original Grain with two inbox images as rendering references only. Pen, Shading and Light behaviour join the twelve style labels. All prior batches, trait keys and generated briefs stay intact, and no review votes are inferred. Exact native prompts and inspected drift are preserved in `provenance/round-12/brief.json`, with local reference copies.

## Round 13: clean rebuild

The user prefers original Grain, Nib and Rim; Chroma and Engraved remain undecided. Accumulated image artifacts compromise the old comparison. A fresh text-only Grain-style reconstruction excludes all older raster parents, followed by one restrained Nib/Rim edit. The new pair needs review and is not assumed to replace original Grain. Fifteen relevant style labels, original feedback and every earlier batch/brief remain intact. Exact prompts, lineage and inspected limits are recorded in `provenance/round-13/brief.json`.
