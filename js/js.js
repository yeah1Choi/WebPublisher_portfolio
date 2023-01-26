$(function () {
  //전체 스크롤 이벤트
  let ht = $(window).height();
  $("section").height(ht);
  $(window).resize(function () {
    let ht = $(window).height();
    $("section").height(ht);
  });
  $(window).scroll(function () {
    var ht = $(window).height();
    var t = $(window).scrollTop();
    if (t >= ht * 0 && t < ht * 1) {
      $("#nav li").removeClass("on");
      $("#nav li").eq(0).addClass("on");
    } else if (t >= ht * 1 && t < ht * 2) {
      $("#nav li").removeClass("on");
      $("#nav li").eq(1).addClass("on");
    } else if (t >= ht * 2 && t < ht * 3) {
      $("#nav li").removeClass("on");
      $("#nav li").eq(2).addClass("on");
    } else if (t >= ht * 3 && t < ht * 4) {
      $("#nav li").removeClass("on");
      $("#nav li").eq(2).addClass("on");
    } else if (t >= ht * 4 && t < ht * 5) {
      $("#nav li").removeClass("on");
      $("#nav li").eq(3).addClass("on");
    } else if (t >= ht * 5 && t < ht * 6) {
      $("#nav li").removeClass("on");
      $("#nav li").eq(4).addClass("on");
    }
  });
  $("section").on("mousewheel", function (event, delta) {
    console.log(delta);
    if (delta > 0) {
      if ($(this).next() != undefined) {
        try {
          var prev = $(this).prev().offset().top;
          console.log("prev : " + prev);
          $("html,body").stop().animate({ scrollTop: prev }, 1400);
        } catch (e) {}
      }
    } else if (delta < 0) {
      var next = $(this).next().offset().top;
      $("html, body").stop().animate({ scrollTop: next }, 1400);
    }
  });
  $("#nav li").click(function () {
    var num = $(this).index();
    var nowTop = num * ht;
    console.log("nowTop : " + nowTop);
    $("html, body").stop().animate({ scrollTop: nowTop }, 1000);
  });
});
