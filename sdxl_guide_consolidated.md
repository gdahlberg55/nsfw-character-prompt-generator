# SDXL NSFW Character Prompt Generator Guide

This comprehensive guide provides everything you need to create highly effective NSFW character prompts specifically optimized for SDXL models.

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
- [Sampling Settings Recommendation](#sampling-settings-recommendation)

## Quick Start Template

Use this template to quickly generate optimized prompts for SDXL. Simply replace the placeholder values with your desired character attributes.

```
a photograph of [CHARACTER DESCRIPTION], [CLOTHING], [POSE/ACTION], [SETTING], (intricate details:1.1), (high detail:1.2), (photorealistic:1.3), (cinematic lighting:1.1), 8k

Negative: unrealistic features, (deformed:1.3), disfigured, bad anatomy, poorly drawn, bad proportions, low quality, (blurry:1.3), (duplicate:1.2), multiple heads, extra limbs, poorly drawn face, low quality face, distorted face, awkward pose
```

### Fill-in Section by Section

#### Basic Character Information
- **Character Description**: Include gender, age, ethnicity, body type, and basic physical features
- **Clothing**: Detailed description of what the character is wearing
- **Pose/Action**: Describe the character's pose, expression, or action
- **Setting**: The environment or background of the scene

#### Quality Enhancers
- Leverage SDXL's strengths with terms like "photorealistic", "intricate details", and "cinematic lighting"
- Use weights (1.1-1.3) to emphasize important elements
- Consider the aspect ratio that works best for your character (square or portrait recommended)

## Model Characteristics

SDXL excels at creating high-quality, detailed images with particular strengths in:

- **High-resolution rendering**: Superior detail at larger image sizes (1024×1024)
- **Realistic lighting and shadows**: Natural light interaction with surfaces and environments
- **Coherent compositions**: Well-balanced, cinematically framed scenes
- **Photorealistic quality**: Lifelike textures and materials when prompted properly
- **Effective handling of complex scenes**: Multiple elements arranged naturally
- **Accurate human proportions**: Better anatomy compared to older models

SDXL responds best to:

- **Photography and cinematic terms**: "photograph", "portrait", "cinematic", "film still"
- **Concise, direct prompts**: Clear descriptions without overcomplication
- **Quality enhancers**: Terms like "high quality", "detailed", "intricate"
- **Realistic style descriptors**: "photorealistic", "hyperrealistic", "lifelike"
- **Balanced weight distribution**: Moderate weighting (1.1-1.3) on important elements

## Detailed Prompt Structure

For optimal results with SDXL, structure your prompts in this sequence:

1. **Medium/Style** `(photography terms work best)`
2. **Subject Description** `(character details)`
3. **Clothing and Accessories** `(weight 1.0-1.1)`
4. **Action/Pose** `(weight 1.0-1.1)`
5. **Environment/Setting** `(weight 0.9-1.1)`
6. **Lighting Information** `(weight 1.1-1.2)`
7. **Quality Enhancers** `(weight 1.1-1.3)`
8. **Resolution Indicator** `(8k, ultra hd, etc.)`

## Key Optimization Techniques

### 1. Photographic Framing

SDXL excels with photography-style prompts:

- Start with "a photograph of" or similar terms
- Specify type of photography: "portrait", "fashion photograph", "editorial photo"
- Example: `a detailed photograph of [CHARACTER], (professional portrait:1.2), (studio lighting:1.1)`

### 2. Cinematic Quality

Enhance realism with film-inspired terminology:

- Use terms like "cinematic", "film still", "movie scene"
- Include lighting descriptors: "cinematic lighting", "dramatic lighting"
- Example: `(cinematic:1.2), (shallow depth of field:1.1), (film grain:0.5)`

### 3. Detail Enhancement

SDXL handles details well with proper guidance:

- Use terms like "intricate details", "highly detailed", "fine detail"
- Apply slightly higher weights to detail terms (1.1-1.3)
- Example: `(intricate details:1.2), (highly detailed skin:1.1), (detailed features:1.2)`

### 4. Realistic Styling

For photorealistic results:

- Include terms like "photorealistic", "hyperrealistic", "lifelike"
- Combine with resolution indicators: "8k", "high resolution"
- Example: `(photorealistic:1.3), (hyperdetailed:1.2), 8k`

### 5. Balanced Backgrounds

For full-body or environmental shots:

- Use lower weights for backgrounds (0.9-1.0)
- Be specific but concise with settings
- Example: `(detailed urban background:0.9), (street photography:1.0)`

## Character Consistency Tips

To maintain character consistency across multiple images with SDXL:

1. **Use photography terminology consistently**: Maintain the same photographic style terms
2. **Create a base prompt template**: Develop a core prompt with essential character features
3. **Lock in key attributes**: Keep core physical description identical across prompts
4. **Save effective seeds**: Note which seeds produce the best character likeness
5. **Adjust pose and background**: These can vary while maintaining character identity
6. **Use consistent quality enhancers**: Keep the same technical quality terms
7. **Maintain composition style**: Use similar framing and distance descriptors

## Special Techniques

### Hyperdetailed Portrait Technique
For extremely detailed facial features:

```
a professional portrait photograph of [CHARACTER DESCRIPTION], [CLOTHING], (sharp focus:1.2), (intricate facial details:1.3), (pores:1.1), (skin texture:1.2), (studio lighting:1.1), (DSLR:1.1), 85mm lens, 8k
```

### Cinematic Scene Technique
For film-like quality and atmosphere:

```
a cinematic scene of [CHARACTER DESCRIPTION], [CLOTHING], [ACTION], in [LOCATION], (film still:1.2), (atmospheric lighting:1.2), (dramatic shadows:1.1), (depth of field:1.1), (anamorphic:1.0), (cinemascope:1.0)
```

### Editorial Fashion Technique
For high-fashion magazine quality:

```
an editorial fashion photograph of [CHARACTER DESCRIPTION], wearing [CLOTHING], (professional photography:1.2), (fashion magazine:1.1), (studio lighting:1.2), (professional color grading:1.1), (high fashion:1.1), (vogue:1.0)
```

## Negative Prompt Recommendations

These negative prompts help avoid common issues with SDXL:

```
unrealistic features, (deformed:1.3), disfigured, bad anatomy, poorly drawn, bad proportions, low quality, (blurry:1.3), (duplicate:1.2), multiple heads, extra limbs, poorly drawn face, low quality face, distorted face, awkward pose
```

For enhanced realism focus:

```
(deformed:1.4), (distorted:1.4), (poorly drawn:1.3), bad anatomy, disfigured, (bad proportions:1.3), (extra limbs:1.4), (poorly drawn hands:1.4), (poorly drawn feet:1.3), (poorly drawn face:1.4), (mutation:1.3), (mutated:1.3), (extra fingers:1.2), (malformed limbs:1.3), (fused fingers:1.2), (too many fingers:1.2), (long neck:1.3)
```

## Example Prompts

### Example 1: Professional Portrait
```
a professional photograph of a beautiful woman, 28 years old, athletic build, long blonde hair, blue eyes, wearing a simple white blouse, confident pose, neutral studio background, (intricate details:1.1), (high detail:1.2), (photorealistic:1.3), (studio lighting:1.1), 8k

Negative: unrealistic features, (deformed:1.3), disfigured, bad anatomy, poorly drawn, bad proportions, low quality, (blurry:1.3), (duplicate:1.2), multiple heads, extra limbs, poorly drawn face, low quality face, distorted face, awkward pose
```

### Example 2: Intimate Portrait
```
a photograph of a stunning woman, mid 30s, curvy figure, shoulder-length brunette hair, wearing black lingerie, sitting on edge of bed, modern bedroom, soft evening lighting, (intricate details:1.1), (high detail:1.2), (photorealistic:1.3), (cinematic:1.1), 8k

Negative: unrealistic features, (deformed:1.3), disfigured, bad anatomy, poorly drawn, bad proportions, low quality, (blurry:1.3), (duplicate:1.2), multiple heads, extra limbs, poorly drawn face, low quality face, distorted face, awkward pose
```

### Example 3: Environmental Portrait
```
a cinematic photograph of a muscular man, early 30s, short dark hair, light stubble, wearing unbuttoned white shirt and dress pants, leaning against balcony railing, luxury apartment with city view, golden hour lighting, (high detail:1.2), (photorealistic:1.3), (cinematic lighting:1.1), (hdr:1.0), 8k

Negative: unrealistic features, (deformed:1.3), disfigured, bad anatomy, poorly drawn, bad proportions, low quality, (blurry:1.3), (duplicate:1.2), multiple heads, extra limbs, poorly drawn face, low quality face, distorted face, awkward pose
```

## Common Issues & Solutions

### Problem: Inconsistent Facial Features
**Solution**: Add "(detailed face:1.2)" and use specific facial feature descriptions

### Problem: Unnatural Posing
**Solution**: Use simpler pose descriptions and add "(natural pose:1.1)"

### Problem: Unrealistic Body Proportions
**Solution**: Add "(anatomically correct:1.2)" and "(realistic proportions:1.1)"

### Problem: Blurry Details
**Solution**: Increase weight on "(high detail:1.3)" and add "(sharp focus:1.2)"

### Problem: Poor Lighting
**Solution**: Be more specific with lighting terms and add "(professional lighting:1.2)"

## Workflow for Perfect Results

1. Start with the basic template structure
2. Add your character description, keeping it clear and concise
3. Generate 3-5 initial variations
4. Identify the best results and what aspects are working well
5. Refine your prompt by:
   - Adding more specific character details
   - Adjusting weights on quality enhancers
   - Specifying lighting and photographic style more precisely
   - Adding relevant technical photography terms
6. Use negative prompts to address any specific issues in the results
7. Once satisfied with a character, save the prompt and seed

## Sampling Settings Recommendation

For optimal results with SDXL, try these settings:
- Sampling method: DPM++ 2M Karras or DDIM
- Sampling steps: 25-30
- CFG Scale: 7.0-8.0
- Width/Height: 1024x1024 (square) or 832x1216 (portrait)
- Highres fix: Enabled for larger images

Remember that SDXL particularly excels at photorealistic rendered images at higher resolutions. Focus on creating prompts with clear photographic or cinematic terminology, detailed character descriptions, and quality enhancers for best results. 