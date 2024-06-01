/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
