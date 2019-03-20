'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _SupplyContract = require('./build/SupplyContract.json');

var _SupplyContract2 = _interopRequireDefault(_SupplyContract);

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

exports.default = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var entireSummary, deployedContractsLength, summary, _summary;

  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          entireSummary = [];
          _context.next = 3;
          return _factory2.default.methods.getDeployedContractsLength().call();

        case 3:
          deployedContractsLength = _context.sent;
          _context.next = 6;
          return _factory2.default.methods.deployedContracts(0).call();

        case 6:
          summary = _context.sent;

          console.log(summary);

          //because solidity does not return the entire array, have to call each value and store it
          i = 0;

        case 9:
          if (!(i < deployedContractsLength)) {
            _context.next = 17;
            break;
          }

          _context.next = 12;
          return _factory2.default.methods.deployedContracts(i).call();

        case 12:
          _summary = _context.sent;

          entireSummary.push(_summary);

        case 14:
          i++;
          _context.next = 9;
          break;

        case 17:
          console.log(entireSummary);
          return _context.abrupt('return', entireSummary);

        case 19:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, _this);
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxnZXRGYWN0b3J5U3VtbWFyeS5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwic3VwcGx5Q29udHJhY3QiLCJmYWN0b3J5IiwiZW50aXJlU3VtbWFyeSIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENvbnRyYWN0c0xlbmd0aCIsImNhbGwiLCJkZXBsb3llZENvbnRyYWN0c0xlbmd0aCIsImRlcGxveWVkQ29udHJhY3RzIiwic3VtbWFyeSIsImNvbnNvbGUiLCJsb2ciLCJpIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBMkIsQUFBM0I7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBb0IsQUFBcEIsQUFHQTs7Ozs7Ozs7MkZBQWUsbUJBQUE7dURBQUE7O2dFQUFBO2NBQUE7dUNBQUE7YUFFVDtBQUZTLDBCQUVPLEFBRlA7MEJBQUE7aUJBSXlCLGtCQUFRLEFBQVIsUUFBZ0IsQUFBaEIsNkJBQTZDLEFBQTdDLEFBSnpCOzthQUlQO0FBSk8sNkNBQUE7MEJBQUE7aUJBS08sa0JBQVEsQUFBUixRQUFnQixBQUFoQixrQkFBa0MsQUFBbEMsR0FBcUMsQUFBckMsQUFMUDs7YUFLVDtBQUxTLDZCQU1iOztrQkFBUSxBQUFSLElBQVksQUFBWixBQUVGOztBQUNPO2NBQUksQUFUSTs7YUFBQTtnQkFTRCxJQUFJLEFBVEgsMEJBQUE7NEJBQUE7QUFBQTtBQUFBOzswQkFBQTtpQkFVUyxrQkFBUSxBQUFSLFFBQWdCLEFBQWhCLGtCQUFrQyxBQUFsQyxHQUFxQyxBQUFyQyxBQVZUOzthQVVQO0FBVk8sOEJBV1g7O3dCQUFjLEFBQWQsS0FBbUIsQUFBbkIsQUFYVzs7YUFTNEI7QUFUNUI7MEJBQUE7QUFBQTs7YUFhZjtrQkFBUSxBQUFSLElBQVksQUFBWixBQWJlOzJDQWNOLEFBZE07O2FBQUE7YUFBQTswQkFBQTs7QUFBQTtjQUFBO0FBQWYiLCJmaWxlIjoiZ2V0RmFjdG9yeVN1bW1hcnkuanMiLCJzb3VyY2VSb290IjoiQzovV2luZG93cy5vbGQuMDAwL1VzZXJzL2NocmlzdG9waGVySWdib2pla3dlL0ZyZWVsYW5jZXIifQ==