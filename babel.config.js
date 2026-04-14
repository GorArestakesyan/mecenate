const envFile = `.env.${process.env.APP_ENV ?? 'development'}`;

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
          alias: {
            '@ui-kit':     './src/ui-kit',
            '@services':   './src/services',
            '@common':     './src/common',
            '@config':     './src/config',
            '@constants':  './src/constants',
            '@providers':  './src/providers',
            '@ui-modules': './src/ui-modules',
            '@icons':      './src/assets/icons',
            '@screens':    './src/screens',
            '@images':     './src/assets/images',
            '@navigation': './src/navigation',
          },
        },
      ],
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: envFile,
          allowUndefined: false,
        },
      ],
      'react-native-worklets/plugin',
    ],
  };
};
