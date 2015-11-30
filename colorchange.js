$(document).ready(function() {
  $("div.block").hover(function() {
    if($(this).attr("class") == "block") {
      $(this).addClass("switch1");
    } else if ($(this).attr("class") == "block switch1") {
      $(this).addClass("switch2");
    } else if ($(this).attr("class") == "block switch1 switch2") {
      $(this).addClass("switch3");
    } else {
      $(this).removeClass("switch1");
      $(this).removeClass("switch2");
      $(this).removeClass("switch3");
    }
  });
});
