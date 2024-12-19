import stylisticJs from "@stylistic/eslint-plugin-js"
import babelParser from "@babel/eslint-parser";
import reactPlugin from "eslint-plugin-react";

export default [
  {
    plugins: {
      react: reactPlugin,
      "@stylistic/js": stylisticJs
    },
    rules: {
      "no-unused-vars": ["warn", {
        varsIgnorePattern: "^_|React",
        argsIgnorePattern: "^_"
      }],
      "@stylistic/js/indent": ["error", 2],
      "@stylistic/js/linebreak-style": ["error", "unix"],
      "@stylistic/js/arrow-parens": ["warn", "always"],
      "@stylistic/js/jsx-quotes": ["error", "prefer-double"],
      "@stylistic/js/eol-last": ["warn", "always"],
      "@stylistic/js/quote-props": ["warn", "as-needed", {
        unnecessary: true,
        numbers: false
      }],
      "@stylistic/js/semi": ["error", "never", {
        beforeStatementContinuationChars: "never"
      }],
      "@stylistic/js/comma-dangle": ["error", {
        arrays: "never",
        objects: "never",
        imports: "never",
        exports: "never",
        functions: "never"
      }],
      "@stylistic/js/key-spacing": "error",
      "@stylistic/js/block-spacing": "warn",
      "@stylistic/js/arrow-spacing": "warn",
      "@stylistic/js/object-curly-spacing": ["warn", "always"],
      "@stylistic/js/space-before-blocks": ["warn", {
        functions: "never",
        keywords: "never",
        classes: "always"
      }],
      "@stylistic/js/space-before-function-paren": ["warn", {
        anonymous: "never",
        named: "never",
        asyncArrow: "never"
      }],
      "@stylistic/js/switch-colon-spacing": ["warn", {
        after: true,
        before: false
      }],
      "@stylistic/js/spaced-comment": ["warn", "always", {
        exceptions: ["!", "?", "*", "-", "+"]
      }],
      "@stylistic/js/no-trailing-spaces": ["warn", {
        skipBlankLines: false,
        ignoreComments: false
      }],
      "@stylistic/js/no-multiple-empty-lines": ["warn", {
        max: 2,
        maxBOF: 0
      }],
      "react/jsx-filename-extension": [1, {
        extensions: [".js", ".jsx"]
      }],
      "react/jsx-uses-vars": "warn",
      "react/jsx-uses-react": "warn"
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    files: [
      "**/*.js",
      "**/*.jsx"
    ],
    ignores: [
      ".docusaurus/*"
    ],
    languageOptions: {
      globals: {
        require: true,
        process: true
      },
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
        ecmaFeatures: {
          jsx: true
        },
        parser: babelParser
      }
    }
  }
]
