'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_wepy$component) {
  _inherits(Card, _wepy$component);

  function Card() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Card);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Card.__proto__ || Object.getPrototypeOf(Card)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      post: {
        type: Object
      },
      bottomToolbar: {
        type: Boolean,
        default: false
      }
    }, _this.methods = {
      navToComment: function navToComment(post) {
        wx.navigateTo({
          url: './comment?id=' + post.id
        });
      },
      toggleLike: function toggleLike() {
        //
      },
      previewImage: function previewImage() {
        wx.previewImage({
          current: '',
          urls: [this.post.original_pic]
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Card;
}(_wepy2.default.component);

exports.default = Card;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuanMiXSwibmFtZXMiOlsiQ2FyZCIsInByb3BzIiwicG9zdCIsInR5cGUiLCJPYmplY3QiLCJib3R0b21Ub29sYmFyIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJtZXRob2RzIiwibmF2VG9Db21tZW50Iiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiaWQiLCJ0b2dnbGVMaWtlIiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJvcmlnaW5hbF9waWMiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLEssR0FBUTtBQUNOQyxZQUFNO0FBQ0pDLGNBQU1DO0FBREYsT0FEQTtBQUlOQyxxQkFBZTtBQUNiRixjQUFNRyxPQURPO0FBRWJDLGlCQUFTO0FBRkk7QUFKVCxLLFFBVVJDLE8sR0FBVTtBQUNSQyxrQkFEUSx3QkFDS1AsSUFETCxFQUNXO0FBQ2pCUSxXQUFHQyxVQUFILENBQWM7QUFDWkMsaUNBQXFCVixLQUFLVztBQURkLFNBQWQ7QUFHRCxPQUxPO0FBT1JDLGdCQVBRLHdCQU9LO0FBQ1g7QUFDRCxPQVRPO0FBV1JDLGtCQVhRLDBCQVdPO0FBQ2JMLFdBQUdLLFlBQUgsQ0FBZ0I7QUFDZEMsbUJBQVMsRUFESztBQUVkQyxnQkFBTSxDQUFDLEtBQUtmLElBQUwsQ0FBVWdCLFlBQVg7QUFGUSxTQUFoQjtBQUlEO0FBaEJPLEs7Ozs7RUFYc0IsZUFBS0MsUzs7a0JBQWxCbkIsSSIsImZpbGUiOiJjYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBwb3N0OiB7XG4gICAgICB0eXBlOiBPYmplY3RcbiAgICB9LFxuICAgIGJvdHRvbVRvb2xiYXI6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgbmF2VG9Db21tZW50KHBvc3QpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAuL2NvbW1lbnQ/aWQ9JHtwb3N0LmlkfWBcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIHRvZ2dsZUxpa2UoKSB7XG4gICAgICAvL1xuICAgIH0sXG5cbiAgICBwcmV2aWV3SW1hZ2UoKSB7XG4gICAgICB3eC5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgICBjdXJyZW50OiAnJyxcbiAgICAgICAgdXJsczogW3RoaXMucG9zdC5vcmlnaW5hbF9waWNdXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuIl19