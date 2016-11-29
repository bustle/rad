'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = class {

  // Adapter
  static get adapter() {
    return this._adapter || (this.adapter = require('./../adapter/memory'));
  }

  static set adapter(val) {
    return this._adapter = val;
  }

  // ID ops
  static last() {
    var _adapter$guid;

    return (_adapter$guid = this.adapter.guid).last.apply(_adapter$guid, arguments);
  }

  static next() {
    var _adapter$guid2;

    return (_adapter$guid2 = this.adapter.guid).next.apply(_adapter$guid2, arguments);
  }
};
module.exports = exports['default'];