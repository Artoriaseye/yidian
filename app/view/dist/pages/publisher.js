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

var Publisher = function (_wepy$page) {
  _inherits(Publisher, _wepy$page);

  function Publisher() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Publisher);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Publisher.__proto__ || Object.getPrototypeOf(Publisher)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'Publisher'
    }, _this.data = {
      editorPlaceholder: 'what\'s new with you.',
      editorContent: ''
    }, _this.methods = {
      submitForm: function submitForm() {
        console.log(this.editorContent);
        wx.navigateBack();
      }
    }, _this.events = {}, _this.$repeat = {}, _this.$props = { "editor": { "xmlns:v-bind": "", "v-bind:placeholder.once": "editorPlaceholder", "v-bind:content.once": "editorContent", "xmlns:v-on": "" } }, _this.$events = { "editor": { "v-on:submitForm": "submitForm" } }, _this.components = {
      editor: _editor2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Publisher, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Publisher;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Publisher , 'pages/publisher'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1Ymxpc2hlci5qcyJdLCJuYW1lcyI6WyJQdWJsaXNoZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImVkaXRvclBsYWNlaG9sZGVyIiwiZWRpdG9yQ29udGVudCIsIm1ldGhvZHMiLCJzdWJtaXRGb3JtIiwiY29uc29sZSIsImxvZyIsInd4IiwibmF2aWdhdGVCYWNrIiwiZXZlbnRzIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZWRpdG9yIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMseUJBQW1CLHVCQURkO0FBRUxDLHFCQUFlO0FBRlYsSyxRQUtQQyxPLEdBQVU7QUFDUkMsZ0JBRFEsd0JBQ0s7QUFDWEMsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLSixhQUFqQjtBQUNBSyxXQUFHQyxZQUFIO0FBQ0Q7QUFKTyxLLFFBT1ZDLE0sR0FBUyxFLFFBSVZDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQiwyQkFBMEIsbUJBQTdDLEVBQWlFLHVCQUFzQixlQUF2RixFQUF1RyxjQUFhLEVBQXBILEVBQVYsRSxRQUNUQyxPLEdBQVUsRUFBQyxVQUFTLEVBQUMsbUJBQWtCLFlBQW5CLEVBQVYsRSxRQUNUQyxVLEdBQWE7QUFDVkM7QUFEVSxLOzs7Ozs2QkFMSCxDQUFFOzs7O0VBbkIwQixlQUFLQyxJOztrQkFBdkJsQixTIiwiZmlsZSI6InB1Ymxpc2hlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBFZGl0b3IgZnJvbSAnQC9jb21wb25lbnRzL2VkaXRvcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHVibGlzaGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdQdWJsaXNoZXInXG4gIH1cblxuICBkYXRhID0ge1xuICAgIGVkaXRvclBsYWNlaG9sZGVyOiAnd2hhdFxcJ3MgbmV3IHdpdGggeW91LicsXG4gICAgZWRpdG9yQ29udGVudDogJydcbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgc3VibWl0Rm9ybSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZWRpdG9yQ29udGVudClcbiAgICAgIHd4Lm5hdmlnYXRlQmFjaygpXG4gICAgfVxuICB9XG5cbiAgZXZlbnRzID0ge31cblxuICBvbkxvYWQoKSB7fVxuXG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJlZGl0b3JcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnBsYWNlaG9sZGVyLm9uY2VcIjpcImVkaXRvclBsYWNlaG9sZGVyXCIsXCJ2LWJpbmQ6Y29udGVudC5vbmNlXCI6XCJlZGl0b3JDb250ZW50XCIsXCJ4bWxuczp2LW9uXCI6XCJcIn19O1xyXG4kZXZlbnRzID0ge1wiZWRpdG9yXCI6e1widi1vbjpzdWJtaXRGb3JtXCI6XCJzdWJtaXRGb3JtXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgZWRpdG9yOiBFZGl0b3JcbiAgfVxufVxuIl19