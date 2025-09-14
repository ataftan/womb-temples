//img collage
const images = [
  "assets/img/wombeast.png","assets/img/wombeast.png","assets/img/wombeast.png",
  "assets/img/wombeast.png","assets/img/wombeast.png",
  "assets/img/wombeast.png",
  "assets/img/wombeast.png",
  "assets/img/wombeast.png"  
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
    const randomWidth = Math.random() * 300 + 400;
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
  setTimeout(createRandomImage, Math.random() * 1500 + 140);
}








$(document).ready(function () {
  $("#button").click(function () {
    var answer1 = $("#input_name").val().trim();

    if (answer1 === "") {
      alert("we found a ghostly encounter");
      return;
      
    }

    $("#name_prompt").hide();
    $("#name_prompt-2").show();
  });

  $("#button_2").click(function () {
    var answer2 = $("#input_name_2").val().trim();

    if (answer2 === "") {
      alert("we found a ghostly encounter");
      return;
    }

   $("#name_prompt-2").hide();
    $("#name_prompt-3").show();
    
 
     $("#button_3").click(function () {
    var answer1 = $("#input_name_3").val().trim();

    if (answer1 === "") {
      alert("we found a ghostly encounter");
      return;
    }

    $("#name_prompt-3").hide();
    $("#prompt-3").show();
       
                         alert("a reckless silence");

                  alert("a reckless sound");


           alert("beyond the border wars");
            // alert("in the planet's core");

    //adding opacity to bg
let currentBg = $("body").css("background-image"); 

  
  $("body").css("background-image", `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), ${currentBg}`);
    
});
  
  
  

  $("#prompt-3").click(function () {
    
    $("#prompt-3").hide();
    $("#prompt-4").show();
  });
   
   $("#prompt-4").click(function () {
    
    $("#prompt-4").hide();
    $("#prompt-5").show();
  });
   
   
    $("#prompt-5").click(function () {
    
    $("#prompt-5").hide();
    $("#prompt-6").show();
  });
   
    $("#prompt-6").click(function () {
    
    $("body").css({
  "background-image": "url('assets/img/worshipbg.png')",
  "background-size": "cover",
  "background-repeat": "no-repeat",
  "background-position": "center"
});

    createRandomImage(); // call the function to start collage
        
});


  });
   
});