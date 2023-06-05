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
        "pikachu-gradient":
          "linear-gradient(0deg, rgba(255, 102, 212, 0) 0%, rgba(255, 151, 95, 0.5) 100%)",
      },
      dropShadow: {
        card: "30px 30px 0px rgba(0, 0, 0, 0)",
      },
      fontFamily: {
        mkHell: ["mk-hell"],
        pangram: ["pangram-regular"],
        pangramLight: ["pangram-light"],
        pangramBlack: ["pangram-black"],
        pangramBold: ["pangram-bold"],
        neuebit: ["neuebit"],
        neuebitBold: ["neuebit-bold"],
      },
      colors: {
        //custom
        "custom-teal": "#9CD9CC",
        "custom-black": "#020102",
        "custom-black2": "#030303",
        "custom-white": "#E8E8E8",
        "custom-white2": "#F6F3F3",
        "custom-red": "#FF0000",
        "custom-tan": "#F6EFD3",
        "custom-blue": "#3D7FFF",
        "custom-yellow": "#E0AF00",
        "custom-yellow2": "#FABC2A",
        "custom-brown": "#825010",

        //template (replace if needed)
        "custom-white-2": "#EBE6E6",
        "light-orange": "#F3B24E",
        "dark-orange": "#EB4B46",
        "mid-orange": "#ee6a49",
        "mid-gray": "#302E2E",
        "custom-dark-gray": "#202020",
        "custom-light-gray": "#6F7273",
        "custom-light-gray-2": "#c4c2c3",
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
