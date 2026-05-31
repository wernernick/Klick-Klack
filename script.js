document.addEventListener('DOMContentLoaded', () => {
    
    // --- BEREICHE & LOGIN LOGIK ---
    const loginScreen = document.getElementById('login-screen');
    const mainDashboard = document.getElementById('main-dashboard');
    const klaudiaSection = document.getElementById('klaudia-section');
    const nickSection = document.getElementById('nick-section');

    const btnLoginKlaudia = document.getElementById('login-klaudia');
    const btnLoginNick = document.getElementById('login-nick');

    // Login für Klaudia
    btnLoginKlaudia.addEventListener('click', () => {
        loginScreen.classList.add('hidden'); // Login verstecken
        mainDashboard.classList.remove('hidden'); // Dashboard-Container zeigen
        nickSection.classList.add('hidden'); // Nicks Bereich verstecken
        // Der Body bekommt den karierten Hintergrund aus der CSS zurück
        document.body.style.backgroundColor = "#f0f0f0";
    });

    // Login für Nick
    btnLoginNick.addEventListener('click', () => {
        loginScreen.classList.add('hidden'); // Login verstecken
        mainDashboard.classList.remove('hidden'); // Dashboard-Container zeigen
        klaudiaSection.classList.add('hidden'); // Klaudias Bereich verstecken
        document.body.style.backgroundColor = "#f0f0f0";
    });

    // --- KLAUDIAS FUNKTIONEN ---
    // --- KLAUDIAS FUNKTIONEN ---
    const petBtn = document.getElementById('pet-btn');
    const energyBar = document.getElementById('energy-bar');
    
    // --- NEU: Glücksrad Variablen ---
    const spinBtn = document.getElementById('spin-btn');
    const wheel = document.getElementById('wheel');
    const wheelResult = document.getElementById('wheel-result');
    
    // WICHTIG: Diese Werte müssen exakt mit der Reihenfolge in der HTML-Datei übereinstimmen!
    const wheelSegments = ["Massage", "Kino", "Kochen", "Joker", "Ausflug", "Niete"];
    let currentRotation = 0;
    let isSpinning = false;

    if (spinBtn) {
        spinBtn.addEventListener('click', () => {
            if (isSpinning) return; // Blockiert den Button, solange sich das Rad dreht
            isSpinning = true;
            wheelResult.innerText = "[ DREHT... ]";

            // Zufällige Rotation: Mindestens 4 volle Umdrehungen (1440 Grad) + ein zufälliger Winkel
            const randomSpin = Math.floor(Math.random() * 360) + 1440; 
            currentRotation += randomSpin;
            
            wheel.style.transform = `rotate(${currentRotation}deg)`;
        });
        
        // Dieses Event feuert automatisch, sobald die CSS-Dreh-Animation abgeschlossen ist
        wheel.addEventListener('transitionend', () => {
            isSpinning = false;
            
            // Mathematische Berechnung, welches Segment oben am Pfeil (270 Grad) steht
            // 1. Die gesamte Drehung auf einen Wert zwischen 0 und 359 normalisieren
            const normalizedRotation = currentRotation % 360;
            
            // 2. Da sich das Rad im Uhrzeigersinn dreht, wandern die Segmente gegen den Uhrzeigersinn unter dem Pfeil durch
            // Der Pfeil befindet sich oben bei 270 Grad (bezogen auf den Startpunkt bei 3 Uhr)
            const actualDeg = (270 - normalizedRotation + 360) % 360;
            
            // 3. Jedes Segment ist 60 Grad groß (360 / 6)
            const segmentIndex = Math.floor(actualDeg / 60);

            // Ergebnis anzeigen
            wheelResult.innerText = `> ${wheelSegments[segmentIndex].toUpperCase()} <`;
        });
    }

    // --- NICKS FUNKTIONEN ---
    const missYouBtn = document.getElementById('miss-you-btn');
    const devSyncBtn = document.getElementById('dev-sync-btn');

    if (missYouBtn) {
        missYouBtn.addEventListener('click', () => {
            console.log("Ping via Formspree gesendet!");
        });
    }

    // Maus-gesperrter Button (Nur Tastatur)
    if (devSyncBtn) {
        devSyncBtn.addEventListener('click', (e) => {
            if (e.pointerType === "mouse" || e.pointerType === "touch") {
                e.preventDefault();
                return;
            }
            console.log("DEV-SYNC AUSGEFÜHRT!");
            alert("Datenbank-Sync gestartet...");
        });
    }
});
