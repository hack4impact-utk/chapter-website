// next.config.js
module.exports = {
  babel: {
    presets: ['next/babel'],
    plugins: [
      [
        'styled-jsx/babel',
        {
          plugins: ['styled-jsx-plugin-sass'],
        },
      ],
      'inline-react-svg',
    ],
  },
};
