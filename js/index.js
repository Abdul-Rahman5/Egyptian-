//                  start header
function openNav() {
  if ($("#mySidenav").width() == "250") {
  closeNav();
  } else {
    $("#mySidenav").width("250px");
    $("#a").width("250px");
      $("a").fadeIn(1000);

    $("#main").css("margin-left", "250px");
  }
}


function closeNav() {
  $("#mySidenav").width("0px");
      $("a").fadeOut(5);
  $("#main").css("margin-left", "0px");
}
$("a").click(function () {
  let sectionId = $(this).attr("href");

  if ($(sectionId).offset() != undefined) {
    let positionOfSection = $(sectionId).offset().top;

    $("html , body").animate({ scrollTop: positionOfSection},50);
  }
});

$(".open").click(function () {
  openNav();
});
$(".closebtn").click(function () {
  closeNav();
});

//                  end header

//                  start Singer

$(document).ready(function () {
  $("#singers div:first").css("display", "block");
  $("#singers h3").click(function () {
    $(this).next().slideToggle(00);
    $("#singers div").not($(this).next()).slideUp(500);
  });
});

//                  End Singer
//                  start joun
let contDwonData = new Date("Dec 28 ,2022 23:59:59").getTime();
let continter = setInterval(() => {
  let dataNow = new Date().getTime();
  let dateDiff = contDwonData - dataNow;
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".Day").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
  if (dateDiff < 0) {
    clearInterval(continter);
  }
}, 1000);
//                  End joun

//                  start footer
// let textarea = document.querySelector("textarea");
// let rengLitter = document.querySelector(".rengLitter");
// textarea.addEventListener("input", function () {
//  let ruslt = rengLitter.innerHTML = 100 - textarea.value.length;
// // );
//   if (rengLitter.innerHTML == 0) {
//     // $("rengLitter").html(<span>your available character finished</span>);
//     window.event.preventDefault
//     $(".rengLitter").text("your available character finished");
//   }
// });

$(function () {
  let max = 100;
  $("textarea").keyup(function () {
    let length = $(this).val().length;
    let character = max - length;
    if (character <= 0) {
      $("#rengLitter").text("your available character finished");
    } else {
      $("#rengLitter").text(character);
    }
  });
});


//    your available character finished              End footer




