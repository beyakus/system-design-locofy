/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-2": "#fff",
        gainsboro: "#e5e6eb",
        dimgray: "#4e5969",
        gray: "#1d2129",
        lightslategray: "#86909c",
        mistyrose: "#ffece8",
        tomato: "#f53f3f",
        whitesmoke: "#f2f3f5",
        mediumslateblue: "#165dff",
      },
      fontFamily: {
        "pingfang-sc": "PingFang SC",
      },
      borderRadius: {
        "num-2": "2px",
      },
      padding: {
        "num-0": "0px",
        "num-4": "4px",
        "num-8": "8px",
        "num-5": "5px",
        "num-16": "16px",
      },
    },
    fontSize: {
      "num-14": "0.875rem",
      "num-12": "0.75rem",
    },
    lineHeight: {
      "num-20": "20px",
      "num-22": "22px",
      "num-28": "28px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
