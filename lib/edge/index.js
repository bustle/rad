"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
class EdgeType {
  constructor(_ref) {
    let from = _ref.from,
        to = _ref.to,
        label = _ref.label;

    this._from = from;
    this._to = to;
    this._label = label;
  }

  get from() {
    return this._from;
  }
  get to() {
    return this._to;
  }
  get label() {
    return this._label;
  }
}

exports.EdgeType = EdgeType;
class Edge {
  constructor(_ref2) {
    let type = _ref2.type;

    this._type = type;
  }

  get type() {
    return this._type;
  }
}
exports.Edge = Edge;