'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NodeType = exports.Node = undefined;

var _edge = require('../edge');

class Node {
  constructor(_ref) {
    let type = _ref.type,
        attributes = _ref.attributes;

    this._type = type;
    this._attributes = attributes;
  }

  get type() {
    return this._type;
  }
  get attributes() {
    return this._attributes;
  }
}

exports.Node = Node;
class NodeType {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  hasMany(name, _ref2) {
    let to = _ref2.as;

    const from = this;
    const label = `${ from.name }${ to.name }s`;
    return new EdgeType({ from: from, to: to, label: label });
  }
}
exports.NodeType = NodeType;