# Pony Diffusion NSFW Character Prompt Generator Guide

This comprehensive guide provides everything you need to create highly effective NSFW character prompts specifically optimized for Pony Diffusion models.

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

Use this template to quickly generate optimized prompts for Pony Diffusion. Simply replace the placeholder values with your desired character attributes.

```
(masterpiece), (best quality), (realistic:1.2), (photorealistic:1.2), portrait of [CHARACTER DESCRIPTION], [CLOTHING], [POSE/ACTION], [SETTING], [LIGHTING], (detailed skin:1.1), (intricate details:1.2), (detailed face:1.3)

Negative: (worst quality:1.4), (low quality:1.4), disfigured, (bad anatomy:1.2), (inaccurate limb:1.2), bad composition, inaccurate eyes, extra digit, fewer digits, (extra arms:1.2), (extra legs:1.2), poorly drawn face, (mutation:1.2), (deformed:1.2), blurry, bad proportions, cloned face, distorted face
```

### Fill-in Section by Section

#### Basic Character Information
- **Character Description**: Include gender, age range, ethnicity, body type, hair color/style, eye color, facial features
- **Clothing**: Detailed description of what the character is wearing
- **Pose/Action**: Describe the character's pose, expression, or action
- **Setting**: The environment or background of the scene
- **Lighting**: Describe lighting type, direction, and mood

#### Quality Enhancers
- Use terms like "realistic", "photorealistic", "detailed skin" to enhance quality
- Add "(detailed face:1.3)" for better facial details
- Use weights (1.1-1.3) to emphasize important elements

## Model Characteristics

Pony Diffusion excels at creating detailed, realistic human figures with particular strengths in:

- **Photorealistic renders**: Exceptional skin texture and facial detail
- **Anatomical accuracy**: Better proportions and realistic body structures
- **Facial expressions**: Natural-looking faces and expressions
- **Lighting interaction**: Realistic light and shadow on skin and materials
- **Detail rendering**: Fine details in hair, skin pores, and textures
- **Clothing fidelity**: Realistic fabric draping and material properties

Pony Diffusion responds best to:

- **Realism-focused terms**: "realistic", "photorealistic", "hyperdetailed"
- **Anatomical descriptions**: Clear body type specifications
- **Detail enhancers**: Terms like "detailed skin", "detailed face", "intricate details"
- **Technical photography terms**: "portrait", "depth of field", "bokeh"
- **Nuanced lighting descriptions**: Specific light sources and conditions

## Detailed Prompt Structure

For optimal results with Pony Diffusion, structure your prompts in this sequence:

1. **Quality Enhancers** `(weight 1.0-1.2)`
2. **Style/Medium** `(photography, realistic art, etc.)`
3. **Subject Description** `(detailed character attributes)`
4. **Clothing Description** `(weight 1.0-1.1)`
5. **Pose/Action** `(weight 1.0-1.1)`
6. **Setting/Environment** `(weight 0.9-1.0)`
7. **Lighting Description** `(weight 1.0-1.1)`
8. **Detail Enhancers** `(detailed skin, face, etc. - weight 1.1-1.3)`

## Key Optimization Techniques

### 1. Realistic Skin Rendering

Pony Diffusion excels at skin textures when properly prompted:

- Use terms like "detailed skin", "skin pores", "skin texture"
- Include descriptors like "smooth skin", "freckled skin", or "tanned skin"
- Apply moderate weights (1.1-1.2) to skin detail terms
- Example: `(detailed skin:1.1), (natural skin texture:1.2), (visible pores:1.0)`

### 2. Facial Detail Enhancement

For exceptional facial rendering:

- Add "detailed face", "facial details", or "expressive face"
- Specify eye details: "deep-set eyes", "bright eyes", "expressive eyes"
- Include other facial features: "defined cheekbones", "full lips", etc.
- Example: `(detailed face:1.3), (expressive eyes:1.2), (defined facial features:1.1)`

### 3. Lighting Optimization

Pony Diffusion handles lighting nuances well:

- Be specific about light sources: "natural sunlight", "soft studio lighting"
- Describe how light interacts: "rim lighting", "dramatic shadows", "subsurface scattering"
- Include mood-enhancing terms: "warm golden lighting", "cool blue tones"
- Example: `(soft side lighting:1.1), (subtle shadows:1.0), (golden hour lighting:1.1)`

### 4. Anatomical Accuracy

For better body proportions and anatomy:

- Be clear about body type: "athletic build", "slim figure", "curvy physique"
- Add terms like "anatomically correct", "realistic proportions"
- Describe posture details: "relaxed stance", "confident posture"
- Example: `(athletic build:1.1), (anatomically correct:1.2), (realistic proportions:1.1)`

### 5. Clothing Detail

For realistic clothing rendering:

- Specify fabric types: "silk", "cotton", "leather", "lace"
- Describe how clothing fits: "form-fitting", "loose", "flowing"
- Include details about how light interacts with materials: "shiny", "matte", "translucent"
- Example: `(black silk dress:1.1), (form-fitting:1.0), (fabric folds:1.1), (textile details:1.2)`

## Character Consistency Tips

To maintain character consistency across multiple images with Pony Diffusion:

1. **Create a base template**: Develop a core prompt with essential character features
2. **Lock in physical attributes**: Keep core physical description identical between prompts
3. **Save effective seeds**: Note seeds that produce good character likenesses
4. **Maintain quality enhancers**: Use the same quality and detail terms consistently
5. **Vary only what needs to change**: Only modify pose, clothing, or setting while keeping character attributes consistent
6. **Use consistent lighting terminology**: Similar lighting helps maintain skin tone and features
7. **Maintain the same prompt structure**: Keep your prompt organization consistent

## Special Techniques

### Ultra-Detailed Face Technique
For exceptionally detailed facial features:

```
(masterpiece), (best quality), (realistic:1.2), portrait of [CHARACTER DESCRIPTION], [EXPRESSION], (detailed eyes:1.3), (eye reflections:1.1), (detailed iris:1.2), (eyelashes:1.1), (detailed lips:1.2), (skin pores:1.1), (skin texture:1.2), professional photography, studio lighting
```

### Perfect Skin Technique
For flawless skin rendering:

```
(masterpiece), (best quality), (realistic:1.2), portrait of [CHARACTER DESCRIPTION], (flawless skin:1.2), (smooth skin texture:1.1), (subsurface scattering:1.2), (soft lighting:1.1), (subtle skin details:1.2), (natural skin tone:1.1)
```

### Environmental Portrait Technique
For character integration with backgrounds:

```
(masterpiece), (best quality), (realistic:1.2), environmental portrait of [CHARACTER DESCRIPTION], wearing [CLOTHING], in [DETAILED SETTING], (natural lighting:1.1), (depth of field:1.0), (detailed environment:1.0), (character focus:1.2)
```

## Negative Prompt Recommendations

These negative prompts help avoid common issues with Pony Diffusion:

```
(worst quality:1.4), (low quality:1.4), disfigured, (bad anatomy:1.2), (inaccurate limb:1.2), bad composition, inaccurate eyes, extra digit, fewer digits, (extra arms:1.2), (extra legs:1.2), poorly drawn face, (mutation:1.2), (deformed:1.2), blurry, bad proportions, cloned face, distorted face
```

For enhanced facial detail focus:

```
(deformed iris:1.4), (deformed pupils:1.4), (bad eyes:1.3), (bad face:1.3), text, watermark, (bad anatomy:1.3), (bad proportions:1.3), (extra limbs:1.2), (disfigured:1.3), (malformed:1.3), (ugly:1.2), (poorly drawn hands:1.3), (missing limbs:1.3), (extra limbs:1.3), (fused fingers:1.2), (too many fingers:1.2), signature, badly drawn face
```

## Example Prompts

### Example 1: Portrait
```
(masterpiece), (best quality), (realistic:1.2), (photorealistic:1.2), portrait of a beautiful woman, 25 years old, long blonde hair, blue eyes, flawless complexion, wearing elegant red dress, relaxed posture, looking at viewer, indoor studio, professional lighting, (detailed skin:1.1), (intricate details:1.2), (detailed face:1.3)

Negative: (worst quality:1.4), (low quality:1.4), disfigured, (bad anatomy:1.2), (inaccurate limb:1.2), bad composition, inaccurate eyes, extra digit, fewer digits, (extra arms:1.2), poorly drawn face, (mutation:1.2), (deformed:1.2), blurry, bad proportions, cloned face, distorted face
```

### Example 2: Full Body
```
(masterpiece), (best quality), (realistic:1.2), full body portrait of athletic man, early 30s, muscular build, short black hair, strong jawline, wearing unbuttoned white shirt and jeans, standing confidently, beach at sunset, warm golden lighting, (detailed skin:1.1), (muscle definition:1.2), (detailed face:1.3)

Negative: (worst quality:1.4), (low quality:1.4), disfigured, (bad anatomy:1.2), (inaccurate limb:1.2), bad composition, inaccurate eyes, extra digit, fewer digits, (extra arms:1.2), (extra legs:1.2), poorly drawn face, (mutation:1.2), (deformed:1.2), blurry, bad proportions
```

### Example 3: Intimate Scene
```
(masterpiece), (best quality), (realistic:1.2), (photorealistic:1.2), portrait of gorgeous woman, mid 20s, toned body, auburn hair, green eyes, wearing black lace lingerie, sitting on edge of bed, seductive pose, luxury bedroom, soft evening lighting, (detailed skin:1.1), (intricate details:1.2), (detailed face:1.3), (fabric details:1.1)

Negative: (worst quality:1.4), (low quality:1.4), disfigured, (bad anatomy:1.2), (inaccurate limb:1.2), bad composition, inaccurate eyes, extra digit, fewer digits, (extra arms:1.2), poorly drawn face, (mutation:1.2), (deformed:1.2), blurry, bad proportions, cloned face, distorted face
```

## Common Issues & Solutions

### Problem: Unnatural Facial Features
**Solution**: Add "(natural face:1.2)" and "(detailed face:1.3)" to your prompt

### Problem: Poor Skin Texture
**Solution**: Incorporate "(detailed skin:1.2)", "(natural skin texture:1.1)", and specific skin descriptors

### Problem: Anatomical Distortions
**Solution**: Add "(anatomically correct:1.2)" and be very specific with negative prompts about anatomy

### Problem: Unnatural Hands
**Solution**: Add "(detailed hands:1.2)", "(realistic hands:1.3)", or avoid hand focus if not essential

### Problem: Inconsistent Lighting
**Solution**: Be more specific with lighting terms and ensure they match the setting

## Workflow for Perfect Results

1. Start with the basic template and fill in your character details
2. Generate 3-5 initial variations
3. Identify what's working well in the results
4. Refine your prompt by:
   - Adding more specific character details
   - Enhancing quality terms for areas that need improvement
   - Being more precise with lighting and setting descriptions
   - Strengthening negative prompts against any issues that appeared
5. Generate additional variations with the refined prompt
6. Fine-tune weights for elements that need more or less emphasis
7. Save successful prompts and seeds for character consistency

## Sampling Settings Recommendation

For optimal results with Pony Diffusion, try these settings:
- Sampling method: DPM++ 2M Karras or DDIM
- Sampling steps: 30-40
- CFG Scale: 7.0-8.0
- Width/Height: 512x768 (portrait) or 640x640 (square)
- Denoising strength: 0.7-0.8 for img2img

Remember that Pony Diffusion particularly excels at photorealistic character rendering with exceptional skin and face details. Focus on creating prompts with clear anatomy descriptions, detailed character attributes, and specific lighting conditions for best results. 