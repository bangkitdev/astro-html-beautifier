import path from "path";
import fs from "fs";
import chalk from "chalk";
import beautify from "js-beautify";

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
};

const getAllFiles = function (dirPath, arrayOfFiles = []) {
    const files = fs.readdirSync(dirPath);
    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file));
        }
    });

    return arrayOfFiles;
};

const htmlFormatter = (filePath, options) => {
    let data;
    try {
        data = fs.readFileSync(filePath, { encoding: "utf8" });
        let result = beautify.html(data, options);
        fs.writeFileSync(filePath, result);
        let rootDir = path.basename(path.dirname(filePath));
        rootDir === "dist" ? (rootDir = "") : (rootDir = rootDir + "/");
        console.log(
            chalk.green(
                `${rootDir}${path.basename(filePath)} ${chalk.white.dim(
                    "Beautified!"
                )}`
            )
        );
    } catch (err) {
        if (err.code === "ENOENT") {
            console.log(chalk.red.bold(filePath));
            console.log(chalk.grey.dim("File not found!"));
        } else {
            throw err;
        }
    }
};

export default function (options = { ...defaultConfig }) {
    return {
        name: "astro-test",
        hooks: {
            "astro:build:done": async ({ dir }) => {
                const allFiles = getAllFiles(dir.pathname);
                allFiles.forEach((filePath) => {
                    const ext = path.extname(filePath);
                    if (ext === ".html") {
                        htmlFormatter(filePath, options);
                    }
                });
                console.log("");
            },
        },
    };
}
