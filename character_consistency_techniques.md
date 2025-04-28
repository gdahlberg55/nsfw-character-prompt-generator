# Character Consistency Techniques

This guide covers techniques to maintain character consistency across multiple generated images.

## Core Principles

### 1. Detailed Physical Description

- **Be specific and consistent** with physical attributes
- Use precise descriptors for body type, face shape, hair style/color, etc.
- Include exact measurements when possible (height, proportions)
- Specify ethnic features clearly if relevant

### 2. Distinctive Features

- Include 2-3 **unique identifying features** that make the character stand out
- Examples: specific freckle patterns, scars, birthmarks, tattoos, unusual eye colors
- These serve as visual anchors for the AI to maintain consistency

### 3. Character Embeddings

- For models that support embeddings/Textual Inversion:
  - Create a character embedding after generating a particularly good result
  - Use consistent embedding trigger words in your prompts
  - Adjust embedding weights (typically 0.7-0.9) for optimal results

### 4. Prompt Structure

- Maintain consistent prompt structure across generations
- Keep character description at the beginning of prompts
- Use the same key descriptors in the same order
- Bracket important attributes for emphasis: [green eyes], [heart-shaped face]

### 5. Negative Prompts

- Develop a consistent set of negative prompts specific to your character
- Include terms that prevent common inconsistencies (wrong eye color, hair length, etc.)
- Example: "(mismatched eyes:1.3), (different eye colors:1.3), (wrong hair length:1.2)"

### 6. Model-Specific Techniques

Different model families respond better to different consistency techniques:

- **SD 1.5**: Relies heavily on precise language and weighting
- **SDXL**: Responds better to natural language descriptions and conceptual details
- **Pony Diffusion**: Emphasize stylistic elements and mood descriptors
- **Illustrious Checkpoint**: Benefits from detailed anatomical descriptions

See the specific model guides for more detailed recommendations. 