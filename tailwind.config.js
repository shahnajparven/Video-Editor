/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ["group-hover"], // Ensure "group-hover" is enabled for "display"
    },
  },
  plugins: [],
}
