/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle at left, var(--tw-gradient-stops))",
      },
      colors: {
        primaryGreen: "#00B25C",
        secondaryGreen: "#009E52",
        primaryText: "#EEEEEE",
        secondaryText: "#B6B6B6",
        primaryGrey: "#1A1A1A",
        secondaryGrey: "#121212",
        borderColor: "#616161",
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },

        },
      },
        animation: {
          'infinte-slide': '20s slide infinite linear',
        },
    },
    variants: {
      animation: ['responsive', 'hover'],
    },
  },
  plugins: [],
};
