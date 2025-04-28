/**
 * Illustrious Checkpoint Prompt Generator
 * 
 * This module implements prompt generation specifically optimized for the Illustrious model
 * based on research from Claude conversation.
 */

class IllustriousGenerator {
    constructor() {
        this.qualityTags = [
            'masterpiece', 'best quality', 'highres', 'ultra detailed', 
            'extremely detailed', 'detailed face', '(extremely detailed eyes)', 
            'perfect lighting'
        ];
        
        this.styleTags = [
            'anime', 'anime style', 'illustration', 'digital art', 'colorful'
        ];
        
        this.defaultNegativePrompt = [
            'lowres', 'bad anatomy', 'bad hands', 'text', 'error', 
            'missing fingers', 'extra digit', 'fewer digits', 'cropped', 
            'worst quality', 'low quality', 'normal quality', 'jpeg artifacts', 
            'signature', 'watermark', 'username', 'blurry', 'artist name', 
            '(deformed iris)', '(deformed pupils)', '(bad eyes)', 'poorly drawn face'
        ];
    }

    /**
     * Generate a prompt for Illustrious model
     * @param {Object} characterMatrix - Character consistency matrix
     * @param {Object} scenario - Scenario details
     * @param {Boolean} isNSFW - Whether the prompt is NSFW
     * @returns {Object} - Generated prompts
     */
    generatePrompt(characterMatrix, scenario = {}, isNSFW = false) {
        const coreAttributes = characterMatrix.getCoreAttributes();
        
        // Get character elements as an object for anime-style character
        const characterTags = this._buildCharacterTags(coreAttributes, isNSFW);
        
        // Get scenario elements
        const poseAction = scenario.pose || '';
        const clothing = characterTags.clothing || '';
        const viewAngle = scenario.viewAngle || 'from front';
        const sceneBackground = scenario.environment || '';
        
        // Build the positive prompt
        const positivePrompt = this._buildPositivePrompt(
            characterTags,
            poseAction,
            clothing,
            viewAngle,
            sceneBackground,
            isNSFW
        );
        
        // Build the negative prompt
        const negativePrompt = this._buildNegativePrompt(scenario.additionalNegatives || []);
        
        return {
            positive: positivePrompt,
            negative: negativePrompt
        };
    }
    
    /**
     * Build anime-style character tags for Illustrious
     * @param {Object} coreAttributes - Core character attributes
     * @param {Boolean} isNSFW - Whether the prompt is NSFW
     * @returns {Object} - Character tag components
     */
    _buildCharacterTags(coreAttributes, isNSFW) {
        // Illustrious works best with a mix of booru tags and descriptive phrases
        const result = {
            count: '1girl', // Default to 1girl, should be replaced with actual count+gender
            face: 'beautiful face',
            hair: '',
            eyes: '',
            personality: 'elegant',
            expression: 'happy expression',
            clothing: '',
            bodyDetails: isNSFW ? 'naked' : ''
        };
        
        // Extract hair details
        if (coreAttributes.semiStable.hairStyling) {
            result.hair = coreAttributes.semiStable.hairStyling;
        } else if (coreAttributes.immutable.facialFeatures) {
            // Try to find hair details in facial features
            const hairFeatures = coreAttributes.immutable.facialFeatures.filter(
                feature => feature.includes('hair')
            );
            if (hairFeatures.length > 0) {
                result.hair = hairFeatures.join(' ');
            }
        }
        
        // Extract eye details
        if (coreAttributes.immutable.facialFeatures) {
            const eyeFeatures = coreAttributes.immutable.facialFeatures.filter(
                feature => feature.includes('eye')
            );
            if (eyeFeatures.length > 0) {
                result.eyes = eyeFeatures.join(' ');
            }
        }
        
        // Get clothing
        if (coreAttributes.semiStable.clothingStyle) {
            result.clothing = isNSFW ? '' : coreAttributes.semiStable.clothingStyle;
        }
        
        // Get expression
        if (coreAttributes.semiStable.expressions && 
            coreAttributes.semiStable.expressions.length > 0) {
            result.expression = coreAttributes.semiStable.expressions[0] + ' expression';
        }
        
        return result;
    }
    
    /**
     * Build the complete positive prompt for Illustrious
     * @param {Object} characterTags - Character tag components
     * @param {String} poseAction - Pose or action
     * @param {String} clothing - Clothing description
     * @param {String} viewAngle - Camera angle/view
     * @param {String} sceneBackground - Background/environment
     * @param {Boolean} isNSFW - Whether prompt is NSFW
     * @returns {String} - Complete positive prompt
     */
    _buildPositivePrompt(characterTags, poseAction, clothing, viewAngle, sceneBackground, isNSFW) {
        const qualityTagsStr = this.qualityTags.join(', ');
        const styleTagsStr = this.styleTags.join(', ');
        
        // Build character description part
        const characterParts = [
            characterTags.count,
            characterTags.face,
            characterTags.hair,
            characterTags.eyes,
            characterTags.personality,
            characterTags.expression
        ].filter(Boolean);
        
        // Add NSFW or clothing elements
        if (isNSFW && characterTags.bodyDetails) {
            characterParts.push(characterTags.bodyDetails);
        } else if (clothing) {
            characterParts.push(clothing);
        }
        
        // Add pose and scenario elements
        const sceneParts = [
            poseAction,
            sceneBackground,
            viewAngle
        ].filter(Boolean);
        
        // Illustrious prompt structure: [Quality], [Style], [Character], [Pose/Action], [Clothing], [View/Angle], [Scene/Background]
        return `${qualityTagsStr}, ${styleTagsStr}, ${characterParts.join(', ')}, ${sceneParts.join(', ')}`.trim().replace(/,\s*,/g, ',');
    }
    
    /**
     * Build negative prompt for Illustrious
     * @param {Array} additionalNegatives - Additional negative prompts
     * @returns {String} - Complete negative prompt
     */
    _buildNegativePrompt(additionalNegatives = []) {
        return [...this.defaultNegativePrompt, ...additionalNegatives].join(', ');
    }
    
    /**
     * Apply emphasis to specific prompt elements
     * @param {String} prompt - Original prompt
     * @param {Array} emphasizedElements - Elements to emphasize with weights
     * @returns {String} - Prompt with emphasis
     */
    applyEmphasis(prompt, emphasizedElements) {
        let modifiedPrompt = prompt;
        
        // Apply parentheses emphasis for each element
        emphasizedElements.forEach(elem => {
            const { text, level = 1, weight } = elem;
            
            // Skip if text isn't in the prompt
            if (!modifiedPrompt.includes(text)) return;
            
            let replacement = text;
            
            // Apply parenthesis emphasis if level is specified
            if (level > 0) {
                const parentheses = '('.repeat(level);
                const closingParentheses = ')'.repeat(level);
                replacement = `${parentheses}${text}${closingParentheses}`;
            }
            
            // Apply weight emphasis if specified
            if (weight) {
                replacement = `${replacement}:${weight}`;
            }
            
            // Replace in the prompt
            modifiedPrompt = modifiedPrompt.replace(text, replacement);
        });
        
        return modifiedPrompt;
    }
}

module.exports = IllustriousGenerator; 