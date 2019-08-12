module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['@typescript-eslint', 'import'],
    extends: ['airbnb-typescript/base', 'prettier', 'prettier/@typescript-eslint'],
    env: {
        browser: false,
        node: true,
        es6: true,
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
    rules: {
        'no-underscore-dangle': 'off',
        'import/prefer-default-export': 'off',
    },
};
