var themeToggleButton = document.getElementById('theme-toggle');
var htmlElement = document.documentElement;
var setDarkMode = function () {
    htmlElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
};
var setLightMode = function () {
    htmlElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
};
var toggleTheme = function () {
    if (htmlElement.classList.contains('dark')) {
        setLightMode();
    }
    else {
        setDarkMode();
    }
};
themeToggleButton.addEventListener('click', toggleTheme);
// Check localStorage for theme preference on load
var savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    setDarkMode();
}
else if (savedTheme === 'light') {
    setLightMode();
}
else {
    // Default to user's system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDarkMode();
    }
    else {
        setLightMode();
    }
}
// انتخاب عناصر مورد نیاز
var navToggle = document.getElementById('nav-toggle');
var mobileNav = document.getElementById('mobile-nav');
// بررسی وجود عناصر
if (navToggle && mobileNav) {
    // افزودن Event Listener برای باز و بسته کردن منو
    navToggle.addEventListener('click', function () {
        // بررسی اینکه آیا منوی ناوبری باز است یا نه
        if (mobileNav.classList.contains('hidden')) {
            // نمایش منو و افزایش ارتفاع
            mobileNav.classList.remove('hidden');
            mobileNav.style.height = '550px'; // ارتفاع باز
        }
        else {
            // کاهش ارتفاع و سپس مخفی کردن منو
            mobileNav.style.height = '150px'; // ارتفاع بسته
            setTimeout(function () {
                mobileNav.classList.add('hidden'); // افزودن کلاس hidden پس از تغییر ارتفاع
            }, 300); // مدت زمان برای همگام شدن با انیمیشن
        }
    });
}
else {
    console.error("Required elements not found: nav-toggle or mobile-nav.");
}
