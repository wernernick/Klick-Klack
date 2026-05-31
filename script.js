document.addEventListener('DOMContentLoaded', () => {
    
    // --- DOM Elemente ---
    const petBtn = document.getElementById('pet-btn');
    const energyBar = document.getElementById('energy-bar');
    const tamagotchiImg = document.getElementById('tamagotchi-img');
    
    const missYouBtn = document.getElementById('miss-you-btn');
    
    const spinBtn = document.getElementById('spin-btn');
    const wheel = document.getElementById('wheel');
    const resultText = document.getElementById('wheel-result-text');

    // --- Konfiguration (URLs hier eintragen) ---
    const FORMSPREE_URL = "DEINE_FORMSPREE_URL_HIER";
    
    // Bilder-URLs (Dein Instagram-CDN)
    const IMG_HAPPY = "https://..."; 
    const IMG_SAD = "https://...";

    // --- 1. Tamagotchi Logik (Platzhalter) ---
    petBtn.addEventListener('click', () => {
        console.log("Tamagotchi gestreichelt!");
        // TODO: Später Supabase-Update aufrufen
        energyBar.style.width = '100%';
        energyBar.style.backgroundColor = '#10b981';
    });

    // --- 2. Miss-You Button Logik ---
    missYouBtn.addEventListener('click', async () => {
        console.log("Miss-You Button geklickt!");
        
        // Formspree Fetch-Call (Lautlos im Hintergrund)
        /*
        try {
            await fetch(FORMSPREE_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: "Jemand vermisst dich! ❤️" })
            });
            alert("Nachricht verschickt!");
        } catch (error) {
            console.error("Fehler beim Senden:", error);
        }
        */
        
        // TODO: Visuelles Feedback (Herzen fliegen lassen)
    });

    // --- 3. Glücksrad Logik (Platzhalter) ---
    spinBtn.addEventListener('click', () => {
        // Zufällige Rotation zwischen 1000 und 4000 Grad
        const randomDegree = Math.floor(Math.random() * 3000) + 1000;
        wheel.style.transform = `rotate(${randomDegree}deg)`;
        
        // Warten bis Animation fertig ist (3 Sekunden)
        setTimeout(() => {
            resultText.innerText = "Gewinn-Auswertung kommt noch!";
        }, 3000);
    });

});
