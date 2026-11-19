/**
 * Website Portofolio Pribadi M. Ilham — Behance Curated Style
 * Skrip Logika Antarmuka, Interaktivitas, & Pengalih Tema (Dark/Light)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inisialisasi Tema (Dark / Light Mode)
  initTheme();

  // 2. Inisialisasi Ikon Lucide
  initLucideIcons();

  // 3. Logika Navigasi & Menu Mobile Hamburger
  initMobileMenu();

  // 4. Pembaruan Tahun Otomatis pada Footer
  initFooterYear();
});

/**
 * Menginisialisasi Lucide Icons pada elemen dengan data-lucide
 */
function initLucideIcons() {
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }
}

/**
 * Pengelolaan tema Gelap / Terang dengan persistensi ke localStorage
 */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const mobileThemeToggle = document.getElementById('mobile-theme-toggle');

  // Cek preferensi yang tersimpan atau preferensi sistem pengguna
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    initLucideIcons(); // Refresh ikon setelah switch jika diperlukan
  }

  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  if (mobileThemeToggle) mobileThemeToggle.addEventListener('click', toggleTheme);
}

/**
 * Mengelola fungsionalitas menu mobile hamburger, aksesibilitas ARIA,
 * penutupan saat tautan dipilih, dan tombol keyboard Escape.
 */
function initMobileMenu() {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (!menuBtn || !mobileMenu) return;

  /**
   * Mengubah status keterlihatan menu mobile
   * @param {boolean} shouldOpen 
   */
  function setMenuState(shouldOpen) {
    if (shouldOpen) {
      mobileMenu.classList.remove('hidden');
      menuBtn.setAttribute('aria-expanded', 'true');
      menuBtn.setAttribute('aria-label', 'Tutup menu navigasi');
      
      if (menuIcon && closeIcon) {
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      }
    } else {
      mobileMenu.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.setAttribute('aria-label', 'Buka menu navigasi');
      
      if (menuIcon && closeIcon) {
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    }
  }

  // Toggle menu saat tombol hamburger diklik
  menuBtn.addEventListener('click', () => {
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
    setMenuState(!isExpanded);
  });

  // Tutup menu otomatis setelah salah satu tautan mobile ditekan
  const mobileLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      setMenuState(false);
    });
  });

  // Tutup menu saat menekan tombol Escape dan kembalikan fokus ke tombol menu
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        setMenuState(false);
        menuBtn.focus();
      }
    }
  });

  // Tutup menu jika ukuran layar diperbesar melewati breakpoint mobile (768px)
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        setMenuState(false);
      }
    }
  });
}

/**
 * Memperbarui tahun pada footer secara dinamis
 */
function initFooterYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
