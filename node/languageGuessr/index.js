const franc = require("franc");
const langs = require("langs");

let text = process.argv[2];

let langCode = franc(text);

let origin = langs.where("3", langCode);

console.log(origin);
