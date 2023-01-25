$(function () {
  //logo 클릭 상단이동
  $(".logo").click(function () {
    $("html").scrollTop(0);
  });

  //메뉴버튼
  $(".btn").click(function () {
    $(".btn > div").toggleClass("active");
    $(".menubox").toggleClass("on");
  });

  //서브메뉴
  $(".sub").css("display", "none");
  $(".lnb a,.lnb").hover(
    function () {
      $(this).find(".sub").stop().slideDown(500);
      $(this).addClass("on");
    },
    function () {
      $(this).find(".sub").stop().slideUp(500);
      $(this).removeClass("on");
    }
  );

  //스크롤
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
      $(".scroll li").removeClass("on");
      $(".scroll li").eq(0).addClass("on");
    } else if (t >= ht * 1 && t < ht * 2) {
      $(".scroll li").removeClass("on");
      $(".scroll li").eq(1).addClass("on");
      $("#about .text").css("bottom", "2%");
    } else if (t >= ht * 2 && t < ht * 3) {
      $(".scroll li").removeClass("on");
      $(".scroll li").eq(2).addClass("on");
    } else if (t >= ht * 3 && t < ht * 4) {
      $(".scroll li").removeClass("on");
      $(".scroll li").eq(3).addClass("on");
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
  $(".scroll li").click(function () {
    var num = $(this).index();
    var nowTop = num * ht;
    console.log("nowTop : " + nowTop);
    $("html, body").stop().animate({ scrollTop: nowTop }, 1000);
  });
  $(window).scroll(function () {
    let scrtop = $(this).scrollTop();
    console.log(scrtop);
    if (scrtop >= 2500) {
      $("body").css("overflow", "auto");
    } else {
      $("body").css("overflow", "hidden");
    }
  });

  //#about 배경슬라이드 bxslider
  $(".slide").bxSlider({
    mode: "fade",
    moveSlides: 1,
    slideMargin: 0,
    infiniteLoop: true,
    minSlides: 1,
    maxSlides: 1,
    speed: 500,
    pause: 4000,
    auto: true,
    controls: false,
    pager: false,
    loader: false,
  });
  // $(document).ready(function () {
  //   var slider = $(".bxslider").bxSlider();

  //   var mql = window.matchMedia("screen and (max-width: 768px)");
  //   mql.addListener(function (e) {
  //     if (!e.matches) {
  //       slider.reloadSlider();
  //     }
  //   });
  // });
});
