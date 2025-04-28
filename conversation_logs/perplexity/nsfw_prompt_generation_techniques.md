# NSFW Prompt Generation Techniques - Perplexity AI Conversation

## Overview

This document contains insights and methodologies for generating effective NSFW prompts using Perplexity AI, focusing on overcoming AI limitations and creating consistent character prompts for CivitAI's on-site image generator. The content is based on research conducted via Perplexity AI specifically on NSFW prompt engineering approaches.

## Using Perplexity AI for NSFW Prompt Generation

### Advantages of Perplexity AI Labs

1. **No Sign-Up Required**
   - Immediate access at https://labs.perplexity.ai/ without account creation
   - Free to use with no usage limits

2. **Multiple Model Options**
   - Various models with different capabilities for NSFW content
   - Ability to change models during a conversation
   - Recommended models:
     - mistral-medium (best overall performer)
     - dbrx-instruct
     - llama-3-70b-instruct
     - mixtral-8x7b-instruct
     - mixtral-8x22b-instruct

3. **Flexible Content Guidelines**
   - More permissive regarding NSFW, offensive, politically incorrect content
   - Willing to engage with celebrity-related prompts
   - Provides more detailed explanations and examples

## NSFW Prompt Structure for Stable Diffusion Photography Style

The most effective structure follows a photography-style format with specific key elements:

### Core Elements Framework (CASE)

1. **Composition**
   - Quality descriptors
   - Style (photorealistic, color palette)
   - Camera angle and framing
   - Subject count (1girl, 1boy, etc.)

2. **Action**
   - Pose
   - Sexual position (for NSFW content)
   - Activity being performed

3. **Subject**
   - Body attributes (body type, features, skin)
   - Facial elements (eyes, hair, expressions)
   - Clothing items (or lack thereof)
   - Attitude (emotions, demeanor)

4. **Environment**
   - Setting (indoor/outdoor location)
   - Lighting conditions
   - Weather elements
   - Props and furniture

### Photography-Style Format

For realistic NSFW character prompts, structure in this order:

1. **Style of Photo**: Define photography style (e.g., glamour, boudoir, OnlyFans)
2. **Subject**: Main character/person description
3. **Important Features**: Key physical attributes
4. **Additional Details**: Character context
5. **Pose/Action**: Subject's position or activity
6. **Framing**: Shot composition
7. **Camera Angle**: Perspective
8. **Setting/Background**: Environment
9. **Mood/Emotion**: Emotional tone
10. **Lighting**: Light conditions
11. **Color Theme**: Color palette
12. **Camera**: Equipment reference
13. **Style Reference**: Photographer or brand reference

## Template for NSFW Prompt Generation

```
"[STYLE OF PHOTO], [SUBJECT], [IMPORTANT FEATURES], [ADDITIONAL DETAILS], [POSE OR ACTION], [FRAMING], [CAMERA ANGLE], [SETTING/BACKGROUND], [MOOD/EMOTION], [LIGHTING], [COLOR THEME], in the style of [STYLE REFERENCE]"
```

### Example Prompt 1

```
"Boudoir photography, BBW woman, brunette wavy hair, voluptuous figure, silk lingerie, hand on hip posture, close-up framing, eye level angle, luxurious bedroom setting, intimate mood, soft artificial lighting, rich earth tones, Canon EOS 5D Mark IV, in the style of high-end fashion photography"
```

### Example Prompt 2

```
"Glamour photography, athletic blonde woman, toned physique, natural makeup, standing pose with shoulders back, medium shot framing, slightly low angle, urban rooftop setting, confident mood, golden hour lighting, contrasting cool and warm tones, Sony A7R III, in the style of Sports Illustrated"
```

## Advanced Techniques for Character Consistency

1. **Keyword Balance**
   - Too many tags cause noise and less precise results
   - Focus on 15-25 most important descriptors
   - Tag only what would be visible in the final image

2. **Attribute Hierarchy**
   - Place most important character attributes earlier in the prompt
   - Use commas rather than periods between elements
   - Group related attributes together

3. **Style References**
   - Include photographer or brand references for consistent aesthetic
   - Mix photographers/brands for unique styles
   - Specify publication or platform references for distinct looks

4. **Negative Prompts**
   - Always include negative prompts to avoid common issues
   - Standard negative elements:
     ```
     deformed, bad anatomy, disfigured, poorly drawn face, mutation, mutated, extra limb, ugly, poorly drawn hands, missing limb, floating limbs, disconnected limbs, malformed hands, blurry, watermark, watermarked, oversaturated, censored
     ```

## Character Consistency Across Multiple Generations

To maintain character consistency:

1. **Core Attribute Persistence**
   - Maintain consistent physical descriptors (hair, eyes, body type)
   - Use the same subject description in all prompts

2. **Variable Elements**
   - Vary pose, outfit, setting, and lighting
   - Keep core identity elements consistent
   - Experiment with different camera angles and framing

3. **Model-Specific Adjustments**
   - For photorealistic results: Emphasize camera details, lighting
   - For anime/stylized: Include style descriptors, reduce realistic elements

4. **Prompt Anchoring**
   - Create a "base prompt" with core character elements
   - Add scenario-specific elements as needed
   - Save effective prompts as templates for future use

## Systematic Prompt Testing Approach

Perplexity AI research indicates a methodical approach produces better results:

1. **A/B Testing**
   - Change one variable at a time to see its impact
   - Test different weightings for important elements
   - Compare results across multiple generations

2. **Prompt Refinement**
   - Start with a basic character prompt
   - Add detail incrementally
   - Document effective combinations
   - Remove elements that don't improve results

3. **Cross-Model Verification**
   - Test prompts across different AI models
   - Note which elements work best with specific models
   - Create model-specific variations of core character prompts

## System Prompt Template for Perplexity AI

This template can be used with Perplexity AI for generating NSFW character prompts:

```
I need you to act as a prompt engineer for CivitAI's image generator, specializing in NSFW content. Your task is to help me create effective, detailed prompts following photography-style conventions.

Please structure prompts in this format:
[STYLE OF PHOTO], [SUBJECT], [IMPORTANT FEATURES], [ADDITIONAL DETAILS], [POSE/ACTION], [FRAMING], [CAMERA ANGLE], [SETTING], [MOOD], [LIGHTING], [COLOR THEME], in the style of [REFERENCE]

When I provide a character description, please:
1. Convert it to a comprehensive prompt using the format above
2. Include both a positive prompt and a negative prompt
3. Provide 2-3 variations that would create a consistent character but in different poses/settings
4. Explain your reasoning for key elements included

For example, if I say "create a prompt for a blonde fitness instructor", you'll provide a complete prompt tailored to CivitAI's system with all necessary elements.
```

This documentation presents comprehensive techniques for generating NSFW character prompts using Perplexity AI, with specific focus on photography-style frameworks and character consistency approaches. 