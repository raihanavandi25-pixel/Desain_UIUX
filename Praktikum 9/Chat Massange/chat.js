const messagesDiv = document.getElementById("messages");
const msgInput = document.getElementById("msgInput");
const sendBtn = document.getElementById("sendBtn");

function sendMessage() {
    const text = msgInput.value.trim();

    if (text === "") return;

    
    messagesDiv.textContent += text + "\n";

    
    messagesDiv.scrollTop = messagesDiv.scrollHeight;

   
    msgInput.value = "";
}


sendBtn.addEventListener("click", sendMessage);


msgInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});
