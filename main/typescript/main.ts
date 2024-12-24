const themeToggleButton = document.getElementById('theme-toggle') as HTMLButtonElement;
const htmlElement = document.documentElement;

const setDarkMode = () => {
    htmlElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
};

const setLightMode = () => {
    htmlElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
};

const toggleTheme = () => {
    if (htmlElement.classList.contains('dark')) {
        setLightMode();
    } else {
        setDarkMode();
    }
};

themeToggleButton.addEventListener('click', toggleTheme);

// Check localStorage for theme preference on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    setDarkMode();
} else if (savedTheme === 'light') {
    setLightMode();
} else {
    // Default to user's system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDarkMode();
    } else {
        setLightMode();
    }
}

const navToggle = document.getElementById('nav-toggle') as HTMLButtonElement | null;
const mobileNav = document.getElementById('mobile-nav') as HTMLElement | null;

if (navToggle && mobileNav) {
  navToggle.addEventListener('click', () => {
    if (mobileNav.classList.contains('hidden')) {
      // باز کردن منو
      mobileNav.classList.remove('hidden');
      requestAnimationFrame(() => {
        mobileNav.style.height = '400px'; // تنظیم ارتفاع باز
      });
    } else {
      // بستن منو با انیمیشن
      mobileNav.style.height = '0px'; // کاهش ارتفاع
      setTimeout(() => {
        mobileNav.classList.add('hidden'); // افزودن کلاس hidden پس از انیمیشن
      }, 300); // مدت زمان انیمیشن بسته شدن
    }
  });
}


  