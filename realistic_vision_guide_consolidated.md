# Realistic Vision NSFW Character Prompt Generator Guide

This comprehensive guide provides everything you need to create highly effective NSFW character prompts specifically optimized for Realistic Vision models.

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

Use this template to quickly generate optimized prompts for Realistic Vision. Simply replace the placeholder values with your desired character attributes.

```
RAW photo, (8k, best quality, masterpiece:1.2), (realistic, photorealistic:1.37), professional photo of [CHARACTER DESCRIPTION], [CLOTHING], [POSE/ACTION], [SETTING], (detailed skin:1.2), (detailed eyes:1.2), depth of field, (sharp focus:1.2), [LIGHTING], film grain, high contrast

Negative: (deformed:1.3), (distorted:1.2), (poorly drawn:1.2), (unrealistic:1.4), (computer generated:1.4), (bad anatomy:1.3), (amateur:1.3), (ugly:1.2), (blurry:1.3), text, watermark, signature, extra limbs, missing limbs, low quality, worst quality, mutation, deformed body, deformed face
```

### Fill-in Section by Section

#### Basic Character Information
- **Character Description**: Include gender, age, ethnicity, body type, hair color/style, eye color, facial features
- **Clothing**: Detailed description of what the character is wearing
- **Pose/Action**: Describe the character's pose, expression, or action
- **Setting**: The environment or background of the scene
- **Lighting**: Describe lighting type, direction, and mood

#### Quality Enhancers
- Use terms like "RAW photo", "photorealistic", "depth of field" to enhance quality
- Add professional photography terms like "film grain" and "high contrast"
- Use weights (1.2-1.4) to emphasize important elements

## Model Characteristics

Realistic Vision excels at creating highly photorealistic character images with particular strengths in:

- **Exceptional skin detail**: Lifelike texture, pores, and subtle imperfections
- **Natural lighting effects**: Accurate handling of different lighting conditions
- **Realistic facial features**: Convincing eyes, lips, and expressions
- **Photography-like quality**: Results that closely resemble actual photographs
- **Material authenticity**: Realistic rendering of clothing fabrics and textures
- **Environmental integration**: Natural-looking character placement in settings

Realistic Vision responds best to:

- **Photography-focused terms**: "RAW photo", "professional photo", "photorealistic"
- **Technical photography descriptors**: "depth of field", "sharp focus", "film grain"
- **Detailed physical descriptions**: Specific attributes and features
- **Lighting specifications**: Clear descriptions of lighting type and direction
- **Realistic style indicators**: Terms that emphasize photographic realism

## Detailed Prompt Structure

For optimal results with Realistic Vision, structure your prompts in this sequence:

1. **Photography Terms** `(photography style and quality)`
2. **Quality Enhancers** `(weight 1.2-1.4)`
3. **Subject Description** `(detailed character attributes)`
4. **Clothing Description** `(weight 1.0-1.1)`
5. **Pose/Action** `(weight 1.0-1.1)`
6. **Setting/Environment** `(weight 0.9-1.0)`
7. **Detail Enhancers** `(detailed skin, eyes, etc. - weight 1.1-1.3)`
8. **Technical Photography Terms** `(depth of field, focus, etc.)`
9. **Lighting Description** `(weight 1.0-1.2)`
10. **Post-Processing Effects** `(film grain, contrast, etc.)`

## Key Optimization Techniques

### 1. Photographic Realism Enhancement

Realistic Vision excels with photography terminology:

- Start with "RAW photo" or "professional photo"
- Include technical terms like "depth of field" and "sharp focus"
- Add post-processing terms: "film grain", "color grading", "high contrast"
- Example: `RAW photo, (professional photography:1.2), depth of field, (sharp focus:1.2), film grain`

### 2. Skin Detail Optimization

This model excels at realistic skin rendering:

- Use terms like "detailed skin", "skin texture", "pores" 
- Add subtle imperfections for realism: "slight freckles", "natural skin marks"
- Include subsurface scattering for translucency
- Example: `(detailed skin:1.2), (natural skin texture:1.1), (pores:1.0), (subsurface scattering:1.0)`

### 3. Facial Feature Enhancement

For lifelike facial features:

- Be specific with eye details: "detailed eyes", "natural eye reflections"
- Include specific facial feature descriptions: "defined cheekbones", "natural lip texture"
- Add slight asymmetries for realism
- Example: `(detailed eyes:1.2), (eye reflections:1.1), (natural facial features:1.1)`

### 4. Lighting Specification

Lighting significantly affects realism:

- Specify lighting type: "natural sunlight", "studio lighting", "window light"
- Include lighting direction: "side lighting", "backlighting", "Rembrandt lighting"
- Describe lighting quality: "soft diffused light", "high contrast lighting"
- Example: `(studio lighting:1.1), (soft directional light:1.0), (natural shadows:1.0)`

### 5. Environmental Integration

For placing characters naturally in environments:

- Create logical lighting matching the environment
- Include environmental interaction: "casting shadow on floor", "leaning against wall"
- Add atmospheric elements: "slight haze", "dust particles in sunlight"
- Example: `(natural environment interaction:1.0), (realistic shadows:1.1)`

## Character Consistency Tips

To maintain character consistency across multiple images with Realistic Vision:

1. **Create a base template**: Develop a core prompt with essential character features
2. **Lock in physical attributes**: Keep core physical description identical between prompts
3. **Save effective seeds**: Note seeds that produce good character likenesses
4. **Maintain photography terms**: Use the same photographic terminology consistently
5. **Vary only what needs to change**: Only modify pose, clothing, or setting while keeping character attributes consistent
6. **Use consistent lighting terminology**: Similar lighting helps maintain skin tone and features
7. **Maintain the same prompt structure**: Keep your prompt organization consistent

## Special Techniques

### Ultra-Realistic Portrait Technique
For extremely photorealistic close-up portraits:

```
RAW photo, (8k, best quality, masterpiece:1.2), (realistic, photorealistic:1.37), professional portrait photo of [CHARACTER DESCRIPTION], [EXPRESSION], (detailed skin:1.3), (skin pores:1.1), (skin texture:1.2), (detailed eyes:1.3), (eye reflections:1.2), (detailed iris:1.1), studio lighting, bokeh, 85mm portrait photography, sharp focus
```

### Natural Light Portrait Technique
For soft, flattering lighting that enhances realism:

```
RAW photo, (8k, best quality, masterpiece:1.2), (realistic, photorealistic:1.37), professional photo of [CHARACTER DESCRIPTION], wearing [CLOTHING], natural window lighting, soft shadows, (subsurface scattering:1.1), (skin details:1.2), depth of field, canon 5d mark iv
```

### Environmental Portrait Technique
For realistic character integration in settings:

```
RAW photo, (8k, best quality, masterpiece:1.2), (realistic, photorealistic:1.37), professional full-body photo of [CHARACTER DESCRIPTION], wearing [CLOTHING], [POSE], in [DETAILED SETTING], (environmental portrait:1.1), (natural lighting:1.2), depth of field, (realistic atmosphere:1.1)
```

## Negative Prompt Recommendations

These negative prompts help avoid common issues with Realistic Vision:

```
(deformed:1.3), (distorted:1.2), (poorly drawn:1.2), (unrealistic:1.4), (computer generated:1.4), (bad anatomy:1.3), (amateur:1.3), (ugly:1.2), (blurry:1.3), text, watermark, signature, extra limbs, missing limbs, low quality, worst quality, mutation, deformed body, deformed face
```

For enhanced facial realism:

```
(deformed iris:1.4), (deformed pupils:1.4), (bad eyes:1.3), (amateur eyes:1.3), cross-eyed, (badly drawn face:1.3), (badly drawn eyes:1.3), (distorted face:1.3), (poorly drawn face:1.3), mutation, deformed, blurry, ugly, disfigured, poorly drawn, extra limb, badly drawn hands, missing limb, floating limbs, disconnected limbs, malformed hands, blurry, (duplicate:1.3), (out of frame:1.3), watermark, signature, text, cutoff
```

## Example Prompts

### Example 1: Professional Portrait
```
RAW photo, (8k, best quality, masterpiece:1.2), (realistic, photorealistic:1.37), professional photo of beautiful woman, 28 years old, fit body, fair skin, long blonde hair, blue eyes, natural makeup, wearing elegant white blouse, neutral expression, indoor studio environment, (detailed skin:1.2), (detailed eyes:1.2), depth of field, (sharp focus:1.2), professional studio lighting, film grain, high contrast

Negative: (deformed:1.3), (distorted:1.2), (poorly drawn:1.2), (unrealistic:1.4), (computer generated:1.4), (bad anatomy:1.3), (amateur:1.3), (ugly:1.2), (blurry:1.3), text, watermark, signature, extra limbs, missing limbs, low quality, worst quality, mutation, deformed body, deformed face
```

### Example 2: Intimate Scene
```
RAW photo, (8k, best quality, masterpiece:1.2), (realistic, photorealistic:1.37), professional photo of gorgeous woman, early 30s, curvy figure, olive skin, dark wavy hair, green eyes, wearing black lingerie, sitting on edge of bed, seductive pose, luxury hotel room, (detailed skin:1.2), (detailed eyes:1.2), depth of field, (sharp focus:1.2), soft evening lighting, film grain, high contrast

Negative: (deformed:1.3), (distorted:1.2), (poorly drawn:1.2), (unrealistic:1.4), (computer generated:1.4), (bad anatomy:1.3), (amateur:1.3), (ugly:1.2), (blurry:1.3), text, watermark, signature, extra limbs, missing limbs, low quality, worst quality, mutation, deformed body, deformed face
```

### Example 3: Athletic Figure
```
RAW photo, (8k, best quality, masterpiece:1.2), (realistic, photorealistic:1.37), professional photo of athletic man, mid 30s, muscular build, tan skin, short dark hair, strong jawline, wearing unbuttoned white shirt and jeans, standing confidently, beach at sunset, (detailed skin:1.2), (muscle definition:1.2), (detailed eyes:1.2), depth of field, (sharp focus:1.2), golden hour lighting, film grain, high contrast

Negative: (deformed:1.3), (distorted:1.2), (poorly drawn:1.2), (unrealistic:1.4), (computer generated:1.4), (bad anatomy:1.3), (amateur:1.3), (ugly:1.2), (blurry:1.3), text, watermark, signature, extra limbs, missing limbs, low quality, worst quality, mutation, deformed body, deformed face
```

## Common Issues & Solutions

### Problem: Artificial-Looking Skin
**Solution**: Add "(natural skin texture:1.2)", "(subtle skin imperfections:1.1)", and "(subsurface scattering:1.1)"

### Problem: Unnatural Eyes
**Solution**: Add "(natural eye reflections:1.2)", "(detailed iris:1.1)", and "(realistic eyebrows:1.1)"

### Problem: Stiff or Unnatural Posing
**Solution**: Use "natural pose" and describe poses in more general terms rather than complex specifics

### Problem: Poor Facial Expressions
**Solution**: Be specific but simple with expressions like "slight smile", "neutral expression", or "relaxed gaze"

### Problem: Unrealistic Lighting
**Solution**: Match lighting to environment and use established photography lighting terms like "Rembrandt lighting" or "soft window light"

## Workflow for Perfect Results

1. Start with the basic template and fill in your character details
2. Generate 3-5 initial variations
3. Identify what's working well in the results
4. Refine your prompt by:
   - Adding more specific character details
   - Enhancing photography terms for areas that need improvement
   - Being more precise with lighting descriptions
   - Strengthening negative prompts against any issues that appeared
5. Generate additional variations with the refined prompt
6. Fine-tune weights for elements that need more or less emphasis
7. Save successful prompts and seeds for character consistency

## Sampling Settings Recommendation

For optimal results with Realistic Vision, try these settings:
- Sampling method: DPM++ 2M Karras or DDIM
- Sampling steps: 25-30
- CFG Scale: 7.0-7.5
- Width/Height: 512x768 (portrait) or 768x512 (landscape)
- Denoising strength: 0.65-0.75 for img2img

Remember that Realistic Vision particularly excels at photorealistic character rendering with exceptional detail in skin and facial features. Focus on creating prompts with clear photography terminology, detailed character attributes, and specific lighting conditions for best results. 