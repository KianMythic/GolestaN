/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'facebook': 'url("./images/social-icon/facebook.png")',
        'facebook-hover': 'url("./images/social-icon/facebookcolor.png")',
        'linkdin': 'url("./main/images/social-icon/linkidin.png")',
        'linkdin-hover': 'url("./main/images/social-icon/linkdincolor.png")',
        'insta': 'url("./main/images/social-icon/instagram.png")',
        'insta-hover': 'url("./main/images/social-icon/instagramcolor.png")',
        'telegram': 'url("./main/images/social-icon/telegram.png")',
        'telegram-hover': 'url("./main/images/social-icon/telegramcolor.png")',
        'aparat': 'url("./main/images/social-icon/aparat.png")',
        'aparat-hover': 'url("./main/images/social-icon/aparatcolor.png")',
        'gl': 'url("./main/images/social-icon/gl.png")',
        'gl-hover': 'url("./main/images/social-icon/glcolor.png")',
        'recipe-banner': "url('./main/images/page1/recipe-baner-1.png')",
      },

      colors: {
        customDark: 'rgb(39, 39, 39)', 
      },
    },
    screens: {
      mobile: { max: '640px' }, 
      desktop: '1024px', 
    },
  },

  plugins: [
    require('daisyui'),
  ],
}



