'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
};

var Request = function () {
  function Request() {
    _classCallCheck(this, Request);

    this._header = {
      token: null
    };
    this._baseUrl = null;
    this.interceptors = {
      request: null,
      response: null
    };

    var token = wx.getStorageSync('token');
    if (token) {
      this._header.token = token;
    }
  }

  _createClass(Request, [{
    key: 'request',
    value: function request(params) {
      var _this = this;

      var _ref = this.interceptors.request ? this.interceptors.request(params) : params,
          url = _ref.url,
          method = _ref.method,
          header = _ref.header,
          data = _ref.data;

      return _wepy2.default.request({
        url: (this._baseUrl || '') + url,
        method: method || METHOD.GET,
        data: data,
        header: _extends({}, this._header, header)
      }).then(function (res) {
        return _this.interceptors.response ? _this.interceptors.response(res) : res;
      });
    }
  }, {
    key: 'get',
    value: function get(url, data, header) {
      return this.request({ url: url, method: METHOD.GET, header: header, data: data });
    }
  }, {
    key: 'post',
    value: function post(url, data, header) {
      return this.request({ url: url, method: METHOD.POST, header: header, data: data });
    }
  }, {
    key: 'put',
    value: function put(url, data, header) {
      return this.request({ url: url, method: METHOD.PUT, header: header, data: data });
    }
  }, {
    key: 'delete',
    value: function _delete(url, data, header) {
      return this.request({ url: url, method: METHOD.DELETE, header: header, data: data });
    }
  }, {
    key: 'token',
    value: function token(_token) {
      this._header.token = _token;
      return this;
    }
  }, {
    key: 'header',
    value: function header(_header) {
      this._header = _header;
      return this;
    }
  }, {
    key: 'baseUrl',
    value: function baseUrl(_baseUrl) {
      this._baseUrl = _baseUrl;
      return this;
    }
  }, {
    key: 'interceptor',
    value: function interceptor(request, response) {
      if (typeof request === 'function') {
        this.interceptors.request = request;
      }
      if (typeof request === 'function') {
        this.interceptors.response = response;
      }
      return this;
    }
  }]);

  return Request;
}();

exports.default = new Request();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk1FVEhPRCIsIkdFVCIsIlBPU1QiLCJQVVQiLCJERUxFVEUiLCJSZXF1ZXN0IiwiX2hlYWRlciIsInRva2VuIiwiX2Jhc2VVcmwiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJ3eCIsImdldFN0b3JhZ2VTeW5jIiwicGFyYW1zIiwidXJsIiwibWV0aG9kIiwiaGVhZGVyIiwiZGF0YSIsInRoZW4iLCJyZXMiLCJiYXNlVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUztBQUNiQyxPQUFLLEtBRFE7QUFFYkMsUUFBTSxNQUZPO0FBR2JDLE9BQUssS0FIUTtBQUliQyxVQUFRO0FBSkssQ0FBZjs7SUFNTUMsTztBQVdKLHFCQUFjO0FBQUE7O0FBQUEsU0FWZEMsT0FVYyxHQVZKO0FBQ1JDLGFBQU87QUFEQyxLQVVJO0FBQUEsU0FQZEMsUUFPYyxHQVBILElBT0c7QUFBQSxTQUxkQyxZQUtjLEdBTEM7QUFDYkMsZUFBUyxJQURJO0FBRWJDLGdCQUFVO0FBRkcsS0FLRDs7QUFDWixRQUFNSixRQUFRSyxHQUFHQyxjQUFILENBQWtCLE9BQWxCLENBQWQ7QUFDQSxRQUFJTixLQUFKLEVBQVc7QUFDVCxXQUFLRCxPQUFMLENBQWFDLEtBQWIsR0FBcUJBLEtBQXJCO0FBQ0Q7QUFDRjs7Ozs0QkFFT08sTSxFQUFRO0FBQUE7O0FBQUEsaUJBQ3dCLEtBQUtMLFlBQUwsQ0FBa0JDLE9BQWxCLEdBQTRCLEtBQUtELFlBQUwsQ0FBa0JDLE9BQWxCLENBQTBCSSxNQUExQixDQUE1QixHQUFnRUEsTUFEeEY7QUFBQSxVQUNOQyxHQURNLFFBQ05BLEdBRE07QUFBQSxVQUNEQyxNQURDLFFBQ0RBLE1BREM7QUFBQSxVQUNPQyxNQURQLFFBQ09BLE1BRFA7QUFBQSxVQUNlQyxJQURmLFFBQ2VBLElBRGY7O0FBR2QsYUFBTyxlQUFLUixPQUFMLENBQWE7QUFDbEJLLGFBQUssQ0FBQyxLQUFLUCxRQUFMLElBQWlCLEVBQWxCLElBQXdCTyxHQURYO0FBRWxCQyxnQkFBUUEsVUFBVWhCLE9BQU9DLEdBRlA7QUFHbEJpQixjQUFNQSxJQUhZO0FBSWxCRCw2QkFDSyxLQUFLWCxPQURWLEVBRUtXLE1BRkw7QUFKa0IsT0FBYixFQVFKRSxJQVJJLENBUUM7QUFBQSxlQUFPLE1BQUtWLFlBQUwsQ0FBa0JFLFFBQWxCLEdBQTZCLE1BQUtGLFlBQUwsQ0FBa0JFLFFBQWxCLENBQTJCUyxHQUEzQixDQUE3QixHQUErREEsR0FBdEU7QUFBQSxPQVJELENBQVA7QUFTRDs7O3dCQUVHTCxHLEVBQUtHLEksRUFBTUQsTSxFQUFRO0FBQ3JCLGFBQU8sS0FBS1AsT0FBTCxDQUFhLEVBQUVLLFFBQUYsRUFBT0MsUUFBUWhCLE9BQU9DLEdBQXRCLEVBQTJCZ0IsY0FBM0IsRUFBbUNDLFVBQW5DLEVBQWIsQ0FBUDtBQUNEOzs7eUJBQ0lILEcsRUFBS0csSSxFQUFNRCxNLEVBQVE7QUFDdEIsYUFBTyxLQUFLUCxPQUFMLENBQWEsRUFBRUssUUFBRixFQUFPQyxRQUFRaEIsT0FBT0UsSUFBdEIsRUFBNEJlLGNBQTVCLEVBQW9DQyxVQUFwQyxFQUFiLENBQVA7QUFDRDs7O3dCQUNHSCxHLEVBQUtHLEksRUFBTUQsTSxFQUFRO0FBQ3JCLGFBQU8sS0FBS1AsT0FBTCxDQUFhLEVBQUVLLFFBQUYsRUFBT0MsUUFBUWhCLE9BQU9HLEdBQXRCLEVBQTJCYyxjQUEzQixFQUFtQ0MsVUFBbkMsRUFBYixDQUFQO0FBQ0Q7Ozs0QkFDTUgsRyxFQUFLRyxJLEVBQU1ELE0sRUFBUTtBQUN4QixhQUFPLEtBQUtQLE9BQUwsQ0FBYSxFQUFFSyxRQUFGLEVBQU9DLFFBQVFoQixPQUFPSSxNQUF0QixFQUE4QmEsY0FBOUIsRUFBc0NDLFVBQXRDLEVBQWIsQ0FBUDtBQUNEOzs7MEJBRUtYLE0sRUFBTztBQUNYLFdBQUtELE9BQUwsQ0FBYUMsS0FBYixHQUFxQkEsTUFBckI7QUFDQSxhQUFPLElBQVA7QUFDRDs7OzJCQUNNVSxPLEVBQVE7QUFDYixXQUFLWCxPQUFMLEdBQWVXLE9BQWY7QUFDQSxhQUFPLElBQVA7QUFDRDs7OzRCQUNPSSxRLEVBQVM7QUFDZixXQUFLYixRQUFMLEdBQWdCYSxRQUFoQjtBQUNBLGFBQU8sSUFBUDtBQUNEOzs7Z0NBQ1dYLE8sRUFBU0MsUSxFQUFVO0FBQzdCLFVBQUksT0FBT0QsT0FBUCxLQUFtQixVQUF2QixFQUFtQztBQUNqQyxhQUFLRCxZQUFMLENBQWtCQyxPQUFsQixHQUE0QkEsT0FBNUI7QUFDRDtBQUNELFVBQUksT0FBT0EsT0FBUCxLQUFtQixVQUF2QixFQUFtQztBQUNqQyxhQUFLRCxZQUFMLENBQWtCRSxRQUFsQixHQUE2QkEsUUFBN0I7QUFDRDtBQUNELGFBQU8sSUFBUDtBQUNEOzs7Ozs7a0JBRVksSUFBSU4sT0FBSixFIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuY29uc3QgTUVUSE9EID0ge1xuICBHRVQ6ICdHRVQnLFxuICBQT1NUOiAnUE9TVCcsXG4gIFBVVDogJ1BVVCcsXG4gIERFTEVURTogJ0RFTEVURSdcbn1cbmNsYXNzIFJlcXVlc3Qge1xuICBfaGVhZGVyID0ge1xuICAgIHRva2VuOiBudWxsXG4gIH1cbiAgX2Jhc2VVcmwgPSBudWxsXG5cbiAgaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG51bGwsXG4gICAgcmVzcG9uc2U6IG51bGxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJylcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIHRoaXMuX2hlYWRlci50b2tlbiA9IHRva2VuXG4gICAgfVxuICB9XG5cbiAgcmVxdWVzdChwYXJhbXMpIHtcbiAgICBjb25zdCB7IHVybCwgbWV0aG9kLCBoZWFkZXIsIGRhdGEgfSA9IHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QgPyB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0KHBhcmFtcykgOiBwYXJhbXNcblxuICAgIHJldHVybiB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAodGhpcy5fYmFzZVVybCB8fCAnJykgKyB1cmwsXG4gICAgICBtZXRob2Q6IG1ldGhvZCB8fCBNRVRIT0QuR0VULFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICAuLi50aGlzLl9oZWFkZXIsXG4gICAgICAgIC4uLmhlYWRlclxuICAgICAgfVxuICAgIH0pLnRoZW4ocmVzID0+IHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlID8gdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UocmVzKSA6IHJlcylcbiAgfVxuXG4gIGdldCh1cmwsIGRhdGEsIGhlYWRlcikge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoeyB1cmwsIG1ldGhvZDogTUVUSE9ELkdFVCwgaGVhZGVyLCBkYXRhIH0pXG4gIH1cbiAgcG9zdCh1cmwsIGRhdGEsIGhlYWRlcikge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoeyB1cmwsIG1ldGhvZDogTUVUSE9ELlBPU1QsIGhlYWRlciwgZGF0YSB9KVxuICB9XG4gIHB1dCh1cmwsIGRhdGEsIGhlYWRlcikge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoeyB1cmwsIG1ldGhvZDogTUVUSE9ELlBVVCwgaGVhZGVyLCBkYXRhIH0pXG4gIH1cbiAgZGVsZXRlKHVybCwgZGF0YSwgaGVhZGVyKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7IHVybCwgbWV0aG9kOiBNRVRIT0QuREVMRVRFLCBoZWFkZXIsIGRhdGEgfSlcbiAgfVxuXG4gIHRva2VuKHRva2VuKSB7XG4gICAgdGhpcy5faGVhZGVyLnRva2VuID0gdG9rZW5cbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIGhlYWRlcihoZWFkZXIpIHtcbiAgICB0aGlzLl9oZWFkZXIgPSBoZWFkZXJcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIGJhc2VVcmwoYmFzZVVybCkge1xuICAgIHRoaXMuX2Jhc2VVcmwgPSBiYXNlVXJsXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICBpbnRlcmNlcHRvcihyZXF1ZXN0LCByZXNwb25zZSkge1xuICAgIGlmICh0eXBlb2YgcmVxdWVzdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdCA9IHJlcXVlc3RcbiAgICB9XG4gICAgaWYgKHR5cGVvZiByZXF1ZXN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZSA9IHJlc3BvbnNlXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBSZXF1ZXN0KClcbiJdfQ==