<template>


  <section id="contact-link" class="contact row width-100 ">
    <div class="col s12 m6 l4 offset-l1 leftPanel">
      <div class="leftPanel-content min-height-100vh">
        <div class="card transparent">
          <div class="card-title">
            <h1 class="title">Contact</h1>
          </div>
          <div class="card-content white-text">
            <p class="nanum">Send a Message</p>
            <!-- <p class="nanum italic grey-text text-lighten-1">New York University</p> -->
            <span class="border-accent-secondary "></span>
          </div>
        </div>
      </div>

    </div><!--row-->
    

      <div class="col s12 m6 l7 rightPanel ">
        <div class="rightPanel-content min-height-100vh row">
          <div class="col s12 l8 offset-l2">

              <div class="form-container z-depth-4 hoverable">

                <form id="contactForm">

                  <label>Name
                    <input type="text">
                  </label>

                  <label>Email
                    <input type="email">
                  </label>

                  <label>Message
                    <textarea name="message" rows="10" cols="30" max-row="10" form="contactForm" ></textarea>
                  </label>

                  <label >
                    
                    <a class="btn " type="text" @click="submit">
                          <i class="material-icons right">send</i>
                      <span>Submit</span>
                    </a>
                  </label>

                </form>
              </div>


          </div>
        </div>
      </div>
  </section>

  <p id="credit"> Tim Maudlin 2020 || Website Design and Development by Bobby Valenzuela</p>

</template>

<script>


export default {
    name: 'Contact',
    data(){
        return{

            
        }
    }
}

</script>



<style lang="scss">

@import  '~@/assets/scss/_init';

.contact{
  background: $primaryColor;

  .rightPanel{

      background: url('~@/assets/img/geo-02.jpg');
      background-position-y: top;
      background-size: cover;
      background-repeat: no-repeat;
  
    .rightPanel-content{

      background-color: #171717be;
      
      .form-container{
        background-color: rgba(61, 61, 61, 0.829) ;
        padding: 25px;
        border-radius: 3px;

        textarea{
          resize: none;
          min-height: 100px;
        }
        
        input, textarea{
          color: white;
          margin-top: 10px;
        }

        input:focus, textarea{
          border-bottom: 1px solid $secondaryColor!important;
          box-shadow: 0 1px 1px 0 $secondaryColor;
          margin-top: 17px;
          font-weight: 300;
        }

        .btn{
          background-color: $secondaryColor;
          margin-top: 20px;
        }
      }

    };
  };
};
    #credit{
      background-color: black!important;
  
      text-align: center;
      color: white;
      font-size: 12px;
      padding: 12px!important;
      letter-spacing: 0.4px;
  
    }

</style>