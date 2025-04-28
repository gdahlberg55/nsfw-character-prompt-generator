# AI-Powered Prompt Generator for PonyXL - Claude Conversation

## Overview

This document contains research findings about character consistency, prompt structures, and techniques for NSFW character prompt generation specifically optimized for the PonyXL model on CivitAI. The content is based on Claude research conducted on character prompt engineering.

## Character Consistency Techniques

### Core Elements for Character Consistency

1. **Physical Attributes**
   - Species/type (e.g., crocodile, dragon, pony)
   - Fur/scales/skin color and texture
   - Body type (slim, athletic, curvy, petite, muscular)
   - Distinctive features (horns, wings, tail)
   - Hair style and color
   - Eye color and style

2. **Clothing and Accessories**
   - Signature outfits (e.g., pink top, striped stockings)
   - Recurring accessories
   - Style elements that define the character

3. **Expression and Posture**
   - Characteristic expressions (smirk, smile, frown)
   - Typical poses
   - Body language unique to the character

## Prompt Structure for PonyXL

The most effective prompt structure for PonyXL follows this pattern:

```
[Quality Tags], [Character Tags], [Pose/Expression], [Environment], [Other Details]
```

### Quality Tags (Essential for PonyXL)

```
score_9, score_8_up, score_7_up, score_6_up, score_5_up, score_4_up, masterpiece, high quality, realistic, detailed, best quality
```

### Character Tags Example

```
character_name, species, scales/fur color, tail, hair color, distinctive features, female/male, 1girl/1boy, eye color, anthro/feral
```

### Environment and Scene Elements

```
bedroom, outdoor, forest, beach, city, etc.
```

### Pose and Expression

```
standing, sitting, lying on bed, smiling, looking at viewer, etc.
```

## Best Practices for Character Consistency

1. **Use Character-Specific Trigger Words**
   - Always include character_name_source (e.g., bratty_undertale) rather than generic terms
   - Include species-specific identifiers to avoid generating humans

2. **Tag What You See**
   - Only include attributes that are visible in the desired output
   - Avoid abstract concepts, use visual descriptors instead

3. **Balance Detail and Conciseness**
   - Too many tags cause noise and less precise results
   - Include only what's absolutely necessary to define the character

4. **Maintain Attribute Consistency**
   - Core physical attributes should remain consistent across generations
   - Allow for variation in poses, expressions and environments

## Model-Specific Optimization

Different AI models require different approaches to prompt engineering:

1. **PonyXL Specifics**
   - Prefers booru-style tagging (comma-separated keywords)
   - Works best with score_9, score_8_up tags at the beginning
   - Responds well to source_furry tag

2. **SDXL Differences**
   - More responsive to natural language descriptions
   - May require different quality tags

3. **Illustrious Model Considerations**
   - Different prompt structure requirements
   - May need style-specific tags

## Example Prompts

### SFW Example

```
score_9, score_8_up, score_7_up, score_6_up, score_5_up, score_4_up, masterpiece, high quality, realistic, detailed, best quality, white bed, solo, rating_safe, source_furry, bedroom, smiling, seductive, looking at viewer, on bed, full body, character_name, species, scales, tail, blonde hair, pink lipstick, female, 1girl, pink eyes, anthro, pink top, striped stockings, striped arm sleeves
```

### NSFW Example

```
score_9, score_8_up, score_7_up, score_6_up, score_5_up, score_4_up, masterpiece, high quality, realistic, detailed, best quality, solo, rating_explicit, source_furry, bedroom, looking at viewer, lying on bed, lying on back, full body, nude, character_name, species, scales, tail, blonde hair, pink lipstick, female, 1girl, pink eyes, anthro
```

## LoRA Development Insights

When developing character LoRAs for consistency:

1. **Training Dataset Guidelines**
   - 30-50 high-quality reference images
   - Consistent character representation
   - Variety of poses and angles
   - Clear visibility of defining features

2. **Tagging Strategy**
   - Use character_name_source as primary trigger
   - Include essential physical attributes
   - Tag optional elements separately
   - Balance between specificity and flexibility

3. **Testing and Refinement**
   - Test at different LoRA weights (0.6-1.0)
   - Generate multiple poses to verify consistency
   - Check for character accuracy compared to source material
   - Document any quirks or limitations

## System Prompt Template for Character Generation

This template can be used as a system prompt for an AI assistant specializing in NSFW character prompt generation:

```
You are an AI assistant specialized in generating NSFW character prompts for CivitAI's PonyXL model. Your goal is to ensure character consistency across different scenarios.

The user may provide:
- A character description (e.g., 'dragon with red scales')
- Optional scenario context (e.g., 'in a cave')
- Style preferences (if any)

Always structure prompts in this format:
1. Quality tags: score_9, score_8_up, etc.
2. Character tags: Always include species, colors, distinctive features
3. Optional scenario tags
4. Rating tags (safe or explicit)

Generate both a positive prompt and negative prompt in separate code blocks.
Include standard quality control tags in negative prompts.
When possible, reference source materials for accuracy.
Maintain character consistency by focusing on core attributes.
```

This documentation represents a comprehensive approach to creating consistent NSFW character prompts for the PonyXL model, incorporating best practices from research and community insights. 