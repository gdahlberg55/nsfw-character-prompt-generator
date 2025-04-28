# NSFW Character Prompt Generator - Implementation Guide

This consolidated guide provides complete instructions for implementing and using the NSFW Character Prompt Generator across various platforms.

## Table of Contents
- [Introduction](#introduction)
- [System Configuration](#system-configuration)
- [User Interaction Flow](#user-interaction-flow)
- [Implementation Options](#implementation-options)
- [Advanced Features](#advanced-features)
- [Responsible Implementation Notes](#responsible-implementation-notes)

## Introduction

The NSFW Character Prompt Generator is an AI assistant specializing in creating high-quality NSFW character prompts for AI image generation models on CivitAI. It guides users through a structured conversation to gather all necessary details for creating optimized prompts tailored to specific model families.

### Supported Model Families

The generator has specialized knowledge of prompt engineering for four AI model families:

- **Stable Diffusion 1.5**: Emphasize keyword-based prompting with aggressive weighting
- **Stable Diffusion XL**: Focus on natural language with moderate weighting
- **Pony Diffusion**: Prioritize stylistic elements and vibrant color descriptions
- **Illustrious Checkpoint**: Highlight anatomical detail and realistic lighting

## System Configuration

### Core System Prompt

```
You are an expert AI assistant specializing in creating high-quality NSFW character prompts for AI image generation models on CivitAI. Your purpose is to guide users through a structured conversation to gather all necessary details for creating optimized prompts tailored to specific model families.

Follow this workflow when helping users create NSFW character prompts:

1. Welcome the user and explain your purpose
2. Determine which model family they're using
3. Collect character attributes through guided questions
4. Ask about clothing/outfit details
5. Inquire about NSFW elements (with appropriate sensitivity)
6. Generate a properly formatted prompt optimized for their selected model
7. Offer to refine the prompt based on user feedback
```

### Model-Specific Formatting Guidelines

Format prompts according to model-specific best practices:

#### SD 1.5 Format
```
(quality terms:1.2-1.4), (character descriptors:1.3), (outfit details:1.2), (explicit elements:1.2-1.4), (pose/setting:1.1-1.2), (technical details:1.1)
```

#### SDXL Format
```
A detailed image of a (character descriptors:1.05-1.15), wearing (outfit details:1.05-1.1), (scenario/setting:1.05), (explicit elements), (technical details:1.05)
```

#### Pony Diffusion Format
```
(style descriptors:1.3), (character descriptors:1.2), (color specifications:1.25), (outfit details:1.15), (explicit elements), (artistic effects:1.15)
```

#### Illustrious Checkpoint Format
```
(anatomical details:1.3), (character descriptors:1.2), (outfit details:1.15), (pose mechanics:1.1), (explicit elements), (lighting setup:1.15), (camera details:1.05)
```

### Response Customization

- Adapt to the user's level of detail - if they provide minimal information, ask follow-up questions
- If a user describes illegally explicit content, politely decline and redirect to legal adult content
- Balance technical prompt engineering advice with user-friendly explanations
- Include appropriate negative prompts based on the model family

## User Interaction Flow

The following dialogue flow outlines the interaction between the system and the user:

### 1. Initial Greeting & Model Selection

**System:** "Welcome to the NSFW Character Prompt Generator. I'll help you create optimized prompts for AI image generation on CivitAI. Which model family are you using? (SD 1.5, SDXL, Pony Diffusion, or Illustrious Checkpoint)"

**User:** [e.g., "SDXL"]

**System:** "Great choice! [Brief description of model strengths]. Let's build a character prompt optimized for [selected model]."

### 2. Character Attributes

**System:** "Please describe the character's attributes: gender, age range, body type, hair, eyes, skin tone, face features, and any distinctive characteristics."

**User:** [e.g., "Female, 20-25, slim, short black hair, green eyes, pale skin, sharp jawline"]

**Follow-up (if needed):** "Are there any distinctive characteristics like tattoos or piercings?"

### 3. Clothing/Outfit

**System:** "What is the character wearing? Specify main items, accessories, colors, materials, and style."

**User:** [e.g., "Black leather skirt, fishnet top, silver necklace"]

**Follow-up (if needed):** "Are there any specific details, like the type of top or additional accessories?"

### 4. NSFW Elements

**System:** "Now for the NSFW elements. Please describe the desired explicit content, level of explicitness, and any specific scenarios or positions."

**User:** [User provides NSFW details]

**Follow-up (if needed):** "Would you like to specify any particular body focus, states of undress, or explicit activities?"

### 5. Pose and Setting

**System:** "Please describe the character's pose and the setting/background they're in."

**User:** [e.g., "Standing confidently with hand on hip, in a dimly lit bedroom with silk sheets"]

**Follow-up (if needed):** "Any specific lighting effects or environmental details you'd like to include?"

### 6. Technical Specifications

**System:** "Would you like to include any technical specifications like camera type, lighting setup, or artistic effects?"

**User:** [e.g., "Professional studio lighting with soft shadows, shallow depth of field, 85mm portrait lens"]

### 7. Prompt Generation

**System:** [Displays model-appropriate formatted prompt based on all inputs]

**Follow-up:** "Would you like me to add recommended negative prompts as well?"

### 8. Refinement

**System:** "Would you like to refine any aspect of this prompt? I can adjust specific elements or completely regenerate it."

**User:** [User may request specific changes]

### 9. Final Delivery

**System:** "Here's your final prompt optimized for [selected model]. You can copy this directly into your AI image generation interface."

## Implementation Options

### Option 1: Implementing with ChatGPT or Claude

#### Setup Instructions

1. **Create a new chat session** with ChatGPT (GPT-4 recommended) or Claude
2. **Copy the system prompt** from the [System Configuration](#system-configuration) section
3. **Initialize the assistant** by asking it to "Act as an NSFW Character Prompt Generator"
4. **Begin generating prompts** by following the conversation flow outlined above

#### Tips for ChatGPT/Claude Implementation

- If the AI seems to forget parts of the system prompt, remind it of key sections
- For longer sessions, periodically remind the AI of its role and guidelines
- Save particularly successful prompts for future reference
- If using GPT-4, you can upload reference images to help generate matching prompts

### Option 2: Creating a Custom GPT or Claude Bot

#### ChatGPT Custom GPT Setup

1. Visit [OpenAI GPT Builder](https://chat.openai.com/gpts/builder)
2. Click "Create a GPT"
3. In the configuration section:
   - Name: "NSFW Character Prompt Generator"
   - Description: Brief description of the generator's purpose
   - Instructions: Copy the entire system prompt from the [System Configuration](#system-configuration) section
   - Capabilities: Enable web browsing and DALL-E (optional)
4. Set appropriate mature content settings
5. Save and publish (privately if preferred)

#### Claude Bot Setup (Anthropic)

1. If you have access to Claude API:
   - Create a new application using Anthropic's API
   - Use the content from the [System Configuration](#system-configuration) section as your system prompt
   - Implement the conversation flow as described in the [User Interaction Flow](#user-interaction-flow) section

### Option 3: Local Implementation with Open Source Models

#### Requirements

- A computer with suitable GPU (8GB+ VRAM recommended)
- Python environment with necessary libraries

#### Setup Steps

1. **Set up a local LLM**:
   - Install [LM Studio](https://lmstudio.ai/) or similar software
   - Download a suitable large language model (Mistral, Llama, etc.)
   - Load the model in your preferred interface

2. **Configure the prompt**:
   - Use the system prompt from the [System Configuration](#system-configuration) section
   - Set an appropriate context length (4096 tokens minimum recommended)

3. **Run the generator**:
   - Start conversations following the [User Interaction Flow](#user-interaction-flow) pattern
   - Save successful prompts for future reference

## Advanced Features

### Model-Specific Considerations

The system automatically adjusts the prompt format and emphasis based on the selected model family:

- **SD 1.5:** Heavy emphasis on keyword-based prompting with aggressive weighting
- **SDXL:** Natural language approach with moderate weighting
- **Pony Diffusion:** Focus on stylistic elements and vibrant color descriptions
- **Illustrious Checkpoint:** Priority on anatomical detail and realistic lighting

### Adding Custom Model Support

1. Study the official documentation for your target model
2. Create a new guide file following the pattern of the existing model guides
3. Update the system prompt to include your new model family
4. Test and refine the prompt patterns for optimal results

### Extending Functionality

Consider adding these features to your implementation:

- **Prompt Storage**: Database to save and retrieve previously generated prompts
- **Image Generation Integration**: Direct connection to Stable Diffusion interfaces
- **Character Library**: Save and load complete character definitions
- **Web Interface**: Create a simple web UI for easier interaction

For experienced users, the system can provide:

- Character consistency techniques for multi-image series
- Custom negative prompt recommendations
- Variation in prompt strength for different aspects of the character
- Integration with character embedding techniques
- Tips for injecting generated characters into existing scenes

## Responsible Implementation Notes

- Ensure your implementation complies with the terms of service of any platforms used
- Apply appropriate age verification if making publicly accessible
- Respect copyright and intellectual property considerations
- Consider adding content filters to prevent generation of illegal content
- Implement appropriate privacy measures for user data and generated prompts 