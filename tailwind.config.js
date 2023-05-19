/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "white-gradient": `linear-gradient(360.58deg, #FFFFFF 43.76%, rgba(255, 255, 255, 0) 106.82%)`,
        "merch-gradient":
          "linear-gradient(180deg, rgba(183, 119, 84, 0) 0%, rgba(255, 151, 95, 0.5) 100%)",
      },
      dropShadow: {
        card: "30px 30px 0px rgba(0, 0, 0, 0)",
      },
      fontFamily: {
        primary: ["mk-hell", "-apple-system", "system-ui", "monospace"],
        secondary: [
          "pangram-regular",
          "-apple-system",
          "system-ui",
          "monospace",
        ],
        black: ["pangram-black"],
        neuebit: ["neuebit"],
      },
      colors: {
        //custom
        "custom-teal": "#9CD9CC",
        "custom-black": "#020102",
        "custom-white": "#E8E8E8",
        "custom-red": "#FF0000",

        //template (replace if needed)
        "custom-white-2": "#EBE6E6",
        "light-orange": "#F3B24E",
        "dark-orange": "#EB4B46",
        "mid-orange": "#ee6a49",
        "mid-gray": "#302E2E",
        "custom-dark-gray": "#202020",
        "custom-light-gray": "#6F7273",
        "custom-light-gray-2": "#c4c2c3",
        "custom-yellow": "#FFBA21",
        "custom-green": "#56BC78",
        "custom-orange": "#FF5722",
        "custom-light-red": "#E77975",
      },
      screens: {
        "3xl": "2160px",
        "4xl": "3000px",
      },
    },
  },
  plugins: [],
};
