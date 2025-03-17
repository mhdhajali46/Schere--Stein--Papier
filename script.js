// 🕹️ Funktion für die Spielerwahl
function playGame(wahlSpieler) {
    let symbolSpieler, symbolComputer;

    // 🏆 Setzt die Wahl des Spielers
    if (wahlSpieler === 1) {
        symbolSpieler = "Schere";
    } else if (wahlSpieler === 2) {
        symbolSpieler = "Stein";
    } else if (wahlSpieler === 3) {
        symbolSpieler = "Papier";
    }

    // 🎰 Zufällige Wahl für den Computer
    let ausgedachteZahl = Math.floor(Math.random() * 3) + 1;
    if (ausgedachteZahl === 1) {
        symbolComputer = "Schere";
    } else if (ausgedachteZahl === 2) {
        symbolComputer = "Stein";
    } else {
        symbolComputer = "Papier";
    }

    
    document.getElementById("player-choice").innerText = `👤 Du: ${symbolSpieler}`;
    document.getElementById("computer-choice").innerText = `💻 Computer: ${symbolComputer}`;

    // 🏆 Gewinnerlogik prüfen
    let resultElement = document.getElementById("result");
    if (symbolSpieler === symbolComputer) {
        resultElement.innerHTML = "⚖️ <strong>Unentschieden!</strong> ⚖️";
        resultElement.style.color = "gray";
    } else if (
        (symbolSpieler === "Schere" && symbolComputer === "Papier") ||
        (symbolSpieler === "Stein" && symbolComputer === "Schere") ||
        (symbolSpieler === "Papier" && symbolComputer === "Stein")
    ) {
        gewinneSpieler++;
        resultElement.innerHTML = "🔥 <strong>Du gewinnst!</strong> 🔥";
        resultElement.style.color = "green";
    } else {
        gewinneComputer++;
        resultElement.innerHTML = "💀 <strong>Computer gewinnt!</strong> 💀";
        resultElement.style.color = "red";
    }

    // 🏅 Punktestand anzeigen
    resultElement.innerHTML += ` (Spieler: ${gewinneSpieler} - Computer: ${gewinneComputer})`;
}

// 🔄 Funktion zum Neustarten des Spiels
function resetGame() {
    gewinneSpieler = 0;
    gewinneComputer = 0;
    document.getElementById("result").innerHTML = "Drücke auf eine Option, um zu starten!";
    document.getElementById("player-choice").innerText = "👤 Deine Wahl";
    document.getElementById("computer-choice").innerText = "💻 Computer Wahl";
}
