"use strict";

var path = require("path");
var parseFile = require("../script/parseFile");
var camelCaseRegex = /^[a-z]+((\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?/g;

module.exports = function (context) {
  return {
    Program: function (node) {
      var filename = context.getFilename();
      var absPath = path.resolve(filename);
      var parsedFile = parseFile(absPath);
      var regexMatch = camelCaseRegex.test(parsedFile.name);

      if (parsedFile.extension !== ".js") return;
      if (!regexMatch) {
        context.report(
          node,
          "Filename '{{name}}' does not match the naming convention.",
          {
            name: parsedFile.base,
          }
        );
      }
    },
  };
};
