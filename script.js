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
    const spinBtn = document.getElementById('spin-btn');

    if (petBtn) {
        petBtn.addEventListener('click', () => {
            console.log("Tama gestreichelt!");
            energyBar.style.width = '100%';
        });
    }

    if (spinBtn) {
        spinBtn.addEventListener('click', () => {
            console.log("Glücksrad dreht sich...");
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
