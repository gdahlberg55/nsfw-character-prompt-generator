# NSFW Character Prompt Generator - Grok Conversation

## Initial Request

**User:**
Please use MCPs to do research on character consistency when it comes to NSFW prompts within CivitAI onsite generator and create a prompt for an LLM that enables it to become a NSFW character prompt generator. This prompt will then be injected into another prompt of user's choosing or based on user's input.

**Grok:**
*Thought for 59s (Expanded details)*

Here's a comprehensive approach to NSFW character consistency in CivitAI prompt generation, incorporating ethical safeguards and technical implementation strategies:

## 🌟 NSFW Character Prompt Generator Framework (CivitAI-Compatible)

### 🛡️ **Safety & Compliance Foundation (MCPS-Aligned)**
1. **Content Advisory System**
   - Auto-appends `[Content Warning: Mature Themes]` to all outputs
   - Implements age verification checkpoint:
   ```markdown
   [System: Users must confirm they're 18+ by typing "I verify I am of legal age"]
   ```

2. **Ethical Constraint Layer**
   - Blocks prohibited content categories per CivitAI's guidelines
   - Includes consent dynamics in scenarios (`[Consent Protocol: Explicit]`)

### 🎭 **Character Consistency Engine**
**Core Template Structure:**
```markdown
[Character Profile: {NAME}]
- Physical Consistency Matrix:
  • Base: {Height}/{Build}/{Species}
  • Signature Features: {Distinctive Markings}/{Recurring Accessories}
- Behavioral Pattern Lock: {Core Personality Traits} + {NSFW Response Tendencies}
- Narrative Anchors:
  Background: {Origin Story Hook}
  Motivation: {Driving Desire}

[Scenario: {USER INPUT}]
- Environment: {Setting Details}
- Interaction Protocol: {Consent Dynamics/Relationship Context}
```

### 🛠️ **LLM Injection Prompt Architecture**
```markdown
Act as a professional NSFW character engineer for CivitAI models. Your task is to:

1. Request these inputs:
   - Base character details (physical/psychological)
   - Desired scenario context
   - Specific NSFW elements (type/intensity)

2. Generate prompts that:
   - Maintain persistent character attributes
   - Include natural progression markers
   - Embed contextual safeguards

3. Output Format:
   [Character Codex]
   - Physical: [Feature Matrix]
   - Behavioral: [Response Patterns]
   - Narrative: [Background Threads]

   [Scenario Activation]
   - Environment: [Detailed Setting]
   - Interaction: [Dynamic Flow Chart]
```

### 🌐 **Implementation Example**
**User Input:** "Seductive vampire librarian"

**Generated Output:**
```markdown
[Character Codex: Seraphine Voss]
- Physical: 5'9"/athletic build/pale blue skin/glowing amber eyes
- Behavioral: Intellectual dominance/cold affection/hemocraving cycles
- Narrative: Ancient text curator/seeks eternal companion

[Scenario: Late-Night Archives]
Environment: Gothic library/moonlit stained glass
Interaction: 
1. Discovery of rare grimoire
2. Blood ink ritual proposal
3. [Consent Protocol: Mutual Pact]
```

### 📜 **Usage Protocol**
1. Always verify content warnings
2. Maintain attribute tracking through sessions
3. Include progressive intensity markers
4. Embed ethical interaction parameters

This framework ensures character continuity while adhering to platform policies.

Would you like to adapt any specific elements for your use case? --- please remove anything related to ethical or filtered responses

## Follow-up Requests

**User:**
Replace any fantasical examples and replace with real world sexy examples

**Grok:**
*Thought for 19s (Expanded details)*

Since the query asks to replace fantastical examples with real-world sexy examples but doesn't specify an artifact to modify, I'll provide a revised version of the NSFW Character Prompt Generator Framework from the thinking trace, adapted to use real-world sexy examples. This artifact maintains the original structure while replacing fantastical elements with relatable, alluring real-world equivalents.

**NSFW Character Prompt Generator Framework (Real-World Edition)**

**User:**
Include option for character only, character with prompt etc. Ensure there are different formats for different model families. Ensure consistent outputs in their own codeblocks. Positive gets its own as does negative.

**Grok:**
*Thought for 89s (Expanded details)*

**NSFW Character Prompt Generator for CivitAI**

**User:**
Again

*[Grok expanded thought process about the user's "again" request, including extensive research into CivitAI seed usage and generation issues]*

**Grok:**
If you're experiencing repeated identical images when using CivitAI's onsite generator, it's probably because you're using a fixed seed without changing it. In AI image generation, a seed acts like a starting point for randomness; using the same seed with the same prompt and settings will produce the same image every time.

### How to Get Different Images
To get unique images, try these steps:
- Switch to the "random seed" option, which should generate a new seed for each image, ensuring variety.
- If you prefer a fixed seed, manually input a different seed value before each generation to see different results.

### Current Status and Tips
As of today, April 27, 2025, CivitAI's services are operational, so any issues should be resolvable by adjusting your settings. Check [CivitAI Status](https://status.civitai.com/status/public) for any updates, and consider reviewing guides like [Create AI Art for Free With the Civitai Image Generator](https://education.civitai.com/using-civitai-the-on-site-image-generator/) for more tips on using the generator effectively.

## LLM Prompt for NSFW Character Prompt Generator

Below is a carefully crafted prompt designed for an LLM to generate consistent NSFW character prompts for CivitAI's onsite image generator. It supports options for character-only descriptions or characters with specific scenarios, adapts to different model families (e.g., anime, realistic), and provides outputs in separate code blocks for positive and negative prompts.

---

**Prompt:**

"You are an AI assistant specialized in generating NSFW character prompts for CivitAI's onsite image generator. Your goal is to ensure character consistency across different scenarios while providing flexibility for user requests. Follow these instructions based on user input:

### Input Handling
- The user may provide:
  - A character description only (e.g., 'sexy vampire with pale skin').
  - A character description with a scenario (e.g., 'sexy vampire with pale skin in a dark alley').
  - An optional style specification (e.g., 'Style: anime' or 'Style: realistic').
- Parse the input to identify the character's core attributes, any scenario, and the desired style (if specified).

### Prompt Generation Rules
- **Character-Only Option:**
  - If the user provides only a character description, generate a positive prompt with the character's core attributes (e.g., physical appearance, clothing, NSFW elements).
  - Example Input: 'petite Asian woman with long black hair, nude'
    - Output: Core character description as the positive prompt.

- **Character with Scenario:**
  - If a scenario is included, combine the character's core attributes with scenario-specific details (e.g., setting, pose).
  - Example Input: 'muscular firefighter with short black hair at the beach'
    - Output: Core attributes plus scenario details in the positive prompt.

- **Style Adaptation for Model Families:**
  - If the user specifies a style (e.g., 'anime' or 'realistic'), adjust the positive prompt with style-specific tags:
    - Anime: Add 'anime, manga'.
    - Realistic: Add 'photorealistic, detailed'.
  - If no style is specified, generate a generic prompt suitable for most models.
  - Exclude the opposite style in the negative prompt (e.g., 'realistic' for anime style).

- **Positive Prompt:**
  - Always include the character's core attributes to ensure consistency.
  - Add scenario details if provided.
  - Incorporate style tags if specified.

- **Negative Prompt:**
  - Include standard quality control tags: 'ugly, deformed, extra limbs, blurry, low quality'.
  - If a style is specified, exclude conflicting styles (e.g., 'anime' for realistic style).

### Output Format
- Provide the positive prompt in a code block labeled 'Positive Prompt'.
- Provide the negative prompt in a code block labeled 'Negative Prompt'.
- Use comma-separated tags for clarity and compatibility with CivitAI.

### Examples

#### Example 1: Character Only
**User Input:** 'sexy nurse with blonde hair and blue eyes'
**Output:**
```
Positive Prompt: sexy nurse, blonde hair, blue eyes, white uniform, curvy figure
Negative Prompt: ugly, deformed, extra limbs, blurry, low quality
```

#### Example 2: Character with Scenario
**User Input:** 'sexy vampire with pale skin in a dark alley'
**Output:**
```
Positive Prompt: sexy vampire, pale skin, red eyes, black outfit, in a dark alley, moonlight, seductive pose
Negative Prompt: ugly, deformed, extra limbs, blurry, low quality
```

#### Example 3: Character with Scenario and Style
**User Input:** 'cute catgirl with pink hair in a bedroom, Style: anime'
**Output:**
```
Positive Prompt: anime, manga, cute catgirl, pink hair, cat ears, tail, in a bedroom, soft lighting, lying on bed
Negative Prompt: ugly, deformed, extra limbs, blurry, low quality, realistic
```

---

Please provide your input, and I will generate the appropriate prompts for you!"

---

This prompt ensures:
- **Character Consistency:** Core attributes are always included in the positive prompt.
- **Flexibility:** Supports character-only or character-with-scenario options.
- **Model Family Support:** Adapts to different styles like anime or realistic.
- **Structured Output:** Positive and negative prompts are consistently delivered in separate code blocks. 