# LCL style exploration — round 01

Status: exploration awaiting the user's review. These alternatives do not replace the accepted aesthetic guide or establish final canon.

[Open the private Style Lab](https://lcl-style-lab.hyltmark.chatgpt.site). The site contains eight generated images with clickable labels for lighting, goofiness, palette, materials, texture, filters, edges and mood. Each label cycles neutral → more → less. Whole-image verdicts are Keep, Mix and Pass; notes capture anything the labels miss. Ratings autosave to authenticated cloud storage. Finish review saves the next-round brief, then request the next batch in the Codex conversation.

## Comparison controls

Use the [occupied overhead station](../../../images/moodboard/station-overhead-tests/station-b-human-occupation.png) as the composition reference. Hold the elevated oblique/trimetric near-parallel camera, continuous playfield, three people, left workbench/bench/gallery/stairs, center pier and devices, closed mid-right gate, and maintained freight machinery on the right.

The first batch varies several dimensions together to discover directions worth exploring. It is not a controlled one-variable experiment. Subsequent rounds should isolate promising traits when a causal comparison is useful.

| Study | Hypothesis | Observation |
| --- | --- | --- |
| [01 Archive](../../../images/style-lab/round-01/01-archive.png) | Worn prerendered RPG treatment | Dither subtle; detail still dense and modeled. |
| [02 Civic](../../../images/style-lab/round-01/02-civic.png) | Bright cream, teal and terracotta civic future | Strong palette shift; more modeled than a flat poster. |
| [03 Ink](../../../images/style-lab/round-01/03-ink.png) | Three-ink woodcut and screenprint | Strongest medium transformation; hatching may compete with paths. |
| [04 Nocturne](../../../images/style-lab/round-01/04-nocturne.png) | Midnight indigo and local practical lamps | Night treatment convincing; dark values need large-image inspection. |
| [05 Clay](../../../images/style-lab/round-01/05-clay.png) | Playful stop-motion craft | Rounded forms and fingerprints; small hardware simplified. |
| [06 Watercolour](../../../images/style-lab/round-01/06-watercolour.png) | Gentle architectural painting | Paper and colour read; edges and detail remain quite crisp. |
| [07 Faceted](../../../images/style-lab/round-01/07-faceted.png) | Clean angular low-poly geometry | Readable anchors; cushion pattern and drains simplified. |
| [08 Botanical](../../../images/style-lab/round-01/08-botanical.png) | Ceramic Art Nouveau infrastructure | Organic ornament and added golden trim; freight containers remain partly metallic. |

All are 1672 × 941 PNGs. Main topology, closed gate and three people remain consistent; fine details drift. Judge aesthetics separately from those artifacts. The displayed filter names describe visual appearance; no actual game post-processing or rendering pipeline has been implemented.

## Iteration

After the user completes a round, read the saved brief and detailed feedback. Normally produce six new images: two refinements, two hybrids combining preferred traits, and two new hypotheses. Adjust this balance to the user's direction. Consult every previous round and the project guides; explicitly record inspirations and parent image IDs. Resolve conflicting preferences with distinct alternatives. Neutral is not approval. Preserve rejected traits as constraints, and retain all rounds.

Once a direction feels coherent, test a second setting, daylight/night, character silhouettes, UI/interaction legibility and movement before proposing a final style guide update. A winning station treatment alone is insufficient to lock the game style.

## Files and continuation

- [Exact prompts and observations A](../../../images/style-lab/round-01/manifest-a.json).
- [Exact prompts and observations B](../../../images/style-lab/round-01/manifest-b.json).
- [Website implementation and continuation guide](../../../sites/lcl-style-lab/README.md).
- Site ID and bindings: `sites/lcl-style-lab/.openai/hosting.json`. Cloud feedback tables: `image_reviews`, `round_reviews`; retrieve exact binding/table identifiers through the native Sites database overview before reading rows.

Built-in image_gen used. Production build, TypeScript checks and local API/browser review flow passed. Disposable local QA records were cleared; production preferences were not seeded. Hosted deployment succeeded as owner-private.
