import type { AstroIntegration } from 'astro';

export declare type beautifyOptions = {
    indent_size?: number;
    indent_char?: string;
    indent_with_tabs?: boolean;
    editorconfig?: boolean;
    eol?: string
    end_with_newline?: boolean;
    indent_level?: number;
    preserve_newlines?: boolean;
    max_preserve_newlines?: number;
    space_in_paren?: boolean;
    space_in_empty_paren?: boolean;
    jslint_happy?: boolean;
    space_after_anon_function?: boolean;
    space_after_named_function?: boolean;
    brace_style?: "collapse" | "expand" | "end-expand" | "none";
    unindent_chained_methods?: boolean;
    break_chained_methods?: boolean;
    keep_array_indentation?: boolean;
    unescape_strings?: boolean;
    wrap_line_length?: number;
    e4x?: boolean;
    comma_first?: boolean;
    operator_position?: "before-newline"|"after-newline"|"preserve-newline";
    indent_empty_lines?: boolean;
    templating?:any
};

export default function (options?: beautifyOptions): AstroIntegration;
