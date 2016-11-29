'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bluebird = require('bluebird');

exports.default = class {

  // Adapter
  static get adapter() {
    return this._adapter || (this.adapter = require('./adapter/memory'));
  }

  static set adapter(val) {
    return this._adapter = val;
  }

  // ID ops
  static last() {
    var _this = this,
        _arguments = arguments;

    return (0, _bluebird.coroutine)(function* () {
      var _adapter$guid;

      console.log('adapter', _this.adapter);
      const last = yield (_adapter$guid = _this.adapter.guid).last.apply(_adapter$guid, _arguments);
      console.log('last', last);
      return last;
    })();
  }

  static next() {
    var _this2 = this,
        _arguments2 = arguments;

    return (0, _bluebird.coroutine)(function* () {
      var _adapter$guid2;

      const next = yield (_adapter$guid2 = _this2.adapter.guid).next.apply(_adapter$guid2, _arguments2);
      console.log('next', next);
      return next;
    })();
  }
};
module.exports = exports['default'];