# Review Checklists

Use these checklists when reviewing content for The Logos Project. Each section covers different types of content with specific criteria for acceptance.

## Canon Documents (Regions, Factions, Characters)

### World Canon
- [ ] Frontmatter complete with stable ID
- [ ] Themes & conflicts clearly declared
- [ ] At least 2 links to related entities
- [ ] No contradictions with existing `/canon/*` files
- [ ] Style matches `style-guide.md`
- [ ] Content is focused and atomic (1-3 pages max)
- [ ] All referenced locations, factions, or characters exist or are planned

### Faction Review
- [ ] Ideology is clear and distinct from other factions
- [ ] Visual identity is well-defined with colors and style
- [ ] Relationships with other factions are logical
- [ ] Playstyle hooks are engaging and varied
- [ ] No contradictions with faction's historical role
- [ ] Cultural elements are consistent and believable

### Character Review
- [ ] Motivation is clear and drives character actions
- [ ] Voice and personality are distinct and memorable
- [ ] Faction affiliation makes sense for character
- [ ] Secrets and background add depth without contradicting canon
- [ ] Stat hooks provide meaningful gameplay interactions
- [ ] Character serves a clear narrative purpose

## Narrative Content (Quests, Scenes, Arcs)

### Quest Review
- [ ] Clear summary, themes, giver, region, and level hint
- [ ] Preconditions, flags (creates/consumes), and branches defined
- [ ] Success/fail conditions are clear and achievable
- [ ] Rewards are appropriate for quest difficulty
- [ ] At least 3 beats with clear outcomes
- [ ] Referenced scenes exist or have stubs
- [ ] Quest serves the larger narrative arc
- [ ] Player agency is preserved throughout

### Scene Review
- [ ] Stage direction is evocative but concise
- [ ] Lines use stable IDs and character IDs
- [ ] Each choice has clear requirements and consequences
- [ ] Outcomes modify flags/reputation appropriately
- [ ] Localization notes are included
- [ ] Dialogue matches character voice and faction style
- [ ] Scene advances the narrative meaningfully
- [ ] No dead-end choices without alternatives

### Arc Review
- [ ] Arc serves a clear thematic purpose
- [ ] Historical parallels are appropriate and well-integrated
- [ ] Key events are impactful and memorable
- [ ] Emotional beats are clear and resonant
- [ ] Logos fragment integration is meaningful
- [ ] Arc connects logically to previous and next arcs
- [ ] Player choices have lasting consequences

## Technical Review

### ID and Reference Validation
- [ ] All referenced IDs exist in the codebase
- [ ] No duplicate IDs across the project
- [ ] File naming follows kebab-case convention
- [ ] Cross-references use relative paths correctly
- [ ] No broken links or missing dependencies

### Flag and State Management
- [ ] All flags are unique and never reused with conflicting meanings
- [ ] Flag names are descriptive and follow naming conventions
- [ ] State changes are logical and reversible where appropriate
- [ ] No circular dependencies in flag requirements

### Localization and Accessibility
- [ ] All dialogue text has stable IDs for localization
- [ ] Cultural context notes are provided for translators
- [ ] No untranslatable idioms or cultural references
- [ ] Text length is appropriate for UI constraints
- [ ] Content follows accessibility guidelines

## Content Quality Review

### Writing Quality
- [ ] Voice is consistent with project style guide
- [ ] Grammar and spelling are correct
- [ ] Tone matches the content type and audience
- [ ] Descriptions are vivid and engaging
- [ ] No anachronistic language or references

### Thematic Consistency
- [ ] Content explores established themes meaningfully
- [ ] Conflicts are engaging and well-motivated
- [ ] Moral choices are complex and thought-provoking
- [ ] No contradictions with established world themes
- [ ] Content adds depth to the overall narrative

### Gameplay Integration
- [ ] Content provides clear gameplay hooks
- [ ] Player agency is preserved throughout
- [ ] Choices have meaningful consequences
- [ ] Content is appropriate for target audience
- [ ] No gameplay elements that contradict established systems

## Final Review

### Canon Integration
- [ ] Content integrates seamlessly with existing canon
- [ ] No retcons or contradictions introduced
- [ ] New elements enhance rather than complicate the world
- [ ] Content serves the overall project vision

### Production Readiness
- [ ] All acceptance criteria met
- [ ] Content is ready for implementation
- [ ] No outstanding questions or ambiguities
- [ ] Documentation is complete and accurate

---

**Reviewer:** <Name/Handle>  
**Date:** <Review Date>  
**Status:** <Approved/Needs Revision/Rejected>
