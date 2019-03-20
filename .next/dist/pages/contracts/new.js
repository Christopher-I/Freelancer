'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Windows.old.000\\Users\\christopherIgbojekwe\\Freelancer\\pages\\contracts\\new.js?entry';


var CreateContract = function (_Component) {
  (0, _inherits3.default)(CreateContract, _Component);

  function CreateContract() {
    var _ref,
        _this$state,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CreateContract);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CreateContract.__proto__ || (0, _getPrototypeOf2.default)(CreateContract)).call.apply(_ref, [this].concat(args))), _this), _this.state = (_this$state = {
      contactInfo: '',
      maxoffer: ''
    }, (0, _defineProperty3.default)(_this$state, 'maxoffer', ''), (0, _defineProperty3.default)(_this$state, 'briefDescription', ''), (0, _defineProperty3.default)(_this$state, 'fullDescription', ''), (0, _defineProperty3.default)(_this$state, 'errorMessage', ''), (0, _defineProperty3.default)(_this$state, 'loading', false), _this$state), _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _this.setState({ loading: true });
                _context.prev = 2;
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;
                _context.next = 8;
                return _factory2.default.methods.createContract(_this.state.maxoffer, _this.state.minoffer, _this.state.briefDescription, _this.state.fullDescription, _this.state.contactInfo).send({
                  value: _this.state.maxoffer,
                  from: accounts[0]
                });

              case 8:
                _routes.Router.pushRoute('/'); //redirect user back to Open Bids page(index)
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](2);

                _this.setState({ errorMessage: _context.t0.message });

              case 14:
                _this.setState({ loading: false });

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 11]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CreateContract, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var Input = _semanticUiReact.Form.Input,
          Group = _semanticUiReact.Form.Group,
          Field = _semanticUiReact.Form.Field;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, 'New Contract Job'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement(Group, { widths: 'equal', __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(Input, { fluid: true, label: '*Contact Information(This information will be secured on the blockchain, and can only be viewed by you and the bid winner of your contract)',
        placeholder: 'Telegram ID:1234, email:1234@email...',
        value: this.state.contactInfo, onChange: function onChange(event) {
          return _this3.setState({ contactInfo: event.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), _react2.default.createElement(Input, { fluid: true, label: '*Brief Description', placeholder: 'I am looking for a graphics designer to create a custom logo for my my website',
        value: this.state.briefDescription, onChange: function onChange(event) {
          return _this3.setState({ briefDescription: event.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      })), _react2.default.createElement(Group, { widths: 'equal', __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(Input, { fluid: true, label: '*Maximum Offer (Wei)', placeholder: 'Example 5 ether',
        value: this.state.maxoffer, onChange: function onChange(event) {
          return _this3.setState({ maxoffer: event.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), _react2.default.createElement(Input, { fluid: true, label: '*Minimum Offer (Wei)', placeholder: 'Example 5 ether',
        value: this.state.minoffer, onChange: function onChange(event) {
          return _this3.setState({ minoffer: event.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      })), _react2.default.createElement(Field, { control: _semanticUiReact.TextArea, label: 'Full Description', placeholder: 'Tell us more about what you would like in this contract...quanity, delivery dates etc',
        value: this.state.fullDescription, onChange: function onChange(event) {
          return _this3.setState({ fullDescription: event.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), _react2.default.createElement(Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, 'Total deposit required'), _react2.default.createElement(Input, { style: { width: '400px' },
        label: 'wei',
        labelPosition: 'right',
        value: +this.state.maxoffer, __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Error, please ensure your entries are correct', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, type: 'submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, 'Deploy')));
    }
  }]);

  return CreateContract;
}(_react.Component);

exports.default = CreateContract;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb250cmFjdHNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJMYWJlbCIsIkJ1dHRvbiIsIkNoZWNrYm94IiwiVGV4dEFyZWEiLCJJbnB1dCIsIk1lc3NhZ2UiLCJMYXlvdXQiLCJmYWN0b3J5Iiwid2ViMyIsIlJvdXRlciIsIkNyZWF0ZUNvbnRyYWN0Iiwic3RhdGUiLCJjb250YWN0SW5mbyIsIm1heG9mZmVyIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJsb2FkaW5nIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVDb250cmFjdCIsIm1pbm9mZmVyIiwiYnJpZWZEZXNjcmlwdGlvbiIsImZ1bGxEZXNjcmlwdGlvbiIsInNlbmQiLCJ2YWx1ZSIsImZyb20iLCJwdXNoUm91dGUiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwiR3JvdXAiLCJGaWVsZCIsInRhcmdldCIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBTzs7OztBQUNkLEFBQVMsQUFBSyxBQUFNLEFBQU8sQUFBUyxBQUFTLEFBQU07O0FBQ25ELEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYTs7Ozs7OztJLEFBRWhCOzs7Ozs7Ozs7Ozs7Ozs7OzROQUNKLEE7bUJBQ2MsQUFDZCxBO2dCQUFVO0FBRFYsOEQsQUFFVSxvRSxBQUNPLG1FLEFBQ0QsZ0UsQUFDSCwyREFDSixBLDRCLEFBR1g7MkZBQVcsaUJBQUEsQUFBTyxPQUFQO1lBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1Q7c0JBQUEsQUFBTSxBQUdSOztzQkFBQSxBQUFLLFNBQVMsRUFBQyxTQUpKLEFBSVgsQUFBYyxBQUFTO2dDQUpaO2dDQUFBO3VC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K0QsQUFDL0Q7ZUFBUyxLQUFBLEFBQUssTUFEZCxBQUNvQixpQkFBaUIsVUFBVSx5QkFBQTtpQkFBUSxPQUFBLEFBQUssU0FBUyxFQUFDLGlCQUFpQixNQUFBLEFBQU0sT0FBOUMsQUFBUSxBQUFjLEFBQStCO0FBRHBHO29CQUFBO3NCQWxCRixBQWtCRSxBQUlGO0FBSkU7MEJBSUQsY0FBRDs7b0JBQUE7c0JBQUEsQUFDQTtBQURBO0FBQUEseUJBQ0EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREEsQUFDQSxBQUNBLHlEQUFBLEFBQUMsU0FBTSxPQUFPLEVBQUMsT0FBZixBQUFjLEFBQU8sQUFDckI7ZUFEQSxBQUNRLEFBQ1I7dUJBRkEsQUFFZ0IsQUFDaEI7ZUFBUyxDQUFDLEtBQUEsQUFBSyxNQUhmLEFBR3FCO29CQUhyQjtzQkF4QkEsQUFzQkEsQUFFQSxBQUtBO0FBTEE7MkJBS0EsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUF3QixpREFBZ0QsU0FBVyxLQUFBLEFBQUssTUFBeEYsQUFBOEY7b0JBQTlGO3NCQTdCQSxBQTZCQSxBQUNBO0FBREE7MEJBQ0EsQUFBQyx5Q0FBTyxTQUFXLEtBQUEsQUFBSyxNQUF4QixBQUE4QixTQUFTLE1BQXZDLEFBQTRDO29CQUE1QztzQkFBQTtBQUFBO1NBakNBLEFBQ0UsQUFFRixBQThCQSxBQUtEOzs7OztBQXhFMEIsQSxBQTJFN0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1dpbmRvd3Mub2xkLjAwMC9Vc2Vycy9jaHJpc3RvcGhlcklnYm9qZWt3ZS9GcmVlbGFuY2VyIn0=