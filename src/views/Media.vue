<template>
 
  <section id="media-link" class="media row width-100 height-100">
    <div class="col s12 m6 l4 offset-l1 leftPanel height-100">
      <div class="leftPanel-content min-height-100vh">
        <div class="card transparent">
          <div class="card-title">
            <h1 class="title">Media</h1>
          </div>
          <div class="card-content white-text">
            <p class="nanum animate__animated animate__pulse">Talks, Lectures, and Interviews</p>
            <!-- <p class="nanum italic grey-text text-lighten-1">Video</p> -->
            <span class="border-accent-secondary"></span>
          </div>
        </div>    
      </div>
    </div> <!--leftPanel -->

    <div class="col m6 l7 rightPanel ">
      <div class="rightPanel-content min-height-100vh media-content row">
        
        <div class="col s10 offset-s1 " >

            <div class="video-container z-depth-3 hoverable" >
              <iframe  width="560" height="315" src="https://www.youtube.com/embed/KXriGVf00mk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>


            <div class="moreVids">
                <div v-for="(vidLink, Index) in vidLinks" :key="Index"  class="video-container z-depth-3 z-depth-2 " >
                  <iframe  width="560" height="315" :src="vidLink" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
          
                 
        </div>

      </div>
    </div><!--row-->
  </section>

</template>

<script>

// import $ from 'jquery'

export default {
    name: 'Media',
    data(){
        return{
          vidLinks: [
            `https://www.youtube.com/embed/hC3ckLqsL5M`,
            `https://www.youtube.com/embed/-TXVhxm5oAU`,
            `https://www.youtube.com/embed/JS75WK4cHz8`,
            `https://www.youtube.com/embed/G11L_WFLwIM`
          ],

        }
    },
    methods:{
    }
    
}

</script>



<style lang="scss">

@import  '~@/assets/scss/_init';


.media{
  background: $primaryColor;
  overflow: hidden;
  // .leftPanel{
  //   background-color: $primaryColor;
  //   z-index: 3;
  //   position: relative;
  //  }

  .rightPanel{
    background-color:$tertiaryColor;

    .rightPanel-content{

      .moreVids{
        margin-top: 30px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 15px;
      }

      .col{
        padding: 0;
        height: auto;
        position: relative;
      }


    }; //.rightPanel-content
  }; // .right-panel
}; //media
</style>