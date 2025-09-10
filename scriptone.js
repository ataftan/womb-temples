// $("#i > *").mouseenter(function () {
//   let txt = $(this).find("h1:first-of-type").text();
//   $("#txt span").html(txt);
// }).mouseleave(function () {
//   $("#txt span").html("");
// });
// $(function() {
//   $(".drag-me").draggable();
// });


const phrases = [
  "The rejoice of defiance needs sensuality, a technology utilised by cyborgs to code and weave.",
  "we animate as we regenerate, we transform as we seek embodiment in a mythical state that knows no bounds. !",
  "It is rarely respectful or obedient to cross borders, speak desirously of a future possessed in loving all disobedient creatures."
];

$("#shuffle").click(function () {
  // Pick a random index from the array
  const randomText = phrases[Math.floor(Math.random() * phrases.length)];
  $(this).text(randomText);
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


