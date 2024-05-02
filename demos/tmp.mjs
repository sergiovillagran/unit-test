import globals from "globals";
import pluginJs from "@eslint/js";
import jest from "eslint-plugin-jest"
import standard from "eslint-config-standard"

export default [
  standard,
  {
    files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}
  },
  {
    languageOptions: { globals: globals.node }
  },
  pluginJs.configs.recommended,
  jest.configs['flat/recommended']
];
