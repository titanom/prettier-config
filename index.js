const config = {
  /**
   * https://prettier.io/docs/en/options.html#print-width
   * default: 80
   * reason: readble variable names tend to be longer -> slightly increased print width
   */
  printWidth: 100,

  /**
   * https://prettier.io/docs/en/options.html#tab-width
   * default: 2
   */
  tabWidth: 2,

  /**
   * https://prettier.io/docs/en/options.html#tabs
   * default: false
   */
  useTabs: false,

  /**
   * https://prettier.io/docs/en/options.html#semicolons
   * default: true
   * reason: ASI is confusing and can lead to hard to debug issues
   */
  semi: true,

  /**
   * https://prettier.io/docs/en/options.html#semicolons
   * default: false
   * reason: single quotes seem to be more popular - other than that, it doesn't really matter
   */
  singleQuote: true,

  /**
   * https://prettier.io/docs/en/options.html#quote-props
   * default: 'as-needed'
   */
  quoteProps: 'as-needed',

  /**
   * https://prettier.io/docs/en/options.html#jsx-quotes
   * default: false
   * reason: to keep JSX "HTML like" (HTML does not support single quotes)
   */
  jsxSingleQuote: false,

  /**
   * https://prettier.io/docs/en/options.html#trailing-commas
   * default: 'es5'
   * reason: everywhere possible, only reason for 'es5' would be if you didn't have a compilation step
   */
  trailingComma: 'all',

  /**
   * https://prettier.io/docs/en/options.html#bracket-spacing
   * default: true
   * reason: gives object literals a little more breathing room
   */
  bracketSpacing: true,

  /**
   * https://prettier.io/docs/en/options.html#bracket-line
   * default: false
   * reason: better distinction between props & children
   */
  bracketSameLine: false,

  /**
   * https://prettier.io/docs/en/options.html#arrow-function-parentheses
   * default: 'alwasy'
   * reason: easier to add params, more consistent
   */
  arrowParens: 'always',

  /**
   * https://prettier.io/docs/en/options.html#require-pragma
   * default: false
   * reason: prettier should be enabled by default, not by opting in
   */
  requirePragma: false,

  /**
   * https://prettier.io/docs/en/options.html#insert-pragma
   * default: false
   * reason: every file is formatted using prettier - we already have that information
   */
  insertPragma: false,

  /**
   * https://prettier.io/docs/en/options.html#prose-wrap
   * default: 'preserve'
   * reason: can interfere with some markdown renderers
   */
  proseWrap: 'preserve',

  /**
   * https://prettier.io/docs/en/options.html#html-whitespace-sensitivity
   * default: 'css'
   * reason: most consistent
   */
  htmlWhitespaceSensitivity: 'strict',

  /**
   * https://prettier.io/docs/en/options.html#end-of-line
   * default: 'lf'
   * reason: we support Linux + macOS -> 'lf' is the default on both systems
   */
  endOfLine: 'lf',

  /**
   * https://prettier.io/docs/en/options.html#embedded-language-formatting
   * default: 'auto'
   * reason: can lead to unwanted formatting of text, that is interpreted as a different language
   */
  embeddedLanguageFormatting: 'off',
};

module.exports = config;
