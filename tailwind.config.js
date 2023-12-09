/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: `
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 80%),
        url('/assets/images/heroImg.jpg')
        `,
      },
      fontFamily: {
        sans: ["IBM Plex Sans"],
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
