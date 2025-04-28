# SDXL Guide

This guide provides specific recommendations for creating NSFW character prompts optimized for the Stable Diffusion XL model family.

## Overview

Stable Diffusion XL excels at creating photorealistic characters with natural proportions and high detail. It handles complex scenes and compositions particularly well, with improved coherence for full-body images and environments.

## Recommended Prompt Structure

```
[quality boosters], [character description], [outfit details], [scenario/setting], [pose description], [explicit elements], [lighting], [camera details], [stylistic elements]
```

## Key Optimization Techniques

### 1. Natural Language Approach

- SDXL performs better with natural language rather than keyword stacking
- Use complete descriptive sentences: "A beautiful woman with long blonde hair wearing a red dress"
- Avoid excessive commas and token separators common in SD 1.5
- Structure descriptions in logical order: person → attributes → clothing → context

### 2. Detail Balance

- SDXL handles higher levels of detail without overcrowding
- Balance general descriptors with 3-5 specific details
- Example: "Athletic woman with defined abs, prominent collar bones, and a small birthmark on her right shoulder"
- For clothing, specify material, fit, and distinctive features

### 3. Compositional Control

- SDXL excels at full-body compositions
- Specify framing: "full body portrait", "medium shot", "close-up"
- Include camera details: "shot on Canon EOS R5, 85mm lens"
- Add compositional elements: "rule of thirds composition", "cinematic framing"

### 4. Realistic Lighting

- SDXL produces superior lighting effects
- Specify lighting setup: "soft window light from the left", "dramatic split lighting"
- Include lighting modifiers: "soft diffusion", "warm golden hour glow"
- Add atmosphere elements: "volumetric light", "light haze", "subtle lens flare"

### 5. Weight Reduction

- SDXL typically requires less aggressive weighting
- Use more subtle weight values: (1.05-1.2) instead of (1.3-1.5)
- Reserve higher weights (>1.2) only for the most critical elements
- Consider using () for mild emphasis instead of explicit weights

## Recommended Weights

For SDXL models, use these more subtle weighting patterns:

- Quality terms: `(high quality, detailed:1.1)`
- Character features: `(character features:1.05-1.15)`
- Setting elements: `(setting details:1.05)`
- Important stylistic elements: `(style elements:1.1)`

## Negative Prompt Recommendations

These negative prompts help avoid common issues with SDXL:

```
(deformed iris:1.2), (deformed pupils:1.2), (bad anatomy:1.3), (deformed hands:1.2), (extra limbs:1.3), (fused fingers:1.2), (too many fingers:1.3), (unclear eyes:1.1), (poorly drawn hands:1.2), (poorly drawn face:1.2), (mutation:1.2), (disfigured:1.3), (bad proportions:1.2), (malformed limbs:1.2), (extra fingers:1.2), (twisted hands:1.1)
```

## Example Prompt

```
A detailed portrait of a (beautiful woman:1.1) with (shoulder-length auburn hair:1.05) and (piercing green eyes:1.05). She is wearing a (form-fitting black dress:1.1) with (lace details along the neckline:1.05). She stands in (an elegantly furnished bedroom:1.05) with (soft afternoon light streaming through sheer curtains:1.1). Her pose is (confident but relaxed:1.05), with one hand resting on her hip. Photographed with a (Canon EOS R5 with 85mm lens:1.05), (shallow depth of field:1.05), (professional studio lighting setup:1.1), (cinematic color grading:1.05). 