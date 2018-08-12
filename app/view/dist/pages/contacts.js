'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _network = require('./../network/index.js');

var _network2 = _interopRequireDefault(_network);

var _groupBy = require('./../npm/lodash/groupBy.js');

var _groupBy2 = _interopRequireDefault(_groupBy);

var _utils = require('./../utils/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contacts = function (_wepy$page) {
  _inherits(Contacts, _wepy$page);

  function Contacts() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Contacts);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Contacts.__proto__ || Object.getPrototypeOf(Contacts)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'Contacts'
    }, _this.data = {
      contacts: null,
      total: 0
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Contacts, [{
    key: 'onLoad',
    value: function onLoad() {
      this.getContacts();
    }
  }, {
    key: 'getContacts',
    value: function getContacts() {
      var _this2 = this;

      _network2.default.get('/contacts.json').then(function (res) {
        var contacts = res.data;
        contacts.forEach(function (contact) {
          contact.avatarUrl = (0, _utils.getRemoteAvatar)(contact.avatar);
        });
        _this2.contacts = (0, _groupBy2.default)(contacts, 'header');
        _this2.total = contacts.length;
        _this2.$apply();
      });
    }
  }]);

  return Contacts;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Contacts , 'pages/contacts'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzLmpzIl0sIm5hbWVzIjpbIkNvbnRhY3RzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJjb250YWN0cyIsInRvdGFsIiwibWV0aG9kcyIsImV2ZW50cyIsImdldENvbnRhY3RzIiwiZ2V0IiwidGhlbiIsInJlcyIsImZvckVhY2giLCJjb250YWN0IiwiYXZhdGFyVXJsIiwiYXZhdGFyIiwibGVuZ3RoIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxnQkFBVSxJQURMO0FBRUxDLGFBQU87QUFGRixLLFFBS1BDLE8sR0FBVSxFLFFBRVZDLE0sR0FBUyxFOzs7Ozs2QkFFQTtBQUNQLFdBQUtDLFdBQUw7QUFDRDs7O2tDQUVhO0FBQUE7O0FBQ1osd0JBQUlDLEdBQUosQ0FBUSxnQkFBUixFQUEwQkMsSUFBMUIsQ0FBK0IsZUFBTztBQUNwQyxZQUFNTixXQUFXTyxJQUFJUixJQUFyQjtBQUNBQyxpQkFBU1EsT0FBVCxDQUFpQixtQkFBVztBQUMxQkMsa0JBQVFDLFNBQVIsR0FBb0IsNEJBQWdCRCxRQUFRRSxNQUF4QixDQUFwQjtBQUNELFNBRkQ7QUFHQSxlQUFLWCxRQUFMLEdBQWdCLHVCQUFRQSxRQUFSLEVBQWtCLFFBQWxCLENBQWhCO0FBQ0EsZUFBS0MsS0FBTCxHQUFhRCxTQUFTWSxNQUF0QjtBQUNBLGVBQUtDLE1BQUw7QUFDRCxPQVJEO0FBU0Q7Ozs7RUE1Qm1DLGVBQUtDLEk7O2tCQUF0QmxCLFEiLCJmaWxlIjoiY29udGFjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgcmVxIGZyb20gJ0AvbmV0d29yaydcbmltcG9ydCBncm91cEJ5IGZyb20gJ2xvZGFzaC9ncm91cEJ5J1xuaW1wb3J0IHsgZ2V0UmVtb3RlQXZhdGFyIH0gZnJvbSAnQC91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFjdHMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ0NvbnRhY3RzJ1xuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBjb250YWN0czogbnVsbCxcbiAgICB0b3RhbDogMFxuICB9XG5cbiAgbWV0aG9kcyA9IHt9XG5cbiAgZXZlbnRzID0ge31cblxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5nZXRDb250YWN0cygpXG4gIH1cblxuICBnZXRDb250YWN0cygpIHtcbiAgICByZXEuZ2V0KCcvY29udGFjdHMuanNvbicpLnRoZW4ocmVzID0+IHtcbiAgICAgIGNvbnN0IGNvbnRhY3RzID0gcmVzLmRhdGFcbiAgICAgIGNvbnRhY3RzLmZvckVhY2goY29udGFjdCA9PiB7XG4gICAgICAgIGNvbnRhY3QuYXZhdGFyVXJsID0gZ2V0UmVtb3RlQXZhdGFyKGNvbnRhY3QuYXZhdGFyKVxuICAgICAgfSlcbiAgICAgIHRoaXMuY29udGFjdHMgPSBncm91cEJ5KGNvbnRhY3RzLCAnaGVhZGVyJylcbiAgICAgIHRoaXMudG90YWwgPSBjb250YWN0cy5sZW5ndGhcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9KVxuICB9XG59XG4iXX0=