
$(function() {
  const phrases = [
    "The rejoice of defiance needs sensuality, a technology utilised by cyborgs to code and weave.",
    "we animate as we regenerate, we transform as we seek embodiment in a mythical state that knows no bounds. !",
    "It is rarely respectful or obedient to cross borders, speak desirously of a future possessed in loving all disobedient creatures."
  ];

  // Copy phrases into a working array
  let remaining = [...phrases];

  $("#shuffle").on("click", function() {
    if (remaining.length > 0) {
      // Pick a random phrase from what's left
      const randomIndex = Math.floor(Math.random() * remaining.length);
      const randomText = remaining.splice(randomIndex, 1)[0]; // remove from remaining
      $(this).text(randomText);
    } else {
      // All phrases have been shown → redirect
      window.location.href = "collectivebody.html";
    }
  });
});

  



// $("#dark-mode").on("click", function () {
//   $("body").toggleClass("toggled");
// });


// $("#dark-mode").on("click", function () {
//   $("#txt").toggleClass("toggled");
// });

// $("#dark-mode").on("click", function () {
//   $("button").toggleClass("toggled");
// });



// $("#container").on("click", function () {
//   $(this).toggleClass("toggled");

//   if ($(this).hasClass("toggled")) {
//     $(".i").each(function () {
//       let label = $(this).data("label") || "we co-create a collective body each limb regenerated cyclically its shapeshifting skin";
//       $(".pre-txt span").html(label);
//     });

//     $('.txt').css('color', 'transparent');
//     $('.pre-txt').css('background-color', 'white');
//     $('.pre-txt').css('background-image', 'url("landscape.gif")');
//     $('.pre-txt').css('background-repeat', 'no-repeat');
//     $('.pre-txt').css(' background-size', 'cover');





//   } else {
//     $('.txt').css('color', '');
//     $('.pre-txt').css('background-color', '');
//     $('.pre-txt').css('background-image', '');
//     $('.pre-txt').css('background-repeat', '');
//     $('.pre-txt').css(' background-size', '');
//     $('.pre-txt').css('   image-rendering', 'pixelated');

//     $('.pre-txt span').html('');
//   }
// });


