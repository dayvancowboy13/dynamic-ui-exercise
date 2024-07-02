import globals from 'globals';
import pluginJs from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';

export default [
  {
    ignores: [
      'eslint.config.mjs',
      'webpack.config.js',
      'backup_lint_config.mjs'
    ]
  },
  {
    plugins: {
      '@stylistic/js': stylisticJs
    },
    rules: {
      '@stylistic/js/quotes': ['warn', 'single', { avoidEscape: true }],
      '@stylistic/js/eol-last': "off",
    },
    languageOptions: { globals: globals.browser }
  },
  pluginJs.configs.recommended,
  stylisticJs.configs["all-flat"]
];