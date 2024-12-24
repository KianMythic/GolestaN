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
var navToggle = document.getElementById('nav-toggle');
var mobileNav = document.getElementById('mobile-nav');
if (navToggle && mobileNav) {
    navToggle.addEventListener('click', function () {
        if (mobileNav.classList.contains('hidden')) {
            // باز کردن منو
            mobileNav.classList.remove('hidden');
            requestAnimationFrame(function () {
                mobileNav.style.height = '400px'; // تنظیم ارتفاع باز
            });
        }
        else {
            // بستن منو با انیمیشن
            mobileNav.style.height = '0px'; // کاهش ارتفاع
            setTimeout(function () {
                mobileNav.classList.add('hidden'); // افزودن کلاس hidden پس از انیمیشن
            }, 300); // مدت زمان انیمیشن بسته شدن
        }
    });
}
