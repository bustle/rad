'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ = require('../');

var _2 = _interopRequireDefault(_);

var _node = require('./node');

var _node2 = _interopRequireDefault(_node);

var _guid = require('./guid');

var _guid2 = _interopRequireDefault(_guid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _2.default('memory', {
  guid: _guid2.default, node: _node2.default
});
module.exports = exports['default'];