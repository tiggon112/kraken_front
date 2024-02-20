module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      md: '736px',
      xl: '1248px',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      spacing: {
        42: '10.4375rem', // Add custom spacing value '42' for 10.4375rem
        65: '16.25rem',
      },
      margin: {
        none: 'unset',
      },
      fontFamily: {
        celias: ['Celia-Regular', 'sans-serif'],
        'celias-bold': ['Celia-Bold', 'sans-serif'],
        'celias-light': ['Celia-Light', 'sans-serif'],
        'celias-black': ['Celia-Black', 'sans-serif'],
        'celias-thin': ['Celia-Thin', 'sans-serif'],
        plexsans: ['IBM Plex Sans', 'sans-serif'],
        gcb: ['GT Condensed Bold', { fontVariationSettings: '"wdth" 61' }],
        gts: ['GT Standard S'],
      },
      colors: {
        purple: '#5d45dc',
        green: '#3B9B4A',
        white: '#FEFEFE',
        blur: '#7360de',
        grey: '#AFAFAF',
        'custom-grey': 'rgba(211,213,221,0.5)',
        bshu: '#898989',
        greyblur: '#EEEEEE',
        purpleblur: '#4631c9',
        backgrey: 'rgb(238, 236, 251)',
        darkgrey: 'rgb(104, 107, 130)',
        primary: {
          100: '#472fc2',
          200: '#FFFFFF',
          300: '#0E0C28',
          400: '#4FC3F7',
          500: '#03A9F4',
          600: '#0398DC',
          700: '#026592',
          800: '#014C6E',
          900: '#013349',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
      },
      lineHeight: {
        hero: '4.5rem',
      },
    },
  },
  plugins: [],
};
