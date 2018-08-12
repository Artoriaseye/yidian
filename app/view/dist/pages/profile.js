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

var Profile = function (_wepy$page) {
  _inherits(Profile, _wepy$page);

  function Profile() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Profile);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Profile.__proto__ || Object.getPrototypeOf(Profile)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'Profile'
    }, _this.data = {
      userInfo: {}
    }, _this.computed = {
      gender: function gender() {
        var gender = parseInt(this.userInfo.gender);
        return gender === 1 ? 'male' : gender === 0 ? 'female' : 'unknown';
      }
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Profile, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      this.$parent.getUserInfo().then(function (user) {
        _this2.userInfo = user;
        _this2.$apply();
      });
    }
  }]);

  return Profile;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Profile , 'pages/profile'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuanMiXSwibmFtZXMiOlsiUHJvZmlsZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidXNlckluZm8iLCJjb21wdXRlZCIsImdlbmRlciIsInBhcnNlSW50IiwibWV0aG9kcyIsImV2ZW50cyIsIiRwYXJlbnQiLCJnZXRVc2VySW5mbyIsInRoZW4iLCJ1c2VyIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGdCQUFVO0FBREwsSyxRQUlQQyxRLEdBQVc7QUFDVEMsWUFEUyxvQkFDQTtBQUNQLFlBQU1BLFNBQVNDLFNBQVMsS0FBS0gsUUFBTCxDQUFjRSxNQUF2QixDQUFmO0FBQ0EsZUFBT0EsV0FBVyxDQUFYLEdBQWUsTUFBZixHQUF3QkEsV0FBVyxDQUFYLEdBQWUsUUFBZixHQUEwQixTQUF6RDtBQUNEO0FBSlEsSyxRQU9YRSxPLEdBQVUsRSxRQUVWQyxNLEdBQVMsRTs7Ozs7NkJBRUE7QUFBQTs7QUFDUCxXQUFLQyxPQUFMLENBQWFDLFdBQWIsR0FBMkJDLElBQTNCLENBQWdDLGdCQUFRO0FBQ3RDLGVBQUtSLFFBQUwsR0FBZ0JTLElBQWhCO0FBQ0EsZUFBS0MsTUFBTDtBQUNELE9BSEQ7QUFJRDs7OztFQXpCa0MsZUFBS0MsSTs7a0JBQXJCZixPIiwiZmlsZSI6InByb2ZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2ZpbGUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1Byb2ZpbGUnXG4gIH1cblxuICBkYXRhID0ge1xuICAgIHVzZXJJbmZvOiB7fVxuICB9XG5cbiAgY29tcHV0ZWQgPSB7XG4gICAgZ2VuZGVyKCkge1xuICAgICAgY29uc3QgZ2VuZGVyID0gcGFyc2VJbnQodGhpcy51c2VySW5mby5nZW5kZXIpXG4gICAgICByZXR1cm4gZ2VuZGVyID09PSAxID8gJ21hbGUnIDogZ2VuZGVyID09PSAwID8gJ2ZlbWFsZScgOiAndW5rbm93bidcbiAgICB9XG4gIH1cblxuICBtZXRob2RzID0ge31cblxuICBldmVudHMgPSB7fVxuXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oKS50aGVuKHVzZXIgPT4ge1xuICAgICAgdGhpcy51c2VySW5mbyA9IHVzZXJcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9KVxuICB9XG59XG4iXX0=