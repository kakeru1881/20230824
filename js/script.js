$(function () {

  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });
});

// ポップアップを初期化する
$(document).ready(function () {
  $('.works-item').magnificPopup({
    type: 'image', // 画像を表示
    gallery: {
      enabled: true // ギャラリーモード有効化（画像間の切り替えができる）
    }
  });
});

$(document).ready(function () {
  $(".mv").bgswitcher({
    images: [
      "img/img0.jpg",
      "img/img1.jpg",
      "img/img2.jpg",
      // "img/img4.jpg",
    ],
    effect: "fade",
    easing: "swing",
    interval: 5000,
    loop: true
  });
});