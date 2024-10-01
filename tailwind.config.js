/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      textPrimary: "var(--text-primary)",
      textSecondary: "var(--text-secondary)",
      textTertiary: "var(--text-tertiary)",
      bgPrimary: "var(--background-primary)",
      bgSecondary: "var(--background-secondary)",
    },
    backgroundImage: {
       gradient: "var(--gradient)"
    },
    extend: {
      keyframes: {
        fadeIn: {
          "0%": {opacity: "0%"},
          "100%": {opacity: "100%"}
        }
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in 1"
      }
    },
  },
  plugins: [],
}

