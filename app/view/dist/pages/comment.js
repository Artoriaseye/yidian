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

var Comment = function (_wepy$page) {
  _inherits(Comment, _wepy$page);

  function Comment() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Comment);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Comment.__proto__ || Object.getPrototypeOf(Comment)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'Comment'
    }, _this.data = {
      editorPlaceholder: 'write a comment...',
      editorContent: '',
      editorEnableTools: ''
    }, _this.methods = {
      submitForm: function submitForm() {
        console.log(this.editorContent);
        wx.navigateBack();
      }
    }, _this.events = {}, _this.$repeat = {}, _this.$props = { "editor": { "xmlns:v-bind": "", "v-bind:placeholder.once": "editorPlaceholder", "v-bind:content.once": "editorContent", "v-bind:enableTools.once": "editorEnableTools", "xmlns:v-on": "" } }, _this.$events = { "editor": { "v-on:submitForm": "submitForm" } }, _this.components = {
      editor: _editor2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Comment, [{
    key: 'onLoad',
    value: function onLoad(params) {
      console.log(params);
    }
  }]);

  return Comment;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Comment , 'pages/comment'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnQuanMiXSwibmFtZXMiOlsiQ29tbWVudCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiZWRpdG9yUGxhY2Vob2xkZXIiLCJlZGl0b3JDb250ZW50IiwiZWRpdG9yRW5hYmxlVG9vbHMiLCJtZXRob2RzIiwic3VibWl0Rm9ybSIsImNvbnNvbGUiLCJsb2ciLCJ3eCIsIm5hdmlnYXRlQmFjayIsImV2ZW50cyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImVkaXRvciIsInBhcmFtcyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLHlCQUFtQixvQkFEZDtBQUVMQyxxQkFBZSxFQUZWO0FBR0xDLHlCQUFtQjtBQUhkLEssUUFNUEMsTyxHQUFVO0FBQ1JDLGdCQURRLHdCQUNLO0FBQ1hDLGdCQUFRQyxHQUFSLENBQVksS0FBS0wsYUFBakI7QUFDQU0sV0FBR0MsWUFBSDtBQUNEO0FBSk8sSyxRQU9WQyxNLEdBQVMsRSxRQU1WQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsMkJBQTBCLG1CQUE3QyxFQUFpRSx1QkFBc0IsZUFBdkYsRUFBdUcsMkJBQTBCLG1CQUFqSSxFQUFxSixjQUFhLEVBQWxLLEVBQVYsRSxRQUNUQyxPLEdBQVUsRUFBQyxVQUFTLEVBQUMsbUJBQWtCLFlBQW5CLEVBQVYsRSxRQUNUQyxVLEdBQWE7QUFDVkM7QUFEVSxLOzs7OzsyQkFQTEMsTSxFQUFRO0FBQ2JWLGNBQVFDLEdBQVIsQ0FBWVMsTUFBWjtBQUNEOzs7O0VBdEJrQyxlQUFLQyxJOztrQkFBckJwQixPIiwiZmlsZSI6ImNvbW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgRWRpdG9yIGZyb20gJ0AvY29tcG9uZW50cy9lZGl0b3InXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1lbnQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ0NvbW1lbnQnXG4gIH1cblxuICBkYXRhID0ge1xuICAgIGVkaXRvclBsYWNlaG9sZGVyOiAnd3JpdGUgYSBjb21tZW50Li4uJyxcbiAgICBlZGl0b3JDb250ZW50OiAnJyxcbiAgICBlZGl0b3JFbmFibGVUb29sczogJydcbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgc3VibWl0Rm9ybSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZWRpdG9yQ29udGVudClcbiAgICAgIHd4Lm5hdmlnYXRlQmFjaygpXG4gICAgfVxuICB9XG5cbiAgZXZlbnRzID0ge31cblxuICBvbkxvYWQocGFyYW1zKSB7XG4gICAgY29uc29sZS5sb2cocGFyYW1zKVxuICB9XG5cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImVkaXRvclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6cGxhY2Vob2xkZXIub25jZVwiOlwiZWRpdG9yUGxhY2Vob2xkZXJcIixcInYtYmluZDpjb250ZW50Lm9uY2VcIjpcImVkaXRvckNvbnRlbnRcIixcInYtYmluZDplbmFibGVUb29scy5vbmNlXCI6XCJlZGl0b3JFbmFibGVUb29sc1wiLFwieG1sbnM6di1vblwiOlwiXCJ9fTtcclxuJGV2ZW50cyA9IHtcImVkaXRvclwiOntcInYtb246c3VibWl0Rm9ybVwiOlwic3VibWl0Rm9ybVwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgIGVkaXRvcjogRWRpdG9yXG4gIH1cbn1cbiJdfQ==