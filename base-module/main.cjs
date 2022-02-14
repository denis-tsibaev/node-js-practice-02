const os = require("os");
const path = require("path");

// console.log(os.cpus().length);

// //resolve всегда создаёт абсолютный путь
// console.log(path.resolve("/foo/bar", "./baz"));
// //returns: "/foo/bar/baz"

// console.log(path.resolve("/foo/bar", "/tmp/file"));
// //returns: "/tmp/file"

// console.log(path.resolve("wwwroot", "static_files/png", "../gif/image.gif"));

// console.log(path.join("/foo", "bar", "baz/asdf", "quux", ".."));
// console.log(path.join("foo", "bar"));
// console.log(path.sep);
console.log(__dirname);
// console.log(__filename);
console.log(process.cwd());
