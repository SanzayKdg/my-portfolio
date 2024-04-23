/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "200px",
      md: "640px",
      lg: "768px",
      xl: "1080px",
      xxl: "1280px",
      xxxl: "1530px",
    },
    extend: {
      animation: {
        slideUp: "slideUp 0.5s ease-out",
        slideDown: "slideDown 0.5s ease-out",
        bounceOnce: "bounceOnce 1s 2",
      },
      keyframes: {
        slideUp: {
          "0%": {
            transform: "translateY(100px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        slideDown: {
          "0%": {
            transform: "translateY(-100px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        bounceOnce: {
          "0% , 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
    },
  },
  plugins: [],
});
