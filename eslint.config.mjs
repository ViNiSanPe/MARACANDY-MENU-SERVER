import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  // ===============================
  // Global ignores
  // ===============================
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'coverage/**',
      'eslint.config.mjs',
    ],
  },

  // ===============================
  // Base JS rules
  // ===============================
  eslint.configs.recommended,

  // ===============================
  // TypeScript (type-aware)
  // ===============================
  ...tseslint.configs.recommendedTypeChecked,

  // ===============================
  // Prettier
  // ===============================
  prettierRecommended,

  // ===============================
  // NestJS / TypeScript
  // ===============================
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },

    rules: {
      /* ===========================
         Type safety
      ============================ */
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-floating-promises': 'off',

      /* ===========================
         Explicit code
      ============================ */
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        { accessibility: 'explicit' },
      ],

      /* ===========================
         TypeScript best practices
      ============================ */
      '@typescript-eslint/no-inferrable-types': 'warn',
      '@typescript-eslint/prefer-readonly': 'warn',
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-ignore': 'allow-with-description',
          minimumDescriptionLength: 5,
        },
      ],

      /* ===========================
         Clean and predictable code.
      ============================ */
      'no-console': 'warn',
      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'all'],
      'no-implicit-coercion': 'error',
      'no-return-await': 'error',

      /* ===========================
         Organized imports
      ============================ */
      'no-duplicate-imports': 'error',

      /* ===========================
         Prettier
      ============================ */
      'prettier/prettier': ['error', { endOfLine: 'auto' }],

      /* ===========================
         No comments.
      ============================ */
      'no-inline-comments': 'error',
      'spaced-comment': ['error', 'never'],
    },
  },
);
