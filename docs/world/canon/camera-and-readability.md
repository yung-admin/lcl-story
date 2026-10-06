---
id: canon-lcl-camera-readability
kind: style-guide
canon-status: accepted
updated: 2026-10-03
scope: game-presentation-and-art-ideation
---

# Camera and Readability — LCL / The Hush

## User Direction

The game presentation is similar to Fallout 1 and 2, rather than a strictly mathematical isometric view. Use a fixed elevated three-quarter oblique/trimetric camera with flattened depth, near-parallel lines, consistent actor scale, and readable sprite-like objects. This is an art direction, not a locked engine specification.

[Tim Cain's first-person account](https://www.shacknews.com/article/114982/world-on-fire-the-oral-history-of-fallout-and-fallout-2) describes Fallout's view as oblique/trimetric and explains the near-parallel camera treatment. Use the [publisher's Fallout 2 media](https://store.steampowered.com/app/38410/Fallout_2/?l=english) as a visual reference for play-space readability. The reference does not require copying Fallout's setting, palette, UI, characters, or assets.

## Projection and Framing

- Fixed elevated three-quarter view; show ground, object tops, and useful side faces.
- Parallel or near-parallel projection; avoid vanishing points and distance-based actor shrinkage.
- Do not impose equal-axis isometric diamonds as the only valid geometry.
- Frame a continuous level slice, not a floating miniature set on a pedestal.
- Omit or cut away roofs and near walls where they obscure play-space information.
- Keep doors, walking routes, barriers, terminals, and work areas clear.
- Avoid eye-level horizons, photographic foreground framing, depth-of-field blur, and cinematic lens effects.

## Surface and Sprite Treatment

Aim for the tactile, textured, prerendered-sprite character of classic CRPG environments. Forms have readable volume, restrained texture, directional shadows, compact actors, and a stable material palette.

This does not lock original-resolution pixel art, a particular asset production method, or a palette limit. Test fidelity separately from camera and layout. Avoid miniature toy proportions and indiscriminate chunky pixels.

## Hierarchy at Play Scale

1. Routes and blocked passages.
2. Characters, terminals, gates, and important machine silhouettes.
3. Maintenance boundaries, repair structures, and occupied areas.
4. Small ornament and surface wear.

A well-fitted repair plate, repaired bench, organized work area, and cultivated corner can communicate human care. Tiny photographs and stitching may enrich a close view without carrying the scene's main meaning.

Lighting identifies tasks and preserves value separation. Sparse emissive indicators supplement silhouette and physical state. LCL should change visible orientation, access, or coordination; a tiny colour change alone is insufficient.

## Apply the Existing World Direction

The [visual guide](../../../legacy/visual-design.md) and [tone guide](../../../legacy/tone-style.md) still govern municipal construction, selective maintenance, human care, local neon, and emotional range. The camera changes how those ideas must read, not the world's history.

Monumental systems can extend beyond the frame. Show their scale through cropped spans, repeated service structures, and human access at the edges rather than a low-angle spectacle shot.

## Tests

The [overhead station studies](../../research/notes/station-overhead-tests.md) compare automated care, human occupation, and LCL contact with the same camera and layout. Inspect the full image and a reduced view to assess readability. A small preview is an aid, not an actual engine viewport or performance test.

Keep exact angle, projection matrix, engine, grid, rendering pipeline, UI, and combat timing open until separately chosen. Static concept images cannot verify movement or audio.
