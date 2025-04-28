# SD 1.5 NSFW Character Prompt Generator Guide

This comprehensive guide provides everything you need to create highly effective NSFW character prompts specifically optimized for the Stable Diffusion 1.5 model family.

## Table of Contents
- [Quick Start Template](#quick-start-template)
- [Model Characteristics](#model-characteristics)
- [Detailed Prompt Structure](#detailed-prompt-structure)
- [Key Optimization Techniques](#key-optimization-techniques)
- [Character Consistency Tips](#character-consistency-tips)
- [Special Techniques](#special-techniques)
- [Negative Prompt Recommendations](#negative-prompt-recommendations)
- [Example Prompts](#example-prompts)
- [Common Issues & Solutions](#common-issues--solutions)
- [Workflow for Perfect Results](#workflow-for-perfect-results)

## Quick Start Template

Use this template to quickly generate optimized prompts. Simply replace the placeholder values with your desired character attributes.

```
(masterpiece:1.4), (best quality:1.4), (high resolution:1.3), (detailed:1.3), 
([GENDER]:1.3), ([AGE] years old:1.3), ([BODY TYPE]:1.3), 
([HAIR DESCRIPTION]:1.2), ([EYE DESCRIPTION]:1.2), ([FACE FEATURES]:1.2), 
([CLOTHING ITEM 1]:1.2), ([CLOTHING ITEM 2]:1.2), ([ACCESSORIES]:1.2), 
([EXPLICIT ELEMENT 1]:1.3), ([EXPLICIT ELEMENT 2]:1.3), 
([POSE]:1.2), ([ENVIRONMENT]:1.1), 
([LIGHTING]:1.1), ([CAMERA/RENDERING]:1.1)

Negative: nsfw, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, artist name, malformed hands, mutated, poorly drawn face, mutation, deformed, badly drawn, extra limbs
```

### Fill-in Section by Section

#### Basic Character Information
- **Gender**: `female`, `male`, etc.
- **Age**: Between `18-60` (specific number)
- **Body Type**: `slim`, `athletic`, `curvy`, `muscular`, etc.

#### Physical Features
- **Hair**: Include length, style, and color (e.g., `long wavy blonde hair`)
- **Eyes**: Color and any distinctive features (e.g., `bright blue eyes`)
- **Face**: Notable features (e.g., `full lips`, `sharp jawline`, `freckles`)

#### Clothing & Accessories
- **Upper Body**: Top garment (e.g., `black tank top`, `white lace bra`)
- **Lower Body**: Bottom garment (e.g., `tight jeans`, `leather skirt`)
- **Accessories**: Jewelry, hats, etc. (e.g., `silver necklace`, `gold bracelet`)

#### NSFW Elements (Choose Based on Desired Level)
- **Mild**: `partially undressed`, `revealing outfit`, `suggestive pose`
- **Moderate**: `exposed upper body`, `lingerie only`, `seductive expression`
- **Explicit**: Specific descriptors of state of undress or activity

#### Environment & Technical Elements
- **Pose**: Body position (e.g., `standing confidently`, `sitting casually`)
- **Environment**: Setting (e.g., `luxury bedroom`, `beach at sunset`)
- **Lighting**: Light source and mood (e.g., `soft natural lighting`, `dramatic shadows`)
- **Camera/Rendering**: Technical aspects (e.g., `portrait lens`, `shallow depth of field`)

## Model Characteristics

Stable Diffusion 1.5 responds best to:

- **Keyword-based prompting**: Unlike newer models, SD 1.5 produces better results with explicit keywords rather than natural language descriptions
- **Aggressive token weighting**: Using emphasis modifiers (1.1 to 1.4) significantly impacts final output
- **Structured token sequence**: Following a specific hierarchy of descriptors yields more consistent results
- **Negative prompt optimization**: SD 1.5 requires comprehensive negative prompts to avoid common issues

## Detailed Prompt Structure

For optimal results, structure your SD 1.5 prompts in this specific order:

1. **Quality & Style Terms** `(weight 1.2-1.4)`
2. **Character Primary Attributes** `(weight 1.3)`
3. **Character Detailed Features** `(weight 1.2)`
4. **Clothing & Accessories** `(weight 1.2)`
5. **Explicit Elements** `(weight 1.2-1.4)`
6. **Pose & Environment** `(weight 1.1-1.2)`
7. **Technical Specifications** `(weight 1.1)`

## Key Optimization Techniques

### 1. Token-Based Prompting

- SD 1.5 responds best to comma-separated keyword lists
- Prioritize concise, specific descriptors over full sentences
- Example: "female, 25yo, athletic build, blonde hair, blue eyes, freckles"
- Keep most important elements at the beginning of the prompt

### 2. Aggressive Weighting

- SD 1.5 benefits from stronger token weighting than newer models
- Use parentheses with weight values for important elements: `(keyword:1.3)`
- Effective weight range: 1.1 (subtle influence) to 1.5 (strong influence)
- Weight critical character features higher: `(blue eyes:1.3)`

### 3. Prompt Layering

- Layer descriptors from general to specific
- Start with gender/body type, then add specific features
- Group related concepts: "blonde hair, long hair, wavy hair"
- Include both general and specific clothing terms: "lingerie, black lace bra"

### 4. Quality Boosters

- Begin prompts with quality-enhancing terms
- Effective boosters: "masterpiece, best quality, highly detailed"
- Technical boosters: "8K, hyper-detailed, ultra-realistic"
- Style boosters: "professional photography, award-winning"

### 5. Bracket Techniques

- Use various bracket types to control emphasis
- Standard emphasis: `(important element)`
- Stronger emphasis: `((very important element))`
- Alternative emphasis: `[element]` or `{element}`

## Character Consistency Tips

To maintain character consistency across multiple images with SD 1.5:

1. **Create a character embedding**: Use approximately 10-15 images of your character with Textual Inversion
2. **Maintain token weights**: Once you find effective weightings, keep them consistent
3. **Core descriptor anchoring**: Always include 3-5 identical core descriptors in every prompt
4. **Seed locking**: When you find a good result, note the seed value for similar outputs

## Special Techniques

### Weighted Combination Technique
For complex character features, combine descriptors with nested weights:

```
(((slim athletic female with long red hair))):1.3)
```

### Prompt Sectioning
For better control, explicitly section your prompt:

```
[quality: masterpiece, best quality, highly detailed, 8k]
[character: female, 21 years old, slim build, green eyes, freckles]
[outfit: black leather skirt, fishnet top, silver jewelry]
[pose: standing confidently, hand on hip]
[scene: dimly lit bedroom, silk sheets]
```

### Advanced Prompt Engineering

For users seeking to push SD 1.5's capabilities further:

1. **Emotional layering**: Add emotional states with weights `(confident:1.1), (seductive:1.2)`
2. **Visual style fusion**: Combine styles `(photo-realistic:1.3), (cinematic:1.2), (detailed skin texture:1.1)`
3. **Dynamic weighting**: Increase weights for elements you want emphasized most prominently
4. **Contextual positioning**: Use detailed positioning terms `(looking at viewer:1.2), (from above:1.1)`

## Negative Prompt Recommendations

These negative prompts help avoid common issues with SD 1.5:

```
(worst quality:1.4), (low quality:1.4), (normal quality:1.4), (lowres:1.2), (low res:1.2), (monochrome:1.1), (grayscale:1.1), (skin spots:1.2), (acnes:1.2), (skin blemishes:1.2), (age spots:1.2), (extra fingers:1.2), (fewer fingers:1.2), (strange fingers:1.2), (bad hand:1.2), (bad anatomy:1.3), (bad proportions:1.3), (bad eye circulation:1.1), (deformed iris:1.2), (deformed pupils:1.2), (bad eyes:1.1), (dead eyes:1.1), (bad face:1.3), (fused face:1.2), (poorly drawn face:1.2), (cloned face:1.3), (horrible face:1.1), (ugly face:1.2), (text:1.3), (logo:1.3), (watermark:1.3)
```

## Example Prompts

### Example 1: Casual Character
```
(masterpiece:1.4), (best quality:1.4), (detailed:1.3), (female:1.3), (25 years old:1.3), (athletic build:1.3), (blonde shoulder length hair:1.2), (blue eyes:1.2), (black tank top:1.2), (denim shorts:1.2), (relaxed pose:1.2), (apartment setting:1.1), (natural lighting:1.1), (DSLR photo:1.1)

Negative: nsfw, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry
```

### Example 2: Explicit Character
```
(masterpiece:1.4), (best quality:1.4), (high resolution:1.3), (female:1.3), (22 years old:1.3), (fit body:1.3), (long brown hair:1.2), (hazel eyes:1.2), (full lips:1.2), (red lingerie:1.2), (partially undressed:1.3), (exposed upper body:1.4), (seductive pose:1.3), (luxury hotel room:1.1), (evening lighting:1.1), (bokeh:1.1)

Negative: lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, artist name, malformed hands
```

### Example 3: Fantasy Character
```
(masterpiece:1.4), (best quality:1.4), (high resolution:1.3), (detailed:1.3), 
(female:1.3), (25 years old:1.3), (slim fit:1.3), 
(long straight silver hair:1.2), (glowing purple eyes:1.2), (ethereal features:1.2), 
(revealing elven armor:1.2), (thigh-high boots:1.2), (glowing rune tattoos:1.2), 
(seductive pose:1.3), (partially undressed:1.3), 
(standing proudly:1.2), (magical forest:1.1), 
(moonlight:1.1), (magical particles:1.1)

Negative: nsfw, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, artist name, malformed hands, mutated
```

## Common Issues & Solutions

### Problem: Anatomical Distortions
**Solution**: Add `(perfect anatomy:1.3)` to positive prompt and expand negative prompt with specific issues

### Problem: Face Inconsistency
**Solution**: Use face restoration models like CodeFormer at 0.5 strength

### Problem: Clothing Clipping/Merging
**Solution**: Describe clothes with more specific terms and use `(perfect clothes:1.2)`

### Problem: Overly Cartoonish Results
**Solution**: Add `(photorealistic:1.3), (hyperrealistic:1.3)` and lower anime-style descriptors

## Workflow for Perfect Results

1. Start with a basic prompt following the structure above
2. Generate 4-6 initial images
3. Identify the most promising result
4. Refine by adjusting weights of specific elements
5. Further refine by adding more specific descriptors
6. Once satisfied, save the prompt and seed for future use

## Sampling Settings Recommendation

For optimal results with this template, try these settings:
- Sampling method: DPM++ 2M Karras
- Sampling steps: 25-30
- CFG Scale: 7-8
- Denoise: 0.6-0.7
- Width/Height: 512x768 (portrait) or 768x512 (landscape)

Remember to save the seed value when you get good results so you can use it again for similar characters. 