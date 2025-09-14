$(".i").on("mouseenter", function () {
  const lines = $(this).find("h1").map(function () {
    return $(this).text();
  }).get().join("<br>");
  
  $("#txt span").html(lines);
}).on("mouseleave", function () {
  $("#txt span").html("");
});
