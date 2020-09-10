module.exports = {
  purge: [`_site/**/*.html`],
  theme: {
    fontFamily: {
        'serif': ['Merriweather', 'serif']
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ],
};
