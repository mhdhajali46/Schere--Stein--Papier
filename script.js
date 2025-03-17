let gewinneSpieler = 0;
let gewinneComputer = 0;

function playGame(wahlSpieler) {
    let symbolSpieler, symbolComputer;

    symbolSpieler = ["Schere ✂️", "Stein 🧱", "Papier 📄"][wahlSpieler - 1];

    let ausgedachteZahl = Math.floor(Math.random() * 3);
    symbolComputer = ["Schere ✂️", "Stein 🧱", "Papier 📄"][ausgedachteZahl];

    document.getElementById("player-choice").innerText = `👤 Du: ${symbolSpieler}`;
    document.getElementById("computer-choice").innerText = `💻 Computer: ${symbolComputer}`;

    let resultElement = document.getElementById("result");
    if (symbolSpieler === symbolComputer) {
        resultElement.innerHTML = "⚖️ <strong>Unentschieden!</strong> ⚖️";
        resultElement.style.color = "gray";
    } else if (
        (symbolSpieler === "Schere ✂️" && symbolComputer === "Papier 📄") ||
        (symbolSpieler === "Stein 🧱" && symbolComputer === "Schere ✂️") ||
        (symbolSpieler === "Papier 📄" && symbolComputer === "Stein 🧱")
    ) {
        gewinneSpieler++;
        resultElement.innerHTML = "🔥 <strong>Du gewinnst!</strong> 🔥";
        resultElement.style.color = "green";
    } else {
        gewinneComputer++;
        resultElement.innerHTML = "💀 <strong>Computer gewinnt!</strong> 💀";
        resultElement.style.color = "red";
    }

    resultElement.innerHTML += ` (Spieler: ${gewinneSpieler} - Computer: ${gewinneComputer})`;
}

function resetGame() {
    gewinneSpieler = 0;
    gewinneComputer = 0;
    document.getElementById("result").innerHTML = "Drücke auf eine Option, um zu starten!";
    document.getElementById("player-choice").innerText = "👤 Deine Wahl";
    document.getElementById("computer-choice").innerText = "💻 Computer Wahl";
}