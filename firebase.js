// Konfigurasi Firebase BUMKal Srihardono
if (typeof firebaseConfig === 'undefined') {
    var firebaseConfig = {
        apiKey: "AIzaSyDh11C9oafg-I0CbA8teQ8ijAjBnlcOHPc",
        authDomain: "bumkalsri-9994b.firebaseapp.com",
        projectId: "bumkalsri-9994b",
        storageBucket: "bumkalsri-9994b.appspot.com",
        messagingSenderId: "285749741592",
        appId: "1:285749741592:web:875cd988ea5bf688dcdb6d",
        measurementId: "G-6TD6514Y42"
    };
}

// Inisialisasi Firebase & Firestore secara aman
if (typeof db === 'undefined') {
    var db;
    try {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        db = firebase.firestore();
        console.log("Firebase berhasil terhubung dari firebase.js!");
    } catch (error) {
        console.error("Gagal menginisialisasi Firebase:", error);
    }
}

// Fungsi pembantu global untuk update status badge menjadi bulatan elegan
if (typeof updateDbStatus === 'undefined') {
    function updateDbStatus(elementId = 'db-status') {
        const statusContainer = document.getElementById(elementId);
        if (!statusContainer) return;

        if (db) {
            statusContainer.innerHTML = `
                <div class="relative flex items-center justify-center" title="Database Terhubung & Aktif">
                    <span class="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
            `;
        } else {
            statusContainer.innerHTML = `
                <div class="relative flex items-center justify-center" title="Database Error / Terputus">
                    <span class="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-red-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </div>
            `;
        }
    }
}