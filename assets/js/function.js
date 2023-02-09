const web_name = "Wordganize";
const web_desc = $(".web_des").text();
const about_us = "";
const word_res = [];

document.getElementById("web_name").innerHTML = web_name;
$(".web_name_class").text(web_name);

$(document).ready(function () {
  function default_page_status() {
    $("#starter").hide();
    $("#word_res").hide();
    $("#result_list").hide();
    $("#process_loader").hide();
    $("#how_it_works").hide();
    $("#about_page").hide();

    $("#switch_mode_icon_dark").hide();
    $("#switch_mode_icon_light").show();

    
    if (word_res.length > 0) {
      $("#word_result_list").show();
    }else{
      $("#word_result_list").hide();
    }
  }

  function default_page() {
    default_page_status();
    $("#starter").show();
  }
  default_page();

  // SWITCH MODE ICON
  $("#switch_mode_icon_dark").click(function () {
    $("#switch_mode_icon_dark").hide();
    $("#switch_mode_icon_light").show();
  });

  $("#switch_mode_icon_light").click(function () {
    $("#switch_mode_icon_light").hide();
    $("#switch_mode_icon_dark").show();
  });

  // HOME PAGE CLICK
  $(".logo_img").click(function () {
    default_page_status();
    $("#starter").slideDown();
  });

  // GET STARTED
  $(".get-started").click(function () {
    default_page_status();
    $("#word_res").slideDown();
    $("#process_form").slideDown();
    $("#start_again").addClass("d-none");
  });

  // GET STARTED AGAIN
  $("#start_again").click(function () {
    default_page_status();
    $("#word_res").slideDown();
    $("#process_form").slideDown();
    $("#start_again").addClass("d-none");
    $("#wordInput").addClass("input_class");
    $("#wordInput").removeClass("input_val_class");
    $("#wordInput").val("Type in your word...");
  });

  // HOW IT WORKS
  $(".how_works").click(function () {
    default_page_status();
    $("#how_it_works").slideDown();
  });

  // ABOUT PAGE
  $(".about_link").click(function () {
    default_page_status();
    $("#about_page").slideDown();
  });

  // WORD INPUT PROCESS
  $("#wordInput").focus(function () {
    $(this).val("");
    if ($("#process_loader").show()) {
      $("#process_loader").hide();
      $("#process_word").removeClass("disabled");
      $("#process_word_text").show();
    }
    if ($("#result_list").show()) {
      $("#result_list").hide();
    }
  });

  $("#process_word").click(function () {
    let process_word;
    let input_word = $("#wordInput").val();

    if (input_word == "Type in your word...") {
      $("#wordInput").removeClass("input_class");
      $("#wordInput").addClass("input_val_class");
      $("#wordInput").val("Type in your word...");
      process_word = false;
    } else if (input_word == "") {
      $("#wordInput").removeClass("input_class");
      $("#wordInput").addClass("input_val_class");
      $("#wordInput").val("Type in your word...");
      process_word = false;
    } else {
      process_word = true;
    }

    if (process_word == true) {
      const get_words = $("#wordInput").val();
      const word_list = get_words.split(" ");

      word_res.push(get_words);

      let reslt = "";
      word_list.forEach(myFunction);

      function myFunction(value) {
        reslt +=
          "<div class='d-flex text-muted pt-3'><p class='pb-3 mb-0 small lh-sm border-bottom'><strong class='d-block text-gray-dark'>";
        reslt += value;
        reslt +=
          "</strong>Some representative placeholder content, with some information about this user. Imagine this being some sort of status update, perhaps?  </p></div>";
      }
      $("#process_form").hide();
      $("#process_loader").show();
      // $("#process_word_text").hide();
      // $("#result_list").slideToggle("slow");

      document.getElementById("result_list_here").innerHTML = reslt;

      $("#result_list").slideDown();
      $("#start_again").removeClass("d-none");

      // word result listing
      let wreslt = "";
      word_res.forEach(myFunction_list);

      function myFunction_list(value) {
        wreslt +=
          "<div class='col-sm-6 col-lg-3 mb-4' id='results_list_text'><div class='card p-3'><figure class='mb-0'><p class='text_results'>";
        wreslt += value;
        wreslt +=
          "</p><figcaption class='blockquote-footer mb-0 text_wordganize'><cite title='Source Title'>anonymous</cite></figcaption></figure></div></div>";
      }
      document.getElementById((id = "word_result_listing")).innerHTML = wreslt;
    }
    
  });

  $("#results_list_text").click(function(){
    let process_word=true;
    let input_word = $(this).text();

    if (process_word == true) {
      const get_words = input_word;
      const word_list = get_words.split(" ");
      word_res.push(get_words);
      let reslt = "";
      word_list.forEach(myFunction);
      function myFunction(value) {
        reslt +=
          "<div class='d-flex text-muted pt-3'><p class='pb-3 mb-0 small lh-sm border-bottom'><strong class='d-block text-gray-dark'>";
        reslt += value;
        reslt +=
          "</strong>Some representative placeholder content, with some information about this user. Imagine this being some sort of status update, perhaps?  </p></div>";
      }
      $("#process_form").hide();
      $("#process_loader").show();
      // $("#process_word_text").hide();
      // $("#result_list").slideToggle("slow");

      document.getElementById("result_list_here").innerHTML = reslt;

      $("#result_list").slideDown();
      $("#start_again").removeClass("d-none");

      // word result listing
      let wreslt = "";
      word_res.forEach(myFunction_list);

      function myFunction_list(value) {
        wreslt +=
          "<div class='col-sm-6 col-lg-3 mb-4'><div class='card p-3'><p class='text_results'><a href='#' id='results_list_text'>";
        wreslt += value;
        wreslt +=
          "</a></p><figcaption class='blockquote-footer mb-0 text_wordganize'><cite title='Source Title'>anonymous</cite></figcaption></div></div>";
      }
      document.getElementById((id = "word_result_listing")).innerHTML = wreslt;
    }

  })



});

const message = [
  "Wordganize is a cutting-edge word organization platform that uses NLP, ML and AI to provide accurate word meanings, synonyms, antonyms, and related words. Perfect for students, writers and word enthusiasts. Start exploring the world of words now.",
];
const speed = 100;
let textPosition = 0;
function typewriter() {
  document.querySelector("#demo_wordganize").innerHTML =
    message[0].substring(0, textPosition) + "<span>\u25AE</span>";
  if (textPosition++ != message[0].length) setTimeout(typewriter, speed);
}
window.addEventListener("load", typewriter);

// How it works content
