/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionProperty: {
        "max-height": "max-height",
      },
      fontFamily: {
        custom: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SFNSText-Regular"',
          '"San Francisco"',
          '"Roboto"',
          '"Segoe UI"',
          '"Helvetica Neue"',
          '"Lucida Grande"',
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
