/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'prettier',
    ],
    env: {
        browser: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react-hooks', 'prettier'],
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'], // Your TypeScript files extension
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
            rules: {
                '@typescript-eslint/no-unused-vars': 'error',
                '@typescript-eslint/no-unsafe-assignment': 'warn',
                '@typescript-eslint/no-empty-function': 'off',
                '@typescript-eslint/no-floating-promises': 'off',
                '@typescript-eslint/no-misused-promises': 'off',
                'react-hooks/rules-of-hooks': 'error',
                'react-hooks/exhaustive-deps': 'warn',
                '@typescript-eslint/ban-ts-comment': 'off',
                '@typescript-eslint/restrict-template-expressions': 'off',
            },
            parserOptions: {
                tsconfigRootDir: __dirname,
                project: ['./tsconfig.json', './src/*/tsconfig.json'],
            },
        },
    ],
    ignorePatterns: ['.eslintrc.js', '**/*.config.js', '/*', '!/src'],
};
