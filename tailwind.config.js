/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#1A100C",
        textColor: "#C6BAB6",
        titleColor: "#FFB194",
        primaryColor: "#AE5D3F",
      },
    },

    screens: {
      ss: "320px",
      sm: "375px",
      sl: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
  },
  plugins: [],
};
