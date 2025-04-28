# Illustrious Checkpoint NSFW Character Prompt Generator Guide

This comprehensive guide provides everything you need to create highly effective NSFW character prompts specifically optimized for the Illustrious Checkpoint model.

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

Use this template to quickly generate optimized prompts for Illustrious Checkpoint. Simply replace the placeholder values with your desired character attributes.

```
(masterpiece:1.2), (highest quality:1.4), (photorealistic:1.3), (best lighting:1.2), (detailed skin:1.2), RAW photo, (8k:1.1), (realistic:1.3), [CHARACTER DESCRIPTION], [CLOTHING], [POSE/ACTION], [SETTING], [LIGHTING], [EXPRESSION]

Negative: (deformed iris:1.4), (deformed pupils:1.4), (worst quality:1.4), (low quality:1.4), (normal quality:1.4), lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, (semi-realistic:1.2), (cgi:1.2), (3d:1.2), (cartoon:1.4), (anime:1.4), (illustration:1.3), (digital art:1.2)
```

### Fill-in Section by Section

#### Basic Character Information
- **Character Description**: Include gender, age, ethnicity, body type, hair color/style, eye color, facial features
- **Clothing**: Detailed description of what the character is wearing, including fabrics and fit
- **Pose/Action**: Describe the character's pose, expression, or action
- **Setting**: The environment or background of the scene
- **Lighting**: Describe lighting type, direction, and mood
- **Expression**: Character's facial expression or emotional state

#### Quality Enhancers
- Use terms like "photorealistic", "RAW photo", "detailed skin" to enhance realism
- Apply moderate to strong weights (1.2-1.4) to quality terms
- Include technical photography terms like "8k", "studio lighting", or "sharp focus"

## Model Characteristics

Illustrious Checkpoint excels at creating highly photorealistic character images with exceptional attention to detail, particularly:

- **Photorealistic human features**: Lifelike skin texture, facial features, and anatomical accuracy
- **Natural lighting effects**: Sophisticated handling of light sources, shadows, and reflections
- **Fine detail rendering**: Intricate rendering of hair, fabric textures, and small details
- **Realistic depth of field**: Natural focal points and background blur
- **Accurate skin tones**: Nuanced rendering of various skin tones and textures
- **Realistic environmental integration**: Convincing placement of characters within environments

Illustrious Checkpoint responds best to:

- **Photorealistic terminology**: Terms that emphasize realism and photographic qualities
- **Detailed physical descriptions**: Specific details about physical characteristics
- **Lighting specifications**: Clear description of lighting conditions
- **Technical photography terms**: References to photographic techniques and qualities
- **Material and texture details**: Specific terminology for fabrics, materials, and textures

## Detailed Prompt Structure

For optimal results with Illustrious Checkpoint, structure your prompts in this sequence:

1. **Quality Enhancers** `(weight 1.2-1.4)`
2. **Technical Specifications** `(weight 1.1-1.3)`
3. **Subject Description** `(detailed character attributes)`
4. **Clothing Description** `(weight 1.0-1.1)`
5. **Pose/Action** `(weight 1.0-1.1)`
6. **Setting/Environment** `(weight 0.9-1.0)`
7. **Lighting Description** `(weight 1.1-1.2)`
8. **Expression/Mood** `(weight 1.0-1.1)`

## Key Optimization Techniques

### 1. Photorealistic Enhancement

Illustrious Checkpoint excels at realism, so emphasize photorealistic qualities:

- Include terms like "photorealistic," "hyperrealistic," "RAW photo"
- Use technical photography terms: "bokeh," "depth of field," "studio lighting"
- Example: `(photorealistic:1.3), (RAW photo:1.2), (8k:1.1), (detailed skin:1.2)`

### 2. Detailed Skin and Feature Description

This model excels at realistic human features:

- Be specific about skin qualities: "flawless skin," "natural skin texture," "subtle freckles"
- Include fine details of features: "defined cheekbones," "subtle smile lines," "natural eye reflections"
- Example: `(detailed skin:1.2), (natural skin texture:1.1), (defined facial features:1.1)`

### 3. Lighting Specification

Lighting significantly affects realism in Illustrious Checkpoint:

- Specify lighting type: "studio lighting," "natural sunlight," "golden hour lighting"
- Include lighting direction: "rim lighting," "front lighting," "side lighting"
- Describe lighting quality: "soft diffused light," "harsh contrast lighting," "dramatic shadows"
- Example: `(studio lighting:1.2), (soft skin highlights:1.1), (natural shadows:1.1)`

### 4. Material and Texture Detail

For clothing and environments, specify materials and textures:

- Use precise fabric terms: "silk," "leather," "cotton," "denim" rather than just colors
- Include texture details: "wrinkled linen," "smooth satin," "distressed leather"
- Example: `(wearing black silk dress with subtle sheen:1.1), (soft fabric texture:1.05)`

### 5. Realistic Environmental Integration

For full-body or environmental shots:

- Specify realistic settings: "modern apartment interior," "natural beach setting"
- Include environmental interaction: "casting shadow on marble floor," "reflection in window"
- Use lower weights for environment elements (0.9-1.0) to keep focus on character
- Example: `(luxurious hotel room background:0.95), (realistic reflections:1.0)`

## Character Consistency Tips

To maintain character consistency across multiple images with Illustrious Checkpoint:

1. **Create a detailed base prompt**: Develop a core prompt with essential character features
2. **Lock in physical attributes**: Keep core physical description identical between prompts
3. **Save effective seeds**: Note seeds that produce good character likenesses
4. **Maintain quality enhancers**: Use the same technical and quality terms consistently
5. **Vary only what needs to change**: Only modify pose, clothing, or setting while keeping character attributes consistent
6. **Use consistent lighting terminology**: Similar lighting helps maintain skin tone and features
7. **Maintain the same prompt structure**: Keep your prompt organization consistent

## Special Techniques

### Professional Photography Technique
For magazine-quality photorealistic results:

```
(masterpiece:1.2), (highest quality:1.4), (professional photography:1.3), (sharp focus:1.2), ([CHARACTER DESCRIPTION]), (wearing [CLOTHING]), (shot on Canon EOS R5:1.1), (85mm f/1.4 lens:1.1), (studio lighting setup:1.2)
```

### Intimate Portrait Technique
For sensual and atmospheric results:

```
(masterpiece:1.2), (highest quality:1.4), (photorealistic:1.3), (intimate portrait:1.2), (moody lighting:1.2), ([CHARACTER DESCRIPTION]), (wearing [REVEALING CLOTHING]), ([INTIMATE POSE]), (soft focus:1.1), (natural skin details:1.3), (bedroom setting:0.9)
```

### Hyperdetailed Skin Technique
For incredibly realistic skin rendering:

```
([CHARACTER DESCRIPTION]), (ultradetailed skin:1.3), (pore-level detail:1.2), (subsurface scattering:1.2), (natural skin imperfections:1.1), (realistic skin texture:1.2), (goosebumps:0.8), (fine body hair:0.8)
```

## Negative Prompt Recommendations

These negative prompts help avoid common issues with Illustrious Checkpoint:

```
(deformed iris:1.4), (deformed pupils:1.4), (worst quality:1.4), (low quality:1.4), (normal quality:1.4), lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, (semi-realistic:1.2), (cgi:1.2), (3d:1.2), (cartoon:1.4), (anime:1.4), (illustration:1.3), (digital art:1.2)
```

For enhanced realism focus:

```
(deformed iris:1.4), (deformed pupils:1.4), (semi-realistic:1.4), (cgi:1.4), (3d:1.4), (cartoon:1.4), (anime:1.4), (illustration:1.4), (digital art:1.4), (bad anatomy:1.3), (deformed:1.3), (malformed limbs:1.2), (mutated:1.2), (unrealistic:1.3), (unnatural pose:1.2), (poorly drawn face:1.3), (poorly drawn hands:1.3), (artificial texture:1.2)
```

## Example Prompts

### Example 1: Elegant Portrait
```
(masterpiece:1.2), (highest quality:1.4), (photorealistic:1.3), (best lighting:1.2), (detailed skin:1.2), RAW photo, (8k:1.1), (realistic:1.3), female, 28 years old, slender figure, olive skin, long wavy brunette hair, green eyes, high cheekbones, wearing elegant black silk evening gown with thigh slit, diamond earrings, standing with hip slightly tilted, luxury hotel lobby, soft evening lighting with dramatic shadows, confident slight smile

Negative: (deformed iris:1.4), (deformed pupils:1.4), (worst quality:1.4), (low quality:1.4), (normal quality:1.4), lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, (semi-realistic:1.2), (cgi:1.2), (3d:1.2), (cartoon:1.4), (anime:1.4), (illustration:1.3), (digital art:1.2)
```

### Example 2: Intimate Boudoir
```
(masterpiece:1.2), (highest quality:1.4), (photorealistic:1.3), (best lighting:1.2), (detailed skin:1.2), RAW photo, (8k:1.1), (realistic:1.3), female, early 30s, curvy figure, fair skin with light freckles, medium-length red hair, blue eyes, full lips, wearing black lace lingerie set, pearl necklace, sitting on edge of bed with back arched, luxurious bedroom with satin sheets, soft golden lamplight, seductive gaze toward camera

Negative: (deformed iris:1.4), (deformed pupils:1.4), (worst quality:1.4), (low quality:1.4), (normal quality:1.4), lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, (semi-realistic:1.2), (cgi:1.2), (3d:1.2), (cartoon:1.4), (anime:1.4), (illustration:1.3), (digital art:1.2)
```

### Example 3: Athletic Figure
```
(masterpiece:1.2), (highest quality:1.4), (photorealistic:1.3), (best lighting:1.2), (detailed skin:1.2), RAW photo, (8k:1.1), (realistic:1.3), male, mid-30s, muscular athletic build, tan skin, short black hair, strong jawline, light stubble, wearing unbuttoned white shirt and fitted jeans, leaning against balcony railing, coastal villa at sunset, golden hour lighting highlighting muscle definition, relaxed confident expression

Negative: (deformed iris:1.4), (deformed pupils:1.4), (worst quality:1.4), (low quality:1.4), (normal quality:1.4), lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, (semi-realistic:1.2), (cgi:1.2), (3d:1.2), (cartoon:1.4), (anime:1.4), (illustration:1.3), (digital art:1.2)
```

## Common Issues & Solutions

### Problem: Unrealistic Eyes
**Solution**: Add "(natural eye reflections:1.2)" and "(realistic eye detail:1.2)" to your prompt

### Problem: Plastic-Looking Skin
**Solution**: Add "(natural skin texture:1.2)," "(subtle skin imperfections:1.1)," and "(subsurface scattering:1.1)"

### Problem: Unnatural Lighting
**Solution**: Be more specific with lighting terms and add "(realistic shadows:1.1)" and "(natural light falloff:1.1)"

### Problem: Stiff Posing
**Solution**: Use more natural pose descriptions and add "(relaxed pose:1.1)" or "(natural body language:1.1)"

### Problem: Artificial-Looking Environment
**Solution**: Add "(photographic environment:1.1)" and reduce environment weight to 0.9-0.95

## Workflow for Perfect Results

1. Start with the quality enhancers and photorealistic terms from the template
2. Add detailed character description, prioritizing facial features and skin
3. Generate 3-5 initial variations
4. Identify the most realistic result and note what's working
5. Refine your prompt by:
   - Adjusting quality and technical terms if needed
   - Adding more specific details for key features
   - Being more precise with lighting descriptions
   - Strengthening negative prompts against any issues that appeared
6. Generate additional variations with the refined prompt
7. Fine-tune weights for elements that need more or less emphasis
8. Save successful prompts and seeds for character consistency

## Sampling Settings Recommendation

For optimal results with Illustrious Checkpoint, try these settings:
- Sampling method: DPM++ 2M Karras or DDIM
- Sampling steps: 28-32
- CFG Scale: 7-8
- Width/Height: 768x512 or 512x768 (portrait)
- Clipskip: 1 (default)

Remember that Illustrious Checkpoint excels at photorealism with exceptional detail in skin textures and lighting. Focus on creating prompts with detailed physical descriptions, fabric specifications, and realistic lighting conditions for best results. 