import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      'st': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    colors:{
      primary:{
        50:'#eefff1',
        100:'#d7ffe0',
        200:'#b2ffc3',
        300:'#53ff7a',
        400:'#33f560',
        500:'#09de3a',
        600:'#01b82b',
        700:'#059026',
        800:'#0a7123',
        900:'#0a5d20',
        950:'#00340e',
      },
      secundary:{
        50:'#f2fbfa',
        100:'#d2f5f0',
        200:'#a4ebe2',
        300:'#6fd9d0',
        400:'#41c0b9',
        500:'#28a49f',
        600:'#1e8381',
        700:'#1c6968',
        800:'#1a5555',
        900:'#1a4747',
        950:'#0c3436',
      },
      neutral:{
        50:'#f7f7f7',
        100:'#ededed',
        200:'#dadada',
        300:'#c8c8c8',
        400:'#adadad',
        500:'#999999',
        600:'#888888',
        700:'#7b7b7b',
        800:'#676767',
        900:'#545454',
        950:'#363636',
      },
      success:{
        200:'#9af4c3',
        800:'#03623f'
      },
      info:{
        200:'#cad9fb',
        800:'#373c9c'
      },
      warning:{
        200:'#fadfa8',
        800:'#944818'
      },
      error:{
        200:'#f7c3c0',
        800:'#8d2d27'
      },
      
    }
  },
  plugins: [],
};
export default config;
