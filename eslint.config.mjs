import reactPlugin from "eslint-plugin-react";
import babelParser from "@babel/eslint-parser";

export default [
  {
    plugins: {
      react: reactPlugin
    },
    rules: {
      indent: [
        "error",
        2
      ],
      "linebreak-style": [
        "error",
        "unix"
      ],
      quotes: [
        "error",
        "double",
        {
          avoidEscape: true,
          allowTemplateLiterals: true
        }
      ],
      semi: [
        "error",
        "never",
        {
          beforeStatementContinuationChars: "always"
        }
      ],
      "no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^_|React",
          argsIgnorePattern: "^_"
        }
      ],
      "comma-dangle": ["error", "never"],
      "react/jsx-filename-extension": [1, {
        extensions: [".js", ".jsx"]
      }],
      "react/jsx-uses-vars": "error",
      "react/jsx-uses-react": "error"
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
