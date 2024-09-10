/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "founders-grotesk": ["Founders Grotesk", "sans-serif"], // Custom font family
      },
    },
  },
  plugins: [],
};
