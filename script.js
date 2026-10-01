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
    const petBtn = document.getElementById('pet-btn');
    const energyBar = document.getElementById('energy-bar');
    
    // --- Glücksrad ---
    const spinBtn = document.getElementById('spin-btn');
    const wheel = document.getElementById('wheel');
    const wheelResult = document.getElementById('wheel-result');
    
    // WICHTIG: Diese Werte müssen exakt mit der Reihenfolge in der HTML-Datei übereinstimmen!
    const wheelSegments = ["Massage", "Kino", "Kochen", "Joker", "Ausflug", "Niete"];
    let currentRotation = 0;
    let isSpinning = false;

    // --- Streicheln: Energie steigt, Tamagotchi freut sich ---
    const tama = document.getElementById('tama-img');
    const tamaMsg = document.getElementById('tama-msg');
    const faces = ['(◕‿◕)', '(｡♥‿♥｡)', '(≧◡≦)', '(◠‿◠)✿'];
    const msgs = ['Hihi, das kitzelt!', 'Mehr bitte!', 'Ich hab dich lieb ♥', 'So schön warm...'];
    let energy = 80;

    if (petBtn) {
        petBtn.addEventListener('click', () => {
            energy = Math.min(100, energy + 5);
            energyBar.style.width = energy + '%';
            const k = Math.floor(Math.random() * faces.length);
            tama.textContent = faces[k];
            tamaMsg.textContent = energy >= 100 ? 'Voll aufgeladen! ♥♥♥' : msgs[k];
            tama.classList.remove('happy');
            void tama.offsetWidth; // Animation neu starten
            tama.classList.add('happy');
        });
    }

    if (spinBtn) {
        spinBtn.addEventListener('click', () => {
            if (isSpinning) return; // Blockiert den Button, solange sich das Rad dreht
            isSpinning = true;
            spinBtn.disabled = true;
            wheelResult.innerText = "[ DREHT... ]";

            // Zufällige Rotation: Mindestens 4 volle Umdrehungen (1440 Grad) + ein zufälliger Winkel
            const randomSpin = Math.floor(Math.random() * 360) + 1440; 
            currentRotation += randomSpin;
            
            wheel.style.transform = `rotate(${currentRotation}deg)`;
        });
        
        // Dieses Event feuert automatisch, sobald die CSS-Dreh-Animation abgeschlossen ist
        wheel.addEventListener('transitionend', (e) => {
            if (e.target !== wheel || !isSpinning) return;
            isSpinning = false;
            spinBtn.disabled = false;

            // Der Pfeil zeigt nach oben (0 Grad). Das Rad dreht im Uhrzeigersinn,
            // also liegt unter dem Pfeil der Radwinkel (360 - Drehung) mod 360.
            const actualDeg = (360 - (currentRotation % 360)) % 360;
            const segmentIndex = Math.floor(actualDeg / 60);

            wheelResult.innerText = `> ${wheelSegments[segmentIndex].toUpperCase()} <`;
        });
    }

    // --- NICKS FUNKTIONEN ---
    const missYouBtn = document.getElementById('miss-you-btn');
    const devSyncBtn = document.getElementById('dev-sync-btn');

    if (missYouBtn) {
        missYouBtn.addEventListener('click', () => {
            const status = document.getElementById('ping-status');
            status.innerText = '> PING GESENDET ♥ <';
            missYouBtn.disabled = true;
            setTimeout(() => {
                status.innerText = 'Bereit.';
                missYouBtn.disabled = false;
            }, 3000);
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
