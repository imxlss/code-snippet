let googleMap = {
  show: function() {
    console.log('开始渲染谷歌地图');
  }
};

let baiduMap = {
  show: function() {
    console.log('开始渲染百度地图');
  }
};

let renderMap = function(map) {
  if (map.show instanceof Function) {
    map.show();
  }
};

renderMap(googleMap);
renderMap(baiduMap);

// 这段程序得以顺利运行的关键是googleMap 和 baiduMap 提供了一直的show方法。
