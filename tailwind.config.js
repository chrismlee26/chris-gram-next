module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  content: [],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '2000px',
    },
    colors: {
      'black': '#101010',
      'white': '#FFF',
      'bone': '#FFFAE2',
      'bone2': '#F6EFCA',
      'green': '#B1BCAF',
      'red': '#BB9494',
    },
    extend: {
      fontFamily: {
        title: ['DINPro', 'sans-serif'],
        main: ['Roboto', 'sans-serif'],
      },
      keyframes: {
        slideInFromLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-200px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        slideInFromBot: {
          '0%': {
            opacity: '0',
            transform: 'translateY(100px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        slideInFromLeft: 'slideInFromLeft .5s ease-out 1',
        slideInFromBot: 'slideInFromBot .5s ease-out 1',
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

