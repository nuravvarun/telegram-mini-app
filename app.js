// Initialize the Telegram Web App SDK
window.Telegram.WebApp.ready();

// Function to send a message back to the bot
function sendMessage() {
    Telegram.WebApp.sendData("Hello, Bot!");
}

// Closing the Mini App
Telegram.WebApp.close();



// const imageHolder = document.getElementById("imageHolder");
// const scrollContent = document.getElementById("scrollContent");
// let lastScroll = 0;

// window.addEventListener("scroll", () => {
//     const currentScroll = window.scrollY;

//     if (currentScroll > lastScroll) {
//         // Scrolling down - hide image and show content
//         imageHolder.classList.add("hide-image");
//         scrollContent.classList.add("show-content");
//     } else {
//         // Scrolling up - show image and hide content
//         imageHolder.classList.remove("hide-image");
//         scrollContent.classList.remove("show-content");
//     }
//     lastScroll = currentScroll;
// });

function sendMessage() {
    alert("Message sent to bot!");
}
