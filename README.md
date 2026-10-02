# AdGenie 🧞‍♂️ - AI Marketing Assistant

AdGenie is an AI-powered tool that helps e-commerce sellers automate their creative workflow. By simply entering a product name, the app generates catchy Instagram captions, marketing hooks, and SEO hashtags instantly.

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript (Vanilla)
- **Backend:** Node.js, Express.js
- **AI Model:** Google Gemini 2.5 Flash (via Google Generative AI SDK)

## 🤖 Technical Approach
I chose **Gemini 2.5 Flash** because of its low latency and high capability in creative writing tasks. The backend receives the product name, constructs a prompt with specific formatting instructions (HTML tags), and returns structured marketing copy. The architecture keeps the frontend lightweight while securely handling API requests on the server side.

## 🚀 How to Run Locally

1. **Clone the repository**
   ```bash
   git clone [https://github.com/shafeezchappi/AdGenie.git](https://github.com/shafeezchappi/AdGenie.git)
   cd AdGenie

   
