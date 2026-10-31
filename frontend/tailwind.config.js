/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        glow: {
          pink: '#FF6B9D',
          pinkHover: '#FF4785',
          pinkLight: '#FFF0F5',
          greyDark: '#1E1E24',
          greyCard: '#2A2A35',
          greyText: '#A0A0B0',
          greyBorder: '#3F3F50',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif'],
        reading: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}

