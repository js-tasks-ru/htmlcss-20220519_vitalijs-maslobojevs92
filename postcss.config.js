module.exports = {
  syntax: 'postcss-scss',
  map: { inline: true },
  plugins: [
    require('precss')({
      lookup: { disable: true },
      properties: {
        // Чтобы работали CSS custom properties, а не заменялись на статическое значение.
        disable: true,
        preserve: true,
      },
    }),
    require('postcss-preset-env'),
    require('postcss-import'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('cssnano'),
  ],
};
