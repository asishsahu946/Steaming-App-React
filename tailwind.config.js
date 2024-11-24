/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       'sans': ['"Manrope"'],
      }
    },
    screens: {
      'desktop' : {'max': '1920px'},
      'laptop' : {'max': '1440px'},
      'mobile' : {'max': '390px'},
      '2xl': {'max': '1535px'}, // => @media (max-width: 1535px) { ... }
      'xl': {'max': '1279px'}, // => @media (max-width: 1279px) { ... }
      'lg': {'max': '1023px'}, // => @media (max-width: 1023px) { ... }
      'md': {'max': '767px'}, // => @media (max-width: 767px) { ... }
      'sm': {'max': '639px'}, // => @media (max-width: 639px) { ... }
      '2xl-max': '1535px', 
      'xl-max': '1279px', 
      'lg-max': '1023px', 
      'md-max': '767px', 
      'sm-max': '639px', 
    },
    colors: {
      'white' : '#fff',
      'black' : '#000',
      'red1' : '#e50000',
      'red2' : '#ff0000',
      'red3' : '#ff1919',
      'red4' : '#ff3333',
      'red5' : '#ff9999',
      'red6' : '#ffcccc',
      'red7' : '#ffe5e5',
      'red8' : '#fffafa',
      'black1' : '#0f0f0f',
      'black2' : '#141414',
      'black3' : '#1a1a1a',
      'black4' : '#1f1f1f',
      'black5' : '#262626',
      'black6' : '#333333',
      'black7' : '#404040',
      'gray1' : '#999999',
      'gray2' : '#a6a6a6',
      'gray3' : '#b3b3b3',
      'gray4' : '#bfbfbf',
      'gray5' : '#e4e4e4',
      'gray6' : '#f1f1f3',
      'gray7' : '#f7f7f8',
      'gray8' : '#fcfcfd',
      
    }
  },
  plugins: [],
}