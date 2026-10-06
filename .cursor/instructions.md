# Cursor Instructions for Worldbuilding & Manuscript (Open‑World RPG)

Current LCL continuation starts with `AGENTS.md` and `docs/process/handover.md`. This inherited playbook contains illustrative Logos material and an older narrative-only scope; the user has since authorized art exploration and the Style Lab. Its examples, counts and proposed folder structure do not establish LCL canon or completed migration.

These instructions guide AI agents and human writers in **Cursor** when creating worldbuilding materials, narrative beats, quests, dialogue, and the final manuscript for an open‑world RPG. They mirror engineering playbooks (feature files, roadmaps, ownership), but are tailored to **content, canon, and branching story design**. No code or art lives here—this repo is for narrative and design only.

---

## 🎯 Goals & Non‑Goals

**Goals**
- Provide a **single source of truth** for world canon, quest logic, dialogue systems, and manuscript.
- Define **repeatable workflows** for proposing, drafting, reviewing, and publishing narrative content.
- Enforce **templates, schemas, and naming** so Cursor agents can generate consistent files.

**Non‑Goals**
- No engineering code, shaders, assets, or build scripts.
- No final UI copy for tooltips unless specified under `/ux-copy/`.

---

## 🧭 Core Principles
- **Canon First**: Every new idea must reconcile with existing canon in `/canon/` before merging.
- **Atomic Docs**: Keep files small and focused (locations, factions, characters, quests, scenes).
- **Traceability**: Every scene/quest references its **sources** (faction, characters, timeline node).
- **Branch Clarity**: Choices must declare preconditions, outcomes, flags, and fallbacks.
- **Reversibility**: Use clear versioning so we can rewind canon changes.
- **Player Agency**: Design branches that honor player intent without dead‑end failure spirals.
- **Localization‑Ready**: All dialogue & UI strings include stable IDs and context notes.

---

## 📁 Repository Structure

```
/docs/world
  /canon                # Single source of truth (index + core laws)
    world-bible.md
    style-guide.md
    content-ratings.md
    glossary.md
    timeline.md
    pantheon-and-myths.md
    magic-tech-laws.md
  /atlas                # Geography & places (by region → location)
    /<region-id>
      region.md
      index.md          # links to locations
      /locations
        <location-id>.md
  /societies            # Factions, cultures, governments
    /factions
      <faction-id>.md
    /cultures
      <culture-id>.md
  /cast                 # Characters (PC archetypes, NPCs)
    <character-id>.md
  /items                # Items, gear, artifacts, resources
    <item-id>.md
  /systems              # Narrative‑facing systems (reputation, morality, time, crime)
    reputation.md
    economy.md
    crime-and-consequence.md

/docs/narrative
  /arcs                 # Macro arcs (Act I–III or region arcs)
    <arc-id>.md
  /beats                # Atomic beats that quests/scenes consume
    <beat-id>.md
  /quests               # Quest specs (branching, flags, rewards)
    <quest-id>.md
  /scenes               # Dialogue & scene scripts (linear or branching)
    <scene-id>.md
  /encounters           # Non‑dialogue set pieces: stealth, puzzles, social checks
    <encounter-id>.md
  /endings              # Ending states & epilogues
    <ending-id>.md

/docs/manuscript            # Output-focused, ordered book of the game narrative
  outline.md            # Running order of arcs → quests → scenes
  chapters/
    01-prologue.md
    02-...

/docs/research              # Citations, references, inspiration (non‑copyright‑violating)
  bibliography.md
  notes/

/docs/ux-copy               # UI strings that need narrative context
  tooltips.md
  onboarding.md

/docs/process               # How we work, roles, and pipelines
  instructions.md       # (this file duplicated at root if needed)
  roadmap.md
  submission-template.md
  review-checklists.md
  change-log.md
  owners.md

/docs/templates             # Authoring templates
  region.template.md
  location.template.md
  faction.template.md
  character.template.md
  item.template.md
  beat.template.md
  quest.template.md
  scene.template.md
  ending.template.md

/docs/_archive              # Retired or superseded docs (never delete history)
/legacy                     # files that will be ported into our /docs according to .instructions
```

> **Tip**: Keep file names `kebab-case` and IDs stable. Prefer short, mnemonic IDs (e.g., `scn-market-uprising-01`).

---

## 🔤 Naming, IDs & Formatting
- **Files & Folders**: `kebab-case.md`
- **Stable IDs**: `type-scope-name-##` (e.g., `qst-outerrim-smuggle-01`).
- **Frontmatter**: All content files begin with YAML frontmatter matching the template.
- **Length**: Target 1–3 pages per doc; split if longer.
- **Links**: Cross‑reference using relative paths (`../cast/nnpc-rivka.md`).

---

## 🧩 YAML Frontmatter Schemas (Author‑Facing)

### 1) Region / Location
```yaml
id: reg-virellia
kind: region|location
name: Virellia
parents: [world]
summary: Desert world of gilded domes and peasant belts.
themes: [divine-right, enlightenment, rebellion]
conflicts: [zealotry-vs-reason, center-vs-rim]
key-factions: [fac-solar-crown, fac-rationalists]
notable-characters: [npc-high-paladin-isa],
related-quests: [qst-virellia-book-of-reason]
map-notes: "Caravan arteries connect temple cities to oasis ports."
canon-status: accepted|draft|proposed
```

### 2) Faction
```yaml
id: fac-solar-crown
name: The Solar Crown
ideology: "Divine mandate by the stars"
structure: monarchy|council|cell|guild
resource-bases: [temple-tithes, holy-fire-orbitals]
relationships:
  allies: [fac-solar-flame]
  rivals: [fac-rationalists]
  neutral: []
reputation-tags: [zealous, ceremonial, punitive]
playstyle-hooks: [pilgrim-paths, relic-hunts]
canon-status: accepted
```

### 3) Character
```yaml
id: npc-high-paladin-isa
archetype: antagonist|ally|merchant|questgiver
age: 38
pronouns: she/her
faction: fac-solar-crown
motivation: "Crush sedition before prophecy wanes"
secrets: ["Once protected a Rationalist scholar"]
stat-hooks: [intimidation+, ritual-law+]
quest-links: [qst-virellia-book-of-reason]
voice: "Oracular, measured, scorching subtext"
canon-status: accepted
```

### 4) Item / Artifact
```yaml
id: itm-book-of-reason
rarity: unique
provenance: "Printed in hidden press; ink infused with desert myrrh"
powers: ["Unlocks salons", "Counters zealotry checks in dialogue"]
quest-links: [qst-virellia-book-of-reason]
canon-status: accepted
```

### 5) Beat (Atomic Narrative Unit)
```yaml
id: beat-smuggle-book
scope: qst-virellia-book-of-reason
type: stealth|social|exploration|combat|puzzle
preconditions: [flag.press-contact-met]
outcomes:
  set: [flag.book-obtained]
  reputation: { fac-solar-crown: -1, fac-rationalists: +1 }
  unlocks: [scn-salon-gathering-01]
risks: [holy-patrol, informer]
notes: "Low light, incense smoke, printing press ambience"
```

### 6) Quest (Branching Spec)
```yaml
id: qst-virellia-book-of-reason
name: The Banned Book
giver: npc-scribe-nadir
region: reg-virellia
level-hint: 1–3
summary: "Smuggle a forbidden manuscript; decide who deserves its light."
themes: [censorship, courage, unintended-consequences]
flags:
  creates: [flag.book-obtained, flag.salon-ignited]
  consumes: [flag.press-contact-met]
branches:
  - id: path-clandestine
    when: [stealth>=2]
    leads-to: [scn-press-raid-01, scn-salon-gathering-01]
  - id: path-open-revolt
    when: [reputation.fac-rationalists>=2]
    leads-to: [scn-market-uprising-01]
success-conditions: [book-delivered OR knowledge-disseminated]
fail-conditions: [book-destroyed AND source-exposed]
rewards: [reputation.rationalists+2, unique-title "Courier of Dawn"]
canon-status: draft
```

### 7) Scene (Dialogue & Stage Direction)
```yaml
id: scn-press-raid-01
format: branching-dialogue
location: loc-hidden-press
cast: [npc-scribe-nadir, npc-holy-patrol-captain]
stage-direction: |
  Oil lamps gutter. Paper dust floats. A ram busts the door; brass sigils blaze.
strings-ctx: "Religious law vs civic curiosity; keep metaphors ritualistic"

lines:  # Dialogue nodes; stable keys for localization
  - id: node-01
    speaker: npc-holy-patrol-captain
    text: "By star writ, this press is a blasphemy."
    choices:
      - id: ch-appeal-tradition
        requires: [trait.rhetoric>=2]
        text: "The oldest scrolls beg for commentary, Captain."
        next: node-02a
      - id: ch-bribe
        requires: [item.coin-purse]
        text: "Close the ram. Open your hand."
        next: node-02b
  - id: node-02a
    speaker: npc-holy-patrol-captain
    text: "Commentary is for clergy. You are not clergy."
    effects: [reputation.fac-solar-crown-1]
    next: node-03
  - id: node-02b
    speaker: npc-scribe-nadir
    text: "We can buy a quieter night."
    effects: [flag.patrol-bribed]
    next: node-03
  - id: node-03
    speaker: player
    text: "We leave with the plates, or none of us leaves."
    terminal: false

outcomes:
  success: [flag.plates-saved]
  failure: [flag.scribe-arrested]
notes: "Keep replies terse; avoid 21st‑century slang"
```

### 8) Ending
```yaml
id: end-outerrim-reprisal
scope: arc-outerrim-enlightenment
conditions: [flag.knowledge-widespread, reputation.fac-solar-crown<=-3]
summary: "Orbital canons cleanse the bazaar; dissent goes underground."
slide-text: [
  "Ash drifted into aqueducts.",
  "The book lived in whispers and bruises.",
  "Stars were watched differently thereafter."
]
```

---

## 🗂 Workflow for Content Development

1) **Propose** (Create a stub using a template)
- Place under the correct folder.
- Fill frontmatter minimally; add `canon-status: proposed`.

2) **Scope** (Turn into a narrative “feature”)
- Add a `/process/submission-template.md` checklist to the doc as a section.
- Define dependencies (regions, factions, characters, beats).
- Mark ambiguous elements with `⚠️` and include specific questions.

3) **Draft**
- Expand to meet **acceptance criteria** (see checklists below).
- Run **continuity checks**: links resolve, IDs exist, flags unique.

4) **Review**
- Peer review using `/process/review-checklists.md`.
- Canon editor ensures no contradictions.

5) **Publish**
- Set `canon-status: accepted`.
- Update indices: region `index.md`, `world-bible.md` references, `/manuscript/outline.md`.
- Log in `/process/change-log.md`.

> Cursor agents must **never invent requirements** beyond the active doc/template. If context is missing, add `⚠️ Gaps` and proceed with the most conservative stub.

---

## ✅ Acceptance Checklists

### For **Canon Docs** (region, faction, character)
- [ ] Frontmatter complete; ID stable
- [ ] Themes & conflicts declared
- [ ] At least 2 links to related entities
- [ ] No contradictions with `/canon/*`
- [ ] Style matches `style-guide.md`

### For **Quests**
- [ ] Clear **summary**, **themes**, **giver**, **region**, **level-hint**
- [ ] **Preconditions**, **flags** (creates/consumes), and **branches** defined
- [ ] **Success**/**Fail** conditions + **rewards**
- [ ] At least **3 beats** with outcomes
- [ ] Referenced scenes exist or have stubs

### For **Scenes**
- [ ] Stage direction present (evocative but concise)
- [ ] Lines use stable IDs and character IDs
- [ ] Each choice has requirements and next
- [ ] Outcomes modify flags/reputation where relevant
- [ ] Localization notes included

### For **Manuscript**
- [ ] Outline updated and consistent with arcs/quests/scenes
- [ ] Chapter ordering clear; scene IDs referenced
- [ ] No dangling references or TODOs

---

## 🧪 Narrative Linting (Manual)
Create a periodic pass (weekly) to:
- Validate that **every referenced ID exists**.
- Ensure **flags** are unique and never reused with conflicting meanings.
- Verify **branches** have at least one success path and one mitigation path.
- Check **localization**: all `text` lines have IDs and notes.
- Confirm **content ratings** compliance.

> Optional: Add a simple script later; for now, keep a checklist in `/process/review-checklists.md`.

---

## 🗺 Canon & Continuity Governance
- `/world/canon/world-bible.md` is the **root index** linking to every accepted entity.
- **Timeline** changes must update `/world/canon/timeline.md` with dated entries.
- **Retcons** require an `/process/retcon-justification.md` entry and must move superseded docs into `/_archive` with a pointer.

---

## 🗣 Style Guide Highlights (for `style-guide.md`)
- **Voice**: grounded, specific nouns; verbs with intent; minimal adverbs.
- **POV**: present tense for gameplay scenes; past for manuscript chapters (configurable per project).
- **Show vs Tell**: produce sensory anchors (sound, texture, light) per scene.
- **Names**: pronounceable; faction/region coherent phonotactics.
- **Content Safety**: follow `content-ratings.md`; avoid exploitative detail.

---

## 🌍 Localization & Accessibility
- Provide **context notes** for idioms, puns, neologisms.
- Keep **line length** reasonable for UI constraints.
- Tag **untranslatable terms** in glossary.

---

## 🪢 Branching Narrative Conventions
- **Choice Nodes**: Each has `requires`, `text`, and `next`.
- **Fail‑Forwards**: Setbacks open new play; avoid hard dead ends unless intentional.
- **State**: Use `flags.*`, `reputation.fac-*`, `trait.*`, `item.*` consistently.
- **Rejoin Points**: Mark nodes where branches converge to reduce content bloat.

---

## 🧰 Process Files (Summaries)

### `/process/instructions.md` (this file)
Living rules for authoring; update after major milestones with a two‑line summary in `/process/change-log.md`.

### `/process/submission-template.md`
```
# Submission
- Doc Type & ID:
- Summary:
- Dependencies:
- Risks/Concerns (⚠️):
- Acceptance Criteria:
- Test Read Path (how a player would experience this):
- Checklist Completed: [ ]
```

### `/process/review-checklists.md`
Separate sections for **canon**, **quest**, **scene**, **manuscript** as above.

### `/process/owners.md`
Maintain owners per folder (primary, backup); use GitHub handles or team aliases.

---

## 🧱 Example Templates (Abbreviated)

### `templates/quest.template.md`
```yaml
id: qst-<scope>-<name>
name: <Quest Name>
giver: <character-id>
region: <region-id>
level-hint: <min–max>
summary: <one-sentence pitch>
themes: [<t1>, <t2>]
flags:
  creates: []
  consumes: []
branches: []
success-conditions: []
fail-conditions: []
rewards: []
canon-status: proposed
---
## Beats
- [ ] <beat-id>
- [ ] <beat-id>

## Notes
- Balancing, reuse hooks, rejoin points
```

### `templates/scene.template.md`
```yaml
id: scn-<scope>-<name>
format: branching-dialogue|linear
location: <location-id>
cast: []
stage-direction: |
  <short cinematic description>
strings-ctx: <notes for translators>
lines: []
---
## Notes
- Keep responses short. Avoid slang unless factional vernacular.
```

### `templates/character.template.md`
```yaml
id: npc-<name>
archetype: <role>
age: <#>
pronouns: <she/he/they>
faction: <faction-id>
motivation: "<drive>"
secrets: []
stat-hooks: []
quest-links: []
voice: "<voice cue>"
canon-status: draft
```

---

## 📚 Manuscript Assembly
- `/manuscript/outline.md` is the **spine**. It lists arcs → quests → scenes by ID.
- Chapters in `/manuscript/chapters/` may **quote** scene text or adapt it into prose.
- Keep a **diff note** when manuscript diverges from in‑game dialogue.

**Export Targets** (later pipeline):
- **Quest Book**: all quests with summaries, flow, rewards.
- **Dialogue Book**: all scenes with stable IDs.
- **Lore Compendium**: canon docs sorted by topic.

---

## 🗓 Roadmap & Milestones
- `process/roadmap.md` tracks: Regions → Factions → Arcs → Quests → Scenes.
- Use MoSCoW (Must/Should/Could/Won’t) per milestone.
- Define “Narrative Alpha” = all quests stubbed; “Narrative Beta” = all scenes draft; “Content Lock” = canon accepted + manuscript outline stable.

---

## 🧠 Cursor Agent Rules (Very Important)
- Only work within the **active file** and its **linked templates**.
- If missing context, insert a `## Gaps (⚠️)` section listing exact questions.
- Never overwrite `/canon/*` without updating indices and change log.
- Do **not** invent mechanics; reference `/systems/*` only.
- Keep files ≤ 300 lines; split when necessary and add index files.

---

## 🔚 Quick Start (What to Do First)
1. Copy these instructions to `/process/instructions.md`.
2. Create stubs using templates for: one **region**, two **factions**, three **key characters**, one **keystone quest**, and two **scenes**.
3. Update `/manuscript/outline.md` with the intended order.
4. Run the acceptance checklists. Log decisions in `/process/change-log.md`.

---

*This document is intentionally modular—extend templates and checklists as the world solidifies.*
