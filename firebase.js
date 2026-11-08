<<<<<<< HEAD
// Konfigurasi Firebase BUMKal Srihardono
const firebaseConfig = {
    apiKey: "AIzaSyDh11C9oafg-I0CbA8teQ8ijAjBnlcOHPc",
    authDomain: "bumkalsri-9994b.firebaseapp.com",
    projectId: "bumkalsri-9994b",
    storageBucket: "bumkalsri-9994b.appspot.com",
    messagingSenderId: "285749741592",
    appId: "1:285749741592:web:875cd988ea5bf688dcdb6d",
    measurementId: "G-6TD6514Y42"
};

// Inisialisasi Firebase & Firestore
let db;
try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    console.log("Firebase berhasil terhubung dari firebase.js!");
} catch (error) {
    console.error("Gagal menginisialisasi Firebase:", error);
}

// Fungsi pembantu global untuk update status badge menjadi bulatan elegan
function updateDbStatus(elementId = 'db-status') {
    const statusContainer = document.getElementById(elementId);
    if (!statusContainer) return;

    if (db) {
        // Indikator Elegan: Titik Hijau Berdenyut (Pulse) dengan Tooltip
        statusContainer.innerHTML = `
            <div class="relative flex items-center justify-center" title="Database Terhubung & Aktif">
                <span class="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </div>
        `;
    } else {
        // Indikator Error: Titik Merah
        statusContainer.innerHTML = `
            <div class="relative flex items-center justify-center" title="Database Error / Terputus">
                <span class="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-red-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </div>
        `;
    }
=======
// Konfigurasi Firebase BUMKal Srihardono
const firebaseConfig = {
    apiKey: "AIzaSyDh11C9oafg-I0CbA8teQ8ijAjBnlcOHPc",
    authDomain: "bumkalsri-9994b.firebaseapp.com",
    projectId: "bumkalsri-9994b",
    storageBucket: "bumkalsri-9994b.appspot.com",
    messagingSenderId: "285749741592",
    appId: "1:285749741592:web:875cd988ea5bf688dcdb6d",
    measurementId: "G-6TD6514Y42"
};

// Inisialisasi Firebase & Firestore
let db;
try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    console.log("Firebase berhasil terhubung dari firebase.js!");
} catch (error) {
    console.error("Gagal menginisialisasi Firebase:", error);
}

// Fungsi pembantu global untuk update status badge menjadi bulatan elegan
function updateDbStatus(elementId = 'db-status') {
    const statusContainer = document.getElementById(elementId);
    if (!statusContainer) return;

    if (db) {
        // Indikator Elegan: Titik Hijau Berdenyut (Pulse) dengan Tooltip
        statusContainer.innerHTML = `
            <div class="relative flex items-center justify-center" title="Database Terhubung & Aktif">
                <span class="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </div>
        `;
    } else {
        // Indikator Error: Titik Merah
        statusContainer.innerHTML = `
            <div class="relative flex items-center justify-center" title="Database Error / Terputus">
                <span class="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-red-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </div>
        `;
    }
>>>>>>> 9dc5feb (Update kode terbaru BUMKal Srihardono)
}