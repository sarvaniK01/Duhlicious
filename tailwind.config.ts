import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1440px) { ... }

      '3xl': '1700px',
      // => @media (min-width: 1536px) { ... }
    }, 
    colors: {
      transparent: 'transparent',
      'white': '#FAF6F2',
      'black': '#2A2929',
      'orange': '#BB371A',
      'lightOrange': '#9ECED6',
      'yellow': '#FFB534',
      'red': '#E22828',
      'green': '#009E23',
      'grey': '#ADA9A8'
    },
    fontFamily: {
      playfairDisplay: ['Playfair Display', 'serif'],
      lora: ['Lora', 'serif'],
    },
    extend: {
      backgroundImage: {
        'homePageHeroBg': "url('/homePage/hero/heroBg.webp')",
        'homePageHeroBgMobile': "url('/homePage/hero/heroBg2.webp')",
        'homePageAboutUsBg': "url('/homePage/aboutUs/aboutBg.webp')",
        'homePageRecipesBg': "url('/homePage/recipes/recipeBg.webp')",
        'newsletterBg': "url('/homePage/newsletter/bg.webp')",
        'newsletterBg2': "url('/homePage/newsletter/bg2.webp')",
        'contactUsBg': "url('/ContactUs/bg.webp')",
        'contactFormInnerBg': "url('/ContactUs/contactFormInnerBg.webp')",
        'aboutBg': "url('/About/aboutBg.webp')",
        'goalsAndObjectivesBg': "url('/About/goalsAndObjectives/bg.webp')",
        'recipePageBg': "url('/RecipesPage/bg.webp')",
        'searchByCategoryBg': "url('/RecipesPage/searchByCategory/bg.webp')",
      }
    },
  },
  plugins: [],
};
export default config;
