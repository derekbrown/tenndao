/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        'Napa',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    extend: {
      keyframes: {
          slideUp: {
              '0%': { transform: 'translateY(200px)', opacity: '0' },
              '100%': { transform: 'translateY(0px)', opacity: '1' },
          },
          slideLeft: {
              '0%': { transform: 'translateX(50%)', opacity: '0' },
              '100%': { transform: 'translateX(0%)', opacity: '1' },
          },
          slideRight: {
              '0%': { transform: 'translateX(-100%)', opacity: '0' },
              '100%': { transform: 'translateX(0%)', opacity: '1' },
          },
          fade: {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' },
          },
          fadeOut: {
              '0%': { opacity: '1' },
              '100%': { opacity: '0' },
          },
          colors: {
              '0%': { 'border-color': '#7A18F5' },
              '16%': { 'border-color': '#FF0092' },
              '32%': { 'border-color': '#00ABD8' },
              '48%': { 'border-color': '#FF5C00' },
              '64%': { 'border-color': '#0057FF' },
              '80%': { 'border-color': '#CDFF3F' },
              '100%': { 'border-color': '#FFE76A' },
          },
          'reverse-spin': {
            from: {
              transform: 'rotate(360deg)'
            },
          }
      },
      animation: {
          slideUp: 'slideUp 500ms ease-in-out 1',
          slideLeft: 'slideLeft 1s ease-in-out 1',
          slideRight: 'slideRight 500ms ease-in-out 1',
          fade: 'fade 1s ease-in-out 1',
          fadeOut: 'fadeOut 500ms ease-in-out 1',
          colors: 'colors 5s linear infinite',
          'spin-slow': 'spin 5s linear infinite',
          'reverse-spin-slow': 'reverse-spin 5s linear infinite'
      },
      colors: {
        primary: {
          pink1: '#ffe7f4',
          pink2: '#ffcce9',
          pink3: '#ffb1dc',
          pink4: '#ff80c9',
          pink5: '#ff4d83',
          pink6: '#ff0092',
          pink7: '#cc0075',
          pink8: '#990058',
          pink9: '#66003a',
          pink10: '#33001d',
          DEFAULT: '#ff0092'
        },
        neutral: {
          gray1: '#313131',
          gray2: '#4f4f4f',
          gray3: '#828282',
          gray4: '#bdbdbd',
          gray5: '#e0e0e0',
          gray6: '#f2f2f2',
          gray7: '#fafafa',
          offwhite: '#fffcfd',
          white: '#ffffff'
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
