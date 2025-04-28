# SDXL Character Prompt Generator - Claude Conversation

## Overview

This document contains research findings about character consistency, prompt structures, and techniques for NSFW character prompt generation specifically optimized for the SDXL model on CivitAI. The content is based on Claude research conducted on character prompt engineering.

## Character Consistency Techniques for SDXL

### Core Elements for Character Consistency

1. **Physical Attributes**
   - Body type (slim, athletic, curvy, petite, muscular)
   - Skin tone and texture
   - Facial features (shape, structure)
   - Hair style and color
   - Eye color and shape
   - Distinctive markings or features

2. **Clothing and Accessories**
   - Signature outfits
   - Recurring accessories (jewelry, props)
   - Style elements that define the character

3. **Expression and Posture**
   - Characteristic expressions
   - Typical poses and stances
   - Gestures and mannerisms

## Prompt Structure for SDXL

SDXL differs from PonyXL in its prompt structure and preferences. The most effective prompt structure follows this pattern:

```
[Style/Quality], [Character Description], [Pose/Action], [Environment], [Lighting/Mood], [Camera Details]
```

### Style and Quality Tags

```
masterpiece, best quality, highly detailed, photorealistic, 8k, professional photography
```

### Character Description Format

Unlike PonyXL which uses booru tags, SDXL responds better to natural language descriptions:

```
a beautiful woman with long blonde hair, blue eyes, wearing a red dress, standing confidently
```

### Camera and Technical Details

```
portrait shot, studio lighting, depth of field, sharp focus, bokeh
```

## Best Practices for SDXL Character Consistency

1. **Natural Language Descriptions**
   - Use fuller sentences rather than comma-separated tags
   - Include descriptive phrases that capture the character's essence
   - Maintain consistent core attributes across prompts

2. **Negative Prompts Importance**
   - SDXL relies heavily on negative prompts for quality control
   - Use standard negative prompts to avoid common issues:
     ```
     deformed, bad anatomy, disfigured, poorly drawn face, mutation, mutated, extra limb, ugly, poorly drawn hands, missing limb, floating limbs, disconnected limbs, malformed hands, blurry, ((((mutated hands and fingers)))), watermark, watermarked, oversaturated, censored, distorted hands, amputation, missing hands, obese, doubled face, double hands
     ```

3. **Balance Detail and Image Size**
   - SDXL generates larger images than SD 1.5, so composition matters
   - Be more specific about framing and camera angle
   - Include more environmental context for full-body shots

4. **Style References**
   - SDXL responds well to artist and style references
   - Include photography style or artist style for consistent aesthetic:
     ```
     in the style of [artist/photographer], [art style] photography
     ```

## SDXL vs. Other Models

Comparative features and optimization differences:

1. **SDXL vs. PonyXL**
   - SDXL: Natural language, more photorealistic tendencies
   - PonyXL: Booru tags, specialized for anthropomorphic characters

2. **SDXL vs. Illustrious**
   - SDXL: Better for realistic human characters
   - Illustrious: Often preferred for stylized anime aesthetic

3. **SDXL Strengths**
   - Superior face generation
   - Better handling of complex compositions
   - Higher resolution output
   - More consistent human anatomy

## Example Prompts

### SFW Character Example

```
masterpiece, best quality, highly detailed, photorealistic, 8k, professional photography, a beautiful woman with long blonde hair, blue eyes, wearing a red dress, standing confidently, portrait shot, studio lighting, depth of field, sharp focus, bokeh
```

### NSFW Character Example

```
masterpiece, best quality, highly detailed, photorealistic, 8k, professional photography, a beautiful nude woman with long blonde hair, blue eyes, lying on a bed, intimate bedroom setting, soft window lighting, full body shot, shallow depth of field
```

### Negative Prompt for Both

```
deformed, bad anatomy, disfigured, poorly drawn face, mutation, mutated, extra limb, ugly, poorly drawn hands, missing limb, floating limbs, disconnected limbs, malformed hands, blurry, ((((mutated hands and fingers)))), watermark, watermarked, oversaturated, censored, distorted hands, amputation, missing hands, obese, doubled face, double hands
```

## System Prompt Template for SDXL Character Generation

This template can be used as a system prompt for an AI assistant specializing in SDXL character prompt generation:

```
You are an AI assistant specialized in generating character prompts for CivitAI's SDXL model. Your goal is to ensure character consistency across different scenarios while utilizing SDXL's strengths in photorealistic human generation.

The user may provide:
- A character description (e.g., 'woman with red hair and green eyes')
- Optional scenario context (e.g., 'at the beach')
- Style preferences (if any)

Always structure SDXL prompts in this format:
1. Quality descriptors: masterpiece, best quality, etc.
2. Character description: Use natural language rather than tags
3. Action/pose description
4. Environment and setting
5. Lighting and mood
6. Camera details (angle, framing, focus)

Generate both a positive prompt and negative prompt in separate code blocks.
Include standard quality control tags in negative prompts.
Maintain character consistency by focusing on core physical attributes.
```

This documentation represents a comprehensive approach to creating consistent character prompts for the SDXL model, incorporating best practices from research and community insights. 