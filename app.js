// Initialize the Telegram Web App SDK
window.Telegram.WebApp.ready();

// Function to send a message back to the bot
function sendMessage() {
    Telegram.WebApp.sendData("Hello, Bot!");
}

// Closing the Mini App
Telegram.WebApp.close();
