//variables===============================================================================
const rosterDiv = document.getElementById("homepage-roster-images-div");
const rosterImages = document.getElementById("roster-images")


// Console Outputs ================================================================================
console.dir(rosterDiv)
console.dir(rosterImages)

// Functions ==========================================================================================

window.onload = () => {
    const imageArray = [
      "/images/homepage/homepage-roster-images-div/roster-vision.png",
      "/images/homepage/homepage-roster-images-div/roster-wonderWoman.png",
      "/images/homepage/homepage-roster-images-div/roster-batman.png",
      "/images/homepage/homepage-roster-images-div/roster-greenLantern.png",
      "/images/homepage/homepage-roster-images-div/roster-flash.jpg",
      "/images/homepage/homepage-roster-images-div/roster-superman.png",
    ];
    
    let currentIndex = 0;
  
    setInterval(() => {
      rosterImages.src = imageArray[currentIndex]; // Update the image
      currentIndex = (currentIndex + 1) % imageArray.length; // Cycle back to 0
    }, 2000); // Change image every 2 seconds
  };


// Show Your Work ==========================================================================================

// const rotateImages = () => {
//     const rosterImagesObject = {
//       superman: "/images/homepage/homepage-roster-images-div/roster-superman.png",
//       vision: "/images/homepage/homepage-roster-images-div/roster-vision.png",
//       wonderWoman: "/images/homepage/homepage-roster-images-div/roster-wonderWoman.png",
//       batman: "/images/homepage/homepage-roster-images-div/roster-batman.png",
//       greenLantern: "images/homepage/homepage-roster-images-div/roster-greenLantern.png",
//       theFlash: "/images/homepage/homepage-roster-images-div/roster-flash.jpg"
//     }

//     window.onload = () => {
//       setInterval(rosterImagesDiv.src = rosterImagesObject.superman, 1000);
//       setInterval(rosterImagesDiv.src = rosterImagesObject.vision, 1000);
//       setInterval(rosterImagesDiv.src = rosterImagesObject.wonderWoman, 1000);
//       setInterval(rosterImagesDiv.src = rosterImagesObject.batman, 1000);
//       setInterval(rosterImagesDiv.src = rosterImagesObject.greenLantern, 1000);
//       setInterval(rosterImagesDiv.src = rosterImagesObject.theFlash, 1000);  
//     };
// }


// window.onload = () => {
//   const imageArray = [
//     "src/images/homepage/homepage-roster-images-div/roster-superman.png",
//     "src/images/homepage/homepage-roster-images-div/roster-vision.png",
//     "src/images/homepage/homepage-roster-images-div/roster-wonderWoman.png",
//     "src/images/homepage/homepage-roster-images-div/roster-batman.png",
//     "src/images/homepage/homepage-roster-images-div/roster-greenLantern.png",
//     "src/images/homepage/homepage-roster-images-div/roster-flash.jpg"
//   ];
  
//   let currentIndex = 0;

//   setInterval(() => {
//     rosterImages.src = imageArray[currentIndex]; // Update the image
//     currentIndex = (currentIndex + 1) % imageArray.length; // Cycle back to 0
//   }, 2000); // Change image every 2 seconds
// };




// const work = () => {
//   imageArray = ["src/images/homepage/homepage-roster-images-div/roster-superman.png", 
//     "src/images/homepage/homepage-roster-images-div/roster-vision.png",
//     "src/images/homepage/homepage-roster-images-div/roster-wonderWoman.png",
//     "src/images/homepage/homepage-roster-images-div/roster-batman.png",
//     "src/images/homepage/homepage-roster-images-div/roster-greenLantern.png",
//     "src/images/homepage/homepage-roster-images-div/roster-flash.jpg"
//   ]

//   window.onload = () => {
//     rosterImages.src = imageArray[0];
//     if(rosterImages.src = imageArray[0]){
//       setTimeout(() => {
//         rosterImages.src = imageArray[1];
//       }, 2000 );
//     } if (rosterImages.src = imageArray[1]) {
//       setTimeout(() => {
//         rosterImages.src = imageArray[2];
//       }, 2000);
//     }
//   }


  // window.onload = () => {
  //   setTimeout(() => {
  //     rosterImages.src = imageArray[1];
  //   }, "5 second");

    // setTimeout(() => {
    //   rosterImages.src = imageArray[2];
    // }, "5 second");

    
    // if(rosterImages.src === imageArray[0]){
    //   setInterval(() => {
    //     rosterImages.src = imageArray[1];
    //   }, 1000);
    // }
    // setInterval(() => {
    //   rosterImages.src = imageArray[2];
    // }, 1000);
    // setInterval(() => {
    //   rosterImages.src = imageArray[3];
    // }, 1000);
    // setInterval(() => {
    //   rosterImages.src = imageArray[4];
    // }, 1000);
    // setInterval(() => {
    //   rosterImages.src = imageArray[5];
    // }, 1000);
    // setInterval(() => {
    //   rosterImages.src = imageArray[0];
    // }, 1000);
  // };
// }

// setInterval(() => {
  
//   work()
// }, 1000);





