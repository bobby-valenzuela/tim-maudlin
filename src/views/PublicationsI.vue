<template>

  <!-- publication -->
  <section id="publications-I-link" class="publications row width-100 ">
    <div class="col s12 m6 l4 offset-l1 leftPanel">
      <div class="leftPanel-content height-100vh">
        <div class="card transparent">
          <div class="card-title">
            <h1 class="title center-align">Publications I</h1>
          </div>
          <div class="card-content white-text">
            <p class="nanum">Published Books</p>
            <!-- <p class="nanum italic grey-text text-lighten-1">New York University</p> -->
            <span class="border-accent-secondary "></span>
          </div>
        </div>
      </div>
      </div>
    <div class="col s12 m6 l7 rightPanel">
      <div class="rightPanel-content min-height-110vh row">
        <div class="col l8 offset-l2 hide-overflow-y hide-overflow-x ">
            

                
               <div v-for="(pub, index) in publications.books" :key="index" :id="pub.swipeId" class="card hoverable">
                 <div class="card-image"> <img :src="pub.img" alt="" > 
                    <a class="btn-floating halfway-fab waves-effect waves-light red lighten-1 pulse activator tooltipped" data-position="top" data-tooltip="About the Book">
                      <i class="material-icons">more_horiz  </i>
                    </a>                 
                 </div>
                 <div class="card-content">
                   <div class="card-title">{{ pub.title }} ( {{ pub.year }} )</div>
                   {{ pub.publisher }}

                   </div>
                  <div class="card-reveal tertiary-bg">
                    <span class="card-title grey-text text-darken-4">About the Book<i class="material-icons right">close</i></span>
                    <span class="border-accent-black"></span>
                    <p class="description"> {{ pub.description }} </p>
                    <a class="btn secondary-bg" :href="pub.link" target="blank">
                      Buy
                      <i class="material-icons white-text right">shop</i>
                    </a>
                  </div>
               </div><!--card-->

              <ul  class="tabs">
                <li v-for="(pub, index) in publications.books" :key="index" class="tab col s2">
                  <a  :href=" '#' + pub.swipeId"> {{ pub.year }} 
                  </a>
                </li>
              </ul>

        </div>
      </div>
    </div><!--row-->
  </section> <!--END publication-->
</template>

<script>


export default {
    name: 'PublicationsI',
    data(){
        return{
              publications:{
                books: [
                  {
                    img: require('@/assets/img/pubs/Philosophy-of-Physics-02-cropped.jpg'),
                    swipeId: 'swipe-6',
                    title:'Philosophy of Physics, Volume 2: Quantum Theory',
                    description: `In this book, Tim Maudlin, one of the world’s leading philosophers of physics, offers a sophisticated, original introduction to the philosophy of quantum mechanics. The briefest, clearest, and most refined account of his influential approach to the subject, the book will be invaluable to all students of philosophy and physics.
                                  Quantum mechanics holds a unique place in the history of physics. It has produced the most accurate predictions of any scientific theory, but, more astonishing, there has never been any agreement about what the theory implies about physical reality. Maudlin argues that the very term “quantum theory” is a misnomer. A proper physical theory should clearly describe what is there and what it does—yet standard textbooks present quantum mechanics as a predictive recipe in search of a physical theory.
                                  In contrast, Maudlin explores three proper theories that recover the quantum predictions: the indeterministic wavefunction collapse theory of Ghirardi, Rimini, and Weber; the deterministic particle theory of deBroglie and Bohm; and the conceptually challenging Many Worlds theory of Everett. Each offers a radically different proposal for the nature of physical reality, but Maudlin shows that none of them are what they are generally taken to be.
                                  `,
                    year: '2019',
                    publisher: 'Princeton University Press',
                    link: 'https://press.princeton.edu/books/hardcover/9780691183527/philosophy-of-physics'
                  },
                  {
                    img: require('@/assets/img/pubs/New-foudations-for-physical-geometry-cropped.jpg'),
                    swipeId: 'swipe-5',
                    title:'New Foundations for Physical Geometry',
                    description:'Topology is the mathematical study of the most basic geometrical structure of a space. Mathematical physics uses topological spaces as the formal means for describing physical space and time. This book proposes a completely new mathematical structure for describing geometrical notions such as continuity, connectedness, boundaries of sets, and so on, in order to provide a better mathematical tool for understanding space-time. This is the initial volume in a two-volume set, the first of which develops the mathematical structure and the second of which applies it to classical and Relativistic physics.',
                    year: '2014',
                    publisher: 'Oxford University Press',
                    link: 'https://global.oup.com/academic/product/new-foundations-for-physical-geometry-9780198701309'
                  },
                  {
                    img: require('@/assets/img/pubs/Philosophy-of-Physics-01-cropped.jpg'),
                    swipeId: 'swipe-4',
                    title:'Philosophy of Physics, Volume 1: Space and Time',
                    description: `This concise book introduces nonphysicists to the core philosophical issues surrounding the nature and structure of space and time, and is also an ideal resource for physicists interested in the conceptual foundations of space-time theory. Tim Maudlin’s broad historical overview examines Aristotelian and Newtonian accounts of space and time, and traces how Galileo’s conceptions of relativity and space-time led to Einstein’s special and general theories of relativity. Maudlin explains special relativity with enough detail to solve concrete physical problems while presenting general relativity in more qualitative terms. Additional topics include the Twins Paradox, the physical aspects of the Lorentz-FitzGerald contraction, the constancy of the speed of light, time travel, the direction of time, and more.`,
                    year: '2012',
                    publisher: 'Princeton University Press',
                    link: 'https://press.princeton.edu/books/paperback/9780691165714/philosophy-of-physics'
                  },
                  {
                    img: require('@/assets/img/pubs/Metaphysics-within-physics-cropped.jpg'),
                    swipeId: 'swipe-3',
                    title:'The Metaphysics Within Physics',
                    description: `What fundamental account of the world is implicit in physical theory? Physics straightforwardly postulates quarks and electrons, but what of the more intangible elements, such as laws of nature, universals, causation and the direction of time? Do they have a place in the physical structure of the world?
                                  Tim Maudlin argues that the ontology derived from physics takes a form quite different from those most commonly defended by philosophers. Physics postulates irreducible fundamental laws, eschews universals, does not require a fundamental notion of causation, and makes room for the passage of time. In a series of linked essays The Metaphysics Within Physics outlines an approach to metaphysics opposed to the Humean reductionism that motivates much analytical metaphysics. 
                                  `,
                    year: '2007',
                    publisher: 'Oxford University Press',
                    link: 'https://global.oup.com/academic/product/the-metaphysics-within-physics-9780199575374'
                  },
                  {
                    img: require('@/assets/img/pubs/truth-and-paradox-cropped.jpg'),
                    swipeId: 'swipe-2',
                    title:'Truth and Paradox: Solving the Riddles',
                    description: `Consider the sentence 'This sentence is not true'. It seems that the sentence can be neither true nor not true, on pain of contradiction. Tim Maudlin sets out a novel account of logic and semantics which allows him to deal with certain notorious paradoxes which have bedevilled philosophical theories of truth. All philosophers interested in logic and language will find Truth and Paradox a stimulating read.`,
                    year: '2004',
                    publisher: 'Oxford University Press',
                    link: 'https://global.oup.com/academic/product/truth-and-paradox-9780199203918'
                  },
                  {
                    img: require('@/assets/img/pubs/quantum-cropped.jpg'),
                    swipeId: 'swipe-1',
                    title:'Quantum Non-Locality and Relativity: Metaphysical Intimations of Modern Physics',
                    description: `The third edition of Quantum Non-Locality and Relativity has been carefully updated to reflect significant developments, including a new chapter covering important recent work in the foundations of physics.
                                  The third edition includes a premier philosophical study of Bell’s Theorem and its implication for the relativistic account of space and time as well as the "Free Will Theorem" of John Conway and Simon Kochen.
                                  Also included is a discussion of Roderich Tumiulka’s explicit, relativistic theory that can reproduce the quantum mechanical violation of Bell’s inequality. 
                                  This book introduces philosophers to the relevant physics and demonstrates how philosophical analysis can help inform physics.
                                `,
                    year: '1994',
                    publisher: 'Oxford: Basil Blackwell',
                    link: 'https://onlinelibrary.wiley.com/doi/book/10.1002/9781444396973'
                  }
                ] //end books
              } // end publications
        }
    }
}

</script>



<style lang="scss">

@import  '~@/assets/scss/_init';

.publications{
  background: $primaryColor;

  .rightPanel{

      background: url('~@/assets/img/pubs/Philosophy-of-Physics-01.jpg');
      background-position-y: bottom;
      background-size: cover;
      background-repeat: no-repeat;
      padding-bottom: 20px !important;
  
    .rightPanel-content{
      background-color:rgba(185, 185, 185,0.6);
      
      .card-reveal{
        background-color: rgb(214, 214, 214)!important;
      }
      
      .card-reveal a[class*="btn"]{
        margin-top: 15px;
      }

      .tabs .tab a{
        font-size: 12px;
        padding: 0 10px;

        @include mq($xl){
          font-size: 14px;
        }
      }

      .description{
        margin: 25px 0;
        line-height: 22px;
      }
      .description:first-letter{
        font-size: 2rem;
        font-family: $primaryFont;
      }
      
    };
  };
};

</style>