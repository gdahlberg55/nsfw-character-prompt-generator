/**
 * Server for NSFW Character Prompt Generator
 * 
 * Simple Express server that serves the web interface and
 * provides API endpoints for generating prompts.
 */

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const WebInterface = require('./framework/interfaces/web_interface');

// Initialize the application
const app = express();
const port = process.env.PORT || 3000;

// Add middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Create a simple index page that redirects to the prompt generator
app.get('/', (req, res) => {
    res.redirect('/prompt-generator');
});

// Initialize the web interface
const webInterface = new WebInterface();
webInterface.initializeWithServer(app);

// Start the server
app.listen(port, () => {
    console.log(`NSFW Character Prompt Generator running on http://localhost:${port}`);
}); 