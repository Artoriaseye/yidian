'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _network = require('./../network/index.js');

var _network2 = _interopRequireDefault(_network);

var _card = require('./../components/card.js');

var _card2 = _interopRequireDefault(_card);

var _distance_in_words_to_now = require('./../npm/date-fns/distance_in_words_to_now/index.js');

var _distance_in_words_to_now2 = _interopRequireDefault(_distance_in_words_to_now);

var _utils = require('./../utils/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Post = function (_wepy$page) {
  _inherits(Post, _wepy$page);

  function Post() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Post);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Post.__proto__ || Object.getPrototypeOf(Post)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'Post'
    }, _this.data = {
      post: {},
      enableBottomToolbar: true,
      comments: []
    }, _this.methods = {}, _this.events = {}, _this.$repeat = {}, _this.$props = { "card": { "xmlns:v-bind": "", "v-bind:post.sync": "post", "v-bind:bottomToolbar.once": "enableBottomToolbar" } }, _this.$events = {}, _this.components = {
      card: _card2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Post, [{
    key: 'onLoad',
    value: function onLoad(params, data) {
      // 尝试先去 preload 中获取 post 数据，没有的话通过接口获取
      if (data && data.hasOwnProperty('preload') && data.preload.hasOwnProperty('post')) {
        this.post = data.preload.post;
      } else {}
      // 通过接口获取 post
      // this.post = await req.post('/post.json', { id: params.id })

      // 请求该 post 的评论列表
      this.getComments();
    }
  }, {
    key: 'getComments',
    value: function getComments() {
      var _this2 = this;

      var random = Math.floor(Math.random() * 2);
      if (!random) return [];
      _network2.default.get('/comments.json').then(function (res) {
        var comments = _this2.formatComments(res.data);
        _this2.comments = comments;
        _this2.$apply();
      });
    }
  }, {
    key: 'formatComments',
    value: function formatComments(items) {
      items.forEach(function (item) {
        item.avatarUrl = (0, _utils.getRemoteAvatar)(item.avatar);
        item.time = (0, _distance_in_words_to_now2.default)(item.time * 1000, { addSuffix: true });
        return item;
      });
      return items;
    }
  }]);

  return Post;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Post , 'pages/post'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QuanMiXSwibmFtZXMiOlsiUG9zdCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwicG9zdCIsImVuYWJsZUJvdHRvbVRvb2xiYXIiLCJjb21tZW50cyIsIm1ldGhvZHMiLCJldmVudHMiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjYXJkIiwicGFyYW1zIiwiaGFzT3duUHJvcGVydHkiLCJwcmVsb2FkIiwiZ2V0Q29tbWVudHMiLCJyYW5kb20iLCJNYXRoIiwiZmxvb3IiLCJnZXQiLCJ0aGVuIiwiZm9ybWF0Q29tbWVudHMiLCJyZXMiLCIkYXBwbHkiLCJpdGVtcyIsImZvckVhY2giLCJpdGVtIiwiYXZhdGFyVXJsIiwiYXZhdGFyIiwidGltZSIsImFkZFN1ZmZpeCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsMkJBQXFCLElBRmhCO0FBR0xDLGdCQUFVO0FBSEwsSyxRQU1QQyxPLEdBQVUsRSxRQUVWQyxNLEdBQVMsRSxRQXFDVkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsUUFBTyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG9CQUFtQixNQUF0QyxFQUE2Qyw2QkFBNEIscUJBQXpFLEVBQVIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDVkM7QUFEVSxLOzs7OzsyQkF0Q0xDLE0sRUFBUVgsSSxFQUFNO0FBQ25CO0FBQ0EsVUFDRUEsUUFDQUEsS0FBS1ksY0FBTCxDQUFvQixTQUFwQixDQURBLElBRUFaLEtBQUthLE9BQUwsQ0FBYUQsY0FBYixDQUE0QixNQUE1QixDQUhGLEVBSUU7QUFDQSxhQUFLWCxJQUFMLEdBQVlELEtBQUthLE9BQUwsQ0FBYVosSUFBekI7QUFDRCxPQU5ELE1BTU8sQ0FHTjtBQUZDO0FBQ0E7O0FBRUY7QUFDQSxXQUFLYSxXQUFMO0FBQ0Q7OztrQ0FFYTtBQUFBOztBQUNaLFVBQU1DLFNBQVNDLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0QsTUFBTCxLQUFnQixDQUEzQixDQUFmO0FBQ0EsVUFBSSxDQUFDQSxNQUFMLEVBQWEsT0FBTyxFQUFQO0FBQ2Isd0JBQUlHLEdBQUosQ0FBUSxnQkFBUixFQUEwQkMsSUFBMUIsQ0FBK0IsZUFBTztBQUNwQyxZQUFNaEIsV0FBVyxPQUFLaUIsY0FBTCxDQUFvQkMsSUFBSXJCLElBQXhCLENBQWpCO0FBQ0EsZUFBS0csUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxlQUFLbUIsTUFBTDtBQUNELE9BSkQ7QUFLRDs7O21DQUVjQyxLLEVBQU87QUFDcEJBLFlBQU1DLE9BQU4sQ0FBYyxnQkFBUTtBQUNwQkMsYUFBS0MsU0FBTCxHQUFpQiw0QkFBZ0JELEtBQUtFLE1BQXJCLENBQWpCO0FBQ0FGLGFBQUtHLElBQUwsR0FBWSx3Q0FBcUJILEtBQUtHLElBQUwsR0FBWSxJQUFqQyxFQUF1QyxFQUFFQyxXQUFXLElBQWIsRUFBdkMsQ0FBWjtBQUNBLGVBQU9KLElBQVA7QUFDRCxPQUpEO0FBS0EsYUFBT0YsS0FBUDtBQUNEOzs7O0VBaEQrQixlQUFLTyxJOztrQkFBbEJqQyxJIiwiZmlsZSI6InBvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgcmVxIGZyb20gJ0AvbmV0d29yaydcbmltcG9ydCBDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9jYXJkJ1xuaW1wb3J0IGRpc3RhbmNlSW5Xb3Jkc1RvTm93IGZyb20gJ2RhdGUtZm5zL2Rpc3RhbmNlX2luX3dvcmRzX3RvX25vdydcbmltcG9ydCB7IGdldFJlbW90ZUF2YXRhciB9IGZyb20gJ0AvdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1Bvc3QnXG4gIH1cblxuICBkYXRhID0ge1xuICAgIHBvc3Q6IHt9LFxuICAgIGVuYWJsZUJvdHRvbVRvb2xiYXI6IHRydWUsXG4gICAgY29tbWVudHM6IFtdXG4gIH1cblxuICBtZXRob2RzID0ge31cblxuICBldmVudHMgPSB7fVxuXG4gIG9uTG9hZChwYXJhbXMsIGRhdGEpIHtcbiAgICAvLyDlsJ3or5XlhYjljrsgcHJlbG9hZCDkuK3ojrflj5YgcG9zdCDmlbDmja7vvIzmsqHmnInnmoTor53pgJrov4fmjqXlj6Pojrflj5ZcbiAgICBpZiAoXG4gICAgICBkYXRhICYmXG4gICAgICBkYXRhLmhhc093blByb3BlcnR5KCdwcmVsb2FkJykgJiZcbiAgICAgIGRhdGEucHJlbG9hZC5oYXNPd25Qcm9wZXJ0eSgncG9zdCcpXG4gICAgKSB7XG4gICAgICB0aGlzLnBvc3QgPSBkYXRhLnByZWxvYWQucG9zdFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyDpgJrov4fmjqXlj6Pojrflj5YgcG9zdFxuICAgICAgLy8gdGhpcy5wb3N0ID0gYXdhaXQgcmVxLnBvc3QoJy9wb3N0Lmpzb24nLCB7IGlkOiBwYXJhbXMuaWQgfSlcbiAgICB9XG4gICAgLy8g6K+35rGC6K+lIHBvc3Qg55qE6K+E6K665YiX6KGoXG4gICAgdGhpcy5nZXRDb21tZW50cygpXG4gIH1cblxuICBnZXRDb21tZW50cygpIHtcbiAgICBjb25zdCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKVxuICAgIGlmICghcmFuZG9tKSByZXR1cm4gW11cbiAgICByZXEuZ2V0KCcvY29tbWVudHMuanNvbicpLnRoZW4ocmVzID0+IHtcbiAgICAgIGNvbnN0IGNvbW1lbnRzID0gdGhpcy5mb3JtYXRDb21tZW50cyhyZXMuZGF0YSlcbiAgICAgIHRoaXMuY29tbWVudHMgPSBjb21tZW50c1xuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0pXG4gIH1cblxuICBmb3JtYXRDb21tZW50cyhpdGVtcykge1xuICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtLmF2YXRhclVybCA9IGdldFJlbW90ZUF2YXRhcihpdGVtLmF2YXRhcilcbiAgICAgIGl0ZW0udGltZSA9IGRpc3RhbmNlSW5Xb3Jkc1RvTm93KGl0ZW0udGltZSAqIDEwMDAsIHsgYWRkU3VmZml4OiB0cnVlIH0pXG4gICAgICByZXR1cm4gaXRlbVxuICAgIH0pXG4gICAgcmV0dXJuIGl0ZW1zXG4gIH1cblxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiY2FyZFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6cG9zdC5zeW5jXCI6XCJwb3N0XCIsXCJ2LWJpbmQ6Ym90dG9tVG9vbGJhci5vbmNlXCI6XCJlbmFibGVCb3R0b21Ub29sYmFyXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBjYXJkOiBDYXJkXG4gIH1cbn1cbiJdfQ==