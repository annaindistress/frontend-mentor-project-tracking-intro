module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'gray': 'hsl(var(--gray))',
      'blue': 'hsl(var(--blue))',
      'blue-light': 'hsl(var(--blue), .5)',
      'blue-lightest': 'hsl(var(--blue), .15)',
      'orange': 'hsl(var(--orange))',
      'red': 'hsl(var(--red))',
    },
    fontFamily: {
      'sans': ['"Barlow Condensed"', 'sans-serif'],
      'body': ['Barlow', 'sans-serif'],
    },
    fontSize: {
      sm: ['15px', '18px'],
      base: ['18px', '26px'],
      lg: ['40px', '40px'],
      xl: ['64px', '64px'],
    },
    letterSpacing: {
      normal: '0',
      wide: '1px',
      wider: '1.2px',
      widest: '2.5px',
      widest: '5px',
    },
    extend: {},
  },
  plugins: [],
}
