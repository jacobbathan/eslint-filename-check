"use strict";

var path = require("path");
var parseFile = require("../script/parseFile");
var lowerCaseRegex = /^[a-z0-9_\-]+$/g;

module.exports = function (context) {
  return {
    Program: function (node) {
      var filename = context.getFilename();
      var absPath = path.resolve(filename);
      var parsedFile = parseFile(absPath);
      var regexMatch = lowerCaseRegex.test(parsedFile.name);

      if (parsedFile.extension == ".css" || parsedFile.extension == ".scss") {
        if (!regexMatch) {
          context.report(
            node,
            "Filename '{{name}}' does not match the naming convention.",
            {
              name: parsedFile.base,
            }
          );
        }
      }
    },
  };
};
