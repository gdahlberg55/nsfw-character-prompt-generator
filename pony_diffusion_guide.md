# Pony Diffusion Guide

This guide provides specific recommendations for creating NSFW character prompts optimized for the Pony Diffusion model family.

## Overview

Pony Diffusion models are known for their unique stylized aesthetic that blends anime-inspired characteristics with semi-realistic details. These models excel at creating visually striking characters with vibrant colors and expressive features.

## Recommended Prompt Structure

```
[style keywords], [character description], [outfit details], [pose], [explicit elements], [emotion/expression], [scenario/setting], [artistic effects]
```

## Key Optimization Techniques

### 1. Style Definition

- Begin prompts with style-setting keywords
- Effective style terms: "anime style", "semi-realistic", "stylized", "vibrant colors"
- Combine styles for unique results: "anime style with semi-realistic details"
- Specify art influences: "in the style of [artist name]"

### 2. Color Emphasis

- Pony Diffusion responds exceptionally well to color specifications
- Use precise color descriptions: "electric blue hair", "rose-gold accessories"
- Include color harmonies: "complementary color scheme", "analogous warm tones"
- Specify color vibrancy: "vibrant", "saturated", "neon", "pastel", etc.

### 3. Expressive Features

- Emphasize emotional expression and personality
- Describe facial expressions in detail: "sultry gaze with half-lidded eyes"
- Include character mood: "confident pose", "playful expression"
- Specify eye details, which Pony excels at rendering: "detailed heterochromatic eyes"

### 4. Dynamic Composition

- Pony Diffusion handles dynamic poses well
- Use terms like "dynamic pose", "action shot", "dramatic angle"
- Specify compositional elements: "Dutch angle", "foreshortening", "low angle view"
- Include motion descriptors: "hair flowing in wind", "fabric rippling"

### 5. Artistic Effects

- Incorporate artistic rendering techniques
- Examples: "soft rim lighting", "volumetric lighting", "lens flare effect"
- Specify rendering style: "cel shading", "detailed linework", "soft brush texture"

## Recommended Weights

For Pony Diffusion models, use these weighting patterns:

- Style keywords: `(style descriptors:1.3)`
- Character features: `(character features:1.2)`
- Color terms: `(color descriptions:1.25)`
- Artistic effects: `(artistic effect:1.15)`

## Negative Prompt Recommendations

These negative prompts help avoid common issues with Pony Diffusion:

```
(photorealistic:1.4), (realistic:1.3), (hyper-detailed:1.2), (traditional anime:1.3), (flat colors:1.2), (low detail:1.3), (blurry:1.2), (grainy:1.2), (washed out colors:1.3), (bad anatomy:1.4), (deformed:1.4), (low quality:1.3), (ugly:1.3), (bad proportions:1.3), (bad composition:1.2)
```

## Example Prompt

```
(anime style with semi-realistic details:1.3), (vibrant color palette:1.25), (female character:1.1), (22 years old:1.0), (slender figure:1.1), (long electric blue hair with purple highlights:1.25), (large expressive purple eyes:1.2), (wearing revealing cyberpunk outfit:1.15), (neon pink and blue accents:1.2), (thigh-high boots:1.1), (confident pose:1.1), (slight smile:1.05), (night city background:1.0), (neon lights:1.15), (volumetric lighting:1.1), (dramatic rim lighting:1.15), (detailed linework:1.1), (soft color gradients:1.1), (styled by Ilya Kuvshinov:1.2)
``` 