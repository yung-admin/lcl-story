# ✅ The Logos Project – Worldbuilding TODO Roadmap

## 🎯 End Goal

A **complete, production-ready worldbuilding & manuscript repo** that contains:

* All canon, factions, regions, items, characters, and systems
* Fully specced quests, beats, scenes, and endings
* A manuscript outline that orders the entire story
* Templates, checklists, and governance so the team can keep it alive

---

## 📂 Phase 0 – Housekeeping (Immediate)

1. [ ] Verify `/docs` migration complete (no dangling paths).
2. [ ] Update `/process/change-log.md` to mark new repo state.
3. [ ] Add missing **content-ratings.md** under `/world/canon/`.
4. [ ] Add a **master index** file under `/docs` linking all subdirectories.
5. [ ] Ensure all templates exist in `/templates/`.

---

## 👤 Phase 1 – Character Foundation (Critical)

> Characters are the player’s anchor. Without them, the world feels empty.

1. **Protagonist**

   * [ ] Create **Cael Vorran** profile (detailed background, goals, internal conflict, arcs).
   * [ ] Define Cael’s **voice, archetype, and agency hooks**.

2. **Faction Leaders**

   * [ ] Create 1–2 key leaders per faction (≈20 NPCs).
   * [ ] Define ideology-driven motivations.
   * [ ] Establish inter-faction relationships & rivalries.

3. **Supporting Cast**

   * [ ] Add 3–4 secondary characters per faction (≈35–40 NPCs).
   * [ ] Define side-quest roles, thematic voices, and links to beats.

4. **World NPCs**

   * [ ] Populate world with **~50 minor NPCs** (vendors, travelers, background stories).
   * [ ] Ensure each hub/region has 5–10 memorable locals with dialogue.

5. **Dialogue & Voice**

   * [ ] Write **voice guidelines** for each faction/character type.
   * [ ] Define **narrative tags** for speech style, vocabulary, tone.

➡️ **Target NPC count**: ~100+ named characters with dialogue (on par with Fallout 1).

---

## 🗺 Phase 2 – Quest System (Core Gameplay)

> Quests operationalize arcs and factions into *player-facing content*.

1. **Main Quests**

   * [ ] Define the **5–6 main quests** (1 per arc, plus prologue/finale).
   * [ ] Write branching logic, flags, success/failure, rewards.
   * [ ] Cross-link to factions, characters, and beats.

2. **Side Quests**

   * [ ] Draft **15–20 faction/region side quests** (expanded from 10–12).
   * [ ] Ensure each advances lore, reveals secrets, or unlocks systems.
   * [ ] Include at least 3–4 multi-stage quest chains.

3. **Quest Framework**

   * [ ] Establish a **global flag registry** (avoid collisions).
   * [ ] Define a **reward taxonomy** (items, reputation, narrative consequences).

➡️ **Target quest count**: ~25–30 total (main + side), equal to Fallout 1’s density.

---

## 🎭 Phase 3 – Narrative Beats (Story DNA)

> Beats break arcs down into micro-moments of tension, choice, and revelation.

1. **Arc Breakdown**

   * [ ] For each arc, write **12–15 beats**.
   * [ ] Define preconditions, outcomes, emotional purpose.

2. **Beat Library**

   * [ ] Store beats in `/narrative/beats/` as atomic units.
   * [ ] Tag beats with themes, factions, and characters.

3. **Continuity Mapping**

   * [ ] Map beats to quest steps & scene IDs.
   * [ ] Ensure every beat has a payoff or consequence.

---

## 🎬 Phase 4 – Scenes & Encounters

1. **Dialogue Scenes**

   * [ ] Expand from 4 → 30+ branching dialogue scenes.
   * [ ] Each scene must have stage direction, choices, and flags.

2. **Encounters**

   * [ ] Add 15+ encounter designs (stealth, puzzles, diplomacy, combat variations).
   * [ ] Define risk/reward mechanics.

3. **Endings**

   * [ ] Expand from 3 → **10+ endings**.
   * [ ] Cover faction outcomes, independent path, and world-state variations.
   * [ ] Provide **epilogue slides per region/faction** (target: 12–15 slides, matching Fallout 1’s style).

---

## ⚙️ Phase 5 – Systems & Items

1. **Systems**

   * [ ] Reputation system (per faction, thresholds, gameplay effects).
   * [ ] Economy & trade (currencies, barter, scarcity).
   * [ ] Crime & consequence (laws, penalties, reputation shifts).
   * [ ] Time system (seasons, day/night cycles, arc timing).

2. **Items & Artifacts**

   * [ ] Create **25–30 unique items/artifacts** linked to quests.
   * [ ] Define rarity, provenance, and powers.
   * [ ] Add faction-specific rewards and unique weapons/tech.
   * [ ] Cross-link to story beats and endings.

---

## 📖 Phase 6 – Manuscript Assembly

1. **Outline**

   * [ ] Create `/manuscript/outline.md` covering arcs → quests → scenes.
   * [ ] Ensure ordering matches intended pacing.

2. **Chapters**

   * [ ] Write narrative prose chapters (adapted from scenes).
   * [ ] Add notes for divergence between gameplay & prose.

3. **Epilogue Slides**

   * [ ] Write epilogue text for each ending state.

---

## 🧹 Phase 7 – Review & Governance

1. [ ] Populate `/process/review-checklists.md` for characters, quests, beats, scenes.
2. [ ] Run a **continuity audit**: all IDs resolve, no flag collisions.
3. [ ] Perform a **content safety pass** against `content-ratings.md`.
4. [ ] Update `/process/owners.md` with folder owners.

---

## 🚀 Milestone Targets

* **Narrative Alpha**: All quests stubbed, beats outlined.
* **Narrative Beta**: All scenes drafted, endings specced.
* **Content Lock**: All canon accepted, manuscript outline stable.

---

## 📊 Scale Benchmark vs Fallout 1

- **Main Quests**: 5–6 (Fallout 1: 5–6)  
- **Side Quests**: 15–20 (Fallout 1: ~20–25)  
- **Total Quests**: ~25–30 (Fallout 1: ~30)  
- **Factions**: 11+ (Fallout 1: 8–10)  
- **NPCs with dialogue**: ~100+ (Fallout 1: ~80–100)  
- **Endings**: 10+ (Fallout 1: 13 slides)  
- **Unique Items**: 25–30 (Fallout 1: ~20)  

➡️ **Goal**: Match Fallout 1’s density while keeping Logos distinct through factional depth and systemic storytelling.
