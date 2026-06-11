const fs = require("fs");
const path = require("path");
const { parse } = require("jsonc-parser");

const input = "src/helios.jsonc";
const output = "themes/helios.json";

fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, JSON.stringify(parse(fs.readFileSync(input, "utf8"))));
