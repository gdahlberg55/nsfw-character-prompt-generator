# Illustrious Checkpoint Character Prompt Generator - Claude Conversation

## Overview

This document contains research findings about character consistency, prompt structures, and techniques for NSFW character prompt generation specifically optimized for the Illustrious checkpoint model on CivitAI. The content is based on Claude research conducted on character prompt engineering.

## Character Consistency Techniques for Illustrious Checkpoint

### Core Elements for Character Consistency

1. **Physical Attributes**
   - Body type (slim, petite, curvy, athletic)
   - Skin tone 
   - Hair style and color
   - Eye color and shape
   - Facial features (emphasize anime-style elements)
   - Distinctive markings or features

2. **Clothing and Accessories**
   - Signature outfits (costume details, specific clothing items)
   - Accessories (jewelry, props, weapons)
   - Style elements that define the character

3. **Expression and Pose**
   - Characteristic expressions (specific emotional states)
   - Typical poses and stances
   - Hand gestures and body language

## Prompt Structure for Illustrious Checkpoint

Illustrious checkpoint is optimized for anime-style art and has specific prompt preferences. The most effective prompt structure follows this pattern:

```
[Quality Tags], [Style Tags], [Character Description], [Pose/Action], [Clothing], [View/Angle], [Scene/Background]
```

### Quality and Style Tags

```
masterpiece, best quality, highres, ultra detailed, extremely detailed, detailed face, (extremely detailed eyes), perfect lighting
```

### Anime Style Tags

```
anime, anime style, illustration, digital art, colorful
```

### Character Description Format

Illustrious works best with a mix of booru-style tags and descriptive phrases:

```
1girl, beautiful face, long silver hair, blue eyes, elegant, happy expression
```

## Best Practices for Illustrious Character Consistency

1. **Style-Specific Approach**
   - Focus on anime and illustration style descriptors
   - Use parentheses for emphasis: (detailed eyes), (perfect face)
   - Use brackets for negative emphasis: [bad anatomy], [deformed]

2. **Negative Prompts Importance**
   - Illustrious benefits from specific negative prompts to maintain quality:
     ```
     lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, artist name
     ```

3. **Character Emphasis**
   - Use 1girl/1boy tags for single characters
   - Include hair and eye descriptors near the beginning
   - Specify clothing items with detail

4. **Scene Composition**
   - Be explicit about background elements
   - Include lighting descriptors: soft lighting, rim light, etc.
   - Specify camera angle and distance: from above, close-up, etc.

## Illustrious vs. Other Models

Comparative features and optimization differences:

1. **Illustrious vs. SDXL**
   - Illustrious: Anime/illustration focus, stylized anatomy
   - SDXL: Photorealistic tendency, more natural proportions

2. **Illustrious vs. PonyXL**
   - Illustrious: Human-focused anime aesthetic
   - PonyXL: Anthropomorphic character specialization

3. **Illustrious Strengths**
   - Excellent anime-style faces and expressions
   - Vibrant color palettes
   - Stylized anatomy that fits anime conventions
   - Good handling of complex anime outfits and accessories

## Example Prompts

### SFW Character Example

```
masterpiece, best quality, highres, ultra detailed, extremely detailed, detailed face, (extremely detailed eyes), perfect lighting, anime, anime style, illustration, digital art, colorful, 1girl, beautiful face, long silver hair, blue eyes, elegant, happy expression, white dress with lace details, standing pose, outdoors, cherry blossom trees, daylight, from front
```

### NSFW Character Example

```
masterpiece, best quality, highres, ultra detailed, extremely detailed, detailed face, (extremely detailed eyes), perfect lighting, anime, anime style, illustration, digital art, colorful, 1girl, beautiful face, long blue hair, green eyes, seductive expression, naked, lying on bed, silk sheets, bedroom, evening, soft lighting, from above
```

### Negative Prompt for Both

```
lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, artist name, (deformed iris), (deformed pupils), (bad eyes), poorly drawn face
```

## Weight and Emphasis Techniques

Illustrious responds well to emphasis modifiers:

1. **Parentheses for Positive Emphasis**
   - (detailed eyes) - light emphasis
   - ((detailed eyes)) - medium emphasis
   - (((detailed eyes))) - strong emphasis

2. **Brackets for Negative Emphasis**
   - [bad anatomy] - reduce chance of this appearing

3. **Weight Values**
   - Use explicit weight values for precise control: beautiful face:1.2
   - This enhances certain elements without overemphasizing

## System Prompt Template for Illustrious Character Generation

This template can be used as a system prompt for an AI assistant specializing in Illustrious character prompt generation:

```
You are an AI assistant specialized in generating character prompts for CivitAI's Illustrious checkpoint model. Your goal is to ensure character consistency across different scenarios while leveraging Illustrious's strengths in anime-style art generation.

The user may provide:
- A character description (e.g., 'girl with silver hair and blue eyes')
- Optional scenario context (e.g., 'in a garden')
- Style preferences (if any)

Always structure Illustrious prompts in this format:
1. Quality tags: masterpiece, best quality, etc.
2. Style tags: anime, illustration, etc.
3. Character tags: 1girl/1boy, hair color, eye color, etc.
4. Expression and pose
5. Clothing details
6. Environment and setting
7. Lighting and composition details

Generate both a positive prompt and negative prompt in separate code blocks.
Include standard quality control tags in negative prompts.
Use parentheses for emphasis on important character features.
Maintain character consistency by focusing on core attributes.
```

This documentation represents a comprehensive approach to creating consistent character prompts for the Illustrious checkpoint model, incorporating best practices from research and community insights. 