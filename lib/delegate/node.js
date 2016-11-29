'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class {

  // Adapter
  static get adapter() {
    return this._adapter || (this.adapter = require('./adapter/memory'));
  }

  static set adapter(val) {
    return this._adapter = val;
  }

  // Crud
  static create() {
    var _adapter$node;

    return (_adapter$node = this.adapter.node).create.apply(_adapter$node, arguments);
  }

  static find() {
    var _adapter$node2;

    return (_adapter$node2 = this.adapter.node).find.apply(_adapter$node2, arguments);
  }

  static save() {
    var _adapter$node3;

    return (_adapter$node3 = this.adapter.node).save.apply(_adapter$node3, arguments);
  }

  static delete() {
    var _adapter$node4;

    return (_adapter$node4 = this.adapter.node).delete.apply(_adapter$node4, arguments);
  }

  // Edges
  static connect() {
    return _bluebird2.default.reject();
  }

  static disconnect() {
    return _bluebird2.default.reject();
  }
};
module.exports = exports['default'];