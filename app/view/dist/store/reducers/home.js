'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = require('./../../npm/redux-actions/lib/index.js');

var _types = require('./../types/index.js');

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, types.INIT_TIMELINE, function (state, action) {
  return _extends({}, state, {
    timeline: action.payload
  });
}), _defineProperty(_handleActions, types.PREPEND_TIMELINE, function (state, action) {
  return _extends({}, state, {
    timeline: [].concat(_toConsumableArray(action.payload), _toConsumableArray(state.timeline))
  });
}), _defineProperty(_handleActions, types.APPEND_TIMELINE, function (state, action) {
  return _extends({}, state, {
    timeline: [].concat(_toConsumableArray(state.timeline), _toConsumableArray(action.payload))
  });
}), _handleActions), {
  timeline: []
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsidHlwZXMiLCJJTklUX1RJTUVMSU5FIiwic3RhdGUiLCJhY3Rpb24iLCJ0aW1lbGluZSIsInBheWxvYWQiLCJQUkVQRU5EX1RJTUVMSU5FIiwiQVBQRU5EX1RJTUVMSU5FIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0lBQVlBLEs7Ozs7Ozs7O2tCQUVHLHVGQUNaQSxNQUFNQyxhQURNLFlBQ1VDLEtBRFYsRUFDaUJDLE1BRGpCLEVBQ3lCO0FBQ3BDLHNCQUNLRCxLQURMO0FBRUVFLGNBQVVELE9BQU9FO0FBRm5CO0FBSUQsQ0FOWSxtQ0FPWkwsTUFBTU0sZ0JBUE0sWUFPYUosS0FQYixFQU9vQkMsTUFQcEIsRUFPNEI7QUFDdkMsc0JBQ0tELEtBREw7QUFFRUUsMkNBQWNELE9BQU9FLE9BQXJCLHNCQUFpQ0gsTUFBTUUsUUFBdkM7QUFGRjtBQUlELENBWlksbUNBYVpKLE1BQU1PLGVBYk0sWUFhWUwsS0FiWixFQWFtQkMsTUFibkIsRUFhMkI7QUFDdEMsc0JBQ0tELEtBREw7QUFFRUUsMkNBQWNGLE1BQU1FLFFBQXBCLHNCQUFpQ0QsT0FBT0UsT0FBeEM7QUFGRjtBQUlELENBbEJZLG9CQW1CWjtBQUNERCxZQUFVO0FBRFQsQ0FuQlksQyIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlQWN0aW9ucyB9IGZyb20gJ3JlZHV4LWFjdGlvbnMnXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcydcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlQWN0aW9ucyh7XG4gIFt0eXBlcy5JTklUX1RJTUVMSU5FXSAoc3RhdGUsIGFjdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHRpbWVsaW5lOiBhY3Rpb24ucGF5bG9hZFxuICAgIH1cbiAgfSxcbiAgW3R5cGVzLlBSRVBFTkRfVElNRUxJTkVdIChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgdGltZWxpbmU6IFsuLi5hY3Rpb24ucGF5bG9hZCwgLi4uc3RhdGUudGltZWxpbmVdXG4gICAgfVxuICB9LFxuICBbdHlwZXMuQVBQRU5EX1RJTUVMSU5FXSAoc3RhdGUsIGFjdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHRpbWVsaW5lOiBbLi4uc3RhdGUudGltZWxpbmUsIC4uLmFjdGlvbi5wYXlsb2FkXVxuICAgIH1cbiAgfVxufSwge1xuICB0aW1lbGluZTogW11cbn0pXG4iXX0=