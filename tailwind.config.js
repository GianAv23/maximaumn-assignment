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
  },
  plugins: [],
};
