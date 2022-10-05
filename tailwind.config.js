module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                capabl_primary: "#FFAF00",
            },
        },
    },
    plugins: [require("tailwind-scrollbar-hide"), require("@tailwindcss/line-clamp"), require("@tailwindcss/forms")],
};
