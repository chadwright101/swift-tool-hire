import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#231F20",
      white: "#FCFCFC",
      lightGreen: "#A6CE39",
      darkGreen: "#134B23",
      linkBlue: "#0000FF",
      transparent: "transparent",
    },
    fontSize: {
      paragraph: [
        "1rem",
        {
          letterSpacing: "0.02rem",
          fontWeight: "300",
        },
      ],
      subheading: [
        "1.25rem",
        {
          letterSpacing: "0.025rem",
          fontWeight: "600",
        },
      ],
      heading: [
        "2.25rem",
        {
          letterSpacing: "0.045rem",
          fontWeight: "500",
        },
      ],
    },
    screens: {
      phone: "425px",
      tablet: "800px",
      desktop: "1280px",
    },
    extend: {
      margin: {
        15: "60px",
      },
      padding: {
        15: "60px",
      },
      gap: {
        15: "60px",
      },
    },
  },
  plugins: [],
} satisfies Config;
