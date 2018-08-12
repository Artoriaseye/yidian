'use strict';

var _require = require('./../common/helper.js'),
    extractComponentId = _require.extractComponentId;

var Tab = {
  _handleZanTabChange: function _handleZanTabChange(e) {
    var componentId = extractComponentId(e);
    var dataset = e.currentTarget.dataset;
    var selectedId = dataset.itemId;
    var data = { componentId: componentId, selectedId: selectedId };

    console.info('[zan:tab:change]', data);
    if (this.handleZanTabChange) {
      this.handleZanTabChange(data);
    } else {
      console.warn('页面缺少 handleZanTabChange 回调函数');
    }
  }
};

module.exports = Tab;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJleHRyYWN0Q29tcG9uZW50SWQiLCJUYWIiLCJfaGFuZGxlWmFuVGFiQ2hhbmdlIiwiZSIsImNvbXBvbmVudElkIiwiZGF0YXNldCIsImN1cnJlbnRUYXJnZXQiLCJzZWxlY3RlZElkIiwiaXRlbUlkIiwiZGF0YSIsImNvbnNvbGUiLCJpbmZvIiwiaGFuZGxlWmFuVGFiQ2hhbmdlIiwid2FybiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O2VBQStCQSxRQUFRLGtCQUFSLEM7SUFBdkJDLGtCLFlBQUFBLGtCOztBQUVSLElBQUlDLE1BQU07QUFDUkMscUJBRFEsK0JBQ1lDLENBRFosRUFDZTtBQUNyQixRQUFNQyxjQUFjSixtQkFBbUJHLENBQW5CLENBQXBCO0FBQ0EsUUFBTUUsVUFBVUYsRUFBRUcsYUFBRixDQUFnQkQsT0FBaEM7QUFDQSxRQUFNRSxhQUFhRixRQUFRRyxNQUEzQjtBQUNBLFFBQU1DLE9BQU8sRUFBRUwsd0JBQUYsRUFBZUcsc0JBQWYsRUFBYjs7QUFFQUcsWUFBUUMsSUFBUixDQUFhLGtCQUFiLEVBQWlDRixJQUFqQztBQUNBLFFBQUksS0FBS0csa0JBQVQsRUFBNkI7QUFDM0IsV0FBS0Esa0JBQUwsQ0FBd0JILElBQXhCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xDLGNBQVFHLElBQVIsQ0FBYSw4QkFBYjtBQUNEO0FBQ0Y7QUFiTyxDQUFWOztBQWdCQUMsT0FBT0MsT0FBUCxHQUFpQmQsR0FBakIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGV4dHJhY3RDb21wb25lbnRJZCB9ID0gcmVxdWlyZSgnLi4vY29tbW9uL2hlbHBlcicpO1xuXG52YXIgVGFiID0ge1xuICBfaGFuZGxlWmFuVGFiQ2hhbmdlKGUpIHtcbiAgICBjb25zdCBjb21wb25lbnRJZCA9IGV4dHJhY3RDb21wb25lbnRJZChlKTtcbiAgICBjb25zdCBkYXRhc2V0ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgY29uc3Qgc2VsZWN0ZWRJZCA9IGRhdGFzZXQuaXRlbUlkO1xuICAgIGNvbnN0IGRhdGEgPSB7IGNvbXBvbmVudElkLCBzZWxlY3RlZElkIH07XG5cbiAgICBjb25zb2xlLmluZm8oJ1t6YW46dGFiOmNoYW5nZV0nLCBkYXRhKTtcbiAgICBpZiAodGhpcy5oYW5kbGVaYW5UYWJDaGFuZ2UpIHtcbiAgICAgIHRoaXMuaGFuZGxlWmFuVGFiQ2hhbmdlKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oJ+mhtemdoue8uuWwkSBoYW5kbGVaYW5UYWJDaGFuZ2Ug5Zue6LCD5Ye95pWwJyk7XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRhYjtcbiJdfQ==