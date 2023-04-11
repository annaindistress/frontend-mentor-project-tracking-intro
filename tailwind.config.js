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
      'orange-light': 'hsl(var(--orange), .75)',
      'red': 'hsl(var(--red))',
    },
    fontFamily: {
      'sans': ['"Barlow Condensed"', 'sans-serif'],
      'body': ['Barlow', 'sans-serif'],
    },
    fontSize: {
      xs: ['14px', '16px'],
      sm: ['15px', '18px'],
      base: ['18px', '26px'],
      lg: ['40px', '40px'],
      xl: ['64px', '64px'],
    },
    letterSpacing: {
      tight: '0',
      normal: '1px',
      wide: '1.2px',
      wider: '2.5px',
      widest: '5px',
    },
    extend: {},
  },
  plugins: [],
}
