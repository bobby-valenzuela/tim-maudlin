<template>

<!--   
  <router-view/> -->

  
  <Home></Home>
  <AboutTim></AboutTim>
  <PublicationsI></PublicationsI>
  <PublicationsII></PublicationsII>
  <Media></Media>
  <Contact></Contact>

</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

import Home from '@/views/Home.vue'
import AboutTim from '@/views/AboutTim.vue'
import PublicationsI from '@/views/PublicationsI.vue'
import PublicationsII from '@/views/PublicationsII.vue'
import Contact from '@/views/Contact.vue'
import Media from '@/views/Media.vue'




import $ from 'jquery'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";


export default {
  name:'app',
  data(){
    return{

    }
  },
  components: {
    Home,
    AboutTim,
    PublicationsI,
    PublicationsII,
    Contact,
    Media
    },
    mounted(){
        //#########################
  // Materialize
  //#########################







  //#########################
  // SMOOTH SCROLL
  //#########################

  $(document).ready(function() {
    // Add smooth scrolling to all links
    $(".smoothScrollLink").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1300, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});


  //#########################
  // GSAP ANIMATIONS 
  //#########################


$(document).ready(function(){



  

  gsap.registerPlugin(ScrollTrigger);

    
    


  //#########################
  // header
  //#########################


  gsap.to("header .leftPanel",{
        scrollTrigger: {
          //pin: true,
          scrub: true,                  
          trigger: ".home",
          start: "top top",
          end: "bottom top",
          //markers: true
        },
    opacity: 0,
    //x: -300,
    y: 700,
    duration: 1
    }); //END GSAP ANIMATION

    gsap.to("header .rightPanel-content",{
        scrollTrigger: {
          trigger: "header .rightPanel",
          scrub: true,
          start: "bottom bottom",
          end: "bottom top",
          markers: false
        },
        opacity: 0,
        //left: 50,
        //x: 500,
        y: 500,
        duration: 1
      });//END GSAP ANIMATION





  //#########################
  // about
  //#########################
  
  gsap.from(".about-tim .leftPanel",{
        scrollTrigger: {
          trigger: ".about-tim",
          scrub: true,
          start: "top bottom",
          end: "top top",
          markers: false
        },
    opacity: 0,
    //color: red,
    //left: 50,
     //x: 500,
     scale: 0.8,
     yPercent: -500,
    duration: 3
    });//END GSAP ANIMATION


    gsap.from(".about-tim .rightPanel",{
        scrollTrigger: {
          trigger: ".about-tim",
          scrub: true,
          start: "top bottom",
          end: "top 5%",
          markers: false
        },
     backgroundColor:'#eeeeee',
     yPercent: -700,
    duration: 3
    });//END GSAP ANIMATION

    gsap.from(".about-tim .rightPanel-content",{
        scrollTrigger: {
          trigger: ".about-tim",
          scrub: true,
          start: "top center",
          end: "top top",
          markers: false
        },
     opacity: 0, 
     duration: 1
    });//END GSAP ANIMATION

    gsap.from(".about-tim .rightPanel-content .btn-floating",{
        scrollTrigger: {
          trigger: ".about-tim",
          scrub: true,
          start: "top 90%",
          end: "bottom bottom",
          markers: false
        },
     opacity: 0,
     xPercent: -300, 
     duration: 1
    });//END GSAP ANIMATION

    gsap.to(".about-tim .rightPanel-content",{
        scrollTrigger: {
          trigger: ".about-tim",
          scrub: true,
          start: "bottom bottom",
          end: "bottom top",
          markers: false
        },
     //opacity: 0,
     yPercent: 100, 
     duration: 5
    });//END GSAP ANIMATION

    gsap.to(".about-tim .leftPanel .card",{
        scrollTrigger: {
          trigger: ".about-tim",
          scrub: true,
          start: "top top",
          end: "bottom top",
          markers: false
        },
     //opacity: 0,
     yPercent: 200,
     //xPercent: -200, 
     duration: 1
    });//END GSAP ANIMATION


    gsap.from(".about-tim .profileDescription",{
    scrollTrigger: {
      trigger: ".about-tim",
      scrub: true,
      start: "top bottom",
      end: "bottom bottom",
      markers: false
        },
     //opacity: 0,
     yPercent: 200,
     //xPercent: -200, 
     scale: 2.7
    });//END GSAP ANIMATION




//#########################
// publications
//#########################

gsap.from(".publications .leftPanel .card",{
  scrollTrigger: {
    trigger: ".publications",
    scrub: true,
    start: "top bottom",
    end: "top top",
    markers: false
  },
//opacity: 0,
yPercent: -1000,
//xPercent: -200, 
duration: 2
});//END GSAP ANIMATION


gsap.from(".publications .rightPanel-content .card",{
  scrollTrigger: {
    trigger: ".publications",
    scrub: true,
    start: "top bottom",
    end: "top 30%",
    markers: false
  },
opacity: 0,
yPercent: 200,
xPercent: 500, 
duration: 5
});//END GSAP ANIMATION

gsap.from(".publications .tabs",{
  scrollTrigger: {
    trigger: ".publications",
    scrub: true,
    start: "top bottom",
    end: "top top",
    markers: false
  },
opacity: 0.5,
xPercent: 500, 
});//END GSAP ANIMATION

gsap.from(".publications .card-content",{
  scrollTrigger: {
    trigger: ".publications",
    scrub: true,
    start: "top bottom",
    end: "top top",
    markers: false
  },
opacity: 0.5,
yPercent: -1500, 
});//END GSAP ANIMATION

gsap.from(".publications .rightPanel",{
      scrollTrigger: {
        trigger: ".publications",
        scrub: true,
        start: "top bottom",
        end: "bottom bottom",
        markers: false
      },
    opacity: 0,
    backgroundPosition: '-100vw 0',
    //yPercent: -200,
    //xPercent: -200, 
    duration: 1
  });//END GSAP ANIMATION


  gsap.from(".publications .card-image",{
      scrollTrigger: {
        trigger: ".publications",
        scrub: true,
        start: "top bottom",
        end: "top top",
        markers: false
      },
    opacity: 0,
    yPercent: -600,
    //xPercent: -200, 
    scale: 3
  });//END GSAP ANIMATION

  gsap.from(".publications .rightPanel-content .btn-floating",{
  scrollTrigger: {
    trigger: ".publications",
    scrub: true,
    start: "top bottom",
    end: "top top",
    markers: false
  },
opacity: 0,
xPercent: -1000, 
duration: 1
});//END GSAP ANIMATION


    gsap.to(".publications .rightPanel-content",{
        scrollTrigger: {
          trigger: ".publications",
          scrub: true,
          start: "bottom bottom",
          end: "bottom top",
          markers: false
        },
     //opacity: 0,
     yPercent: 100, 
     scale: 0.8
    });//END GSAP ANIMATION

    gsap.to(".publications .leftPanel",{
        scrollTrigger: {
          trigger: ".publications",
          scrub: true,
          start: "top top",
          end: "bottom top",
          markers: false
        },
     //opacity: 0,
     yPercent: 100,
     //xPercent: -200, 
    });//END GSAP ANIMATION


  //#########################
  // publications II
  //#########################
  gsap.registerPlugin(ScrollTrigger);

gsap.from(".publicationsII .rightPanel",{
scrollTrigger: {
trigger: ".publicationsII .rightPanel",
scrub: true,
start: "top bottom",
end: "top top",
markers: false
},
opacity: 0,
backgroundPosition: '30% -210vh',
//yPercent: -200,
//xPercent: -200, 
scale: 0.8
});//END GSAP ANIMATION

gsap.from(".publicationsII .leftPanel .card",{
scrollTrigger: {
trigger: ".publicationsII",
scrub: true,
start: "top bottom",
end: "top top",
markers: false
},
//opacity: 0,
yPercent: -1000,
//xPercent: -200, 
duration: 2
});//END GSAP ANIMATION        


gsap.from(".publicationsII .card-content",{
scrollTrigger: {
trigger: ".publicationsII",
scrub: true,
start: "top bottom",
end: "top top",
markers: false
},
opacity: 0.5,
yPercent: -1500, 
});//END GSAP ANIMATION



gsap.from(".publicationsII .rightPanel-content",{
scrollTrigger: {
trigger: ".publicationsII .rightPanel-content",
scrub: true,
start: "top center",
end: "top top",
markers: false
},
opacity: 0,
//yPercent: -1500, 
});//END GSAP ANIMATION



    gsap.to(".publicationsII .leftPanel",{
        scrollTrigger: {
          trigger: ".publicationsII",
          scrub: true,
          start: "top top",
          end: "bottom top",
          markers: false
        },
     //opacity: 0,
     yPercent: 100,
     //xPercent: -200, 
    });//END GSAP ANIMATION

        gsap.to(".publicationsII .rightPanel",{
        scrollTrigger: {
          trigger: ".publicationsII ",
          scrub: true,
          start: "top top",
          end: "bottom top",
          markers: false
        },
     opacity: 0,
     yPercent: 85,
     scale: 0.9,
     duration:1500 
    });//END GSAP ANIMATION

      //#########################
      // media
      //#########################



gsap.from(".media .rightPanel-content",{
scrollTrigger: {
trigger: ".media",
scrub: true,
start: "top center",
end: "bottom bottom",
markers: false
},
opacity: 0,
xPercent: -100, 
scale: 0.8
});//END GSAP ANIMATION


gsap.from(".media .leftPanel .card",{
scrollTrigger: {
trigger: ".media",
scrub: true,
start: "top bottom",
end: "top top",
markers: false
  },
  //opacity: 0,
  yPercent: -1000,
  //xPercent: -200, 
  duration: 2
  });//END GSAP ANIMATION    




    gsap.to(".media .leftPanel",{
        scrollTrigger: {
          trigger: ".media .leftPanel",
          scrub: true,
          start: "top top",
          end: "bottom top",
          markers: false
        },
     //opacity: 0,
     yPercent: -100,
     //xPercent: -200, 
    });//END GSAP ANIMATION

// gsap.to(".media .rightPanel-content",{
// scrollTrigger: {
// trigger: ".media",
// scrub: true,
// start: "top top",
// end: "bottom top",
// markers: false
// },
// opacity: 0,

// // xPercent: -100
// });//END GSAP ANIMATION

    gsap.to(".media .rightPanel",{
        scrollTrigger: {
          trigger: ".media",
          scrub: true,
          start: "bottom bottom",
          end: "bottom top",
          markers: false
        },
     opacity: 0,
     yPercent: 100, 
     duration: 5
    });//END GSAP ANIMATION

      //#########################
      // contact
      //#########################
      gsap.registerPlugin(ScrollTrigger);

gsap.from(".contact .leftPanel .card",{
scrollTrigger: {
trigger: ".contact",
scrub: true,
start: "top bottom",
end: "top top",
markers: false
},
//opacity: 0,
yPercent: -1000,
//xPercent: -200, 
duration: 2
});//END GSAP ANIMATION    

gsap.from(".contact .card-content",{
scrollTrigger: {
trigger: ".contact",
scrub: true,
start: "top bottom",
end: "top top",
markers: false
},
opacity: 0.5,
yPercent: -1500, 
});//END GSAP ANIMATION


gsap.from(".contact .rightPanel",{
scrollTrigger: {
trigger: ".contact",
scrub: true,
start: "top bottom",
end: "top top",
markers: false
},
// backgroundColor:'#eeeeee',
backgroundPosition: '30% -210vh',
yPercent: -200,
// opacity: 0
});//END GSAP ANIMATION





gsap.from(".contact .rightPanel-content",{
scrollTrigger: {
trigger: ".contact",
scrub: true,
start: "top 50%",
end: "bottom bottom",
markers: false
},
opacity: 0, 
});//END GSAP ANIMATION

    });



    }
}


</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css');
@import  '~@/assets/scss/_init';


</style>

