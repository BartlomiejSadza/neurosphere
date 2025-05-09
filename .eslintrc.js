module.exports = {
    extends: ['next', 'eslint:recommended', 'plugin:react/recommended'],
    plugins: ['react'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-unused-vars': 'warn'
    },
    settings: {
      react: {
        version: '19.0.0'
      }
    },
    parserOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    },
    env: {
    browser: true,
    es2022: true,
    node: true,
  },
};
