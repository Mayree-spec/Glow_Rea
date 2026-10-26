/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glow: {
          500: '#D6336C', // Rose (Buttons, links)[cite: 14, 16]
          200: '#F8C8DC', // Blush (Soft highlights)[cite: 14, 16]
          700: '#A61E4D', // Deep Rose (Premium badge)[cite: 14, 16]
        },
        ink: '#2D2D33',   // Charcoal (Text, menus)[cite: 14, 16]
        slate: '#6E6E7A', // Slate (Secondary text)[cite: 14, 16]
        mist: '#F1F1F4',  // Mist (Backgrounds)[cite: 14, 16]
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'], // Logo & Headings[cite: 14, 16]
        body: ['Poppins', 'sans-serif'],        // UI & Menus[cite: 14, 16]
        reading: ['Lora', 'serif'],            // Chapter reading[cite: 14, 16]
      }
    },
  },
  plugins: [],
}

