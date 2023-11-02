type Options = {
  scope: string | string[];
  alias: string[];
};

export default function defineConfig(options: Partial<Options> = {}) {
  const { scope = [], alias = [] } = options;

  const scopeOrder = (Array.isArray(scope) ? scope : [scope]).map((scope) => `^@${scope}(/.*)`);

  const aliasOrder = alias.map((alias) => `^${alias}(.*)`);

  return {
    printWidth: 100,
    tabWidth: 2,
    useTabs: false,
    semi: true,
    singleQuote: true,
    quoteProps: 'as-needed',
    jsxSingleQuote: false,
    trailingComma: 'all',
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: 'always',
    requirePragma: false,
    insertPragma: false,
    proseWrap: 'preserve',
    htmlWhitespaceSensitivity: 'strict',
    endOfLine: 'lf',
    embeddedLanguageFormatting: 'off',

    importOrder: [
      '<BUILT_IN_MODULES>',
      '',
      '<THIRD_PARTY_MODULES>',
      '',
      ...scopeOrder,
      '',
      ...aliasOrder,
      '',
      '^[.]',
      '',
      '^(?!.*[.]css$)[./].*$',
      '.css$',
    ],
    plugins: [import('@ianvs/prettier-plugin-sort-imports')],
  };
}
