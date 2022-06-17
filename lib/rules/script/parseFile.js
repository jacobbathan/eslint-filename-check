import path from "path";

module.exports = function parseFile(filename) {
  var extension = path.extname(filename);

  return {
    directory: path.dirname(filename),
    base: path.basename(filename),
    extension: extension,
    name: path.basename(filename, extension),
  };
};
