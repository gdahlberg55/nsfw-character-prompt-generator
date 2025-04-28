# Illustrious Checkpoint Guide

This guide provides specific recommendations for creating NSFW character prompts optimized for the Illustrious Checkpoint model family.

## Overview

Illustrious Checkpoint models excel at photorealistic anatomy with enhanced detail for NSFW content. These models particularly shine with realistic lighting, skin textures, and anatomical accuracy.

## Recommended Prompt Structure

```
[detailed anatomy], [character description], [outfit], [pose], [explicit elements], [lighting description], [camera details]
```

## Key Optimization Techniques

### 1. Anatomical Detail

- Be extremely specific about anatomical features
- Use medical/anatomical terminology for body parts
- Example: "perky breasts with natural teardrop shape and light pink areolas"
- Focus on realistic proportions and configurations

### 2. Lighting Emphasis

- Illustrious excels with dramatic lighting setups
- Specify light sources, directions, and qualities
- Examples: "rim lighting highlighting curves", "dramatic side lighting with soft fill"
- Consider including light modifiers: "soft diffused light through sheer curtains"

### 3. Material Rendering

- Describe fabric materials with precision
- Specify how materials interact with the body
- Example: "tight satin dress clinging to curves, reflecting specular highlights"
- Include material properties: sheer, tight, loose, elastic, etc.

### 4. Pose Mechanics

- Describe poses with anatomical correctness
- Specify weight distribution and muscle tension
- Focus on realistic body configurations
- Example: "weight shifted to right leg, shoulders back, chin slightly raised"

### 5. Composition Details

- Specify framing, camera angle, and focal length
- Example: "wide-angle lens, low camera position, full body framing"
- Include depth of field information: "shallow focus with background blur"

## Recommended Weights

For Illustrious Checkpoint models, use these weighting patterns:

- Character description: `(character descriptors:1.2)`
- Important anatomical details: `(anatomical features:1.3)`
- Lighting elements: `(lighting setup:1.15)`
- Pose mechanics: `(body pose:1.1)`

## Negative Prompt Recommendations

These negative prompts help avoid common issues with Illustrious Checkpoint:

```
(unrealistic anatomy:1.4), (impossible poses:1.3), (disproportionate features:1.3), (unnatural lighting:1.2), (flat lighting:1.2), (deformed hands:1.5), (deformed feet:1.4), (incorrect fingers:1.4), (incorrect toes:1.4), (blurry:1.1), (low quality:1.2), (bad anatomy:1.4), (disfigured:1.3), (mutation:1.3), (extra limbs:1.4)
```

## Example Prompt

```
(photorealistic:1.2), (detailed skin texture:1.15), (anatomically correct:1.3), (female, 24 years old:1.1), (athletic build with defined muscle tone:1.2), (long wavy auburn hair:1.1), (bright green eyes:1.05), (plump lips:1.05), (wearing sheer black lingerie:1.15), (black stockings with lace tops:1.1), (standing with weight on left leg:1.1), (hip slightly cocked:1.05), (studio lighting with soft key light from 45 degrees:1.15), (rim light highlighting silhouette:1.1), (shallow depth of field:1.05), (85mm portrait lens:1.05), (f/2.8 aperture:1.0)
``` 