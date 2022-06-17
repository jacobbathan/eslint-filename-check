"use strict";

import parseFile from "./script/parseFile";

var pascalCaseRegex = /^([A-Z][a-z0-9]+)((\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?/g;
module.exports = {
  create(context) {
    filename = parseFile(context.getFilename());
    console.log("filename", filename);
  },
};
