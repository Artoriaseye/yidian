'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _network = require('./network/index.js');

var _network2 = _interopRequireDefault(_network);

var _store = require('./store/index.js');

var _store2 = _interopRequireDefault(_store);

var _interceptor = require('./network/interceptor.js');

var interceptor = _interopRequireWildcard(_interceptor);

var _wepyRedux = require('./npm/wepy-redux/lib/index.js');

var _config = require('./config/index.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _store2.default)();
(0, _wepyRedux.setStore)(store);

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    // 开启2个中间件
    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/index', 'pages/contacts', 'pages/settings', 'pages/profile', 'pages/about', 'pages/language', 'pages/feedback', 'pages/publisher', 'pages/post', 'pages/comment'],
      window: {
        backgroundColor: '#efeff4',
        backgroundTextStyle: 'dark',
        navigationBarBackgroundColor: '#ff9630',
        navigationBarTitleText: 'HiApp',
        navigationBarTextStyle: 'white'
      },
      tabBar: {
        color: '#929292',
        selectedColor: '#ff9630',
        backgroundColor: '#f7f7f8',
        borderStyle: 'white',
        list: [{
          pagePath: 'pages/index',
          text: 'Home',
          iconPath: 'assets/images/home-outline.png',
          selectedIconPath: 'assets/images/home-selected.png'
        }, {
          pagePath: 'pages/contacts',
          text: 'Contacts',
          iconPath: 'assets/images/contacts-outline.png',
          selectedIconPath: 'assets/images/contacts-selected.png'
        }, {
          pagePath: 'pages/settings',
          text: 'Settings',
          iconPath: 'assets/images/settings-outline.png',
          selectedIconPath: 'assets/images/settings-selected.png'
        }]
      }
    };
    _this.globalData = {
      userInfo: null
    };
    _this.use('requestfix');
    _this.use('promisify');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      _network2.default.baseUrl(_config.baseUrl).interceptor(interceptor.request, interceptor.response);
    }
  }, {
    key: 'getUserInfo',
    value: function getUserInfo() {
      var _this2 = this;

      if (this.globalData.userInfo) {
        return new Promise(function (resolve, reject) {
          resolve(_this2.globalData.userInfo);
        });
      } else {
        return _wepy2.default.getUserInfo().then(function (res) {
          _this2.globalData.userInfo = res.userInfo;
          return res.userInfo;
        });
      }
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJpbnRlcmNlcHRvciIsInN0b3JlIiwiY29uZmlnIiwicGFnZXMiLCJ3aW5kb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwidGFiQmFyIiwiY29sb3IiLCJzZWxlY3RlZENvbG9yIiwiYm9yZGVyU3R5bGUiLCJsaXN0IiwicGFnZVBhdGgiLCJ0ZXh0IiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwidXNlIiwiYmFzZVVybCIsInJlcXVlc3QiLCJyZXNwb25zZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0VXNlckluZm8iLCJ0aGVuIiwicmVzIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsVzs7QUFDWjs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUMsUUFBUSxzQkFBZDtBQUNBLHlCQUFTQSxLQUFUOzs7OztBQW1ERSxzQkFBZTtBQUFBOztBQUViO0FBRmE7O0FBQUEsVUFoRGZDLE1BZ0RlLEdBaEROO0FBQ1BDLGFBQU8sQ0FDTCxhQURLLEVBRUwsZ0JBRkssRUFHTCxnQkFISyxFQUlMLGVBSkssRUFLTCxhQUxLLEVBTUwsZ0JBTkssRUFPTCxnQkFQSyxFQVFMLGlCQVJLLEVBU0wsWUFUSyxFQVVMLGVBVkssQ0FEQTtBQWFQQyxjQUFRO0FBQ05DLHlCQUFpQixTQURYO0FBRU5DLDZCQUFxQixNQUZmO0FBR05DLHNDQUE4QixTQUh4QjtBQUlOQyxnQ0FBd0IsT0FKbEI7QUFLTkMsZ0NBQXdCO0FBTGxCLE9BYkQ7QUFvQlBDLGNBQVE7QUFDTkMsZUFBTyxTQUREO0FBRU5DLHVCQUFlLFNBRlQ7QUFHTlAseUJBQWlCLFNBSFg7QUFJTlEscUJBQWEsT0FKUDtBQUtOQyxjQUFNLENBQUM7QUFDTEMsb0JBQVUsYUFETDtBQUVMQyxnQkFBTSxNQUZEO0FBR0xDLG9CQUFVLGdDQUhMO0FBSUxDLDRCQUFrQjtBQUpiLFNBQUQsRUFLSDtBQUNESCxvQkFBVSxnQkFEVDtBQUVEQyxnQkFBTSxVQUZMO0FBR0RDLG9CQUFVLG9DQUhUO0FBSURDLDRCQUFrQjtBQUpqQixTQUxHLEVBVUg7QUFDREgsb0JBQVUsZ0JBRFQ7QUFFREMsZ0JBQU0sVUFGTDtBQUdEQyxvQkFBVSxvQ0FIVDtBQUlEQyw0QkFBa0I7QUFKakIsU0FWRztBQUxBO0FBcEJELEtBZ0RNO0FBQUEsVUFKZkMsVUFJZSxHQUpGO0FBQ1hDLGdCQUFVO0FBREMsS0FJRTtBQUdiLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBQ0EsVUFBS0EsR0FBTCxDQUFTLFdBQVQ7QUFKYTtBQUtkOzs7OytCQUVVO0FBQ1Qsd0JBQUlDLE9BQUosa0JBQXFCdEIsV0FBckIsQ0FBaUNBLFlBQVl1QixPQUE3QyxFQUFzRHZCLFlBQVl3QixRQUFsRTtBQUNEOzs7a0NBRWE7QUFBQTs7QUFDWixVQUFJLEtBQUtMLFVBQUwsQ0FBZ0JDLFFBQXBCLEVBQThCO0FBQzVCLGVBQU8sSUFBSUssT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0Qsa0JBQVEsT0FBS1AsVUFBTCxDQUFnQkMsUUFBeEI7QUFDRCxTQUZNLENBQVA7QUFHRCxPQUpELE1BSU87QUFDTCxlQUFPLGVBQUtRLFdBQUwsR0FBbUJDLElBQW5CLENBQXdCLGVBQU87QUFDcEMsaUJBQUtWLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCVSxJQUFJVixRQUEvQjtBQUNBLGlCQUFPVSxJQUFJVixRQUFYO0FBQ0QsU0FITSxDQUFQO0FBSUQ7QUFDRjs7OztFQXZFMEIsZUFBS1csRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgcmVxIGZyb20gJ0AvbmV0d29yaydcbmltcG9ydCBjb25maWdTdG9yZSBmcm9tICcuL3N0b3JlJ1xuaW1wb3J0ICogYXMgaW50ZXJjZXB0b3IgZnJvbSAnQC9uZXR3b3JrL2ludGVyY2VwdG9yJ1xuaW1wb3J0IHsgc2V0U3RvcmUgfSBmcm9tICd3ZXB5LXJlZHV4J1xuaW1wb3J0IHsgYmFzZVVybCB9IGZyb20gJ0AvY29uZmlnJ1xuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ1N0b3JlKClcbnNldFN0b3JlKHN0b3JlKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgY29uZmlnID0ge1xuICAgIHBhZ2VzOiBbXG4gICAgICAncGFnZXMvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL2NvbnRhY3RzJyxcbiAgICAgICdwYWdlcy9zZXR0aW5ncycsXG4gICAgICAncGFnZXMvcHJvZmlsZScsXG4gICAgICAncGFnZXMvYWJvdXQnLFxuICAgICAgJ3BhZ2VzL2xhbmd1YWdlJyxcbiAgICAgICdwYWdlcy9mZWVkYmFjaycsXG4gICAgICAncGFnZXMvcHVibGlzaGVyJyxcbiAgICAgICdwYWdlcy9wb3N0JyxcbiAgICAgICdwYWdlcy9jb21tZW50J1xuICAgIF0sXG4gICAgd2luZG93OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWZlZmY0JyxcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdkYXJrJyxcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmY5NjMwJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdIaUFwcCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnXG4gICAgfSxcbiAgICB0YWJCYXI6IHtcbiAgICAgIGNvbG9yOiAnIzkyOTI5MicsXG4gICAgICBzZWxlY3RlZENvbG9yOiAnI2ZmOTYzMCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjdmN2Y4JyxcbiAgICAgIGJvcmRlclN0eWxlOiAnd2hpdGUnLFxuICAgICAgbGlzdDogW3tcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9pbmRleCcsXG4gICAgICAgIHRleHQ6ICdIb21lJyxcbiAgICAgICAgaWNvblBhdGg6ICdhc3NldHMvaW1hZ2VzL2hvbWUtb3V0bGluZS5wbmcnLFxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnYXNzZXRzL2ltYWdlcy9ob21lLXNlbGVjdGVkLnBuZydcbiAgICAgIH0sIHtcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9jb250YWN0cycsXG4gICAgICAgIHRleHQ6ICdDb250YWN0cycsXG4gICAgICAgIGljb25QYXRoOiAnYXNzZXRzL2ltYWdlcy9jb250YWN0cy1vdXRsaW5lLnBuZycsXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdhc3NldHMvaW1hZ2VzL2NvbnRhY3RzLXNlbGVjdGVkLnBuZydcbiAgICAgIH0sIHtcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9zZXR0aW5ncycsXG4gICAgICAgIHRleHQ6ICdTZXR0aW5ncycsXG4gICAgICAgIGljb25QYXRoOiAnYXNzZXRzL2ltYWdlcy9zZXR0aW5ncy1vdXRsaW5lLnBuZycsXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdhc3NldHMvaW1hZ2VzL3NldHRpbmdzLXNlbGVjdGVkLnBuZydcbiAgICAgIH1dXG4gICAgfVxuICB9XG5cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICB1c2VySW5mbzogbnVsbFxuICB9XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKClcbiAgICAvLyDlvIDlkK8y5Liq5Lit6Ze05Lu2XG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxuICAgIHRoaXMudXNlKCdwcm9taXNpZnknKVxuICB9XG5cbiAgb25MYXVuY2goKSB7XG4gICAgcmVxLmJhc2VVcmwoYmFzZVVybCkuaW50ZXJjZXB0b3IoaW50ZXJjZXB0b3IucmVxdWVzdCwgaW50ZXJjZXB0b3IucmVzcG9uc2UpXG4gIH1cblxuICBnZXRVc2VySW5mbygpIHtcbiAgICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICByZXNvbHZlKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbylcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB3ZXB5LmdldFVzZXJJbmZvKCkudGhlbihyZXMgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgcmV0dXJuIHJlcy51c2VySW5mb1xuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbiJdfQ==