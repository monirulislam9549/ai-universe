/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#b766f4",

          "secondary": "#66d6c1",

          "accent": "#41bfd8",

          "neutral": "#1C1E22",

          "base-100": "#46424C",

          "info": "#A5BDE9",

          "success": "#6BE1A2",

          "warning": "#FAC94C",

          "error": "#E64037",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
