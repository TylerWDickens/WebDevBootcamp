const fs = require("fs");

const folderName = process.argv[2] || "newFile";

// fs.mkdir("test", { recursive: true }, (err) => {
//   console.log("in callback");
//   if (err) throw err;
// });

fs.mkdirSync(folderName);

try {
  fs.writeFileSync(`${folderName}/index.html`, "");
  fs.writeFileSync(`${folderName}/app.js`, "");
  fs.writeFileSync(`${folderName}/styles.css`, "");
} catch (e) {
  console.log("Something went wrong");
  console.log(console.log(e));
}
