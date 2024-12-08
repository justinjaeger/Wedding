import globals from "globals";
import pluginJs from "@eslint/js";
import github from 'eslint-plugin-github';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"], 
    languageOptions: {sourceType: "commonjs"},
  },
  {
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  github.getFlatConfigs().browser,
  github.getFlatConfigs().recommended,
];