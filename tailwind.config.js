/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: ["./*.html"],
  theme: {
    extend: {
      

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



