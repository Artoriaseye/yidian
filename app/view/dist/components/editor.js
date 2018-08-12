'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Editor = function (_wepy$component) {
  _inherits(Editor, _wepy$component);

  function Editor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Editor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Editor.__proto__ || Object.getPrototypeOf(Editor)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      content: {
        type: String,
        twoWay: true
      },
      imageKey: {
        type: String,
        default: '',
        twoWay: true
      },
      enableTools: {
        type: String,
        default: 'location,uploader'
      },
      placeholder: {
        type: String,
        default: ''
      }
    }, _this.computed = {
      enableLocation: function enableLocation() {
        return this.isEnableTool('location');
      },
      enableUploader: function enableUploader() {
        return this.isEnableTool('uploader');
      }
    }, _this.methods = {
      contentChange: function contentChange(e) {
        var value = e.detail.value;

        this.content = value;
      },
      formSubmit: function formSubmit() {
        this.$emit('submitForm');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Editor, [{
    key: 'isEnableTool',
    value: function isEnableTool(tool) {
      var tools = this.enableTools.split(',');
      return ~tools.indexOf(tool);
    }
  }]);

  return Editor;
}(_wepy2.default.component);

exports.default = Editor;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRvci5qcyJdLCJuYW1lcyI6WyJFZGl0b3IiLCJwcm9wcyIsImNvbnRlbnQiLCJ0eXBlIiwiU3RyaW5nIiwidHdvV2F5IiwiaW1hZ2VLZXkiLCJkZWZhdWx0IiwiZW5hYmxlVG9vbHMiLCJwbGFjZWhvbGRlciIsImNvbXB1dGVkIiwiZW5hYmxlTG9jYXRpb24iLCJpc0VuYWJsZVRvb2wiLCJlbmFibGVVcGxvYWRlciIsIm1ldGhvZHMiLCJjb250ZW50Q2hhbmdlIiwiZSIsInZhbHVlIiwiZGV0YWlsIiwiZm9ybVN1Ym1pdCIsIiRlbWl0IiwidG9vbCIsInRvb2xzIiwic3BsaXQiLCJpbmRleE9mIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLEssR0FBUTtBQUNOQyxlQUFTO0FBQ1BDLGNBQU1DLE1BREM7QUFFUEMsZ0JBQVE7QUFGRCxPQURIO0FBS05DLGdCQUFVO0FBQ1JILGNBQU1DLE1BREU7QUFFUkcsaUJBQVMsRUFGRDtBQUdSRixnQkFBUTtBQUhBLE9BTEo7QUFVTkcsbUJBQWE7QUFDWEwsY0FBTUMsTUFESztBQUVYRyxpQkFBUztBQUZFLE9BVlA7QUFjTkUsbUJBQWE7QUFDWE4sY0FBTUMsTUFESztBQUVYRyxpQkFBUztBQUZFO0FBZFAsSyxRQW9CUkcsUSxHQUFXO0FBQ1RDLG9CQURTLDRCQUNRO0FBQ2YsZUFBTyxLQUFLQyxZQUFMLENBQWtCLFVBQWxCLENBQVA7QUFDRCxPQUhRO0FBSVRDLG9CQUpTLDRCQUlRO0FBQ2YsZUFBTyxLQUFLRCxZQUFMLENBQWtCLFVBQWxCLENBQVA7QUFDRDtBQU5RLEssUUFTWEUsTyxHQUFVO0FBQ1JDLG1CQURRLHlCQUNNQyxDQUROLEVBQ1M7QUFBQSxZQUNQQyxLQURPLEdBQ0dELEVBQUVFLE1BREwsQ0FDUEQsS0FETzs7QUFFZixhQUFLZixPQUFMLEdBQWVlLEtBQWY7QUFDRCxPQUpPO0FBS1JFLGdCQUxRLHdCQUtLO0FBQ1gsYUFBS0MsS0FBTCxDQUFXLFlBQVg7QUFDRDtBQVBPLEs7Ozs7O2lDQVVHQyxJLEVBQU07QUFDakIsVUFBTUMsUUFBUSxLQUFLZCxXQUFMLENBQWlCZSxLQUFqQixDQUF1QixHQUF2QixDQUFkO0FBQ0EsYUFBTyxDQUFDRCxNQUFNRSxPQUFOLENBQWNILElBQWQsQ0FBUjtBQUNEOzs7O0VBM0NpQyxlQUFLSSxTOztrQkFBcEJ6QixNIiwiZmlsZSI6ImVkaXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdG9yIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBjb250ZW50OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB0d29XYXk6IHRydWVcbiAgICB9LFxuICAgIGltYWdlS2V5OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICAgIHR3b1dheTogdHJ1ZVxuICAgIH0sXG4gICAgZW5hYmxlVG9vbHM6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdsb2NhdGlvbix1cGxvYWRlcidcbiAgICB9LFxuICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJ1xuICAgIH1cbiAgfVxuXG4gIGNvbXB1dGVkID0ge1xuICAgIGVuYWJsZUxvY2F0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNFbmFibGVUb29sKCdsb2NhdGlvbicpXG4gICAgfSxcbiAgICBlbmFibGVVcGxvYWRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzRW5hYmxlVG9vbCgndXBsb2FkZXInKVxuICAgIH1cbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgY29udGVudENoYW5nZShlKSB7XG4gICAgICBjb25zdCB7IHZhbHVlIH0gPSBlLmRldGFpbFxuICAgICAgdGhpcy5jb250ZW50ID0gdmFsdWVcbiAgICB9LFxuICAgIGZvcm1TdWJtaXQoKSB7XG4gICAgICB0aGlzLiRlbWl0KCdzdWJtaXRGb3JtJylcbiAgICB9XG4gIH1cblxuICBpc0VuYWJsZVRvb2wodG9vbCkge1xuICAgIGNvbnN0IHRvb2xzID0gdGhpcy5lbmFibGVUb29scy5zcGxpdCgnLCcpXG4gICAgcmV0dXJuIH50b29scy5pbmRleE9mKHRvb2wpXG4gIH1cbn1cbiJdfQ==