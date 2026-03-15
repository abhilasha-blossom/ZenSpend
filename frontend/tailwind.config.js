/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E4057',   // deep blue
        accent: '#7FB069',    // soft green
        sidebar: '#F7F9FB',    // soft neutral / backgound
        highlight: '#F2C94C', // highlight
        muted: '#A0B4C8',     // muted text etc.
      },
    },
  },
  plugins: [],
}

