/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    module:exports = {
      // ... other Tailwind configurations
      darkMode: 'media', // Enable dark mode based on user preference
    },
    
  },
  plugins: [],
}