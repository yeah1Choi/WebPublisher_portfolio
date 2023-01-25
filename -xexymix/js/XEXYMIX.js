//메뉴 스크롤시 상단 픽스
// window.onscroll = function () {
//   let ht = document.documentElement.scrollTop;
//   if (ht > 100) {
//     document.getElementsByName(".gnb").addClass(".fixtop");
//   }
// };

$(function () {
  $(window).on;
  // 메인이미지 슬라이드
  $(".lnb").css("display", "none");
  $(".gnb li,.lnb").hover(
    function () {
      $(".lnb").stop().slideDown(1000);
    },
    function () {
      $(".lnb").stop().slideUp(1000);
    }
  );
  $(".lnb>li").hover(
    function () {
      let i = $(this).index();
      console.log(i);
      $(".gnb li a").removeClass("on");
      $(".gnb li").eq(i).find("a").addClass("on");
    },
    function () {
      $(".gnb li a").removeClass("on");
    }
  );
  $(".bxslider").bxSlider({
    mode: "fade",
    moveSlides: 1,
    slideMargin: 0,
    infiniteLoop: true,
    // slideWidth: 778,
    minSlides: 1,
    maxSlides: 1,
    speed: 500,
    auto: true,
    autoHover: true,
    pager: false,
  });
  // 메인슬라이드의 버튼
  $(".mbutton").hover(
    function () {
      $(this).animate({ marginLeft: "2.7px", marginTop: "3px" }, 100);
    },
    function () {
      $(this).animate({ marginLeft: "0px", marginTop: "0px" }, 100);
    }
  );
  // !! 클릭하면 신상 서브 페이지로 넘어가기
  // 베스트메뉴 이미지 후버
  $("div.bg").hover(
    function () {
      $(this).addClass("on");
    },
    function () {
      $("div.bg").removeClass("on");
    }
  );
  //배너 슬라이드
  $(".loop").owlCarousel({
    center: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    loop: true,
    margin: 10,
    responsive: {
      500: {
        items: 2,
      },
    },
  });
  //검색 input
  let wd = $("#search").css("width", "0");
  $(".head_right label").click(function () {
    $("#search").animate({ width: "200px", fontSize: "16px" });
  });
});
