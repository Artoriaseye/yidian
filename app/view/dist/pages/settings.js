'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Settings = function (_wepy$page) {
  _inherits(Settings, _wepy$page);

  function Settings() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Settings);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Settings.__proto__ || Object.getPrototypeOf(Settings)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'Settings'
    }, _this.data = {
      userInfo: {
        nickName: 'loading...'
      }
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Settings, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      this.$parent.getUserInfo().then(function (user) {
        _this2.userInfo = user;
        _this2.$apply();
      });
    }
  }]);

  return Settings;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Settings , 'pages/settings'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLmpzIl0sIm5hbWVzIjpbIlNldHRpbmdzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ1c2VySW5mbyIsIm5pY2tOYW1lIiwibWV0aG9kcyIsImV2ZW50cyIsIiRwYXJlbnQiLCJnZXRVc2VySW5mbyIsInRoZW4iLCJ1c2VyIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGdCQUFVO0FBQ1JDLGtCQUFVO0FBREY7QUFETCxLLFFBTVBDLE8sR0FBVSxFLFFBRVZDLE0sR0FBUyxFOzs7Ozs2QkFFQTtBQUFBOztBQUNQLFdBQUtDLE9BQUwsQ0FBYUMsV0FBYixHQUEyQkMsSUFBM0IsQ0FBZ0MsZ0JBQVE7QUFDdEMsZUFBS04sUUFBTCxHQUFnQk8sSUFBaEI7QUFDQSxlQUFLQyxNQUFMO0FBQ0QsT0FIRDtBQUlEOzs7O0VBcEJtQyxlQUFLQyxJOztrQkFBdEJiLFEiLCJmaWxlIjoic2V0dGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdzIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdTZXR0aW5ncydcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgdXNlckluZm86IHtcbiAgICAgIG5pY2tOYW1lOiAnbG9hZGluZy4uLidcbiAgICB9XG4gIH1cblxuICBtZXRob2RzID0ge31cblxuICBldmVudHMgPSB7fVxuXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oKS50aGVuKHVzZXIgPT4ge1xuICAgICAgdGhpcy51c2VySW5mbyA9IHVzZXJcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9KVxuICB9XG59XG4iXX0=