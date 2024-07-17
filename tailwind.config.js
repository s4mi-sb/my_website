/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        "infinite-scroll" : "infinite-scroll 50s linear infinite"
      },
      keyframes:{
        "infinite-scroll":{
          from : {transform: "translateX(0)"},
          to: {transform: "translateX(-100%)"}
        }
      }
    },
  },
  plugins: [],
}