 $("#i > a > div").on("mouseenter", function () {
      const text = $(this).find("h1").text();
      $("#txt span").html(text);
    }).on("mouseleave", function () {
      $("#txt span").html("");
    });