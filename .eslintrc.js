module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: [
    'react',
    'html'
  ],
  rules: {
    'no-extra-semi': 'off',
    'semi': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'linebreak-style': 'off',
    'no-undef': 'off',
    'indent': 'off',
    'arrow-body-style': 'off',
    'react/jsx-indent': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'no-use-before-define': 'off',
    'react/button-has-type': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/jsx-indent-props': 'off',
    'react/destructuring-assignment': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    'jsx-a11y/tabindex-no-positive': 'off',
    'no-console': 'off'
  },
};
