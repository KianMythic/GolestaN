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

// انتخاب عناصر مورد نیاز
const navToggle = document.getElementById('nav-toggle') as HTMLButtonElement | null;
const mobileNav = document.getElementById('mobile-nav') as HTMLElement | null;

// بررسی وجود عناصر
if (navToggle && mobileNav) {
  // افزودن Event Listener برای باز و بسته کردن منو
  navToggle.addEventListener('click', () => {
    // بررسی اینکه آیا منوی ناوبری باز است یا نه
    if (mobileNav.classList.contains('hidden')) {
      // نمایش منو و افزایش ارتفاع
      mobileNav.classList.remove('hidden');
      mobileNav.style.height = '550px'; // ارتفاع باز
    } else {
      // کاهش ارتفاع و سپس مخفی کردن منو
      mobileNav.style.height = '150px'; // ارتفاع بسته
      setTimeout(() => {
        mobileNav.classList.add('hidden'); // افزودن کلاس hidden پس از تغییر ارتفاع
      }, 300); // مدت زمان برای همگام شدن با انیمیشن
    }
  });
} else {
  console.error("Required elements not found: nav-toggle or mobile-nav.");
}


  