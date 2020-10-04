<template>

  <!-- publication -->
  <section id="publications-II-link" class="publicationsII row width-100 ">
    <div class="col s12 m6 l4 offset-l1 leftPanel">
      <div class="leftPanel-content min-height-100vh">
        <div class="card transparent">
          <div class="card-title">
            <h1 class="title center-align">Publications II</h1>
          </div>
          <div class="card-content white-text">
            <p class="nanum">Published Articles &amp; More</p>
            <!-- <p class="nanum italic grey-text text-lighten-1">New York University</p> -->
            <span class="border-accent-secondary"></span>
          </div>
        </div>
      </div>
      </div>
    <div class="col s12 m6 l7 rightPanel">
      <div class="rightPanel-content min-height-100vh row">
        <div class="col l8 offset-l2">
            
            <ul class="collapsible">
              <li>
                <div class="collapsible-header"><i class="material-icons">import_contacts</i>Featured Reads</div>
                <div class="collapsible-body">
                  <ul class="featuredReads"> 
                    <li v-for="(featuredRead, index) in featuredReads" :key="index">
                      <p> {{ featuredRead.source }} : </p>
                      <i class="material-icons left">label_outline</i>
                      <a :href=" featuredRead.link " target="blank"> {{ featuredRead.title }} </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div class="collapsible-header"><i class="material-icons">collections_bookmark</i>Articles &amp; other Published work</div>
                <div class="collapsible-body">
                  <ul class="articlesAndMore  "> 
                    <p class="description">Here you can find the latest publications available: </p>
                    <li v-for="(article, index) in articlesAndMore" :key="index">
                      <p>
                        <i class="material-icons left">label_outline</i>
                        <a :href=" article.link " target="blank"> {{ article.source }} </a>
                      </p>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div class="collapsible-header"><i class="material-icons">more_horiz</i>More</div>
                <div class="collapsible-body"><span>...</span></div>
              </li>
            </ul>

        </div>
      </div>
    </div><!--row-->
  </section> <!--END publication-->
</template>

<script>



export default {
    name: 'publicationsII',
    data(){
        return{
          featuredReads: [
            {
              source: `Scientific American`, 
              title: `Philosophy Has Made Plenty of Progress`, 
              link: `https://blogs.scientificamerican.com/cross-check/philosophy-has-made-plenty-of-progress/`
            },
            {
              source: `Quanta Magazine`, 
              title: `A Defense of the Reality of Time`, 
              link: `https://www.quantamagazine.org/a-defense-of-the-reality-of-time-20170516/`
            },
            {
              source: `The Atlantic`, 
              title: `What Happened Before the Big Bang?`, 
              link: `https://www.theatlantic.com/technology/archive/2012/01/what-happened-before-the-big-bang-the-new-philosophy-of-cosmology/251608/`
            },
          ],
          articlesAndMore: [
            {
              source: `PhilPeople`, 
              link: `https://philpeople.org/profiles/tim-maudlin`
            },
            {
              source: `Academia.edu`, 
              link: `http://nyu.academia.edu/TimMaudlin`
            },
            {
              source: `NYU`, 
              link: `https://as.nyu.edu/faculty/tim-maudlin`
            },
          ]
        }
    },
    mounted(){
      
    }
}

</script>



<style lang="scss">

@import  '~@/assets/scss/_init';

.publicationsII{
  background: $primaryColor;

  .rightPanel{
      margin-bottom: 50px;
      background: url('~@/assets/img/geo-04.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position-x: center;
      // background-position-y: bottom;
  
    .rightPanel-content{

      background-color:rgba(185, 185, 185,0.6);      
      
      .collapsible-body{
        background-color: rgba(255, 255, 255, 0.473);
      }

      .featuredReads, .articlesAndMore{
        p{
          margin-top: 15px;
          margin-bottom: 7px;
          text-decoration: underline;
          line-height: 25px;
        }
        a{
          color: black;
          font-style: italic;
        }
        .description{
          text-decoration: none;
          margin-bottom: 25px;
        }
      }
    };
  };
};

</style>