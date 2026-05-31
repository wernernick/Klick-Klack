document.addEventListener('DOMContentLoaded', () => {
    
    // --- KLAUDIAS BEREICH ---
    const petBtn = document.getElementById('pet-btn');
    const energyBar = document.getElementById('energy-bar');
    const spinBtn = document.getElementById('spin-btn');

    petBtn.addEventListener('click', () => {
        console.log("Tama gestreichelt! (Supabase Update folgt)");
        energyBar.style.width = '100%';
    });

    spinBtn.addEventListener('click', () => {
        console.log("Glücksrad dreht sich...");
    });

    // --- NICKS BEREICH ---
    const missYouBtn = document.getElementById('miss-you-btn');
    const devSyncBtn = document.getElementById('dev-sync-btn');

    missYouBtn.addEventListener('click', () => {
        console.log("Ping via Formspree gesendet!");
        // Fetch Call für Push-Nachricht
    });

    // Der versteckte Keyboard-Only Button
    devSyncBtn.addEventListener('click', (e) => {
        // Doppelte Sicherheit: Falls pointer-events im CSS umgangen wird, 
        // blockt das JS gezielt jeden Klick, der von einer Maus (oder Touch) kommt.
        if (e.pointerType === "mouse" || e.pointerType === "touch") {
            e.preventDefault();
            return;
        }
        
        console.log("DEV-SYNC AUSGEFÜHRT! (Erfolgreich per Tastatur ausgelöst)");
        alert("Datenbank-Sync gestartet...");
    });
});
