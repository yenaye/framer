import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import preferArrowPlugin from 'eslint-plugin-prefer-arrow';
import prettierPlugin from 'eslint-plugin-prettier';

export default tseslint.config({
  files: ['**/*.{ts,tsx}'],
  plugins: {
    '@typescript-eslint': tseslint.plugin,
    import: importPlugin,
    preferArrow: preferArrowPlugin,
    prettier: prettierPlugin,
  },
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: import.meta.dirname,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  rules: {
    'prettier/prettier': 'error',
    "preferArrow/prefer-arrow-functions": 'error',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: true,
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['sibling', 'parent', 'index'],
          'unknown',
        ],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '{@components/**,@utils/**,@app/**}',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: [
          'react',
          '@api',
          '@components',
          '@utils',
          '@app',
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variableLike',
        format: ['camelCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
        prefix: ['T'],
      },
      {
        selector: 'memberLike',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'variable',
        types: ['function'],
        format: ['PascalCase'],
        filter: {
          regex: '^[A-Z]',
          match: true,
        },
      },
      {
        selector: 'property',
        format: null,
        custom: {
          regex: '^(--|[A-z])+([-_][A-z])*',
          match: true,
        },
      },
    ],
  },
});