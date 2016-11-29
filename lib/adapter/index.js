"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
class Adapter {
  constructor(name, _ref) {
    let node = _ref.node,
        guid = _ref.guid;

    this._name = name;
    this._guid = guid;
    this._node = node;
    // this.edge = edge
  }

  get name() {
    return this._name;
  }
  get guid() {
    return this._guid;
  }
  get node() {
    return this._node;
  }
  get edge() {
    return this._edge;
  }
}
exports.default = Adapter;
module.exports = exports["default"];