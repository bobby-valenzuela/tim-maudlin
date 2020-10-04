<template>

  <div class="home">
      <nav class="z-depth-2 transparent ">
        <div class="nav-wrapper">
          <a href="#" class="brand-logo"></a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul class="hide-on-med-and-down center-align">
            <li><a href="#home-link" class="smoothScrollLink tooltipped" data-position="right" data-tooltip="Home">I.</a></li>
            <li><a href="#about-tim-link" class="smoothScrollLink tooltipped" data-position="right" data-tooltip="About Tim">II.</a></li>
            <li><a href="#publications-I-link" class="smoothScrollLink tooltipped" data-position="right" data-tooltip="Publications I">III.</a></li>
            <li><a href="#publications-II-link" class="smoothScrollLink tooltipped" data-position="right" data-tooltip="Publications II">IV.</a></li>
            <li><a href="#media-link" class="smoothScrollLink tooltipped" data-position="right" data-tooltip="Media">V.</a></li>
            <li><a href="#contact-link" class="smoothScrollLink tooltipped" data-position="right" data-tooltip="Contact">VI.</a></li>
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
          <li><a href="#home-link" class="smoothScrollLink tooltipped" data-position="right" data-tooltip="Home">Home</a></li>
          <li><a href="#about-tim-link" class="smoothScrollLink tooltipped" data-position="right" data-tooltip="About Tim">About Tim</a></li>
          <li><a href="#publications-I-link" class="smoothScrollLink tooltipped" data-position="right" data-tooltip="Publications I">Publications I</a></li>
          <li><a href="#publications-II-link" class="smoothScrollLink tooltipped" data-position="right" data-tooltip="Publications II">Publications II</a></li>
          <li><a href="#media-link" class="smoothScrollLink tooltipped" data-position="right" data-tooltip="Media">Media</a></li>
          <li><a href="#contact-link" class="smoothScrollLink tooltipped" data-position="right" data-tooltip="Contact">Contact</a></li>
      </ul>

      <header id="home-link" class="row width-100 height-100">
        <div class="col s12 l4 offset-l1 leftPanel ">
          <div class="card transparent">
            <div class="card-title">
              <h1 class="title">Tim Maudlin</h1>
            </div>
            <div class="card-content white-text">
              <p class="nanum">Founder and Director</p>
              <p class="nanum italic grey-text text-lighten-1">John Bell Institute for the Foundations of Physics</p>
              <span class="border-accent"></span>
            </div>
            <div class="card-content white-text">
              <p class="nanum">Professor of Philosophy</p>
              <p class="nanum italic grey-text text-lighten-1">New York University</p>
              <span class="border-accent"></span>
            </div>
          </div>
        </div>
        <div class="col l7 rightPanel">
          <div class="rightPanel-content"></div>
        </div><!--row-->
      </header>


  </div><!-- home -->
    


</template>

<script>






export default {
  name: 'Home',
  data(){
    return{

      }
  },

}
</script>

<style lang="scss">

@import  '~@/assets/scss/_init';



//main Content

.home{
  height: 100vh;
  background: $primaryColor;

  overflow: hidden;

  nav{
    @media screen and (min-width:992px) {
      
      position: fixed!important;
      display: flex;
      top: 0;
      z-index: 5;
      width: 65px;
      height: 100vh;
    }
    
    .nav-wrapper{
      background-color: rgba(0, 0, 0, 0.575);
      margin: 0;
       ul{
          display: flex;
          flex-direction: column;
          padding: 0px 10px;
       }
       ul li{
         font-family: $primaryFont;
         font-size: 1rem;
         margin-top: 20px;
       };
       ul:first-child, ul li :last-child{
         margin-left: 16px;
       }
    }
}

  header{
    display: flex;
    align-items: center;  
    
    .leftPanel{
      padding: 0;
    }

    .rightPanel{
      background-color: $tertiaryColor;


      .rightPanel-content{
      background: url('~@/assets/img/geo-03.jpg');
      background-position-y: top;
      background-size: cover;
      background-repeat: no-repeat;
      }
    }

  }
}
  
</style>