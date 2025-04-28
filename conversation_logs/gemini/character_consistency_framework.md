# Character Consistency Framework - Gemini Conversation

## Overview

This document outlines a comprehensive framework for maintaining character consistency in NSFW prompts for CivitAI's image generation models. The content is based on research conducted through Gemini, focusing on creating persistent character attributes across multiple generations while allowing for scenario flexibility.

## Character Consistency Matrix

### Core Identity Elements

The character consistency matrix is built on these foundational elements that should remain consistent across all generations:

1. **Physical Base Template**
   - Species/race (human, elf, anthro, etc.)
   - Body type (athletic, slim, curvy, muscular, etc.)
   - Height/build descriptors
   - Skin/fur/scale color and texture

2. **Facial Recognition Markers**
   - Face shape and structure
   - Eye color and shape
   - Hair color, length, and style
   - Distinctive facial features (scars, markings, etc.)

3. **Signature Elements**
   - Recurring accessories or props
   - Distinctive clothing items or styles
   - Characteristic expressions or poses
   - Personal identifiers (tattoos, jewelry, etc.)

## Tiered Attribute System

Implementing a tiered system helps prioritize character elements:

### Tier 1: Immutable Attributes
Elements that should never change between generations:
- Species/race
- Primary physical characteristics
- Core facial features
- Distinctive markings

### Tier 2: Semi-Stable Attributes
Elements that may vary slightly but maintain overall consistency:
- Clothing style (though specific items can change)
- Hair styling (minor variations acceptable)
- Expressions and poses
- Accessories

### Tier 3: Variable Elements
Elements that can freely change between generations:
- Background/environment
- Lighting conditions
- Secondary characters
- Scenario-specific props

## Implementation Framework

### Character Codex Approach

Create a character "codex" that contains all essential elements:

```
[Character Codex: {NAME}]
- Physical Matrix: {Species}/{Body Type}/{Height}/{Distinctive Features}
- Facial Matrix: {Eye Color}/{Hair Style}/{Hair Color}/{Face Shape}
- Identity Markers: {Accessories}/{Clothing Style}/{Personal Items}
- Personality Pattern: {Expression Tendencies}/{Characteristic Poses}
```

This codex serves as the foundation for all prompt variations.

### Scenario Integration System

For implementing characters into different scenarios while maintaining consistency:

1. **Base Prompt Structure**
   ```
   [Quality Tags] + [Character Codex] + [Scenario Elements] + [Technical Parameters]
   ```

2. **Character-First Compositing**
   - Always place character elements earlier in the prompt
   - Follow with scenario-specific elements
   - End with technical/quality parameters

3. **Weighting Strategy**
   - Apply emphasis to core character elements (e.g., purple hair:1.2)
   - De-emphasize elements that might conflict with character identity
   - Balance between character fidelity and scenario integration

## Model-Specific Character Consistency Techniques

Each AI model family requires specific approaches:

### PonyXL Optimization
- Use booru-style tagging with character name underscore source
- Include species identifiers before physical descriptors
- Tag anthro/feral as appropriate
- Example tag structure:
  ```
  character_name, species, color_fur/scales, distinctive_features, etc.
  ```

### SDXL Optimization
- Use more natural language descriptions
- Focus on photorealistic details
- Implement stronger negative prompts
- Example structure:
  ```
  A beautiful woman with [distinctive features], wearing [clothing], [pose/action]
  ```

### Illustrious Optimization
- Emphasize anime-style elements
- Use parentheses for emphasis on key features
- Include style references for anime consistency
- Example structure:
  ```
  1girl, (detailed eyes), [character features], anime style, etc.
  ```

## Dynamic Character Templates

Create adaptable templates that maintain consistency while allowing for variation:

### Base Character Template
```
[Character Name]: [Essential Physical Traits], [Core Facial Features], [Signature Elements]
```

### Scenario Template
```
[Base Character Template] + [Pose/Action], [Environment], [Lighting], [Mood], [Camera Details]
```

### Outfit Variation Template
```
[Base Character Template] + [Outfit Description], [Outfit-Appropriate Setting], [Matching Accessories]
```

## Character Consistency Testing Protocol

To ensure consistency across generations:

1. **Baseline Test**
   - Generate 3-5 images with the base character template
   - Assess core feature consistency
   - Identify which elements remain consistent naturally

2. **Variation Testing**
   - Test character in different poses, outfits, and settings
   - Note which elements become inconsistent first
   - Strengthen those elements in future prompts

3. **A/B Comparison**
   - Generate pairs of images with slight prompt variations
   - Directly compare character consistency
   - Refine prompts based on comparison results

4. **Cross-Model Verification**
   - Test character prompts across different model families
   - Document model-specific inconsistencies
   - Create model-specific variations of the character template

## System Prompt for Character Generation

This system prompt can be used with AI assistants to generate consistent characters:

```
You are an expert in creating consistent character prompts for CivitAI's image generators. Your specialty is designing prompts that maintain character consistency across different scenarios.

When I provide a character concept, create:

1. A Character Codex containing all essential attributes organized in tiers:
   - Tier 1: Immutable core features
   - Tier 2: Semi-stable attributes
   - Tier 3: Variable elements

2. Three prompt variations showing the character in different scenarios while maintaining consistency

3. Model-specific adaptations for:
   - PonyXL (booru-style tagging)
   - SDXL (photorealistic approach)
   - Illustrious (anime-style approach)

Include both positive and negative prompts for each variation, emphasizing character consistency techniques.
```

## Best Practices for Multi-Generation Character Sets

1. **Create a Character Bible**
   - Document all character attributes in detail
   - Include visual references if possible
   - Specify which elements must remain consistent

2. **Use Reference Anchoring**
   - Create one "definitive" prompt as a reference point
   - Compare all variations against this reference
   - Return to the reference when consistency drifts

3. **Implement Incremental Changes**
   - Modify only one major element at a time
   - Test small variations before major changes
   - Document successful combinations

4. **Develop Character-Specific Negative Prompts**
   - Include negatives for common inconsistencies
   - Specify what the character is NOT
   - Address model-specific tendencies that affect the character

This framework provides a comprehensive approach to maintaining character consistency across multiple generations while allowing for creative variation in scenarios, poses, outfits and settings. 