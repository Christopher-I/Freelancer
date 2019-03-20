'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _getFactorySummary = require('../ethereum/getFactorySummary');

var _getFactorySummary2 = _interopRequireDefault(_getFactorySummary);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Windows.old.000\\Users\\christopherIgbojekwe\\Freelancer\\pages\\index.js?entry';


var ContractIndex = function (_Component) {
  (0, _inherits3.default)(ContractIndex, _Component);

  function ContractIndex() {
    (0, _classCallCheck3.default)(this, ContractIndex);

    return (0, _possibleConstructorReturn3.default)(this, (ContractIndex.__proto__ || (0, _getPrototypeOf2.default)(ContractIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(ContractIndex, [{
    key: 'renderHeader',
    value: function renderHeader() {
      var _this2 = this;

      var LabelExampleDetail = function LabelExampleDetail() {
        return _react2.default.createElement(_semanticUiReact.Label, { style: { marginBottom: '10px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }, 'Deployed Contracts', _react2.default.createElement(_semanticUiReact.Label.Detail, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }, _this2.props.deployedContractsLength));
      };

      return _react2.default.createElement(LabelExampleDetail, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      });
    }
  }, {
    key: 'renderContracts',
    value: function renderContracts() {
      var _this3 = this;

      //

      var CardExampleGroups = function CardExampleGroups() {
        return _react2.default.createElement(_semanticUiReact.Card.Group, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, _this3.props.summary.map(function (summary) {

          return _react2.default.createElement(_semanticUiReact.Card, { style: { width: '400px', height: '200px' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            }
          }, _react2.default.createElement(_semanticUiReact.Card.Content, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          }, _react2.default.createElement(_semanticUiReact.Image, { floated: 'right', size: 'mini', src: 'https://react.semantic-ui.com/images/avatar/large/steve.jpg', __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            }
          }), _react2.default.createElement(_semanticUiReact.Card.Header, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            }
          }), _react2.default.createElement(_semanticUiReact.Card.Meta, { style: { fontSize: '10px' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          }, 'Max Offer : ', _react2.default.createElement('strong', { style: { fontSize: '10px', color: 'black' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            }
          }, summary[2], ' Wei'), '. Min Offer : ', _react2.default.createElement('strong', { style: { fontSize: '10px', color: 'black' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            }
          }, summary[3], 'Wei'), _react2.default.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            }
          }), 'Contract ID : ', summary[1]), _react2.default.createElement(_semanticUiReact.Card.Description, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            }
          }, summary[0])), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            }
          }, _react2.default.createElement('div', { className: 'ui two buttons', __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            }
          }, _react2.default.createElement(_routes.Link, { route: '/contracts/' + summary[1], __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          }, _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'green', __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            }
          }, 'View')), _react2.default.createElement(_routes.Link, { route: '/contracts/' + summary[1] + '/bid', __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            }
          }, _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'red', __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            }
          }, 'Bid')))));
        }));
      };
      return _react2.default.createElement(CardExampleGroups, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, this.renderHeader(), this.renderContracts()));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var deployedContractsLength, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedContractsLength().call();

              case 2:
                deployedContractsLength = _context.sent;
                _context.next = 5;
                return _promise2.default.all(Array(parseInt(deployedContractsLength)).fill().map(function (element, index) {
                  return _factory2.default.methods.deployedContracts(index).call();
                }));

              case 5:
                summary = _context.sent;
                return _context.abrupt('return', { summary: summary, deployedContractsLength: deployedContractsLength });

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ContractIndex;
}(_react.Component);

exports.default = ContractIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkJ1dHRvbiIsIkljb24iLCJDYXJkIiwiSW1hZ2UiLCJMYWJlbCIsImZhY3RvcnkiLCJnZXRGYWN0b3J5U3VtbWFyeSIsIkxpbmsiLCJSb3V0ZXIiLCJDb250cmFjdEluZGV4IiwiTGFiZWxFeGFtcGxlRGV0YWlsIiwibWFyZ2luQm90dG9tIiwicHJvcHMiLCJkZXBsb3llZENvbnRyYWN0c0xlbmd0aCIsIkNhcmRFeGFtcGxlR3JvdXBzIiwic3VtbWFyeSIsIm1hcCIsIndpZHRoIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJjb2xvciIsInJlbmRlckhlYWRlciIsInJlbmRlckNvbnRyYWN0cyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENvbnRyYWN0c0xlbmd0aCIsImNhbGwiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiLCJpbmRleCIsImRlcGxveWVkQ29udHJhY3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBTzs7OztBQUNkLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQU8sQUFBTSxBQUFNLEFBQU07O0FBQ2xDLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQXVCOzs7O0FBQzlCLEFBQVMsQUFBTSxBQUFhOzs7Ozs7O0lBRXRCLEE7Ozs7Ozs7Ozs7O21DQWlCUTttQkFDWjs7VUFBTSxxQkFBcUIsU0FBckIsQUFBcUIscUJBQUE7K0JBQzNCLEFBQUMsd0NBQU0sT0FBUyxFQUFDLGNBQWpCLEFBQWdCLEFBQWU7c0JBQS9CO3dCQUFBO0FBQUE7U0FBQSxFQUVFLHNDQUFDLGNBQUQsdUJBQUEsQUFBTzs7c0JBQVA7d0JBQUEsQUFBZTtBQUFmO0FBQUEsa0JBQWUsQUFBSyxNQUhLLEFBQzNCLEFBRUUsQUFBMEI7QUFINUIsQUFPRjs7MkNBQU8sQUFBQzs7b0JBQUQ7c0JBQVAsQUFBTyxBQUNOO0FBRE07QUFBQSxPQUFBOzs7O3NDQUlZO21CQUNmOztBQUVEOztVQUFNLG9CQUFvQixTQUFwQixBQUFvQixvQkFBQTsrQkFDMUIsY0FBRCxzQkFBQSxBQUFNOztzQkFBTjt3QkFBQSxBQUNDO0FBREQ7QUFBQSxTQUFBLFNBQ0MsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixJQUFJLG1CQUFVLEFBR2hDOztpQ0FDQSxBQUFDLHVDQUFNLE9BQU8sRUFBQyxPQUFELEFBQU8sU0FBUSxRQUE3QixBQUFjLEFBQXNCO3dCQUFwQzswQkFBQSxBQUVFO0FBRkY7V0FBQSxrQkFFRyxjQUFELHNCQUFBLEFBQU07O3dCQUFOOzBCQUFBLEFBQ0U7QUFERjtBQUFBLDZCQUNFLEFBQUMsd0NBQU0sU0FBUCxBQUFlLFNBQVEsTUFBdkIsQUFBNEIsUUFBTyxLQUFuQyxBQUF1Qzt3QkFBdkM7MEJBREYsQUFDRSxBQUNBO0FBREE7NENBQ0EsQUFBQyxzQkFBRCxBQUFNOzt3QkFBTjswQkFGRixBQUVFLEFBQ0E7QUFEQTtBQUFBLDhCQUNDLGNBQUQsc0JBQUEsQUFBTSxRQUFLLE9BQU8sRUFBQyxVQUFuQixBQUFrQixBQUFVO3dCQUE1QjswQkFBQTtBQUFBO2FBQ1ksZ0NBQUEsY0FBQSxZQUFRLE9BQU8sRUFBQyxVQUFELEFBQVUsUUFBTyxPQUFoQyxBQUFlLEFBQXVCO3dCQUF0QzswQkFBQSxBQUFrRDtBQUFsRDtxQkFBQSxBQUFrRCxBQUFRLElBRHRFLEFBQ1ksU0FBeUYsa0NBQUEsY0FBQSxZQUFRLE9BQU8sRUFBQyxVQUFELEFBQVUsUUFBTyxPQUFoQyxBQUFlLEFBQXVCO3dCQUF0QzswQkFBQSxBQUFrRDtBQUFsRDtxQkFBQSxBQUFrRCxBQUFRLElBRC9KLEFBQ3FHLEFBQTBFOzt3QkFBQTswQkFEL0ssQUFDK0s7QUFBQTtBQUFBLGNBQy9KLDBCQUxsQixBQUdFLEFBRWdCLEFBQVEsQUFFeEIscUJBQUMsY0FBRCxzQkFBQSxBQUFNOzt3QkFBTjswQkFBQSxBQUNDO0FBREQ7QUFBQSxxQkFUSixBQUVFLEFBT0UsQUFDQyxBQUFRLEFBR1gsc0JBQUMsY0FBRCxzQkFBQSxBQUFNLFdBQVEsT0FBZDt3QkFBQTswQkFBQSxBQUNFO0FBREY7NkJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTt3QkFBZjswQkFBQSxBQUNBO0FBREE7NkJBQ0EsQUFBQyw4QkFBSyx1QkFBdUIsUUFBN0IsQUFBNkIsQUFBUTt3QkFBckM7MEJBQUEsQUFDRTtBQURGOzZCQUNFLEFBQUMseUNBQU8sT0FBUixNQUFjLE9BQWQsQUFBb0I7d0JBQXBCOzBCQUFBO0FBQUE7YUFGRixBQUNBLEFBQ0UsQUFJQSwwQkFBQSxBQUFDLDhCQUFLLHVCQUF1QixRQUF2QixBQUF1QixBQUFRLEtBQXJDO3dCQUFBOzBCQUFBLEFBQ0E7QUFEQTs2QkFDQSxBQUFDLHlDQUFPLE9BQVIsTUFBYyxPQUFkLEFBQW9CO3dCQUFwQjswQkFBQTtBQUFBO2FBdEJOLEFBQ0EsQUFhRSxBQUNFLEFBTUUsQUFDQSxBQVFMO0FBbkN3QixBQUMzQixBQUNDO0FBRkEsQUF1Q0Q7MkNBQU8sQUFBQzs7b0JBQUQ7c0JBQVAsQUFBTyxBQUNOO0FBRE07QUFBQSxPQUFBOzs7OzZCQUdDLEFBQ0o7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDQTtBQURBO0FBQUEsT0FBQSxrQkFDQSxjQUFBOztvQkFBQTtzQkFBQSxBQUNDO0FBREQ7QUFBQSxjQUFBLEFBQ0MsQUFBSyxBQUNMLHFCQUpILEFBQ0UsQUFDQSxBQUVDLEFBQUssQUFLWDs7Ozs7Ozs7Ozs7O3VCQWpGdUMsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLDZCQUFoQixBQUE2QyxBOzttQkFBN0U7QTs7eUNBRWdCLEFBQVEsVUFDdEIsU0FBTixBQUFNLEFBQVMsMEJBQWYsQUFDQyxPQURELEFBRUMsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVMsQUFDdEI7eUJBQU8sa0JBQUEsQUFBUSxRQUFSLEFBQWdCLGtCQUFoQixBQUFrQyxPQUF6QyxBQUFPLEFBQXlDLEFBQ2pEO0FBTG1CLEFBQ3BCLEEsaUJBQUEsQ0FEb0I7O21CQUFoQjtBO2lEQVNBLEVBQUMsU0FBRCxTQUFTLHlCLEFBQVQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFka0IsQSxBQXNGNUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovV2luZG93cy5vbGQuMDAwL1VzZXJzL2NocmlzdG9waGVySWdib2pla3dlL0ZyZWVsYW5jZXIifQ==