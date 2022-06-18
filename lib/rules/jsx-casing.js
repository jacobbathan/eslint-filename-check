"use strict";

var path = require("path");
var parseFile = require("../script/parseFile");
var pascalCaseRegex = /^([A-Z][a-z0-9]+)((\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?/g;

module.exports = function (context) {
  return {
    Program: function (node) {
      var filename = context.getFilename();
      var absPath = path.resolve(filename);
      var parsedFile = parseFile(absPath);
      var regexMatch = pascalCaseRegex.test(parsedFile.name);

      if (parsedFile.extension !== ".jsx") return;
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
