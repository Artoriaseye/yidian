'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;
/**
 * 切换语言/i18n 功能暂时未实现
 * 还需要进行对应的技术调研
 * 本模块主要是示例使用 mixin 来调用 zanui 组件的方法
 */


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _mixinDecorator = require('./../npm/mixin-decorator/dist/index.js');

var _mixinDecorator2 = _interopRequireDefault(_mixinDecorator);

var _index = require('./../zanui/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Language = (_dec = (0, _mixinDecorator2.default)(_index.Select), _dec(_class = function (_wepy$page) {
  _inherits(Language, _wepy$page);

  function Language() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Language);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Language.__proto__ || Object.getPrototypeOf(Language)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'Language'
    }, _this.data = {
      languages: [{
        padding: 0,
        value: 'zh-cn',
        name: '简体中文'
      }, {
        padding: 0,
        value: 'en-us',
        name: 'English'
      }],
      language: 'en-us',
      activeColor: '#ff9630'
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Language, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'handleZanSelectChange',
    value: function handleZanSelectChange(_ref2) {
      var componentId = _ref2.componentId,
          value = _ref2.value;

      this.language = value;
    }
  }]);

  return Language;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Language , 'pages/language'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmd1YWdlLmpzIl0sIm5hbWVzIjpbIkxhbmd1YWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsYW5ndWFnZXMiLCJwYWRkaW5nIiwidmFsdWUiLCJuYW1lIiwibGFuZ3VhZ2UiLCJhY3RpdmVDb2xvciIsIm1ldGhvZHMiLCJldmVudHMiLCJjb21wb25lbnRJZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTs7Ozs7OztBQUtBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUdxQkEsUSxXQURwQiw0Qzs7Ozs7Ozs7Ozs7Ozs7MExBRUNDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsaUJBQVcsQ0FBQztBQUNWQyxpQkFBUyxDQURDO0FBRVZDLGVBQU8sT0FGRztBQUdWQyxjQUFNO0FBSEksT0FBRCxFQUlSO0FBQ0RGLGlCQUFTLENBRFI7QUFFREMsZUFBTyxPQUZOO0FBR0RDLGNBQU07QUFITCxPQUpRLENBRE47QUFVTEMsZ0JBQVUsT0FWTDtBQVdMQyxtQkFBYTtBQVhSLEssUUFjUEMsTyxHQUFVLEUsUUFHVkMsTSxHQUFTLEU7Ozs7OzZCQUVBLENBQUU7OztpREFFbUM7QUFBQSxVQUF0QkMsV0FBc0IsU0FBdEJBLFdBQXNCO0FBQUEsVUFBVE4sS0FBUyxTQUFUQSxLQUFTOztBQUM1QyxXQUFLRSxRQUFMLEdBQWdCRixLQUFoQjtBQUNEOzs7O0VBNUJtQyxlQUFLTyxJO2tCQUF0QmIsUSIsImZpbGUiOiJsYW5ndWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiDliIfmjaLor63oqIAvaTE4biDlip/og73mmoLml7bmnKrlrp7njrBcbiAqIOi/mOmcgOimgei/m+ihjOWvueW6lOeahOaKgOacr+iwg+eglFxuICog5pys5qih5Z2X5Li76KaB5piv56S65L6L5L2/55SoIG1peGluIOadpeiwg+eUqCB6YW51aSDnu4Tku7bnmoTmlrnms5VcbiAqL1xuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBtaXhpbiBmcm9tICdtaXhpbi1kZWNvcmF0b3InXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdAL3phbnVpL2luZGV4J1xuXG5AbWl4aW4oU2VsZWN0KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFuZ3VhZ2UgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ0xhbmd1YWdlJ1xuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBsYW5ndWFnZXM6IFt7XG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgdmFsdWU6ICd6aC1jbicsXG4gICAgICBuYW1lOiAn566A5L2T5Lit5paHJyxcbiAgICB9LCB7XG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgdmFsdWU6ICdlbi11cycsXG4gICAgICBuYW1lOiAnRW5nbGlzaCcsXG4gICAgfV0sXG4gICAgbGFuZ3VhZ2U6ICdlbi11cycsXG4gICAgYWN0aXZlQ29sb3I6ICcjZmY5NjMwJ1xuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgfVxuXG4gIGV2ZW50cyA9IHt9XG5cbiAgb25Mb2FkKCkge31cblxuICBoYW5kbGVaYW5TZWxlY3RDaGFuZ2UoeyBjb21wb25lbnRJZCwgdmFsdWUgfSkge1xuICAgIHRoaXMubGFuZ3VhZ2UgPSB2YWx1ZVxuICB9XG59XG4iXX0=