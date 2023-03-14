module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    overrides: [
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        indent: [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
        'react/jsx-props-no-spreading': 'warn',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'no-undef': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'quote-props': ['error', 'as-needed'],
        'react/prop-types': 'warn',
        'no-shadow': 'off',
        'react/function-component-definition': [2, {
            namedComponents: 'arrow-function',
            unnamedComponents: 'function-expression',
        }],
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',

    },
    globals: {
        __IS__DEV__: true,
    },
};
