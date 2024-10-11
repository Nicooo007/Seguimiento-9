function sendMessage() {
    const input = document.getElementById('inputMessage');
    const messageText = input.value.trim();
    
    if (messageText === "") return; // Evitar mensajes vacíos
    
    const chatBox = document.querySelector('.chat-box');
    const messageDiv = document.createElement('div');
    
    const sender = messageText.includes("Nicolle") ? "nicolle" : "majo";
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = messageText;
    
    chatBox.appendChild(messageDiv);
    
    chatBox.scrollTop = chatBox.scrollHeight; // Desplazar el scroll al último mensaje
    
    input.value = ""; // Limpiar el input después de enviar el mensaje
}

function deleteChat() {
    const chatBox = document.querySelector('.chat-box');
    chatBox.innerHTML = ''; // Vacía todo el contenido del chat
}
