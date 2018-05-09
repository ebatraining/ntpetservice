jQuery(document).ready(function($){
  // 地図表示用メソッド
  function map_initialize() {
    // 地図の座標を設定
    var latlng = new google.maps.LatLng(35.7313409,140.0153023,);
    // 地図の設定
    var map = new google.maps.Map(
      document.getElementById("g_map"),
      {
        zoom: 17,  // 地図の拡大率
        center: latlng, // 地図の中心座標
        scrollwheel: false,  // マウスホイールでの拡縮を禁止
        styles: [{
            stylers: [
                {
                    hue: '#e0ffff' // 色相
                }, {
                    saturation: 500 // 彩度
                }, {
                    lightness: 0 // 明度
                }, {
                    gamma: 0.5 // ガンマ
                }
            ]
        }]
      }
    );

   // マーカー画像の設定
   var markerImg = {
      url: './images/ggmap_icon.png'// 画像のパスは絶対パスかhtmlから見た相対パスとする
    };
   // マーカーの設定
   var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        icon: markerImg,
        animation: google.maps.Animation.BOUNCE
   });

	  google.maps.event.addDomListener(window, "resize", function() {
		var center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center);
	});
  }

  // 地図表示用メソッドの呼び出し
  map_initialize();
 });
