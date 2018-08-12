'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _editor = require('./../components/editor.js');

var _editor2 = _interopRequireDefault(_editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Feedback = function (_wepy$page) {
  _inherits(Feedback, _wepy$page);

  function Feedback() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Feedback);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Feedback.__proto__ || Object.getPrototypeOf(Feedback)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'Feedback'
    }, _this.data = {
      editorPlaceholder: 'Hi, any suggestion to tell us?',
      editorContent: '',
      editorEnableTools: ''
    }, _this.methods = {
      submitForm: function submitForm() {
        console.log(this.editorContent);
        wx.showModal({
          title: 'message',
          content: 'Thanks for your feedback!'
        });
      }
    }, _this.events = {}, _this.$repeat = {}, _this.$props = { "editor": { "xmlns:v-bind": "", "v-bind:placeholder.once": "editorPlaceholder", "v-bind:content.once": "editorContent", "v-bind:enableTools.once": "editorEnableTools", "xmlns:v-on": "" } }, _this.$events = { "editor": { "v-on:submitForm": "submitForm" } }, _this.components = {
      editor: _editor2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Feedback, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Feedback;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Feedback , 'pages/feedback'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlZWRiYWNrLmpzIl0sIm5hbWVzIjpbIkZlZWRiYWNrIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJlZGl0b3JQbGFjZWhvbGRlciIsImVkaXRvckNvbnRlbnQiLCJlZGl0b3JFbmFibGVUb29scyIsIm1ldGhvZHMiLCJzdWJtaXRGb3JtIiwiY29uc29sZSIsImxvZyIsInd4Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50IiwiZXZlbnRzIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZWRpdG9yIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMseUJBQW1CLGdDQURkO0FBRUxDLHFCQUFlLEVBRlY7QUFHTEMseUJBQW1CO0FBSGQsSyxRQU1QQyxPLEdBQVU7QUFDUkMsZ0JBRFEsd0JBQ0s7QUFDWEMsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLTCxhQUFqQjtBQUNBTSxXQUFHQyxTQUFILENBQWE7QUFDWEMsaUJBQU8sU0FESTtBQUVYQyxtQkFBUztBQUZFLFNBQWI7QUFJRDtBQVBPLEssUUFVVkMsTSxHQUFTLEUsUUFJVkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLDJCQUEwQixtQkFBN0MsRUFBaUUsdUJBQXNCLGVBQXZGLEVBQXVHLDJCQUEwQixtQkFBakksRUFBcUosY0FBYSxFQUFsSyxFQUFWLEUsUUFDVEMsTyxHQUFVLEVBQUMsVUFBUyxFQUFDLG1CQUFrQixZQUFuQixFQUFWLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDO0FBRFUsSzs7Ozs7NkJBTEgsQ0FBRTs7OztFQXZCeUIsZUFBS0MsSTs7a0JBQXRCckIsUSIsImZpbGUiOiJmZWVkYmFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBFZGl0b3IgZnJvbSAnQC9jb21wb25lbnRzL2VkaXRvcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmVlZGJhY2sgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ0ZlZWRiYWNrJ1xuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBlZGl0b3JQbGFjZWhvbGRlcjogJ0hpLCBhbnkgc3VnZ2VzdGlvbiB0byB0ZWxsIHVzPycsXG4gICAgZWRpdG9yQ29udGVudDogJycsXG4gICAgZWRpdG9yRW5hYmxlVG9vbHM6ICcnXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIHN1Ym1pdEZvcm0oKSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmVkaXRvckNvbnRlbnQpXG4gICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICB0aXRsZTogJ21lc3NhZ2UnLFxuICAgICAgICBjb250ZW50OiAnVGhhbmtzIGZvciB5b3VyIGZlZWRiYWNrISdcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgZXZlbnRzID0ge31cblxuICBvbkxvYWQoKSB7fVxuXG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJlZGl0b3JcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnBsYWNlaG9sZGVyLm9uY2VcIjpcImVkaXRvclBsYWNlaG9sZGVyXCIsXCJ2LWJpbmQ6Y29udGVudC5vbmNlXCI6XCJlZGl0b3JDb250ZW50XCIsXCJ2LWJpbmQ6ZW5hYmxlVG9vbHMub25jZVwiOlwiZWRpdG9yRW5hYmxlVG9vbHNcIixcInhtbG5zOnYtb25cIjpcIlwifX07XHJcbiRldmVudHMgPSB7XCJlZGl0b3JcIjp7XCJ2LW9uOnN1Ym1pdEZvcm1cIjpcInN1Ym1pdEZvcm1cIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBlZGl0b3I6IEVkaXRvclxuICB9XG59XG4iXX0=