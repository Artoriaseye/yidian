'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRemoteAvatar = getRemoteAvatar;
exports.formatTimeline = formatTimeline;

var _distance_in_words_to_now = require('./../npm/date-fns/distance_in_words_to_now/index.js');

var _distance_in_words_to_now2 = _interopRequireDefault(_distance_in_words_to_now);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRemoteAvatar(id) {
  return 'https://loremflickr.com/70/70/people?lock=' + id;
}

function formatTimeline(items) {
  items.forEach(function (item) {
    item.avatarUrl = getRemoteAvatar(item.avatar);
    item.time = (0, _distance_in_words_to_now2.default)(item.created_at * 1000, { addSuffix: true });
    return item;
  });
  return items;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImdldFJlbW90ZUF2YXRhciIsImZvcm1hdFRpbWVsaW5lIiwiaWQiLCJpdGVtcyIsImZvckVhY2giLCJpdGVtIiwiYXZhdGFyVXJsIiwiYXZhdGFyIiwidGltZSIsImNyZWF0ZWRfYXQiLCJhZGRTdWZmaXgiXSwibWFwcGluZ3MiOiI7Ozs7O1FBRWdCQSxlLEdBQUFBLGU7UUFJQUMsYyxHQUFBQSxjOztBQU5oQjs7Ozs7O0FBRU8sU0FBU0QsZUFBVCxDQUF5QkUsRUFBekIsRUFBNkI7QUFDbEMsd0RBQW9EQSxFQUFwRDtBQUNEOztBQUVNLFNBQVNELGNBQVQsQ0FBd0JFLEtBQXhCLEVBQStCO0FBQ3BDQSxRQUFNQyxPQUFOLENBQWMsZ0JBQVE7QUFDcEJDLFNBQUtDLFNBQUwsR0FBaUJOLGdCQUFnQkssS0FBS0UsTUFBckIsQ0FBakI7QUFDQUYsU0FBS0csSUFBTCxHQUFZLHdDQUFxQkgsS0FBS0ksVUFBTCxHQUFrQixJQUF2QyxFQUE2QyxFQUFFQyxXQUFXLElBQWIsRUFBN0MsQ0FBWjtBQUNBLFdBQU9MLElBQVA7QUFDRCxHQUpEO0FBS0EsU0FBT0YsS0FBUDtBQUNEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRpc3RhbmNlSW5Xb3Jkc1RvTm93IGZyb20gJ2RhdGUtZm5zL2Rpc3RhbmNlX2luX3dvcmRzX3RvX25vdydcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlbW90ZUF2YXRhcihpZCkge1xuICByZXR1cm4gYGh0dHBzOi8vbG9yZW1mbGlja3IuY29tLzcwLzcwL3Blb3BsZT9sb2NrPSR7aWR9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VGltZWxpbmUoaXRlbXMpIHtcbiAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLmF2YXRhclVybCA9IGdldFJlbW90ZUF2YXRhcihpdGVtLmF2YXRhcilcbiAgICBpdGVtLnRpbWUgPSBkaXN0YW5jZUluV29yZHNUb05vdyhpdGVtLmNyZWF0ZWRfYXQgKiAxMDAwLCB7IGFkZFN1ZmZpeDogdHJ1ZSB9KVxuICAgIHJldHVybiBpdGVtXG4gIH0pXG4gIHJldHVybiBpdGVtc1xufVxuIl19