"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bluebird = require("bluebird");

let GUID = 0;

exports.default = class {
  static last() {
    return (0, _bluebird.coroutine)(function* () {
      return GUID.toString();
    })();
  }

  static next() {
    return (0, _bluebird.coroutine)(function* () {
      return (++GUID).toString();
    })();
  }
};
module.exports = exports["default"];