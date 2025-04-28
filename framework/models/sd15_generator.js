/**
 * SD 1.5 Prompt Generator
 * 
 * This module implements prompt generation specifically optimized for the Stable Diffusion 1.5 model
 * based on research from Claude conversation.
 */

class SD15Generator {
    constructor() {
        this.qualityTags = [
            'masterpiece', 'best quality', 'high resolution', 
            'detailed', '8k', 'highly detailed'
        ];
        
        this.defaultNegativePrompt = [
            'nsfw', 'lowres', 'bad anatomy', 'bad hands', 'text', 'error', 
            'missing fingers', 'extra digit', 'fewer digits', 'cropped', 
            'worst quality', 'low quality', 'normal quality', 'jpeg artifacts', 
            'signature', 'watermark', 'username', 'blurry', 'artist name',
            'malformed hands', 'mutated', 'poorly drawn face', 'mutation', 
            'deformed', 'badly drawn', 'extra limbs'
        ];
    }

    /**
     * Generate a prompt for SD 1.5 model
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
        const camera = scenario.camera || '';
        const explicitElements = scenario.explicitElements || '';
        
        // Build the positive prompt
        const positivePrompt = this._buildPositivePrompt(
            characterDescription,
            poseAction,
            environment,
            lighting,
            camera,
            explicitElements
        );
        
        // Build the negative prompt
        const negativePrompt = this._buildNegativePrompt(scenario.additionalNegatives || []);
        
        return {
            positive: positivePrompt,
            negative: negativePrompt
        };
    }
    
    /**
     * Build keyword-based character description for SD 1.5
     * @param {Object} coreAttributes - Core character attributes
     * @returns {String} - Character description
     */
    _buildCharacterDescription(coreAttributes) {
        // SD 1.5 works better with explicit keywords and aggressive weighting
        
        const species = coreAttributes.immutable.species ? 
            `${coreAttributes.immutable.species.toLowerCase()}:1.3` : 'person:1.3';
        
        const physicalTraits = coreAttributes.immutable.physicalCharacteristics || [];
        const facialFeatures = coreAttributes.immutable.facialFeatures || [];
        const distinctiveMarkings = coreAttributes.immutable.distinctiveMarkings || [];
        const clothing = coreAttributes.semiStable.clothingStyle || '';
        const accessories = coreAttributes.semiStable.accessories || [];
        
        // Convert arrays to weighted keyword format for SD 1.5
        const physicalDescription = physicalTraits.map(trait => `${trait}:1.2`).join(', ');
        const facialDescription = facialFeatures.map(feature => `${feature}:1.15`).join(', ');
        const markingsDescription = distinctiveMarkings.map(mark => `${mark}:1.25`).join(', ');
        const clothingDescription = `${clothing}:1.2`;
        const accessoriesDescription = accessories.map(item => `${item}:1.1`).join(', ');
        
        // Build the complete description with aggressive weighting
        const parts = [
            species,
            physicalDescription,
            facialDescription,
            markingsDescription,
            clothingDescription,
            accessoriesDescription
        ].filter(part => part && part.length > 0);
        
        return parts.join(', ');
    }
    
    /**
     * Build the complete positive prompt for SD 1.5 with appropriate weighting
     * @param {String} characterDescription - Character description
     * @param {String} poseAction - Pose or action
     * @param {String} environment - Environment description
     * @param {String} lighting - Lighting description
     * @param {String} camera - Camera details
     * @param {String} explicitElements - Explicit elements description
     * @returns {String} - Complete positive prompt
     */
    _buildPositivePrompt(characterDescription, poseAction, environment, lighting, camera, explicitElements) {
        // Apply weights to quality tags
        const qualityTagsStr = this.qualityTags.map(tag => `${tag}:1.4`).join(', ');
        
        // Apply weights to scenario elements
        const weightedPose = poseAction ? `${poseAction}:1.25` : '';
        const weightedEnvironment = environment ? `${environment}:1.1` : '';
        const weightedLighting = lighting ? `${lighting}:1.15` : '';
        const weightedCamera = camera ? `${camera}:1.05` : '';
        const weightedExplicit = explicitElements ? `${explicitElements}:1.3` : '';
        
        // SD 1.5 prompt structure with aggressive weighting
        // [Quality], [Character], [Explicit], [Pose], [Environment], [Lighting], [Camera]
        const parts = [
            qualityTagsStr,
            characterDescription,
            weightedExplicit,
            weightedPose,
            weightedEnvironment,
            weightedLighting,
            weightedCamera
        ].filter(part => part && part.length > 0);
        
        return parts.join(', ').trim().replace(/,\s*,/g, ',');
    }
    
    /**
     * Build negative prompt for SD 1.5
     * @param {Array} additionalNegatives - Additional negative prompts
     * @returns {String} - Complete negative prompt
     */
    _buildNegativePrompt(additionalNegatives = []) {
        return [...this.defaultNegativePrompt, ...additionalNegatives].join(', ');
    }
}

module.exports = SD15Generator; 