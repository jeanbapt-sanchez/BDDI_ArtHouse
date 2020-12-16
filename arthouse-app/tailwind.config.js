module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Montserrat', 'sans-serif'],

    },
    fontWeight: {
      normal: 400,
      bold: 700
    },
    colors: {
      white: {
        DEFAULT: '#ffffff'
      },
      grey: {
        DEFAULT: '#494949'
      } 
    },
    fontSize: {
      big: ['1.6em', '2.2em'],
      int: ['2.1em', '4.1em'],
      menu: ['1.9em', '2.7em'],
      reg: ['1.3em', '2em'],
      
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
