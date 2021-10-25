module.exports = {
  mode:'jit',
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        "3xl": "2000px",
      }
    },
  },
  variants: {
    extend: {
		animation: ['hover', 'focus'],
	},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
