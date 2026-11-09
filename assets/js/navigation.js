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
        <nav class="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 border-t border-emerald-950/40 px-4 py-2.5 flex justify-around items-center shadow-2xl relative text-white">
            <a href="layout.html?page=home" class="flex flex-col items-center space-y-1 ${activePage === 'home' ? 'text-amber-400 font-bold scale-105' : 'text-emerald-100/70 hover:text-amber-300'} text-[10px] transition">
                <i class="fa-solid fa-house text-sm"></i>
                <span>Beranda</span>
            </a>
            <a href="layout.html?page=unit-usaha" class="flex flex-col items-center space-y-1 ${activePage === 'unit-usaha' ? 'text-amber-400 font-bold scale-105' : 'text-emerald-100/70 hover:text-amber-300'} text-[10px] transition">
                <i class="fa-solid fa-store text-sm"></i>
                <span>Unit Usaha</span>
            </a>
            <!-- MENU KETIGA DIUBAH MENJADI GALERI -->
            <a href="layout.html?page=galeri" class="flex flex-col items-center space-y-1 ${activePage === 'galeri' ? 'text-amber-400 font-bold scale-105' : 'text-emerald-100/70 hover:text-amber-300'} text-[10px] transition">
                <i class="fa-solid fa-image text-sm"></i>
                <span>Galeri</span>
            </a>
            
            ${isMoreMenu ? `
                <button onclick="toggleMoreMenu(event)" class="flex flex-col items-center space-y-1 ${activePage === 'more' ? 'text-amber-400 font-bold scale-105' : 'text-emerald-100/70 hover:text-amber-300'} text-[10px] transition bg-transparent border-none cursor-pointer">
                    <i class="fa-solid ${fourthMenuIcon} text-sm"></i>
                    <span>${fourthMenuName}</span>
                </button>
                
                <!-- POP-UP PANEL MENU 'MORE' (RATA KANAN) -->
                <div id="morePopup" class="hidden absolute bottom-16 right-2 bg-slate-900 dark:bg-slate-900 text-slate-100 border border-emerald-700/50 rounded-none shadow-2xl w-64 z-50 overflow-hidden text-left">
                    
                    <!-- Header Modal -->
                    <div class="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white px-4 py-2.5 flex items-center justify-between border-b border-emerald-700/40">
                        <span class="text-xs font-bold uppercase tracking-wider text-amber-300">OPTION MENU</span>
                        <button onclick="toggleMoreMenu(event)" class="text-white hover:text-amber-300 transition bg-transparent border-none cursor-pointer">
                            <i class="fa-solid fa-xmark text-sm"></i>
                        </button>
                    </div>

                    <!-- DAFTAR MENU VERTIKAL -->
                    <div class="py-1 max-h-[70vh] overflow-y-auto space-y-0.5 text-slate-200 text-xs bg-slate-900">
                        <a href="layout.html?page=profil" class="flex items-center space-x-3 px-4 py-2.5 hover:bg-emerald-950/60 transition">
                            <i class="fa-solid fa-user-gear w-5 text-amber-400 text-center"></i>
                            <span class="font-medium">Pengaturan</span>
                        </a>
                        <a href="layout.html?page=hak-akses" class="flex items-center space-x-3 px-4 py-2.5 hover:bg-emerald-950/60 transition">
                            <i class="fa-solid fa-shield-halved w-5 text-amber-400 text-center"></i>
                            <span class="font-medium">Hak Akses</span>
                        </a>
                        <a href="layout.html?page=user" class="flex items-center space-x-3 px-4 py-2.5 hover:bg-emerald-950/60 transition">
                            <i class="fa-solid fa-users-gear w-5 text-amber-400 text-center"></i>
                            <span class="font-medium">Setting User</span>
                        </a>
                        
                        <hr class="border-emerald-800/60 my-1">
                        
                        <a href="layout.html?page=profil" class="flex items-center space-x-3 px-4 py-2.5 hover:bg-emerald-950/60 transition">
                            <i class="fa-solid fa-id-card w-5 text-amber-400 text-center"></i>
                            <span class="font-medium">Profil</span>
                        </a>
                        <a href="layout.html?page=banner" class="flex items-center space-x-3 px-4 py-2.5 hover:bg-emerald-950/60 transition">
                            <i class="fa-solid fa-panorama w-5 text-amber-400 text-center"></i>
                            <span class="font-medium">Banner</span>
                        </a>
                        <a href="layout.html?page=running-text" class="flex items-center space-x-3 px-4 py-2.5 hover:bg-emerald-950/60 transition">
                            <i class="fa-solid fa-bullhorn w-5 text-amber-400 text-center"></i>
                            <span class="font-medium">Running Text</span>
                        </a>
                        <a href="layout.html?page=unit-usaha-input" class="flex items-center space-x-3 px-4 py-2.5 hover:bg-emerald-950/60 transition">
                            <i class="fa-solid fa-store w-5 text-amber-400 text-center"></i>
                            <span class="font-medium">Unit Usaha</span>
                        </a>
                        <!-- DIUBAH KE GALERI-INPUT -->
                        <a href="layout.html?page=galeri-input" class="flex items-center space-x-3 px-4 py-2.5 hover:bg-emerald-950/60 transition">
                            <i class="fa-solid fa-image w-5 text-amber-400 text-center"></i>
                            <span class="font-medium">Galeri</span>
                        </a>
                        <a href="layout.html?page=monitoring" class="flex items-center space-x-3 px-4 py-2.5 hover:bg-emerald-950/60 transition">
                            <i class="fa-solid fa-chart-line w-5 text-amber-400 text-center"></i>
                            <span class="font-medium">Monitoring</span>
                        </a>

                        <hr class="border-emerald-800/60 my-1">

                        <button onclick="logoutApp()" class="w-full flex items-center space-x-3 px-4 py-2.5 hover:bg-red-950/40 text-red-400 transition text-left cursor-pointer border-none bg-transparent">
                            <i class="fa-solid fa-power-off w-5 text-center"></i>
                            <span class="font-medium">Keluar</span>
                        </button>
                    </div>

                </div>
            ` : `
                <a href="layout.html?page=${fourthMenuPage}" class="flex flex-col items-center space-y-1 ${activePage === fourthMenuPage ? 'text-amber-400 font-bold scale-105' : 'text-emerald-100/70 hover:text-amber-300'} text-[10px] transition">
                    <i class="fa-solid ${fourthMenuIcon} text-sm"></i>
                    <span>${fourthMenuName}</span>
                </a>
            `}
        </nav>
    `;
}

window.toggleMoreMenu = function(event) {
    if (event) event.stopPropagation();
    const popup = document.getElementById('morePopup');
    if (popup) {
        popup.classList.toggle('hidden');
    }
};

document.addEventListener('click', () => {
    const popup = document.getElementById('morePopup');
    if (popup && !popup.classList.contains('hidden')) {
        popup.classList.add('hidden');
    }
});