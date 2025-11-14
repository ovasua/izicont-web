import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#0F2C59',
          700: '#175775',
        },
        accent: {
          DEFAULT: '#3DCCC7',
          light: '#5DD9D5',
          dark: '#2AB3AE',
        },
        gray: {
          100: '#F0F2F5',
          700: '#495057',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0F2C59 0%, #175775 100%)',
        'gradient-accent': 'linear-gradient(135deg, #175775 0%, #3DCCC7 100%)',
        'gradient-hero': 'linear-gradient(135deg, rgba(15,44,89,0.95) 0%, rgba(23,87,117,0.9) 100%)',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(15, 44, 89, 0.08)',
        'card-hover': '0 8px 32px rgba(61, 204, 199, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
