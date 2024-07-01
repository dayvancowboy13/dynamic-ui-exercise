import globals from 'globals';
import pluginJs from '@eslint/js';
// import stylisticJs from '@stylistic/eslint-plugin-js';

export default [
  {
    ignores: [
      // 'src/index.js',
      // "eslint.config.mjs",
      'webpack.config.js'
    ]
  },
  {
    // plugins: {
    //   '@stylistic/js': stylisticJs
    // },
    rules: {
      'semi': 'warn',
      'quotes': ['error', 'single', { avoidEscape: true }],
      'no-trailing-spaces': 'warn',
      'keyword-spacing': 'warn',
      'indent': ['warn', 'tab']
      // '@stylistic/js/eol-last': 0,
      // '@stylistic/js/quotes': ['error', 'double', { avoidEscape: true }]
    },
    languageOptions: { globals: globals.browser }
  },
  pluginJs.configs.recommended,
  // stylisticJs.configs["all-flat"]
];