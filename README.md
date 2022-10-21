
# 🚀 Astro HTML Beautifier

Beautify html files on astro final bundle with [js-beautify][js-beautify]

## Installation

### Quick Install

Using `astro add` cli

```bash
npx astro add astro-html-beautifier
```

### Manual Install

```bash
npm i -D astro-html-beautifier
```

```js
import htmlBeautifier from 'astro-html-beautifier';

export default {
  // ...
  integrations: [htmlBeautifier()]
};
```

> **Note**
>
> if you leave blank the options, it will be override by default options

### Default Options

```js

const defaultConfig = {
    indent_size: 4,
    indent_char: "\t",
    max_preserve_newlines: -1,
    preserve_newlines: false,
    keep_array_indentation: false,
    break_chained_methods: false,
    indent_scripts: "keep",
    brace_style: "collapse",
    space_before_conditional: false,
    unescape_strings: false,
    jslint_happy: false,
    end_with_newline: false,
    wrap_line_length: 0,
    indent_inner_html: false,
    comma_first: false,
    e4x: false,
    indent_empty_lines: false,
}
```

## Usage

This integration automatically format html files under the `/dist` folder by default, or the `outDir` directory in the `astro.config.mjs`.

## Configuration

```js
export default defineConfig({
  integrations: [
    htmlBeautifier({
        indent_size: 4,
        brace_style: "collapse",
        ...
    })
  ]
});
```

### Available Options

Here are the options, allowed to be passed through the config:

```ts
export  type beautifyOptions = {
    indent_size?: number;
    indent_char?: string;
    indent_with_tabs?: boolean;
    editorconfig?: boolean;
    eol?: string;
    end_with_newline?: boolean;
    indent_level?: number;
    preserve_newlines?: boolean;
    max_preserve_newlines?: number;
    space_in_paren?: boolean;
    space_in_empty_paren?: boolean;
    jslint_happy?: boolean;
    space_after_anon_function?: boolean;
    space_after_named_function?: boolean;
    brace_style?: "collapse"|"expand"|"end-expand"|"none";
    unindent_chained_methods?: boolean;
    break_chained_methods?: boolean;
    keep_array_indentation?: boolean;
    unescape_strings?: boolean;
    wrap_line_length?: number;
    e4x?: boolean;
    comma_first?: boolean;
    operator_position?: "before-newline"|"after-newline"|"preserve-newline";
    indent_empty_lines?: boolean;
    templating?: any;
};
```

Please learn more about the options in the [js-beautify][js-beautify] docs.

## Acknowledgements

- [js-beautify][js-beautify]

[js-beautify]:https://github.com/beautify-web/js-beautify
