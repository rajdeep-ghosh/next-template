/** @type {import('prettier').Config} */
const config = {
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'none',
  semi: true,
  importOrder: [
    '^(react/(.*)$)|^(react$)|^(react-dom$)',
    '^(next/(.*)$)|^(next$)|^(@next/(.*)$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/config/(.*)$',
    '^@/lib/(.*)$',
    '^@/hooks/(.*)$',
    '^@/app/(.*)$',
    '^@/pages/(.*)$',
    '^@/components/ui/(.*)$',
    '^@/components/(.*)$',
    '^@/styles/(.*)$',
    '',
    '^[./]',
    '',
    '<TYPES>^(node:)',
    '<TYPES>',
    '<TYPES>^@/types(?:/(.*))?$',
    '<TYPES>^[.]'
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: false,
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss'
  ]
};

export default config;
