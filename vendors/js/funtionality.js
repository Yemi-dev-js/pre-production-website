// const swiper = new Swiper('.slide-content', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });
  
//   direct /////////////////////

// var swiper = new Swiper(".slide-content", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     slidesPerGroup: 3,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });


  ///////////////////////////////

  var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // breakpoints:{
    //     640: {
    //         slidesPerView: 2,
    //         // spaceBetween: 20,
    //     },

    //     768: {
    //         slidesPerView: 3,
    //         // spaceBetween: 0,
    //     },

    //     1024: {
    //         slidesPerView: 4,
    //         // spaceBetween: 0,
    //     },
    // },

    breakpoints:{
        0: {
            slidesPerView: 1,
            // spaceBetween: 20,
        },

        520: {
            slidesPerView: 2,
            // spaceBetween: 0,
        },

        950: {
            slidesPerView: 3,
            // spaceBetween: 0,
        },
    },

  });