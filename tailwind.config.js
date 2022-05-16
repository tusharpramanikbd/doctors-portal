module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-banner': "url('/src/assets/images/bg.png')",
        appointment: "url('/src/assets/images/appointment.png')",
      },
      backgroundColor: {
        'nav-item': '#3A4256',
      },
      gridTemplateColumns: {
        auto: 'auto 1fr',
        autoright: '1fr auto',
      },
    },
  },
  daisyui: {
    themes: [
      {
        doctorportaltheme: {
          primary: '#0FCFEC',
          secondary: '#19D3AE',
          accent: '#3A4256',
          neutral: '#3d4451',
          'base-100': '#ffffff',
        },
      },
      'dark',
      'cupcake',
    ],
  },
  plugins: [require('daisyui')],
}
