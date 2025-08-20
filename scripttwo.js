const images = [
  "https://cdn.glitch.global/e573fc2d-d65d-49bb-9162-63429baf793c/the%20dude.png?v=1747543170509",
  
  /// new shit
  
  "https://cdn.glitch.global/e573fc2d-d65d-49bb-9162-63429baf793c/another.png?v=1747545046536",
  "https://cdn.glitch.global/e573fc2d-d65d-49bb-9162-63429baf793c/sssss.png?v=1747545086342",
  "https://cdn.glitch.global/e573fc2d-d65d-49bb-9162-63429baf793c/rug%20ai.png?v=1747545088271",
  "https://cdn.glitch.global/e573fc2d-d65d-49bb-9162-63429baf793c/sss.png?v=1747545089867",
  "https://cdn.glitch.global/e573fc2d-d65d-49bb-9162-63429baf793c/borders.png?v=1747545092545",
  "https://cdn.glitch.global/e573fc2d-d65d-49bb-9162-63429baf793c/aaaaaaa.png?v=1747545095364",
  "https://cdn.glitch.global/e573fc2d-d65d-49bb-9162-63429baf793c/ssss.png?v=1747545102295",
  "https://cdn.glitch.global/e573fc2d-d65d-49bb-9162-63429baf793c/ss.png?v=1747545103405",
  "https://cdn.glitch.global/e573fc2d-d65d-49bb-9162-63429baf793c/sass.png?v=1747545105467",
  "https://cdn.glitch.global/e573fc2d-d65d-49bb-9162-63429baf793c/rajaji.png?v=1747545106726",
  ///
  
  "https://cdn.glitch.global/e573fc2d-d65d-49bb-9162-63429baf793c/legs.png?v=1747550534284",
  "https://cdn.glitch.global/e573fc2d-d65d-49bb-9162-63429baf793c/ll.png?v=1747550531346",
  "https://cdn.glitch.global/e573fc2d-d65d-49bb-9162-63429baf793c/lllll.png?v=1747550530215"
];

const container = document.getElementById("container");

function createRandomImage() {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  const img = document.createElement("img");
  img.src = randomImage;
  img.style.position = "absolute";
  img.style.opacity = 0;
  img.style.transition = "opacity 1s ease";
  
  //random rotation
  const randomAngle = Math.random() * 10 - 5; // -30 to +30 degrees
img.style.transform = `rotate(${randomAngle}deg)`;


  // Wait until image is loaded to get natural dimensions
  img.onload = () => {
    const aspectRatio = img.naturalWidth / img.naturalHeight;

    // Random width between 100 and 700
    const randomWidth = Math.random() * 600 + 100;
    const randomHeight = randomWidth / aspectRatio;

    img.style.width = `${randomWidth}px`;
    img.style.height = `${randomHeight}px`;

    // Position so the full image fits within viewport
    const maxX = window.innerWidth - randomWidth;
    const maxY = window.innerHeight - randomHeight;
    img.style.left = `${Math.random() * maxX}px`;
    img.style.top = `${Math.random() * maxY}px`;

    document.getElementById("container").appendChild(img);
      
    ///draggable
    $(img).draggable();


    // Fade in
    requestAnimationFrame(() => {
      img.style.opacity = 1;
    });

    // Remove after 1 minute with fade out
    setTimeout(() => {
      img.style.transition = "opacity 5s ease-in-out";
      img.style.opacity = 0;
      setTimeout(() => img.remove(), 4000);
    }, 40000);
  };

  // Schedule next image creation at random interval (1-5 sec)
  setTimeout(createRandomImage, Math.random() * 1500 + 300);
}

createRandomImage();

$(function () {
  // On hovering anywhere on the page
  $("#container").on("mousemove", function () {
    $(".i").each(function () {
      let label = $(this).data("label") || "travelling through sentiments, closures, gaps, breath. in absence, in silences, there is a reckless sound. ";
      $("#txt span").html(label);
    });
  });

  // Optional: reset when mouse leaves page
  $("#container").on("mouseleave", function () {
    $("#txt span").html("");
  });
});



// $("#container").on("click", function () {
//     $(".i").each(function () {
//       let label = $(this).data("label") || "when we speak soft sounds read";
//       $("#pre-txt span").html(label);
// $('#txt').css('color', 'transparent');
// $('#pre-txt').css('background-color', 'white');

//     });
//   });
$("#container").on("click", function () {
  $(this).toggleClass("toggled");

  if ($(this).hasClass("toggled")) {
    $(".i").each(function () {
      let label = $(this).data("label") || "when we speak soft sounds read";
      $("#pre-txt span").html(label);
    });

    $('#txt').css('color', 'transparent');
    $('#pre-txt').css('background-color', 'white');
$('#pre-txt').css('background-image', 'url("https://cdn.glitch.global/e573fc2d-d65d-49bb-9162-63429baf793c/grey%20background.png?v=1747591790369")');
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


  