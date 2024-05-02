import globals from 'globals'
import pluginJs from'@eslint/js'
import jest from 'eslint-plugin-jest'
import path from 'node:path'
import url from 'node:url'
import { FlatCompat } from '@eslint/eslintrc'

export default [
  ...(new FlatCompat({
    baseDirectory: path.dirname(url.fileURLToPath(import.meta.url))
  }).extends('eslint-config-standard')),
  {
    files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' }
  },
  {
    languageOptions: { globals: globals.node }
  },
  pluginJs.configs.recommended,
  jest.configs['flat/recommended']
];
