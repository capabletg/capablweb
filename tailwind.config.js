module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        capabl_primary: "#FFAF00",
      },
      boxShadow: {
        "3xl": "0 35px 30px -9px rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
  ],
};
