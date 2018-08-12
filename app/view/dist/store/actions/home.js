'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prependTimeline = exports.appendTimeline = exports.initTimeline = undefined;

var _types = require('./../types/index.js');

var types = _interopRequireWildcard(_types);

var _reduxActions = require('./../../npm/redux-actions/lib/index.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initTimeline = exports.initTimeline = (0, _reduxActions.createAction)(types.INIT_TIMELINE);
var appendTimeline = exports.appendTimeline = (0, _reduxActions.createAction)(types.APPEND_TIMELINE);
var prependTimeline = exports.prependTimeline = (0, _reduxActions.createAction)(types.PREPEND_TIMELINE);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsidHlwZXMiLCJpbml0VGltZWxpbmUiLCJJTklUX1RJTUVMSU5FIiwiYXBwZW5kVGltZWxpbmUiLCJBUFBFTkRfVElNRUxJTkUiLCJwcmVwZW5kVGltZWxpbmUiLCJQUkVQRU5EX1RJTUVMSU5FIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0lBQVlBLEs7O0FBQ1o7Ozs7QUFFTyxJQUFNQyxzQ0FBZSxnQ0FBYUQsTUFBTUUsYUFBbkIsQ0FBckI7QUFDQSxJQUFNQywwQ0FBaUIsZ0NBQWFILE1BQU1JLGVBQW5CLENBQXZCO0FBQ0EsSUFBTUMsNENBQWtCLGdDQUFhTCxNQUFNTSxnQkFBbkIsQ0FBeEIiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHsgY3JlYXRlQWN0aW9uIH0gZnJvbSAncmVkdXgtYWN0aW9ucydcblxuZXhwb3J0IGNvbnN0IGluaXRUaW1lbGluZSA9IGNyZWF0ZUFjdGlvbih0eXBlcy5JTklUX1RJTUVMSU5FKVxuZXhwb3J0IGNvbnN0IGFwcGVuZFRpbWVsaW5lID0gY3JlYXRlQWN0aW9uKHR5cGVzLkFQUEVORF9USU1FTElORSlcbmV4cG9ydCBjb25zdCBwcmVwZW5kVGltZWxpbmUgPSBjcmVhdGVBY3Rpb24odHlwZXMuUFJFUEVORF9USU1FTElORSlcbiJdfQ==