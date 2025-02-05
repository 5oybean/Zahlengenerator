function generiereZahl() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    if (isNaN(min) || isNaN(max) || min >= max) {
        alert('Bitte gültige Werte eingeben!');
        return;
    }
    const zahl = Math.floor(Math.random() * (max - min + 1)) + min;
    const zahlBox = document.getElementById('zahl');
    zahlBox.textContent = zahl;
    zahlBox.style.transform = 'scale(1.2)';
    setTimeout(() => {
        zahlBox.style.transform = 'scale(1)';
    }, 300);
}