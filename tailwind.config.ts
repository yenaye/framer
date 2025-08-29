import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const px0to50 = Array.from(Array(51)).reduce<{ [x: number]: string }>(
  (acc, cur, i) => {
    acc[i] = `${i}px`;
    return acc;
  },
  {}
);

const px0to100 = Array.from(Array(101)).reduce<{ [x: number]: string }>(
  (acc, cur, i) => {
    acc[i] = `${i}px`;
    return acc;
  },
  {}
);

const px0to200 = Array.from(Array(201)).reduce<{ [x: number]: string }>(
  (acc, cur, i) => {
    acc[i] = `${i}px`;
    return acc;
  },
  {}
);

const px0to800 = Array.from(Array(801)).reduce<{
  [x: number | string]: string;
}>(
  (acc, cur, i) => {
    acc[i] = `${i}px`;
    return acc;
  },
  {
    full: '100%',
    inherit: 'inherit',
  }
);

const px0to900 = Array.from(Array(901)).reduce<{
  [x: number | string]: string;
}>(
  (acc, cur, i) => {
    acc[i] = `${i}px`;
    return acc;
  },
  {
    full: '100%',
    inherit: 'inherit',
  }
);

const titleShadow = Array.from(Array(26))
  .map((val, i) => {
    if (i < 12) {
      return `${i + 1}px ${i + 1}px 0 rgb(var(--kpmg-dark-blue-200))`;
    } else {
      const offset = i - 12;
      return `${13 - offset}px ${13 + offset}px 0 rgb(var(--kpmg-blue-800))`;
    }
  })
  .join(',');

/* eslint-disable @typescript-eslint/naming-convention */
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'dark-blue': {
          DEFAULT: 'rgb(var(--kpmg-dark-blue))',
          50: 'rgb(var(--kpmg-dark-blue-50))',
          100: 'rgb(var(--kpmg-dark-blue-100))',
          200: 'rgb(var(--kpmg-dark-blue-200))',
          300: 'rgb(var(--kpmg-dark-blue-300))',
          400: 'rgb(var(--kpmg-dark-blue-400))',
          500: 'rgb(var(--kpmg-dark-blue-500))',
          600: 'rgb(var(--kpmg-dark-blue-600))',
          700: 'rgb(var(--kpmg-dark-blue-700))',
          800: 'rgb(var(--kpmg-dark-blue-800))',
          900: 'rgb(var(--kpmg-dark-blue-900))',
          950: 'rgb(var(--kpmg-dark-blue-950))',
        },
        'kpmg-blue': {
          DEFAULT: 'rgb(var(--kpmg-kpmg-blue))',
          50: 'rgb(var(--kpmg-kpmg-blue-50))',
          100: 'rgb(var(--kpmg-kpmg-blue-100))',
          200: 'rgb(var(--kpmg-kpmg-blue-200))',
          300: 'rgb(var(--kpmg-kpmg-blue-300))',
          400: 'rgb(var(--kpmg-kpmg-blue-400))',
          500: 'rgb(var(--kpmg-kpmg-blue-500))',
          600: 'rgb(var(--kpmg-kpmg-blue-600))',
          700: 'rgb(var(--kpmg-kpmg-blue-700))',
          800: 'rgb(var(--kpmg-kpmg-blue-800))',
          900: 'rgb(var(--kpmg-kpmg-blue-900))',
          950: 'rgb(var(--kpmg-kpmg-blue-950))',
        },
        cobalt: {
          DEFAULT: 'rgb(var(--kpmg-cobalt))',
          50: 'rgb(var(--kpmg-cobalt-50))',
          100: 'rgb(var(--kpmg-cobalt-100))',
          200: 'rgb(var(--kpmg-cobalt-200))',
          300: 'rgb(var(--kpmg-cobalt-300))',
          400: 'rgb(var(--kpmg-cobalt-400))',
          500: 'rgb(var(--kpmg-cobalt-500))',
          600: 'rgb(var(--kpmg-cobalt-600))',
          700: 'rgb(var(--kpmg-cobalt-700))',
          800: 'rgb(var(--kpmg-cobalt-800))',
          900: 'rgb(var(--kpmg-cobalt-900))',
          950: 'rgb(var(--kpmg-cobalt-950))',
        },
        'pacific-blue': {
          DEFAULT: 'rgb(var(--kpmg-pacific-blue))',
          50: 'rgb(var(--kpmg-pacific-blue-50))',
          100: 'rgb(var(--kpmg-pacific-blue-100))',
          200: 'rgb(var(--kpmg-pacific-blue-200))',
          300: 'rgb(var(--kpmg-pacific-blue-300))',
          400: 'rgb(var(--kpmg-pacific-blue-400))',
          500: 'rgb(var(--kpmg-pacific-blue-500))',
          600: 'rgb(var(--kpmg-pacific-blue-600))',
          700: 'rgb(var(--kpmg-pacific-blue-700))',
          800: 'rgb(var(--kpmg-pacific-blue-800))',
          900: 'rgb(var(--kpmg-pacific-blue-900))',
          950: 'rgb(var(--kpmg-pacific-blue-950))',
        },
        blue: {
          DEFAULT: 'rgb(var(--kpmg-blue))',
          50: 'rgb(var(--kpmg-blue-50))',
          100: 'rgb(var(--kpmg-blue-100))',
          200: 'rgb(var(--kpmg-blue-200))',
          300: 'rgb(var(--kpmg-blue-300))',
          400: 'rgb(var(--kpmg-blue-400))',
          500: 'rgb(var(--kpmg-blue-500))',
          600: 'rgb(var(--kpmg-blue-600))',
          700: 'rgb(var(--kpmg-blue-700))',
          800: 'rgb(var(--kpmg-blue-800))',
          900: 'rgb(var(--kpmg-blue-900))',
          950: 'rgb(var(--kpmg-blue-950))',
        },
        'light-blue': {
          DEFAULT: 'rgb(var(--kpmg-light-blue))',
          50: 'rgb(var(--kpmg-light-blue-50))',
          100: 'rgb(var(--kpmg-light-blue-100))',
          200: 'rgb(var(--kpmg-light-blue-200))',
          300: 'rgb(var(--kpmg-light-blue-300))',
          400: 'rgb(var(--kpmg-light-blue-400))',
          500: 'rgb(var(--kpmg-light-blue-500))',
          600: 'rgb(var(--kpmg-light-blue-600))',
          700: 'rgb(var(--kpmg-light-blue-700))',
          800: 'rgb(var(--kpmg-light-blue-800))',
          900: 'rgb(var(--kpmg-light-blue-900))',
          950: 'rgb(var(--kpmg-light-blue-950))',
        },
        'dark-purple': {
          DEFAULT: 'rgb(var(--kpmg-dark-purple))',
          50: 'rgb(var(--kpmg-dark-purple-50))',
          100: 'rgb(var(--kpmg-dark-purple-100))',
          200: 'rgb(var(--kpmg-dark-purple-200))',
          300: 'rgb(var(--kpmg-dark-purple-300))',
          400: 'rgb(var(--kpmg-dark-purple-400))',
          500: 'rgb(var(--kpmg-dark-purple-500))',
          600: 'rgb(var(--kpmg-dark-purple-600))',
          700: 'rgb(var(--kpmg-dark-purple-700))',
          800: 'rgb(var(--kpmg-dark-purple-800))',
          900: 'rgb(var(--kpmg-dark-purple-900))',
          950: 'rgb(var(--kpmg-dark-purple-950))',
        },
        purple: {
          DEFAULT: 'rgb(var(--kpmg-purple))',
          50: 'rgb(var(--kpmg-purple-50))',
          100: 'rgb(var(--kpmg-purple-100))',
          200: 'rgb(var(--kpmg-purple-200))',
          300: 'rgb(var(--kpmg-purple-300))',
          400: 'rgb(var(--kpmg-purple-400))',
          500: 'rgb(var(--kpmg-purple-500))',
          600: 'rgb(var(--kpmg-purple-600))',
          700: 'rgb(var(--kpmg-purple-700))',
          800: 'rgb(var(--kpmg-purple-800))',
          900: 'rgb(var(--kpmg-purple-900))',
          950: 'rgb(var(--kpmg-purple-950))',
        },
        'light-purple': {
          DEFAULT: 'rgb(var(--kpmg-light-purple))',
          50: 'rgb(var(--kpmg-light-purple-50))',
          100: 'rgb(var(--kpmg-light-purple-100))',
          200: 'rgb(var(--kpmg-light-purple-200))',
          300: 'rgb(var(--kpmg-light-purple-300))',
          400: 'rgb(var(--kpmg-light-purple-400))',
          500: 'rgb(var(--kpmg-light-purple-500))',
          600: 'rgb(var(--kpmg-light-purple-600))',
          700: 'rgb(var(--kpmg-light-purple-700))',
          800: 'rgb(var(--kpmg-light-purple-800))',
          900: 'rgb(var(--kpmg-light-purple-900))',
          950: 'rgb(var(--kpmg-light-purple-950))',
        },
        'dark-pink': {
          DEFAULT: 'rgb(var(--kpmg-dark-pink))',
          50: 'rgb(var(--kpmg-dark-pink-50))',
          100: 'rgb(var(--kpmg-dark-pink-100))',
          200: 'rgb(var(--kpmg-dark-pink-200))',
          300: 'rgb(var(--kpmg-dark-pink-300))',
          400: 'rgb(var(--kpmg-dark-pink-400))',
          500: 'rgb(var(--kpmg-dark-pink-500))',
          600: 'rgb(var(--kpmg-dark-pink-600))',
          700: 'rgb(var(--kpmg-dark-pink-700))',
          800: 'rgb(var(--kpmg-dark-pink-800))',
          900: 'rgb(var(--kpmg-dark-pink-900))',
          950: 'rgb(var(--kpmg-dark-pink-950))',
        },
        pink: {
          DEFAULT: 'rgb(var(--kpmg-pink))',
          50: 'rgb(var(--kpmg-pink-50))',
          100: 'rgb(var(--kpmg-pink-100))',
          200: 'rgb(var(--kpmg-pink-200))',
          300: 'rgb(var(--kpmg-pink-300))',
          400: 'rgb(var(--kpmg-pink-400))',
          500: 'rgb(var(--kpmg-pink-500))',
          600: 'rgb(var(--kpmg-pink-600))',
          700: 'rgb(var(--kpmg-pink-700))',
          800: 'rgb(var(--kpmg-pink-800))',
          900: 'rgb(var(--kpmg-pink-900))',
          950: 'rgb(var(--kpmg-pink-950))',
        },
        'light-pink': {
          DEFAULT: 'rgb(var(--kpmg-light-pink))',
          50: 'rgb(var(--kpmg-light-pink-50))',
          100: 'rgb(var(--kpmg-light-pink-100))',
          200: 'rgb(var(--kpmg-light-pink-200))',
          300: 'rgb(var(--kpmg-light-pink-300))',
          400: 'rgb(var(--kpmg-light-pink-400))',
          500: 'rgb(var(--kpmg-light-pink-500))',
          600: 'rgb(var(--kpmg-light-pink-600))',
          700: 'rgb(var(--kpmg-light-pink-700))',
          800: 'rgb(var(--kpmg-light-pink-800))',
          900: 'rgb(var(--kpmg-light-pink-900))',
          950: 'rgb(var(--kpmg-light-pink-950))',
        },
        'dark-green': {
          DEFAULT: 'rgb(var(--kpmg-dark-green))',
          50: 'rgb(var(--kpmg-dark-green-50))',
          100: 'rgb(var(--kpmg-dark-green-100))',
          200: 'rgb(var(--kpmg-dark-green-200))',
          300: 'rgb(var(--kpmg-dark-green-300))',
          400: 'rgb(var(--kpmg-dark-green-400))',
          500: 'rgb(var(--kpmg-dark-green-500))',
          600: 'rgb(var(--kpmg-dark-green-600))',
          700: 'rgb(var(--kpmg-dark-green-700))',
          800: 'rgb(var(--kpmg-dark-green-800))',
          900: 'rgb(var(--kpmg-dark-green-900))',
          950: 'rgb(var(--kpmg-dark-green-950))',
        },
        green: {
          DEFAULT: 'rgb(var(--kpmg-green))',
          50: 'rgb(var(--kpmg-green-50))',
          100: 'rgb(var(--kpmg-green-100))',
          200: 'rgb(var(--kpmg-green-200))',
          300: 'rgb(var(--kpmg-green-300))',
          400: 'rgb(var(--kpmg-green-400))',
          500: 'rgb(var(--kpmg-green-500))',
          600: 'rgb(var(--kpmg-green-600))',
          700: 'rgb(var(--kpmg-green-700))',
          800: 'rgb(var(--kpmg-green-800))',
          900: 'rgb(var(--kpmg-green-900))',
          950: 'rgb(var(--kpmg-green-950))',
        },
        'light-green': {
          DEFAULT: 'rgb(var(--kpmg-light-green))',
          50: 'rgb(var(--kpmg-light-green-50))',
          100: 'rgb(var(--kpmg-light-green-100))',
          200: 'rgb(var(--kpmg-light-green-200))',
          300: 'rgb(var(--kpmg-light-green-300))',
          400: 'rgb(var(--kpmg-light-green-400))',
          500: 'rgb(var(--kpmg-light-green-500))',
          600: 'rgb(var(--kpmg-light-green-600))',
          700: 'rgb(var(--kpmg-light-green-700))',
          800: 'rgb(var(--kpmg-light-green-800))',
          900: 'rgb(var(--kpmg-light-green-900))',
          950: 'rgb(var(--kpmg-light-green-950))',
        },
        'traffic-light-green': {
          DEFAULT: 'rgb(var(--kpmg-traffic-light-green))',
          50: 'rgb(var(--kpmg-traffic-light-green-50))',
          100: 'rgb(var(--kpmg-traffic-light-green-100))',
          200: 'rgb(var(--kpmg-traffic-light-green-200))',
          300: 'rgb(var(--kpmg-traffic-light-green-300))',
          400: 'rgb(var(--kpmg-traffic-light-green-400))',
          500: 'rgb(var(--kpmg-traffic-light-green-500))',
          600: 'rgb(var(--kpmg-traffic-light-green-600))',
          700: 'rgb(var(--kpmg-traffic-light-green-700))',
          800: 'rgb(var(--kpmg-traffic-light-green-800))',
          900: 'rgb(var(--kpmg-traffic-light-green-900))',
          950: 'rgb(var(--kpmg-traffic-light-green-950))',
        },
        'traffic-light-red': {
          DEFAULT: 'rgb(var(--kpmg-traffic-light-red))',
          50: 'rgb(var(--kpmg-traffic-light-red-50))',
          100: 'rgb(var(--kpmg-traffic-light-red-100))',
          200: 'rgb(var(--kpmg-traffic-light-red-200))',
          300: 'rgb(var(--kpmg-traffic-light-red-300))',
          400: 'rgb(var(--kpmg-traffic-light-red-400))',
          500: 'rgb(var(--kpmg-traffic-light-red-500))',
          600: 'rgb(var(--kpmg-traffic-light-red-600))',
          700: 'rgb(var(--kpmg-traffic-light-red-700))',
          800: 'rgb(var(--kpmg-traffic-light-red-800))',
          900: 'rgb(var(--kpmg-traffic-light-red-900))',
          950: 'rgb(var(--kpmg-traffic-light-red-950))',
        },
        'traffic-light-yellow': {
          DEFAULT: 'rgb(var(--kpmg-traffic-light-yellow))',
          50: 'rgb(var(--kpmg-traffic-light-yellow-50))',
          100: 'rgb(var(--kpmg-traffic-light-yellow-100))',
          200: 'rgb(var(--kpmg-traffic-light-yellow-200))',
          300: 'rgb(var(--kpmg-traffic-light-yellow-300))',
          400: 'rgb(var(--kpmg-traffic-light-yellow-400))',
          500: 'rgb(var(--kpmg-traffic-light-yellow-500))',
          600: 'rgb(var(--kpmg-traffic-light-yellow-600))',
          700: 'rgb(var(--kpmg-traffic-light-yellow-700))',
          800: 'rgb(var(--kpmg-traffic-light-yellow-800))',
          900: 'rgb(var(--kpmg-traffic-light-yellow-900))',
          950: 'rgb(var(--kpmg-traffic-light-yellow-950))',
        },
        'gray-1': {
          DEFAULT: 'rgb(var(--kpmg-gray-1))',
          50: 'rgb(var(--kpmg-gray-1-50))',
          100: 'rgb(var(--kpmg-gray-1-100))',
          200: 'rgb(var(--kpmg-gray-1-200))',
          300: 'rgb(var(--kpmg-gray-1-300))',
          400: 'rgb(var(--kpmg-gray-1-400))',
          500: 'rgb(var(--kpmg-gray-1-500))',
          600: 'rgb(var(--kpmg-gray-1-600))',
          700: 'rgb(var(--kpmg-gray-1-700))',
          800: 'rgb(var(--kpmg-gray-1-800))',
          900: 'rgb(var(--kpmg-gray-1-900))',
          950: 'rgb(var(--kpmg-gray-1-950))',
        },
        'gray-2': {
          DEFAULT: 'rgb(var(--kpmg-gray-2))',
          50: 'rgb(var(--kpmg-gray-2-50))',
          100: 'rgb(var(--kpmg-gray-2-100))',
          200: 'rgb(var(--kpmg-gray-2-200))',
          300: 'rgb(var(--kpmg-gray-2-300))',
          400: 'rgb(var(--kpmg-gray-2-400))',
          500: 'rgb(var(--kpmg-gray-2-500))',
          600: 'rgb(var(--kpmg-gray-2-600))',
          700: 'rgb(var(--kpmg-gray-2-700))',
          800: 'rgb(var(--kpmg-gray-2-800))',
          900: 'rgb(var(--kpmg-gray-2-900))',
          950: 'rgb(var(--kpmg-gray-2-950))',
        },
        'gray-3': {
          DEFAULT: 'rgb(var(--kpmg-gray-3))',
          50: 'rgb(var(--kpmg-gray-3-50))',
          100: 'rgb(var(--kpmg-gray-3-100))',
          200: 'rgb(var(--kpmg-gray-3-200))',
          300: 'rgb(var(--kpmg-gray-3-300))',
          400: 'rgb(var(--kpmg-gray-3-400))',
          500: 'rgb(var(--kpmg-gray-3-500))',
          600: 'rgb(var(--kpmg-gray-3-600))',
          700: 'rgb(var(--kpmg-gray-3-700))',
          800: 'rgb(var(--kpmg-gray-3-800))',
          900: 'rgb(var(--kpmg-gray-3-900))',
          950: 'rgb(var(--kpmg-gray-3-950))',
        },
        'gray-4': {
          DEFAULT: 'rgb(var(--kpmg-gray-4))',
          50: 'rgb(var(--kpmg-gray-4-50))',
          100: 'rgb(var(--kpmg-gray-4-100))',
          200: 'rgb(var(--kpmg-gray-4-200))',
          300: 'rgb(var(--kpmg-gray-4-300))',
          400: 'rgb(var(--kpmg-gray-4-400))',
          500: 'rgb(var(--kpmg-gray-4-500))',
          600: 'rgb(var(--kpmg-gray-4-600))',
          700: 'rgb(var(--kpmg-gray-4-700))',
          800: 'rgb(var(--kpmg-gray-4-800))',
          900: 'rgb(var(--kpmg-gray-4-900))',
          950: 'rgb(var(--kpmg-gray-4-950))',
        },
        'gray-5': {
          DEFAULT: 'rgb(var(--kpmg-gray-5))',
          50: 'rgb(var(--kpmg-gray-5-50))',
          100: 'rgb(var(--kpmg-gray-5-100))',
          200: 'rgb(var(--kpmg-gray-5-200))',
          300: 'rgb(var(--kpmg-gray-5-300))',
          400: 'rgb(var(--kpmg-gray-5-400))',
          500: 'rgb(var(--kpmg-gray-5-500))',
          600: 'rgb(var(--kpmg-gray-5-600))',
          700: 'rgb(var(--kpmg-gray-5-700))',
          800: 'rgb(var(--kpmg-gray-5-800))',
          900: 'rgb(var(--kpmg-gray-5-900))',
          950: 'rgb(var(--kpmg-gray-5-950))',
        },
        black: 'rgb(var(--kpmg-black))',
        white: 'rgb(var(--kpmg-white))',
      },
      textShadow: {
        title: titleShadow,
      },
      fontSize: px0to200,
      padding: px0to200,
      margin: px0to100,
      space: px0to100,
      width: px0to900,
      minWidth: px0to900,
      maxWidth: px0to900,
      height: px0to900,
      minHeight: px0to800,
      maxHeight: px0to900,
      gap: px0to100,
      scrollMargin: px0to100,
      inset: px0to200,
      borderRadius: px0to100,
      lineHeight: px0to100,
      borderWidth: px0to50,
      fontFamily: {
        openSans: ['var(--font-open-sans)'],
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
    }),
  ],
};

export default config;
