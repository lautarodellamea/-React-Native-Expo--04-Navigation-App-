/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}"

  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {

      colors: {
        // agregamos nuestras variables de color
        primary: '#49129C',
        secondary: {
          DEFAULT: '#840086',
          100: '#C51297',
          200: '#831266',
        },
        tertiary: '#EF2967',
      },


      fontFamily: {
        // agregamos nuestras fuentes con el mismo nombre del archivo
        'work-black': ['WorkSans-Black', 'sans-serif'],
        'work-light': ['WorkSans-Light', 'sans-serif'],
        'work-medium': ['WorkSans-Medium', 'sans-serif'],
      }
    },
    plugins: [],
  }

}