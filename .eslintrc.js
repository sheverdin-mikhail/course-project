module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended', 'plugin:react/jsx-runtime', 'plugin:storybook/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'i18next'],
    rules: {
        'react/jsx-indent': [2, 4],
        indent: [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [1, {
            extensions: ['.js', '.jsx', '.tsx'],
        }],
        'react/jsx-props-no-spreading': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'quote-props': ['error', 'as-needed'],
        'react/prop-types': 'off',
        'no-shadow': 'off',
        'react/function-component-definition': [2, {
            namedComponents: ['function-expression', 'arrow-function'],
            unnamedComponents: ['function-expression', 'arrow-function'],
        }],
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': ['error', {
            markupOnly: true,
            ignoreAttribute: ['data-testid', 'to'],
        }],
        'max-len': [2, {
            ignoreComments: true,
            code: 180,
        }],
        'no-undef': 'warn',
    },
    globals: {
        __IS__DEV__: true,
    },
    overrides: [{
        files: ['**/src/**/.test.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off',
        },
    }],
};
