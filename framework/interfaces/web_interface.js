/**
 * Web Interface for NSFW Character Prompt Generator
 * 
 * Provides a simple web-based interface for interacting with the
 * various model-specific prompt generators.
 */

// Import required model generators
const SD15Generator = require('../models/sd15_generator');
const SDXLGenerator = require('../models/sdxl_generator');
const PonyXLGenerator = require('../models/ponyxl_generator');
const IllustriousGenerator = require('../models/illustrious_generator');

// HTML template for the interface
const interfaceTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NSFW Character Prompt Generator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
            color: #333;
        }
        
        h1, h2, h3 {
            color: #2c3e50;
        }
        
        .container {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        
        .panel {
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 20px;
            background-color: #f9f9f9;
        }
        
        .form-group {
            margin-bottom: 15px;
        }
        
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        input, select, textarea {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 16px;
        }
        
        textarea {
            height: 100px;
            resize: vertical;
        }
        
        button {
            background-color: #3498db;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }
        
        button:hover {
            background-color: #2980b9;
        }
        
        .result {
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 15px;
            background-color: #fff;
            min-height: 100px;
        }
        
        .section-toggle {
            cursor: pointer;
            user-select: none;
        }
        
        .section-toggle::after {
            content: " ▼";
            font-size: 0.8em;
        }
        
        .section-toggle.collapsed::after {
            content: " ►";
        }
        
        .collapsed + .section-content {
            display: none;
        }
        
        .tabs {
            display: flex;
            border-bottom: 1px solid #ddd;
            margin-bottom: 20px;
        }
        
        .tab {
            padding: 10px 20px;
            cursor: pointer;
            border: 1px solid transparent;
        }
        
        .tab.active {
            border: 1px solid #ddd;
            border-bottom: 1px solid white;
            border-radius: 4px 4px 0 0;
            background-color: white;
            margin-bottom: -1px;
        }
        
        .tab-content {
            display: none;
        }
        
        .tab-content.active {
            display: block;
        }
        
        .copy-button {
            background-color: #27ae60;
            margin-top: 10px;
        }
        
        .copy-button:hover {
            background-color: #219653;
        }
        
        .age-verification {
            background-color: #ffcccc;
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 5px;
            border: 1px solid #ff8888;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="age-verification">
            <h3>Age Verification Required</h3>
            <p>This tool is intended for adults (18+) only. By using this application, you confirm that:</p>
            <ul>
                <li>You are at least 18 years old</li>
                <li>You will comply with platform terms of service</li>
                <li>You will only create content that is legal in your jurisdiction</li>
                <li>You will only create fictional adult characters</li>
            </ul>
            <div class="form-group">
                <label>
                    <input type="checkbox" id="age-verification"> I confirm that I am at least 18 years old
                </label>
            </div>
            <button id="verify-age">Verify Age</button>
        </div>
        
        <div id="app-content" style="display: none;">
            <h1>NSFW Character Prompt Generator</h1>
            <p>Generate optimized character prompts for different AI image generation models.</p>
            
            <div class="panel">
                <h2 class="section-toggle">Model Selection</h2>
                <div class="section-content">
                    <div class="form-group">
                        <label for="model-select">Select Model:</label>
                        <select id="model-select">
                            <option value="sd15">Stable Diffusion 1.5</option>
                            <option value="sdxl">Stable Diffusion XL</option>
                            <option value="ponyxl">Pony Diffusion</option>
                            <option value="illustrious">Illustrious Checkpoint</option>
                        </select>
                    </div>
                    <div id="model-info" class="result"></div>
                </div>
            </div>
            
            <div class="panel">
                <h2 class="section-toggle">Character Attributes</h2>
                <div class="section-content">
                    <div class="form-group">
                        <label for="character-gender">Gender:</label>
                        <input type="text" id="character-gender" placeholder="e.g., Female, Male, Non-binary">
                    </div>
                    <div class="form-group">
                        <label for="character-age">Age Range:</label>
                        <input type="text" id="character-age" placeholder="e.g., 20-25, 30s">
                    </div>
                    <div class="form-group">
                        <label for="character-body">Body Type:</label>
                        <input type="text" id="character-body" placeholder="e.g., Slim, Athletic, Curvy">
                    </div>
                    <div class="form-group">
                        <label for="character-hair">Hair:</label>
                        <input type="text" id="character-hair" placeholder="e.g., Long black hair, Short blonde bob">
                    </div>
                    <div class="form-group">
                        <label for="character-face">Face Features:</label>
                        <input type="text" id="character-face" placeholder="e.g., Full lips, Sharp jawline, High cheekbones">
                    </div>
                    <div class="form-group">
                        <label for="character-skin">Skin Tone:</label>
                        <input type="text" id="character-skin" placeholder="e.g., Pale, Tan, Dark">
                    </div>
                    <div class="form-group">
                        <label for="character-distinctive">Distinctive Features:</label>
                        <input type="text" id="character-distinctive" placeholder="e.g., Tattoos, Piercings, Scars">
                    </div>
                </div>
            </div>
            
            <div class="panel">
                <h2 class="section-toggle">Outfit/Clothing</h2>
                <div class="section-content">
                    <div class="form-group">
                        <label for="clothing-main">Main Clothing Items:</label>
                        <input type="text" id="clothing-main" placeholder="e.g., Black leather skirt, White blouse">
                    </div>
                    <div class="form-group">
                        <label for="clothing-accessories">Accessories:</label>
                        <input type="text" id="clothing-accessories" placeholder="e.g., Gold necklace, Silver earrings">
                    </div>
                    <div class="form-group">
                        <label for="clothing-materials">Materials/Textures:</label>
                        <input type="text" id="clothing-materials" placeholder="e.g., Silk, Leather, Lace">
                    </div>
                    <div class="form-group">
                        <label for="clothing-style">Style/Aesthetic:</label>
                        <input type="text" id="clothing-style" placeholder="e.g., Gothic, Casual, Formal">
                    </div>
                </div>
            </div>
            
            <div class="panel">
                <h2 class="section-toggle">NSFW Elements</h2>
                <div class="section-content">
                    <div class="form-group">
                        <label for="nsfw-explicitness">Level of Explicitness:</label>
                        <select id="nsfw-explicitness">
                            <option value="mild">Mild (Suggestive)</option>
                            <option value="moderate">Moderate (Partial)</option>
                            <option value="explicit">Explicit (Full)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="nsfw-details">Explicit Details:</label>
                        <textarea id="nsfw-details" placeholder="Describe the explicit elements..."></textarea>
                    </div>
                </div>
            </div>
            
            <div class="panel">
                <h2 class="section-toggle">Pose & Setting</h2>
                <div class="section-content">
                    <div class="form-group">
                        <label for="pose-description">Character Pose:</label>
                        <input type="text" id="pose-description" placeholder="e.g., Standing with hand on hip, Sitting on chair">
                    </div>
                    <div class="form-group">
                        <label for="setting-description">Setting/Background:</label>
                        <input type="text" id="setting-description" placeholder="e.g., Bedroom, Beach at sunset, Urban alley">
                    </div>
                    <div class="form-group">
                        <label for="lighting-description">Lighting:</label>
                        <input type="text" id="lighting-description" placeholder="e.g., Soft ambient light, Harsh contrast, Golden hour">
                    </div>
                </div>
            </div>
            
            <div class="panel">
                <h2 class="section-toggle">Technical Specifications</h2>
                <div class="section-content">
                    <div class="form-group">
                        <label for="camera-specs">Camera/Lens:</label>
                        <input type="text" id="camera-specs" placeholder="e.g., 85mm portrait lens, Wide angle">
                    </div>
                    <div class="form-group">
                        <label for="rendering-style">Rendering Style:</label>
                        <input type="text" id="rendering-style" placeholder="e.g., Hyperrealistic, Anime, Oil painting">
                    </div>
                    <div class="form-group">
                        <label for="additional-effects">Additional Effects:</label>
                        <input type="text" id="additional-effects" placeholder="e.g., Volumetric lighting, Bokeh, Film grain">
                    </div>
                </div>
            </div>
            
            <button id="generate-prompt">Generate Prompt</button>
            
            <div class="panel">
                <h2>Generated Prompts</h2>
                <div class="tabs">
                    <div class="tab active" data-tab="positive">Positive Prompt</div>
                    <div class="tab" data-tab="negative">Negative Prompt</div>
                </div>
                <div class="tab-content active" id="positive-content">
                    <div id="positive-prompt" class="result"></div>
                    <button id="copy-positive" class="copy-button">Copy Positive Prompt</button>
                </div>
                <div class="tab-content" id="negative-content">
                    <div id="negative-prompt" class="result"></div>
                    <button id="copy-negative" class="copy-button">Copy Negative Prompt</button>
                </div>
            </div>
        </div>
    </div>
    
    <script>
        // Model information
        const modelInfo = {
            sd15: {
                name: "Stable Diffusion 1.5",
                description: "Emphasizes keyword-based prompting with aggressive weighting. Great for detailed character generation with specific attributes.",
                tips: "Use explicit keywords and aggressive weighting (1.2-1.4) for important elements."
            },
            sdxl: {
                name: "Stable Diffusion XL",
                description: "Focus on natural language with moderate weighting. Excellent for realistic character rendering.",
                tips: "Use more natural language descriptions with moderate weighting (1.05-1.15)."
            },
            ponyxl: {
                name: "Pony Diffusion",
                description: "Prioritizes stylistic elements and vibrant color descriptions. Great for stylized character designs.",
                tips: "Focus on color specifications (1.25) and style descriptors (1.3) for best results."
            },
            illustrious: {
                name: "Illustrious Checkpoint",
                description: "Highlights anatomical detail and realistic lighting. Excellent for photorealistic character generation.",
                tips: "Emphasize anatomical details (1.3) and lighting setup (1.15) for optimal results."
            }
        };
        
        // Initialize model generators
        const generators = {
            sd15: new SD15Generator(),
            sdxl: new SDXLGenerator(),
            ponyxl: new PonyXLGenerator(),
            illustrious: new IllustriousGenerator()
        };
        
        document.addEventListener('DOMContentLoaded', function() {
            // Age verification
            const verifyAgeButton = document.getElementById('verify-age');
            const ageCheckbox = document.getElementById('age-verification');
            const appContent = document.getElementById('app-content');
            
            verifyAgeButton.addEventListener('click', function() {
                if (ageCheckbox.checked) {
                    document.querySelector('.age-verification').style.display = 'none';
                    appContent.style.display = 'block';
                } else {
                    alert('You must confirm that you are at least 18 years old to use this application.');
                }
            });
            
            // Model selection
            const modelSelect = document.getElementById('model-select');
            const modelInfoDiv = document.getElementById('model-info');
            
            modelSelect.addEventListener('change', function() {
                const selectedModel = modelSelect.value;
                const info = modelInfo[selectedModel];
                modelInfoDiv.innerHTML = \`
                    <h3>\${info.name}</h3>
                    <p>\${info.description}</p>
                    <p><strong>Tips:</strong> \${info.tips}</p>
                \`;
            });
            
            // Trigger initial model info display
            modelSelect.dispatchEvent(new Event('change'));
            
            // Section toggles
            const toggles = document.querySelectorAll('.section-toggle');
            toggles.forEach(toggle => {
                toggle.addEventListener('click', function() {
                    this.classList.toggle('collapsed');
                });
            });
            
            // Tab switching
            const tabs = document.querySelectorAll('.tab');
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const tabName = this.getAttribute('data-tab');
                    
                    // Update active tab
                    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Update active content
                    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                    document.getElementById(\`\${tabName}-content\`).classList.add('active');
                });
            });
            
            // Generate prompt
            const generateButton = document.getElementById('generate-prompt');
            const positivePromptDiv = document.getElementById('positive-prompt');
            const negativePromptDiv = document.getElementById('negative-prompt');
            
            generateButton.addEventListener('click', function() {
                const selectedModel = modelSelect.value;
                const generator = generators[selectedModel];
                
                // Build character matrix from form inputs
                const characterMatrix = {
                    getCoreAttributes: function() {
                        return {
                            immutable: {
                                species: 'human',
                                physicalCharacteristics: [
                                    document.getElementById('character-gender').value,
                                    document.getElementById('character-age').value,
                                    document.getElementById('character-body').value,
                                    document.getElementById('character-hair').value,
                                    document.getElementById('character-skin').value
                                ].filter(val => val.trim().length > 0),
                                facialFeatures: document.getElementById('character-face').value.split(',').map(s => s.trim()).filter(s => s.length > 0),
                                distinctiveMarkings: document.getElementById('character-distinctive').value.split(',').map(s => s.trim()).filter(s => s.length > 0)
                            },
                            semiStable: {
                                clothingStyle: document.getElementById('clothing-style').value,
                                accessories: document.getElementById('clothing-accessories').value.split(',').map(s => s.trim()).filter(s => s.length > 0)
                            }
                        };
                    }
                };
                
                // Build scenario object
                const scenario = {
                    pose: document.getElementById('pose-description').value,
                    environment: document.getElementById('setting-description').value,
                    lighting: document.getElementById('lighting-description').value,
                    camera: document.getElementById('camera-specs').value,
                    explicitElements: document.getElementById('nsfw-details').value
                };
                
                // Generate the prompt
                const prompt = generator.generatePrompt(characterMatrix, scenario);
                
                // Display prompts
                positivePromptDiv.textContent = prompt.positive;
                negativePromptDiv.textContent = prompt.negative;
            });
            
            // Copy button functionality
            const copyPositiveButton = document.getElementById('copy-positive');
            const copyNegativeButton = document.getElementById('copy-negative');
            
            copyPositiveButton.addEventListener('click', function() {
                copyToClipboard(positivePromptDiv.textContent);
                this.textContent = 'Copied!';
                setTimeout(() => { this.textContent = 'Copy Positive Prompt'; }, 2000);
            });
            
            copyNegativeButton.addEventListener('click', function() {
                copyToClipboard(negativePromptDiv.textContent);
                this.textContent = 'Copied!';
                setTimeout(() => { this.textContent = 'Copy Negative Prompt'; }, 2000);
            });
            
            function copyToClipboard(text) {
                const textarea = document.createElement('textarea');
                textarea.value = text;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
            }
        });
    </script>
</body>
</html>`;

/**
 * WebInterface class for rendering and handling the web interface
 */
class WebInterface {
    constructor() {
        this.template = interfaceTemplate;
        this.sd15Generator = new SD15Generator();
        this.sdxlGenerator = new SDXLGenerator();
        this.ponyXLGenerator = new PonyXLGenerator();
        this.illustriousGenerator = new IllustriousGenerator();
    }
    
    /**
     * Render the web interface
     * @returns {String} - HTML content
     */
    render() {
        return this.template;
    }
    
    /**
     * Initialize the web interface with server-side frameworks
     * @param {Object} server - Server instance (Express, etc.)
     */
    initializeWithServer(server) {
        // Example with Express.js
        server.get('/prompt-generator', (req, res) => {
            res.send(this.render());
        });
        
        // API endpoint for generating prompts via AJAX
        server.post('/api/generate-prompt', (req, res) => {
            const { modelType, characterMatrix, scenario } = req.body;
            
            let generator;
            switch (modelType) {
                case 'sd15':
                    generator = this.sd15Generator;
                    break;
                case 'sdxl':
                    generator = this.sdxlGenerator;
                    break;
                case 'ponyxl':
                    generator = this.ponyXLGenerator;
                    break;
                case 'illustrious':
                    generator = this.illustriousGenerator;
                    break;
                default:
                    return res.status(400).json({ error: 'Invalid model type' });
            }
            
            const prompt = generator.generatePrompt(characterMatrix, scenario);
            res.json(prompt);
        });
    }
}

module.exports = WebInterface; 