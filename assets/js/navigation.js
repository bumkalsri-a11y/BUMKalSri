<<<<<<< HEAD
export function renderNavigation(activePage = 'home', isMobile = true, role = 'warga') {
    let fourthMenuName = 'Kontak';
    let fourthMenuPage = 'kontak';
    let fourthMenuIcon = 'fa-address-book';
    let isMoreMenu = false;

    // Jika role adalah admin atau pengurus, tombol keempat menjadi "More"
    if (role && (role.toLowerCase() === 'admin' || role.toLowerCase() === 'pengurus' || role.toLowerCase() === 'administrator')) {
        fourthMenuName = 'More';
        fourthMenuPage = 'more';
        fourthMenuIcon = 'fa-ellipsis-vertical';
        isMoreMenu = true;
    }

    return `
        <nav class="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 px-4 py-2 flex justify-around items-center shadow-lg relative">
            <a href="layout.html?page=home" class="flex flex-col items-center space-y-1 ${activePage === 'home' ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-slate-500 dark:text-slate-400 hover:text-emerald-600'} text-[10px] transition">
                <i class="fa-solid fa-house text-sm"></i>
                <span>Beranda</span>
            </a>
            <a href="layout.html?page=unit-usaha" class="flex flex-col items-center space-y-1 ${activePage === 'unit-usaha' ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-slate-500 dark:text-slate-400 hover:text-emerald-600'} text-[10px] transition">
                <i class="fa-solid fa-store text-sm"></i>
                <span>Unit Usaha</span>
            </a>
            <a href="layout.html?page=umkm" class="flex flex-col items-center space-y-1 ${activePage === 'umkm' ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-slate-500 dark:text-slate-400 hover:text-emerald-600'} text-[10px] transition">
                <i class="fa-solid fa-bag-shopping text-sm"></i>
                <span>UMKM</span>
            </a>
            
            ${isMoreMenu ? `
                <button onclick="toggleMoreMenu(event)" class="flex flex-col items-center space-y-1 ${activePage === 'more' ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-slate-500 dark:text-slate-400 hover:text-emerald-600'} text-[10px] transition bg-transparent border-none cursor-pointer">
                    <i class="fa-solid ${fourthMenuIcon} text-sm"></i>
                    <span>${fourthMenuName}</span>
                </button>
                
                <!-- POP-UP PANEL MENU 'MORE' (BARU) -->
                <div id="morePopup" class="hidden absolute bottom-16 right-2 left-2 sm:left-auto sm:right-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl shadow-2xl p-5 w-auto sm:w-[380px] z-50 space-y-4 max-h-[80vh] overflow-y-auto">
                    
                    <!-- Header Modal -->
                    <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-3">
                        <span class="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">MENU PENGURUS & ADMIN</span>
                        <button onclick="toggleMoreMenu(event)" class="w-7 h-7 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-300 hover:bg-slate-200 transition">
                            <i class="fa-solid fa-xmark text-xs"></i>
                        </button>
                    </div>

                    <!-- KATEGORI: ADMINISTRATOR -->
                    <div class="space-y-2">
                        <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Administrator</p>
                        <div class="grid grid-cols-4 gap-2 text-center">
                            <a href="layout.html?page=profil" class="flex flex-col items-center p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition group">
                                <div class="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm group-hover:scale-110 transition">
                                    <i class="fa-solid fa-user"></i>
                                </div>
                                <span class="text-[10px] font-medium text-slate-700 dark:text-slate-300 mt-1.5 leading-tight">Profil</span>
                            </a>
                            <a href="layout.html?page=hak-akses" class="flex flex-col items-center p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition group">
                                <div class="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm group-hover:scale-110 transition">
                                    <i class="fa-solid fa-shield-halved"></i>
                                </div>
                                <span class="text-[10px] font-medium text-slate-700 dark:text-slate-300 mt-1.5 leading-tight">Hak Akses</span>
                            </a>
                            <a href="layout.html?page=user" class="flex flex-col items-center p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition group">
                                <div class="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm group-hover:scale-110 transition">
                                    <i class="fa-solid fa-users-gear"></i>
                                </div>
                                <span class="text-[10px] font-medium text-slate-700 dark:text-slate-300 mt-1.5 leading-tight">User</span>
                            </a>
                            <a href="layout.html?page=monitoring" class="flex flex-col items-center p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition group">
                                <div class="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm group-hover:scale-110 transition">
                                    <i class="fa-solid fa-chart-line"></i>
                                </div>
                                <span class="text-[10px] font-medium text-slate-700 dark:text-slate-300 mt-1.5 leading-tight">Monitoring</span>
                            </a>
                        </div>
                    </div>

                    <!-- KATEGORI: PENGURUS -->
                    <div class="space-y-2 pt-1">
                        <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pengurus</p>
                        <div class="grid grid-cols-4 gap-2 text-center">
                            <a href="layout.html?page=galeri" class="flex flex-col items-center p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition group">
                                <div class="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm group-hover:scale-110 transition">
                                    <i class="fa-solid fa-image"></i>
                                </div>
                                <span class="text-[10px] font-medium text-slate-700 dark:text-slate-300 mt-1.5 leading-tight">Galeri</span>
                            </a>
                            <a href="layout.html?page=banner" class="flex flex-col items-center p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition group">
                                <div class="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm group-hover:scale-110 transition">
                                    <i class="fa-solid fa-panorama"></i>
                                </div>
                                <span class="text-[10px] font-medium text-slate-700 dark:text-slate-300 mt-1.5 leading-tight">Banner</span>
                            </a>
                            <a href="layout.html?page=running-text" class="flex flex-col items-center p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition group">
                                <div class="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm group-hover:scale-110 transition">
                                    <i class="fa-solid fa-bullhorn"></i>
                                </div>
                                <span class="text-[10px] font-medium text-slate-700 dark:text-slate-300 mt-1.5 leading-tight">Running Text</span>
                            </a>
                            <a href="layout.html?page=umkm" class="flex flex-col items-center p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition group">
                                <div class="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm group-hover:scale-110 transition">
                                    <i class="fa-solid fa-bag-shopping"></i>
                                </div>
                                <span class="text-[10px] font-medium text-slate-700 dark:text-slate-300 mt-1.5 leading-tight">UMKM</span>
                            </a>
                        </div>
                    </div>

                </div>
            ` : `
                <a href="layout.html?page=${fourthMenuPage}" class="flex flex-col items-center space-y-1 ${activePage === fourthMenuPage ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-slate-500 dark:text-slate-400 hover:text-emerald-600'} text-[10px] transition">
                    <i class="fa-solid ${fourthMenuIcon} text-sm"></i>
                    <span>${fourthMenuName}</span>
                </a>
            `}
        </nav>
    `;
}

// Fungsi global untuk membuka/menutup pop-up More
window.toggleMoreMenu = function(event) {
    event.stopPropagation();
    const popup = document.getElementById('morePopup');
    if (popup) {
        popup.classList.toggle('hidden');
    }
};

// Tutup pop-up jika pengguna mengklik di luar area menu
document.addEventListener('click', () => {
    const popup = document.getElementById('morePopup');
    if (popup && !popup.classList.contains('hidden')) {
        popup.classList.add('hidden');
    }
=======
export function renderNavigation(activePage = 'home', isMobile = true, role = 'warga') {
    let fourthMenuName = 'Kontak';
    let fourthMenuPage = 'kontak';
    let fourthMenuIcon = 'fa-address-book';
    let isMoreMenu = false;

    // Jika role adalah admin atau pengurus, tombol keempat menjadi "More"
    if (role && (role.toLowerCase() === 'admin' || role.toLowerCase() === 'pengurus' || role.toLowerCase() === 'administrator')) {
        fourthMenuName = 'More';
        fourthMenuPage = 'more';
        fourthMenuIcon = 'fa-ellipsis-vertical';
        isMoreMenu = true;
    }

    return `
        <nav class="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 px-4 py-2 flex justify-around items-center shadow-lg relative">
            <a href="layout.html?page=home" class="flex flex-col items-center space-y-1 ${activePage === 'home' ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-slate-500 dark:text-slate-400 hover:text-emerald-600'} text-[10px] transition">
                <i class="fa-solid fa-house text-sm"></i>
                <span>Beranda</span>
            </a>
            <a href="layout.html?page=unit-usaha" class="flex flex-col items-center space-y-1 ${activePage === 'unit-usaha' ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-slate-500 dark:text-slate-400 hover:text-emerald-600'} text-[10px] transition">
                <i class="fa-solid fa-store text-sm"></i>
                <span>Unit Usaha</span>
            </a>
            <a href="layout.html?page=umkm" class="flex flex-col items-center space-y-1 ${activePage === 'umkm' ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-slate-500 dark:text-slate-400 hover:text-emerald-600'} text-[10px] transition">
                <i class="fa-solid fa-bag-shopping text-sm"></i>
                <span>UMKM</span>
            </a>
            
            ${isMoreMenu ? `
                <button onclick="toggleMoreMenu(event)" class="flex flex-col items-center space-y-1 ${activePage === 'more' ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-slate-500 dark:text-slate-400 hover:text-emerald-600'} text-[10px] transition bg-transparent border-none cursor-pointer">
                    <i class="fa-solid ${fourthMenuIcon} text-sm"></i>
                    <span>${fourthMenuName}</span>
                </button>
                
                <!-- POP-UP PANEL MENU 'MORE' (BARU) -->
                <div id="morePopup" class="hidden absolute bottom-16 right-2 left-2 sm:left-auto sm:right-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl shadow-2xl p-5 w-auto sm:w-[380px] z-50 space-y-4 max-h-[80vh] overflow-y-auto">
                    
                    <!-- Header Modal -->
                    <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-3">
                        <span class="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">MENU PENGURUS & ADMIN</span>
                        <button onclick="toggleMoreMenu(event)" class="w-7 h-7 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-300 hover:bg-slate-200 transition">
                            <i class="fa-solid fa-xmark text-xs"></i>
                        </button>
                    </div>

                    <!-- KATEGORI: ADMINISTRATOR -->
                    <div class="space-y-2">
                        <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Administrator</p>
                        <div class="grid grid-cols-4 gap-2 text-center">
                            <a href="layout.html?page=profil" class="flex flex-col items-center p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition group">
                                <div class="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm group-hover:scale-110 transition">
                                    <i class="fa-solid fa-user"></i>
                                </div>
                                <span class="text-[10px] font-medium text-slate-700 dark:text-slate-300 mt-1.5 leading-tight">Profil</span>
                            </a>
                            <a href="layout.html?page=hak-akses" class="flex flex-col items-center p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition group">
                                <div class="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm group-hover:scale-110 transition">
                                    <i class="fa-solid fa-shield-halved"></i>
                                </div>
                                <span class="text-[10px] font-medium text-slate-700 dark:text-slate-300 mt-1.5 leading-tight">Hak Akses</span>
                            </a>
                            <a href="layout.html?page=user" class="flex flex-col items-center p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition group">
                                <div class="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm group-hover:scale-110 transition">
                                    <i class="fa-solid fa-users-gear"></i>
                                </div>
                                <span class="text-[10px] font-medium text-slate-700 dark:text-slate-300 mt-1.5 leading-tight">User</span>
                            </a>
                            <a href="layout.html?page=monitoring" class="flex flex-col items-center p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition group">
                                <div class="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm group-hover:scale-110 transition">
                                    <i class="fa-solid fa-chart-line"></i>
                                </div>
                                <span class="text-[10px] font-medium text-slate-700 dark:text-slate-300 mt-1.5 leading-tight">Monitoring</span>
                            </a>
                        </div>
                    </div>

                    <!-- KATEGORI: PENGURUS -->
                    <div class="space-y-2 pt-1">
                        <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pengurus</p>
                        <div class="grid grid-cols-4 gap-2 text-center">
                            <a href="layout.html?page=galeri" class="flex flex-col items-center p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition group">
                                <div class="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm group-hover:scale-110 transition">
                                    <i class="fa-solid fa-image"></i>
                                </div>
                                <span class="text-[10px] font-medium text-slate-700 dark:text-slate-300 mt-1.5 leading-tight">Galeri</span>
                            </a>
                            <a href="layout.html?page=banner" class="flex flex-col items-center p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition group">
                                <div class="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm group-hover:scale-110 transition">
                                    <i class="fa-solid fa-panorama"></i>
                                </div>
                                <span class="text-[10px] font-medium text-slate-700 dark:text-slate-300 mt-1.5 leading-tight">Banner</span>
                            </a>
                            <a href="layout.html?page=running-text" class="flex flex-col items-center p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition group">
                                <div class="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm group-hover:scale-110 transition">
                                    <i class="fa-solid fa-bullhorn"></i>
                                </div>
                                <span class="text-[10px] font-medium text-slate-700 dark:text-slate-300 mt-1.5 leading-tight">Running Text</span>
                            </a>
                            <a href="layout.html?page=umkm" class="flex flex-col items-center p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition group">
                                <div class="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm group-hover:scale-110 transition">
                                    <i class="fa-solid fa-bag-shopping"></i>
                                </div>
                                <span class="text-[10px] font-medium text-slate-700 dark:text-slate-300 mt-1.5 leading-tight">UMKM</span>
                            </a>
                        </div>
                    </div>

                </div>
            ` : `
                <a href="layout.html?page=${fourthMenuPage}" class="flex flex-col items-center space-y-1 ${activePage === fourthMenuPage ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-slate-500 dark:text-slate-400 hover:text-emerald-600'} text-[10px] transition">
                    <i class="fa-solid ${fourthMenuIcon} text-sm"></i>
                    <span>${fourthMenuName}</span>
                </a>
            `}
        </nav>
    `;
}

// Fungsi global untuk membuka/menutup pop-up More
window.toggleMoreMenu = function(event) {
    event.stopPropagation();
    const popup = document.getElementById('morePopup');
    if (popup) {
        popup.classList.toggle('hidden');
    }
};

// Tutup pop-up jika pengguna mengklik di luar area menu
document.addEventListener('click', () => {
    const popup = document.getElementById('morePopup');
    if (popup && !popup.classList.contains('hidden')) {
        popup.classList.add('hidden');
    }
>>>>>>> 9dc5feb (Update kode terbaru BUMKal Srihardono)
});