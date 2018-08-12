'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _network = require('./../network/index.js');

var _network2 = _interopRequireDefault(_network);

var _card = require('./../components/card.js');

var _card2 = _interopRequireDefault(_card);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _actions = require('./../store/actions/index.js');

var _utils = require('./../utils/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_dec = (0, _wepyRedux.connect)({
  timeline: function timeline(state) {
    return state.home.timeline;
  }
}, {
  initTimeline: _actions.initTimeline,
  prependTimeline: _actions.prependTimeline,
  appendTimeline: _actions.appendTimeline
}), _dec(_class = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      enablePullDownRefresh: true
    }, _this.refreshing = false, _this.loadingMore = false, _this.loadedEnd = false, _this.methods = {
      navToPost: function navToPost(post) {
        this.$preload('post', post);
        this.$navigate('./post', { id: post.id });
      }
    }, _this.events = {}, _this.$repeat = { "timeline": { "com": "card", "props": "post.sync" } }, _this.$props = { "card": { "xmlns:v-bind": { "value": "", "for": "timeline", "item": "item", "index": "index", "key": "index" }, "v-bind:post.sync": { "value": "item", "type": "item", "for": "timeline", "item": "item", "index": "index", "key": "index" } } }, _this.$events = {}, _this.components = {
      card: _card2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      this.getTimeline();
    }
  }, {
    key: 'getTimeline',
    value: function getTimeline() {
      var _this2 = this;

      wx.showToast({
        title: 'loading...',
        icon: 'loading'
      });
      _network2.default.get('/timeline.json').then(function (res) {
        _this2.methods.initTimeline((0, _utils.formatTimeline)(res.data));
      }).then(function (res) {
        return wx.hideToast();
      });
    }
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      var _this3 = this;

      if (this.refreshing) return false;

      this.refreshing = true;
      _network2.default.get('/refresh_timeline.json').then(function (res) {
        if (parseInt(_this3.timeline[0].id) === 48) {
          // this.$emit('show-tip')
        } else {
          var timeline = (0, _utils.formatTimeline)(res.data);
          _this3.methods.prependTimeline(timeline);
        }
        _this3.refreshing = false;
        wx.stopPullDownRefresh();
      });
    }
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      var _this4 = this;

      if (this.loadingMore || this.loadedEnd) return false;

      this.loadingMore = true;
      wx.showToast({
        title: 'loading...',
        icon: 'loading'
      });
      _network2.default.get('/more_timeline.json').then(function (res) {
        var id = parseInt(_this4.timeline[_this4.timeline.length - 1].id);
        if (id === 24) {
          _this4.loadedEnd = true;
        } else {
          var timeline = (0, _utils.formatTimeline)(res.data);
          _this4.methods.appendTimeline(timeline);
        }
        _this4.loadingMore = false;
      }).then(function (res) {
        return wx.hideToast();
      });
    }
  }]);

  return Index;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwidGltZWxpbmUiLCJzdGF0ZSIsImhvbWUiLCJpbml0VGltZWxpbmUiLCJwcmVwZW5kVGltZWxpbmUiLCJhcHBlbmRUaW1lbGluZSIsImNvbmZpZyIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsInJlZnJlc2hpbmciLCJsb2FkaW5nTW9yZSIsImxvYWRlZEVuZCIsIm1ldGhvZHMiLCJuYXZUb1Bvc3QiLCJwb3N0IiwiJHByZWxvYWQiLCIkbmF2aWdhdGUiLCJpZCIsImV2ZW50cyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNhcmQiLCJnZXRUaW1lbGluZSIsInd4Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJoaWRlVG9hc3QiLCJwYXJzZUludCIsInN0b3BQdWxsRG93blJlZnJlc2giLCJsZW5ndGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBWXFCQSxLLFdBVnBCLHdCQUFRO0FBQ1BDLFVBRE8sb0JBQ0VDLEtBREYsRUFDUztBQUNkLFdBQU9BLE1BQU1DLElBQU4sQ0FBV0YsUUFBbEI7QUFDRDtBQUhNLENBQVIsRUFJRTtBQUNERyxxQ0FEQztBQUVEQywyQ0FGQztBQUdEQztBQUhDLENBSkYsQzs7Ozs7Ozs7Ozs7Ozs7b0xBV0NDLE0sR0FBUztBQUNQQyw2QkFBdUI7QUFEaEIsSyxRQUlUQyxVLEdBQWEsSyxRQUNiQyxXLEdBQWMsSyxRQUNkQyxTLEdBQVksSyxRQUVaQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDRUMsSUFERixFQUNRO0FBQ2QsYUFBS0MsUUFBTCxDQUFjLE1BQWQsRUFBc0JELElBQXRCO0FBQ0EsYUFBS0UsU0FBTCxDQUFlLFFBQWYsRUFBeUIsRUFBRUMsSUFBSUgsS0FBS0csRUFBWCxFQUF6QjtBQUNEO0FBSk8sSyxRQU9WQyxNLEdBQVMsRSxRQW9EVkMsTyxHQUFVLEVBQUMsWUFBVyxFQUFDLE9BQU0sTUFBUCxFQUFjLFNBQVEsV0FBdEIsRUFBWixFLFFBQ1hDLE0sR0FBUyxFQUFDLFFBQU8sRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sVUFBbEIsRUFBNkIsUUFBTyxNQUFwQyxFQUEyQyxTQUFRLE9BQW5ELEVBQTJELE9BQU0sT0FBakUsRUFBaEIsRUFBMEYsb0JBQW1CLEVBQUMsU0FBUSxNQUFULEVBQWdCLFFBQU8sTUFBdkIsRUFBOEIsT0FBTSxVQUFwQyxFQUErQyxRQUFPLE1BQXRELEVBQTZELFNBQVEsT0FBckUsRUFBNkUsT0FBTSxPQUFuRixFQUE3RyxFQUFSLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDO0FBRFUsSzs7Ozs7NkJBckRIO0FBQ1AsV0FBS0MsV0FBTDtBQUNEOzs7a0NBRWE7QUFBQTs7QUFDWkMsU0FBR0MsU0FBSCxDQUFhO0FBQ1hDLGVBQU8sWUFESTtBQUVYQyxjQUFNO0FBRkssT0FBYjtBQUlBLHdCQUFJQyxHQUFKLENBQVEsZ0JBQVIsRUFBMEJDLElBQTFCLENBQStCLGVBQU87QUFDcEMsZUFBS2xCLE9BQUwsQ0FBYVIsWUFBYixDQUEwQiwyQkFBZTJCLElBQUlDLElBQW5CLENBQTFCO0FBQ0QsT0FGRCxFQUVHRixJQUZILENBRVE7QUFBQSxlQUFPTCxHQUFHUSxTQUFILEVBQVA7QUFBQSxPQUZSO0FBR0Q7Ozt3Q0FFbUI7QUFBQTs7QUFDbEIsVUFBSSxLQUFLeEIsVUFBVCxFQUFxQixPQUFPLEtBQVA7O0FBRXJCLFdBQUtBLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSx3QkFBSW9CLEdBQUosQ0FBUSx3QkFBUixFQUFrQ0MsSUFBbEMsQ0FBdUMsZUFBTztBQUM1QyxZQUFJSSxTQUFTLE9BQUtqQyxRQUFMLENBQWMsQ0FBZCxFQUFpQmdCLEVBQTFCLE1BQWtDLEVBQXRDLEVBQTBDO0FBQ3hDO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsY0FBTWhCLFdBQVcsMkJBQWU4QixJQUFJQyxJQUFuQixDQUFqQjtBQUNBLGlCQUFLcEIsT0FBTCxDQUFhUCxlQUFiLENBQTZCSixRQUE3QjtBQUNEO0FBQ0QsZUFBS1EsVUFBTCxHQUFrQixLQUFsQjtBQUNBZ0IsV0FBR1UsbUJBQUg7QUFDRCxPQVREO0FBVUQ7OztvQ0FFZTtBQUFBOztBQUNkLFVBQUksS0FBS3pCLFdBQUwsSUFBb0IsS0FBS0MsU0FBN0IsRUFBd0MsT0FBTyxLQUFQOztBQUV4QyxXQUFLRCxXQUFMLEdBQW1CLElBQW5CO0FBQ0FlLFNBQUdDLFNBQUgsQ0FBYTtBQUNYQyxlQUFPLFlBREk7QUFFWEMsY0FBTTtBQUZLLE9BQWI7QUFJQSx3QkFBSUMsR0FBSixDQUFRLHFCQUFSLEVBQStCQyxJQUEvQixDQUFvQyxlQUFPO0FBQ3pDLFlBQU1iLEtBQUtpQixTQUFTLE9BQUtqQyxRQUFMLENBQWMsT0FBS0EsUUFBTCxDQUFjbUMsTUFBZCxHQUF1QixDQUFyQyxFQUF3Q25CLEVBQWpELENBQVg7QUFDQSxZQUFJQSxPQUFPLEVBQVgsRUFBZTtBQUNiLGlCQUFLTixTQUFMLEdBQWlCLElBQWpCO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsY0FBTVYsV0FBVywyQkFBZThCLElBQUlDLElBQW5CLENBQWpCO0FBQ0EsaUJBQUtwQixPQUFMLENBQWFOLGNBQWIsQ0FBNEJMLFFBQTVCO0FBQ0Q7QUFDRCxlQUFLUyxXQUFMLEdBQW1CLEtBQW5CO0FBQ0QsT0FURCxFQVNHb0IsSUFUSCxDQVNRO0FBQUEsZUFBT0wsR0FBR1EsU0FBSCxFQUFQO0FBQUEsT0FUUjtBQVVEOzs7O0VBbEVnQyxlQUFLSSxJO2tCQUFuQnJDLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgcmVxIGZyb20gJ0AvbmV0d29yaydcbmltcG9ydCBDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9jYXJkJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnXG5pbXBvcnQgeyBpbml0VGltZWxpbmUsIHByZXBlbmRUaW1lbGluZSwgYXBwZW5kVGltZWxpbmUgfSBmcm9tICdAL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgeyBmb3JtYXRUaW1lbGluZSB9IGZyb20gJ0AvdXRpbHMnXG5cbkBjb25uZWN0KHtcbiAgdGltZWxpbmUoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuaG9tZS50aW1lbGluZVxuICB9XG59LCB7XG4gIGluaXRUaW1lbGluZSxcbiAgcHJlcGVuZFRpbWVsaW5lLFxuICBhcHBlbmRUaW1lbGluZVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlXG4gIH1cblxuICByZWZyZXNoaW5nID0gZmFsc2VcbiAgbG9hZGluZ01vcmUgPSBmYWxzZVxuICBsb2FkZWRFbmQgPSBmYWxzZVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgbmF2VG9Qb3N0KHBvc3QpIHtcbiAgICAgIHRoaXMuJHByZWxvYWQoJ3Bvc3QnLCBwb3N0KVxuICAgICAgdGhpcy4kbmF2aWdhdGUoJy4vcG9zdCcsIHsgaWQ6IHBvc3QuaWQgfSlcbiAgICB9XG4gIH1cblxuICBldmVudHMgPSB7fVxuXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLmdldFRpbWVsaW5lKClcbiAgfVxuXG4gIGdldFRpbWVsaW5lKCkge1xuICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICB0aXRsZTogJ2xvYWRpbmcuLi4nLFxuICAgICAgaWNvbjogJ2xvYWRpbmcnXG4gICAgfSlcbiAgICByZXEuZ2V0KCcvdGltZWxpbmUuanNvbicpLnRoZW4ocmVzID0+IHtcbiAgICAgIHRoaXMubWV0aG9kcy5pbml0VGltZWxpbmUoZm9ybWF0VGltZWxpbmUocmVzLmRhdGEpKVxuICAgIH0pLnRoZW4ocmVzID0+IHd4LmhpZGVUb2FzdCgpKVxuICB9XG5cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgaWYgKHRoaXMucmVmcmVzaGluZykgcmV0dXJuIGZhbHNlXG5cbiAgICB0aGlzLnJlZnJlc2hpbmcgPSB0cnVlXG4gICAgcmVxLmdldCgnL3JlZnJlc2hfdGltZWxpbmUuanNvbicpLnRoZW4ocmVzID0+IHtcbiAgICAgIGlmIChwYXJzZUludCh0aGlzLnRpbWVsaW5lWzBdLmlkKSA9PT0gNDgpIHtcbiAgICAgICAgLy8gdGhpcy4kZW1pdCgnc2hvdy10aXAnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGltZWxpbmUgPSBmb3JtYXRUaW1lbGluZShyZXMuZGF0YSlcbiAgICAgICAgdGhpcy5tZXRob2RzLnByZXBlbmRUaW1lbGluZSh0aW1lbGluZSlcbiAgICAgIH1cbiAgICAgIHRoaXMucmVmcmVzaGluZyA9IGZhbHNlXG4gICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKClcbiAgICB9KVxuICB9XG5cbiAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICBpZiAodGhpcy5sb2FkaW5nTW9yZSB8fCB0aGlzLmxvYWRlZEVuZCkgcmV0dXJuIGZhbHNlXG5cbiAgICB0aGlzLmxvYWRpbmdNb3JlID0gdHJ1ZVxuICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICB0aXRsZTogJ2xvYWRpbmcuLi4nLFxuICAgICAgaWNvbjogJ2xvYWRpbmcnXG4gICAgfSlcbiAgICByZXEuZ2V0KCcvbW9yZV90aW1lbGluZS5qc29uJykudGhlbihyZXMgPT4ge1xuICAgICAgY29uc3QgaWQgPSBwYXJzZUludCh0aGlzLnRpbWVsaW5lW3RoaXMudGltZWxpbmUubGVuZ3RoIC0gMV0uaWQpXG4gICAgICBpZiAoaWQgPT09IDI0KSB7XG4gICAgICAgIHRoaXMubG9hZGVkRW5kID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGltZWxpbmUgPSBmb3JtYXRUaW1lbGluZShyZXMuZGF0YSlcbiAgICAgICAgdGhpcy5tZXRob2RzLmFwcGVuZFRpbWVsaW5lKHRpbWVsaW5lKVxuICAgICAgfVxuICAgICAgdGhpcy5sb2FkaW5nTW9yZSA9IGZhbHNlXG4gICAgfSkudGhlbihyZXMgPT4gd3guaGlkZVRvYXN0KCkpXG4gIH1cblxuICRyZXBlYXQgPSB7XCJ0aW1lbGluZVwiOntcImNvbVwiOlwiY2FyZFwiLFwicHJvcHNcIjpcInBvc3Quc3luY1wifX07XHJcbiRwcm9wcyA9IHtcImNhcmRcIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcInRpbWVsaW5lXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6cG9zdC5zeW5jXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwidGltZWxpbmVcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIGNhcmQ6IENhcmRcbiAgfVxufVxuIl19