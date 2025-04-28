/**
 * SDXL Prompt Generator
 * 
 * This module implements prompt generation specifically optimized for the SDXL model
 * based on research from Claude conversation.
 */

class SDXLGenerator {
    constructor() {
        this.qualityTags = [
            'masterpiece', 'best quality', 'highly detailed', 
            'photorealistic', '8k', 'professional photography'
        ];
        
        this.defaultNegativePrompt = [
            'deformed', 'bad anatomy', 'disfigured', 'poorly drawn face', 
            'mutation', 'mutated', 'extra limb', 'ugly', 'poorly drawn hands', 
            'missing limb', 'floating limbs', 'disconnected limbs', 'malformed hands', 
            'blurry', '((((mutated hands and fingers))))', 'watermark', 'watermarked', 
            'oversaturated', 'censored', 'distorted hands', 'amputation', 
            'missing hands', 'obese', 'doubled face', 'double hands'
        ];
    }

    /**
     * Generate a prompt for SDXL model
     * @param {Object} characterMatrix - Character consistency matrix
     * @param {Object} scenario - Scenario details
     * @returns {Object} - Generated prompts
     */
    generatePrompt(characterMatrix, scenario = {}) {
        const coreAttributes = characterMatrix.getCoreAttributes();
        
        // Get character description elements
        const characterDescription = this._buildCharacterDescription(coreAttributes);
        
        // Get scenario elements
        const poseAction = scenario.pose || '';
        const environment = scenario.environment || '';
        const lighting = scenario.lighting || '';
        const camera = scenario.camera || 'portrait shot, studio lighting, depth of field, sharp focus, bokeh';
        
        // Build the positive prompt
        const positivePrompt = this._buildPositivePrompt(
            characterDescription,
            poseAction,
            environment,
            lighting,
            camera
        );
        
        // Build the negative prompt
        const negativePrompt = this._buildNegativePrompt(scenario.additionalNegatives || []);
        
        return {
            positive: positivePrompt,
            negative: negativePrompt
        };
    }
    
    /**
     * Build natural language character description for SDXL
     * @param {Object} coreAttributes - Core character attributes
     * @returns {String} - Character description
     */
    _buildCharacterDescription(coreAttributes) {
        // SDXL prefers natural language descriptions rather than tags
        
        const species = coreAttributes.immutable.species ? 
            coreAttributes.immutable.species.toLowerCase() : 'person';
        
        const physicalTraits = coreAttributes.immutable.physicalCharacteristics || [];
        const facialFeatures = coreAttributes.immutable.facialFeatures || [];
        const clothing = coreAttributes.semiStable.clothingStyle || '';
        
        // Convert arrays to natural language description
        const physicalDescription = physicalTraits.join(', ');
        const facialDescription = facialFeatures.join(', ');
        
        // Build the complete description
        return `a ${physicalDescription} ${species} with ${facialDescription}, wearing ${clothing}`;
    }
    
    /**
     * Build the complete positive prompt for SDXL
     * @param {String} characterDescription - Character description
     * @param {String} poseAction - Pose or action
     * @param {String} environment - Environment description
     * @param {String} lighting - Lighting description
     * @param {String} camera - Camera details
     * @returns {String} - Complete positive prompt
     */
    _buildPositivePrompt(characterDescription, poseAction, environment, lighting, camera) {
        const qualityTagsStr = this.qualityTags.join(', ');
        
        // SDXL prompt structure: [Style/Quality], [Character], [Pose], [Environment], [Lighting], [Camera]
        return `${qualityTagsStr}, ${characterDescription}, ${poseAction}, ${environment}, ${lighting}, ${camera}`.trim().replace(/,\s*,/g, ',');
    }
    
    /**
     * Build negative prompt for SDXL
     * @param {Array} additionalNegatives - Additional negative prompts
     * @returns {String} - Complete negative prompt
     */
    _buildNegativePrompt(additionalNegatives = []) {
        return [...this.defaultNegativePrompt, ...additionalNegatives].join(', ');
    }
}

module.exports = SDXLGenerator; 