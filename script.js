document.getElementById('encrypt-button').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    const encryptedText = encryptText(inputText);
    displayOutput(encryptedText);
});

document.getElementById('decrypt-button').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    const decryptedText = decryptText(inputText);
    displayOutput(decryptedText);
});

function encryptText(text) {
    const encryptionMap = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
    return text.replace(/[eioua]/g, match => encryptionMap[match]);
}

function decryptText(text) {
    const decryptionMap = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };
    return text.replace(/enter|imes|ai|ober|ufat/g, match => decryptionMap[match]);
}

function displayOutput(text) {
    const outputTextElement = document.getElementById('output-text');
    outputTextElement.textContent = text;
}
