"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = request;
exports.response = response;
/**
 * request 拦截器
 * 可以全局拦截请求参数
 */
function request(params) {
  return params;
}

/**
 * response 拦截器
 * 可以全局拦截请求返回结果
 */
function response(res) {
  if (res.statusCode === 200) {
    res = res.data;
    if (!res.err_code) {
      return res;
    } else {
      return Promise.reject(res);
    }
  } else {
    return Promise.reject(res);
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyY2VwdG9yLmpzIl0sIm5hbWVzIjpbInJlcXVlc3QiLCJyZXNwb25zZSIsInBhcmFtcyIsInJlcyIsInN0YXR1c0NvZGUiLCJkYXRhIiwiZXJyX2NvZGUiLCJQcm9taXNlIiwicmVqZWN0Il0sIm1hcHBpbmdzIjoiOzs7OztRQUlnQkEsTyxHQUFBQSxPO1FBUUFDLFEsR0FBQUEsUTtBQVpoQjs7OztBQUlPLFNBQVNELE9BQVQsQ0FBaUJFLE1BQWpCLEVBQXlCO0FBQzlCLFNBQU9BLE1BQVA7QUFDRDs7QUFFRDs7OztBQUlPLFNBQVNELFFBQVQsQ0FBa0JFLEdBQWxCLEVBQXVCO0FBQzVCLE1BQUlBLElBQUlDLFVBQUosS0FBbUIsR0FBdkIsRUFBNEI7QUFDMUJELFVBQU1BLElBQUlFLElBQVY7QUFDQSxRQUFJLENBQUNGLElBQUlHLFFBQVQsRUFBbUI7QUFDakIsYUFBT0gsR0FBUDtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU9JLFFBQVFDLE1BQVIsQ0FBZUwsR0FBZixDQUFQO0FBQ0Q7QUFDRixHQVBELE1BT087QUFDTCxXQUFPSSxRQUFRQyxNQUFSLENBQWVMLEdBQWYsQ0FBUDtBQUNEO0FBQ0YiLCJmaWxlIjoiaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIHJlcXVlc3Qg5oum5oiq5ZmoXG4gKiDlj6/ku6XlhajlsYDmi6bmiKror7fmsYLlj4LmlbBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3QocGFyYW1zKSB7XG4gIHJldHVybiBwYXJhbXNcbn1cblxuLyoqXG4gKiByZXNwb25zZSDmi6bmiKrlmahcbiAqIOWPr+S7peWFqOWxgOaLpuaIquivt+axgui/lOWbnue7k+aenFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzcG9uc2UocmVzKSB7XG4gIGlmIChyZXMuc3RhdHVzQ29kZSA9PT0gMjAwKSB7XG4gICAgcmVzID0gcmVzLmRhdGFcbiAgICBpZiAoIXJlcy5lcnJfY29kZSkge1xuICAgICAgcmV0dXJuIHJlc1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzKVxuICB9XG59XG4iXX0=