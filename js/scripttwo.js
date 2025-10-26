const images = [

  "assets/img/ran/a4.png",
  // "a5.png", replace w another nature scene
  "assets/img/ran/a6.png",
  "assets/img/ran/a7.png",
  "assets/img/ran/a8.png",
  "assets/img/ran/a9.png",
  "assets/img/ran/a13.png",
  "assets/img/ran/a14.png",
  "assets/img/ran/a15.png",
  "assets/img/ran/a16.png",
  "assets/img/ran/a17.png",
  "assets/img/ran/a18.png",
  "assets/img/ran/a19.png",
  "assets/img/ran/a20.png",
  // "assets/img/ran/a22.png",
  "assets/img/ran/a23.png",
    "assets/img/ran/a24.png",

      "assets/img/ran/a25.png",
  "assets/img/ran/a26.png",



];

const container = document.getElementById("container");

function createRandomImage() {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  const img = document.createElement("img");
  const padding = 5;
  img.src = randomImage;
  img.style.position = "absolute";
  img.style.opacity = 0;
  img.style.transition = "opacity 0.5s ease-in-out";

  //random rotation
  const randomAngle = Math.random()

  // const randomAngle = Math.random() * 10 - 2; // -30 to +30 degrees
  img.style.transform = `rotate(${randomAngle}deg)`;


  // Wait until image is loaded to get natural dimensions
  img.onload = () => {
    const aspectRatio = img.naturalWidth / img.naturalHeight;

    // Random width between 100 and 700
    const randomWidth = Math.random() * 700 + 400;  // 200–900px wide
    const randomHeight = randomWidth / aspectRatio; // keep aspect ratio


    img.style.width = `${randomWidth}px`;
    img.style.height = `${randomHeight}px`;

    // Position so the full image fits within viewport
    const maxX = window.innerWidth - (randomWidth - padding);
    const maxY = window.innerHeight - (randomHeight - padding);
    const jitter = 80; // px of wiggle room
    img.style.left = `${Math.max(0, Math.random() * maxX + (Math.random() - 0.5) * jitter)}px`;
    img.style.top = `${Math.max(0, Math.random() * maxY + (Math.random() - 0.5) * jitter)}px`;
    document.getElementById("container").appendChild(img);

    ///draggable
    $(img).draggable();

    img.style.willChange = "opacity, transform";

    // Fade in
    img.style.opacity = 1;

    // Remove after 1 minute with fade out
    setTimeout(() => {
      img.style.opacity = 0;
      setTimeout(() => img.remove(), 5000);
    }, 6000);
  };

  // Schedule next image creation at random interval (1-5 sec)
  setTimeout(createRandomImage, Math.random() * 1000 + 1000);
}

createRandomImage();

$(function () {
  // On hovering anywhere on the page
  $("#container").on("mousemove", function () {
    $(".i").each(function () {
      let label = $(this).data("label") || "travelling through sentiments, closures, gaps, breath. in absence, there is a reckless sound. ";
      $("#txt span").html(label);
      //  $('#txt').css('color', 'rgba(0, 0, 0, 1)');

    });
  });

  // Optional: reset when mouse leaves page
  $("#container").on("mouseleave", function () {
    $("#txt span").html("");
  });
});



$("#container").on("click", function () {
  $(this).toggleClass("toggled");

  if ($(this).hasClass("toggled")) {
    $(".i").each(function () {
      let label = $(this).data("label") || "when we speak soft sounds read";
      $("#pre-txt span").html(label);
    });

    $('#txt').css('color', 'transparent');
    $('#pre-txt').css('background-color', 'white');
    $('#pre-txt').css('background-image', 'url("assets/img/softsoundss.png")');
    $('#pre-txt').css('background-repeat', 'no-repeat');
    $('#pre-txt').css(' background-size', 'cover');





  } else {
    $('#txt').css('color', '');
    $('#pre-txt').css('background-color', '');
    $('#pre-txt').css('background-image', '');
    $('#pre-txt').css('background-repeat', '');
    $('#pre-txt').css(' background-size', '');
    $('#pre-txt span').html('');
  }
});


