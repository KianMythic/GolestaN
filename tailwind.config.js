/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'facebook': 'url("/Golestan/main/images/social-icon/facebook.png")',
        'facebook-hover': 'url("/Golestan/main/images/social-icon/facebookcolor.png")',
        'linkdin': 'url("/Golestan/main/images/social-icon/linkidin.png")',
        'linkdin-hover': 'url("/Golestan/main/images/social-icon/linkdincolor.png")',
        'insta': 'url("/Golestan/main/images/social-icon/instagram.png")',
        'insta-hover': 'url("/Golestan/main/images/social-icon/instagramcolor.png")',
        'telegram': 'url("/Golestan/main/images/social-icon/telegram.png")',
        'telegram-hover': 'url("/Golestan/main/images/social-icon/telegramcolor.png")',
        'aparat': 'url("/Golestan/main/images/social-icon/aparat.png")',
        'aparat-hover': 'url("/Golestan/main/images/social-icon/aparatcolor.png")',
        'gl': 'url("/Golestan/main/images/social-icon/gl.png")',
        'gl-hover': 'url("/Golestan/main/images/social-icon/glcolor.png")',
        'recipe-banner': "url('/Golestan/main/images/page1/recipe-baner-1.png')",
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



