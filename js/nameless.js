let clicked = false;

    $("main").click(function () {
      if (!clicked) {
        alert("in the name(less)core");
        alert("planetary beings overthrow identity");
        alert("in one mass of water");
        clicked = true;
        // don’t redirect yet, wait for next click
      } else {
        $("body").css({
          "transition": "opacity 1s ease",
          "opacity": "0.5"
        });    // now redirect after fade (optional)
        setTimeout(() => {
          window.location.href = "water.html";
        }, 500);
      }
    });