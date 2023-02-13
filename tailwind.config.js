/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}",
  ],
  theme: {
    fontFamily: {
      cartridge: ['Cartridge', 'Napa', 'ui-sans-serif'],
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
          magenta: '#b43178',
          royal: '#1e55b9',
          beige: '#fff9f3',
          aqua: '#00d6cb',
          purple: '#ce53e0',
          yellow: '#ffd24a',
          orange: '#ff7c3b',
          violet: '#494b98',
          navy: '#263b5a',
          pink: '#ff0088',
          gold: '#d9ab4d'
        },
        secondary: {
          aqua: '#bcf3ee',
          purple: '#f2ccf5',
          yellow: '#fff2c3',
          orange: '#ffe4bf',
          violet: '#cfcadd',
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
