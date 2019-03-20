'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefined' && (0, _typeof3.default)(window.web3) !== undefined) {
  //we are in the browser and metamask is running.
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  //we are on the server or the user is not running metamask
  var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/c3085f6dbf9347358b5ab5d30de1fdbe');
  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwidW5kZWZpbmVkIiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVA7Ozs7OztBQUVBLElBQUksWUFBSjs7QUFFQSxJQUFHLE9BQU8sQUFBUCxXQUFrQixBQUFsQixlQUFpQyxzQkFBTyxPQUFPLEFBQWQsVUFBc0IsQUFBMUQsV0FBb0UsQUFDbEU7QUFDQztTQUFPLEFBQUksQUFBSixrQkFBUyxPQUFPLEFBQVAsS0FBWSxBQUFyQixBQUFQLEFBQ0Y7QUFIRCxPQUdLLEFBQ0g7QUFDQTtNQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUNmLEFBRGUsQUFBakIsQUFHQTtTQUFPLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQVAsQUFDRDtBQUVEOztrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiQzovV2luZG93cy5vbGQuMDAwL1VzZXJzL2NocmlzdG9waGVySWdib2pla3dlL0ZyZWVsYW5jZXIifQ==