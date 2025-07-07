/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",    
    "./src/**/*.{js,ts}"       
  ],
  theme: {
    extend: {
      fontFamily: {
        kode: ['"Kode Mono"', 'monospace'],
      },
      colors: {
        starNight: '#232428',
        gold: '#F3C574',
        palePink: '#B0636D',
        lightBlue: '#457B9A',
        mauve: '#854850',
        lightPink: '#F3AEB7',
        darkPurple: '#5B424F',
        blueStar: '#7AB3D3',
        ////////////////////////////////
        darkBrown: '#392019',
        lightBrown: '#E3C7A2',
        brown: '#734615',
        darkGreen: '#424034',
        lightGreen: '#CBC386',
        ////////////////////////////////
        abyssalNavy: '#01162B',
        snowVeil: '#D2DBEC',
        ////////////////////////////////
        mistWhite: '#D8DEDE',
        dustyCocoa: '#4C3E3E',
        softGreige: '#BAB2A7',
        slateBlue: '#788E9C',
        medusaBlue: '#383B4E',
        ////////////////////////////////
        morningClay: '#EBEAD4',
        paleMoss: '#ADBB98',
        pineBlack: '#21393B',
        fogHorizon: '#46707E',
        ////////////////////////////////
        seashellMilk: '#E8E8EA',
        fadedTerra: '#8B705F',
        deepHarbor: '#1B395D'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}