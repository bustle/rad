'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _node = require('../node');

var _edge = require('../edge');

class Graph {
  constructor(name) {
    this._name = name;
    this._nodeTypes = [];
    this._edgeTypes = [];
  }

  get name() {
    return this._name;
  }
  get nodeTypes() {
    return this._nodeTypes;
  }
  get edgeTypes() {
    return this._edgeTypes;
  }

  node(name) {
    const nodeType = new _node.NodeType(name);
    this._nodeTypes[name] = nodeType;
    return nodeType;
  }

  edge(_ref) {
    let from = _ref.from,
        to = _ref.to,
        label = _ref.label;

    const edgeType = new _edge.EdgeType({ from: from, to: to, label: label });
    this._edgeTypes[label] = edgeType;
    return edgeType;
  }
}
exports.default = Graph;
module.exports = exports['default'];