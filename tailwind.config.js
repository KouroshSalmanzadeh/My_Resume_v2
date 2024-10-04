/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dana' : "dana",
        'morabba' : "morabba"
      },
    },
  },
  plugins: [],
  corePlugins: {
    // ...
    container: false,
  },
}

