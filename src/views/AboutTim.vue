<template>
  <section id="about-tim-link" class="about-tim row width-100 height-100">
    <div class="col s12 m6 l4 offset-l1 leftPanel ">
      <div class="leftPanel-content height-100vh">
        <div class="card transparent">
          <div class="card-title">
            <h1 class="title">About Tim</h1>
          </div>
          <div class="card-content white-text">
            <p class="nanum">Professor of Philosophy</p>
            <p class="nanum italic grey-text text-lighten-1">New York University</p>
            <span class="border-accent-secondary "></span>
          </div>
      </div>
      </div>
    </div>
    <div class="col s12 m6 l7 rightPanel">
      <div class="rightPanel-content  row min-height-110vh">
        <div class="col s12 l7 offset-l2 ">
            <div class="card z-depth-2 hoverable">
              <div class="card-image">
                    <img src="@/assets/img/profile.jpg" alt="Professor Tim Maudlin" class="materialboxed" data-caption="Professor Maudlin">
                    <a class="btn-floating halfway-fab waves-effect waves-light red lighten-1 pulse activator" >
                      <i class="material-icons tooltipped" data-position="right" data-tooltip="Additional Information">add</i>
                    </a>
              </div>
              <div class="card-content">
                <!-- <div class="card-title"></div> -->
            
                <p class="standardText profileDescription"> {{ profileDescription }} </p>

              </div>
              <div class="card-reveal red lighten-2">
                <span class="card-title grey-text text-darken-4">Additional Information<i class="material-icons right">close</i></span>
                <div class="additionalInfo"> 
                 
                  <h2>Education</h2>
                  <ul>
                    <li><i class="material-icons left">school</i>Ph.D. Pittsburgh, History and Philosophy of Science</li>
                    <li><i class="material-icons left">school</i>B.A. Yale, Physics and Philosophy</li>
                  </ul>

                  <h2>Memberships</h2>
                  <ul>
                    <li><i class="material-icons left">turned_in_not</i>
                          <a href="https://www.johnbellinstitute.org/" target="blank" >John Bell Institute for the Foundations of Physics </a>
                          <span class="italic">(Founder and Director)</span>
                    </li>
                    <li><i class="material-icons left">turned_in_not</i>
                        <a href="https://www.amacad.org/person/tim-we-maudlin" target="blank">American Academy of Arts and Sciences</a>
                    </li>
                    <li><i class="material-icons left">turned_in_not</i>The Academie Internationale de Philosophie des Sciences</li>
                    <li><i class="material-icons left">turned_in_not</i>Foundational Questions Institute (FQXi)</li>
                  </ul>

                  <h2>Awards</h2>
                  <ul>
                    <li><i class="material-icons left">class</i>Fellow of the American Council of Learned Societies, 2015</li>
                    <li><i class="material-icons left">class</i>American Academy of Arts and Sciences, 2015</li>                    
                    <li><i class="material-icons left">class</i><a href="https://www.gf.org/fellows/all-fellows/tim-maudlin/" target="blank">Guggenheim Fellow, 2008</a></li>
                  </ul>

                </div>
                  <div class="chip hoverable">
                    <img src="@/assets/img/thinker.jpg" alt="The Thinker, Philosophy">
                    Philosophy
                  </div>
                  <div class="chip hoverable">
                    <img src="@/assets/img/physics.jpg" alt="Physics, the Cosmos">
                    Foundations of Physics
                  </div>
                  <div class="chip hoverable">
                    <img src="@/assets/img/logic.jpg" alt="Logic, Rubik's cube">
                    Logic
                  </div>
              </div>   
            </div><!--card-->
        </div>
      </div>
    </div><!--row-->
  </section> <!--End about Tim-->
</template>

<script>


export default {
    name: 'AboutTim',
    data(){
        return{
            profileDescription: `Tim Maudlin has interests primarily focused in the foundations of physics, metaphysics, and logic. His books include Quantum Non-Locality and Relativity (Blackwell, 3rd edition now available), Truth and Paradox (Oxford), The Metaphysics Within Physics (Oxford)and two volumes of 'Philosophy of Physics'. He is a member of the Academie Internationale de Philosophie des Sciences and the Foundational Questions Institute (FQXi). He has been a Guggenheim Fellow. He taught at Rutgers from 1986 to 2011, and has been a visiting professor at Harvard.`,
        }
    },
    mounted(){
      
    }
    
}

</script>



<style lang="scss">

@import  '~@/assets/scss/_init';


.about-tim{
  background: $primaryColor;
  margin-bottom: 0;

  .leftPanel, .rightPanel-content > .col{
    height: 100%;
  }

  .rightPanel{

      background-color:$tertiaryColor;
      background: url('~@/assets/img/geo-03.jpg');
      background-position-y: top;
      background-size: cover;
      background-repeat: no-repeat;
  
    .rightPanel-content{

      background-color: $tertiaryColor;
      padding-top: 40px;
      //opacity: 0.3;

      .card{
        
        @include mq($md){
          margin: 40px 0;
        }

        @include mq($lg){
          margin: 70px 0;
        }

        .chip{
          margin-top: 35px;
        }

        .card-title{
          font-family: $nanum;
            font-weight: bold;
        }

        .card-content .standardText::first-letter{
          font-size: 4rem;
          text-shadow: 0 0 1px rgb(24, 24, 24);
          font-family: $primaryFont;

        }

        .additionalInfo{
        margin-top: 20px;
          a{
            color: black;
            text-decoration: underline;
          }
          .italic{
            font-style: italic;
          }
        }

        h2{
          font-size: 1.2rem;
        }

        ul{ margin-left: 15px;
          li{
            font-size: 1rem;
            line-height: 1.3rem;
            display: inline-block;
            margin-top: 3px;
          }
        }
      }

    };
  };
};
</style>