/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        custom: {
          100: ({ opacityVariable, opacityValue }) => {
            if (opacityValue !== undefined) {
              return `rgba(var(--color-custom-100), ${opacityValue})`;
            }
            if (opacityVariable !== undefined) {
              return `rgba(var(--color-custom-100), var(${opacityVariable}, 1))`;
            }
            return `rgb(var(--color-custom-100))`;
          },
          200: ({ opacityVariable, opacityValue }) => {
            if (opacityValue !== undefined) {
              return `rgba(var(--color-custom-200), ${opacityValue})`;
            }
            if (opacityVariable !== undefined) {
              return `rgba(var(--color-custom-200), var(${opacityVariable}, 1))`;
            }
            return `rgb(var(--color-custom-200))`;
          },
          300: ({ opacityVariable, opacityValue }) => {
            if (opacityValue !== undefined) {
              return `rgba(var(--color-custom-300), ${opacityValue})`;
            }
            if (opacityVariable !== undefined) {
              return `rgba(var(--color-custom-300), var(${opacityVariable}, 1))`;
            }
            return `rgb(var(--color-custom-300))`;
          },
          400: ({ opacityVariable, opacityValue }) => {
            if (opacityValue !== undefined) {
              return `rgba(var(--color-custom-400), ${opacityValue})`;
            }
            if (opacityVariable !== undefined) {
              return `rgba(var(--color-custom-400), var(${opacityVariable}, 1))`;
            }
            return `rgb(var(--color-custom-400))`;
          },
        },
      },
    },
  },
  plugins: [],
};
