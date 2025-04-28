/**
 * PonyXL Prompt Generator
 * 
 * This module implements prompt generation specifically optimized for the PonyXL model
 * based on research from Claude conversation.
 */

class PonyXLGenerator {
    constructor() {
        this.qualityTags = [
            'score_9', 'score_8_up', 'score_7_up', 'score_6_up', 
            'score_5_up', 'score_4_up', 'masterpiece', 'high quality', 
            'realistic', 'detailed', 'best quality'
        ];
        
        this.defaultNegativePrompt = [
            'bad anatomy', 'bad hands', 'text', 'error', 'missing fingers',
            'extra digit', 'fewer digits', 'cropped', 'worst quality',
            'low quality', 'normal quality', 'jpeg artifacts', 'signature',
            'watermark', 'username', 'blurry'
        ];
    }

    /**
     * Generate a prompt for PonyXL model
     * @param {Object} characterMatrix - Character consistency matrix
     * @param {Object} scenario - Scenario details
     * @param {Boolean} isNSFW - Whether the prompt is NSFW
     * @returns {Object} - Generated prompts
     */
    generatePrompt(characterMatrix, scenario = {}, isNSFW = false) {
        const coreAttributes = characterMatrix.getCoreAttributes();
        
        // Get character elements
        const characterTags = this._buildCharacterTags(coreAttributes, isNSFW);
        
        // Get scenario elements
        const environmentTags = this._buildEnvironmentTags(scenario);
        const poseTags = this._buildPoseTags(scenario);
        
        // Build the positive prompt
        const positivePrompt = this._buildPositivePrompt(
            characterTags,
            environmentTags,
            poseTags,
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
     * Build booru-style character tags for PonyXL
     * @param {Object} coreAttributes - Core character attributes
     * @param {Boolean} isNSFW - Whether the prompt is NSFW
     * @returns {Array} - Character tags
     */
    _buildCharacterTags(coreAttributes, isNSFW) {
        // PonyXL prefers booru-style tagging
        const tags = [];
        
        // Add character name tag if provided (important for PonyXL)
        if (coreAttributes.immutable.characterName) {
            tags.push(`character_name`);
        }

        // Add species tag - crucial for anthro characters
        if (coreAttributes.immutable.species) {
            tags.push(coreAttributes.immutable.species.toLowerCase());
        }
        
        // Add physical characteristics
        if (coreAttributes.immutable.physicalCharacteristics && 
            coreAttributes.immutable.physicalCharacteristics.length) {
            tags.push(...coreAttributes.immutable.physicalCharacteristics);
        }
        
        // Add facial features
        if (coreAttributes.immutable.facialFeatures && 
            coreAttributes.immutable.facialFeatures.length) {
            tags.push(...coreAttributes.immutable.facialFeatures);
        }
        
        // Add distinctive markings
        if (coreAttributes.immutable.distinctiveMarkings && 
            coreAttributes.immutable.distinctiveMarkings.length) {
            tags.push(...coreAttributes.immutable.distinctiveMarkings);
        }
        
        // Add gender tag (assuming it's in the facial features or physical characteristics)
        // This is a common booru tag format
        tags.push('female'); // Default to female, should be replaced with actual gender
        tags.push('1girl'); // Or 1boy - this is important for booru-style tagging
        
        // Add anthro tag if applicable
        tags.push('anthro'); // Or 'feral' - should come from attributes
        
        // Add source_furry tag which is important for PonyXL
        tags.push('source_furry');
        
        // Add clothing tags
        if (coreAttributes.semiStable.clothingStyle) {
            tags.push(coreAttributes.semiStable.clothingStyle);
        }
        
        // Add accessories
        if (coreAttributes.semiStable.accessories && 
            coreAttributes.semiStable.accessories.length) {
            tags.push(...coreAttributes.semiStable.accessories);
        }
        
        return tags;
    }
    
    /**
     * Build environment tags for PonyXL
     * @param {Object} scenario - Scenario details
     * @returns {Array} - Environment tags
     */
    _buildEnvironmentTags(scenario) {
        const tags = [];
        
        if (scenario.environment) {
            tags.push(scenario.environment);
        }
        
        if (scenario.lighting) {
            tags.push(scenario.lighting);
        }
        
        return tags;
    }
    
    /**
     * Build pose tags for PonyXL
     * @param {Object} scenario - Scenario details
     * @returns {Array} - Pose tags
     */
    _buildPoseTags(scenario) {
        const tags = [];
        
        if (scenario.pose) {
            // Convert natural language pose to booru-style tags
            // e.g., "standing and smiling" becomes ["standing", "smiling"]
            const poseTags = scenario.pose.split(/\s+and\s+|\s*,\s*/);
            tags.push(...poseTags);
        }
        
        return tags;
    }
    
    /**
     * Build the complete positive prompt for PonyXL
     * @param {Array} characterTags - Character tags
     * @param {Array} environmentTags - Environment tags
     * @param {Array} poseTags - Pose tags
     * @param {Boolean} isNSFW - Whether the prompt is NSFW
     * @returns {String} - Complete positive prompt
     */
    _buildPositivePrompt(characterTags, environmentTags, poseTags, isNSFW) {
        const allTags = [
            ...this.qualityTags,
            ...environmentTags,
            'solo', // Common booru tag for single character
            isNSFW ? 'rating_explicit' : 'rating_safe',
            'source_furry', // Important for PonyXL
            ...poseTags,
            'full body', // Common composition tag
            ...characterTags
        ];
        
        return allTags.join(', ');
    }
    
    /**
     * Build negative prompt for PonyXL
     * @param {Array} additionalNegatives - Additional negative prompts
     * @returns {String} - Complete negative prompt
     */
    _buildNegativePrompt(additionalNegatives = []) {
        return [...this.defaultNegativePrompt, ...additionalNegatives].join(', ');
    }
}

module.exports = PonyXLGenerator; 