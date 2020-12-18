module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
      'montserrat-bold': ['Montserrat-Bold', 'Helvetica', 'Arial', 'sans-serif']
    },
    fontWeight: {
      normal: 400,
      bold: 700
    },
    colors: {
      white: {
        DEFAULT: '#ffffff'
      },
      orange: {
        DEFAULT: '#feaa2a'
      },
      grey: {
        DEFAULT: '#494949'
      }
    },
    fontSize: {
      '13': '0.813rem',
      '16': '1rem',
      '19': '1.188rem',
      '21': '1.313rem',
      '21-2': ['1.313rem', '2.563rem'],
      big: ['1.6em', '2.2em'],
      int: ['2.1em', '4.1em'],
      menu: ['1.9em', '2.7em'],
      reg: ['1.3em', '2em'],
    },
    extend: {}
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
