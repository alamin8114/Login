/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  }, backgroundImage: {
    'footer-texture': "url('/img/footer-texture.png')",
  },
  container: {
    center: true,
  },
  plugins: [],
}