require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(express.static(__dirname));
app.use(bodyParser.json());

// User must replace this with their own key
const genAI = new GoogleGenerativeAI("PUT_YOUR_API_KEY_HERE"); 

app.post('/generate', async (req, res) => {
    const productName = req.body.product;
    console.log(`Received request for: ${productName}`); // Debugging log

    try {
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        const prompt = `
        Act as a professional marketing expert. 
        I have a product called: "${productName}".
        
        Please generate:
        1. A catchy Instagram Caption (with emojis).
        2. 3 Short Marketing Hooks (bullet points).
        3. 10 Trending SEO Hashtags.
        
        Format the output with HTML tags (<br> for new lines, <b> for bold) so it looks clean.
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        
        console.log("AI Generation Successful!"); // Debugging log
        res.json({ success: true, data: text });

    } catch (error) {
        console.error("CRITICAL ERROR:", error); // This prints the real error to your terminal
        res.json({ success: false, error: error.message });
    }
});

app.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`);
});