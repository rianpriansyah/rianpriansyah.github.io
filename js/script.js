// event pada saat link di klik
$(".page-scroll").on("click", function (e) {
  // ambil isi href
  var tujuan = $(this).attr("href");
  // tangkap elemen yang bersangkutan
  var elemenTujuan = $(tujuan);

  // pindahkan scroll
  $("html, body").animate({
    scrollTop: elemenTujuan.offset().top - 50,
  });

  e.preventDefault();
});

// parallax
// about
$(window).on("load", function () {
  $(".pkiri").addClass("pMuncul");
  $(".pkanan").addClass("pMuncul");
});

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  //   jumbotron
  $(".jumbotron img").css({
    transform: "translate(0px, " + wScroll / 4 + "%)",
  });

  $(".jumbotron h1").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });

  $(".jumbotron p").css({
    transform: "translate(0px, " + wScroll / 1.2 + "%)",
  });

  //   projects
  if (wScroll > $(".projects").offset().top - 200) {
    $(".projects .card").each(function (i) {
      setTimeout(function () {
        $(".projects .card").eq(i).addClass("hadir");
      }, 300 * (i * 1));
    });
  }
});
