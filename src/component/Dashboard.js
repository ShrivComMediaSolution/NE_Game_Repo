import { Component } from "react"



const Dashboard = () => {
    return(
        <div>
              <div class="man">
      <header class="mt-2">
        <div class="container">
            <div class="overlay_d"></div>
            <div class="row">
                <div class="col-md-2">
                    <div class=" text-center">
                        <img class="t_image" src=" assets/img/images.jpg" alt="logo" />
                    </div>
                </div>
                <div class="col-md-8">
                    <div class=" text-center">
                       <h1 class="text-white hed">Never Ending Game</h1>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class=" text-center">
                       <a href="setting.html"> <img class="t_image" src=" assets/img/settings.png" alt="logo" /></a>
                    </div>
                </div>
            {/* <!-- top-input--> */}
         
        </div>
    </div>
    </header>
{/* <!----banner-sectopn---> */}
<section class="bannner_slider">
    <div class="cras_ul">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="row">
          <div class="col-md-6"><img class="d-block w-100 sl_id" src=" assets/img/s1.jpg" alt="First slide" /></div>
          <div class="col-md-6"><img class="d-block w-100 sl_id" src=" assets/img/s3.jpg" alt="First slide" /></div>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 sl_id" src=" assets/img/n1.png" alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 sl_id" src=" assets/img/s2.png" alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </div>
</section>
{/* <!----banner-sectopn---> */}
   <div class="section_card">
       <div class="container">
       <div class=" row">
           <div class="col-md-12">
                   <div class="card card1 mt-4 m-3">
                            <div class=" row m-1">          

                       <div class="col-md-8">
                           <div class="left">
                               <h3 class="play_heading">Play Online </h3>
                               <a class="play_btn" href="#">Play</a>
                           </div>
                       </div>
                       <div class="col-md-4">
                           <div class="image_r">
                               <img class="earth1" src=" assets/img/earth.jpg" alt="" />
                           </div>
                       </div>
                   </div>
               </div>
               </div>
                 <div class="col-md-12">
                   <div class=" card card2 mt-5 m-3">
                            <div class=" row m-1">          

                       <div class="col-md-8">
                           <div class="left">
                               <h3 class="play_heading_n">Play Width Friends </h3>
                                  <p class="text-white">Play width you own people</p>
                               <a class="play_btn" href="#">Play</a>
                           </div>
                       </div>
                       <div class="col-md-4">
                           <div class="image_r">
                               <img class="earth" src=" assets/img/friend.png" alt="" />
                           </div>
                       </div>
                   </div>
               </div>
               </div>
                 <div class="col-md-12">
                   <div class=" card card3 mt-5 m-3">
                            <div class=" row m-1">          

                       <div class="col-md-8">
                           <div class="left">
                               <h3 class="play_heading_n">VS Computer </h3>
                               <p class="text-white">Play width Computer</p>
                               <a class="play_btn" href="#">Play</a>
                           </div>
                       </div>
                       <div class="col-md-4">
                           <div class="image_r">
                               <img class="earth" src=" assets/img/desk.png" alt=""/>
                           </div>
                       </div>
                   </div>
               </div>
               </div> 
           </div>
           <div class="botam">
           <div class="row">
                  <div class="col-md-6">
                  <div class="lef_img">
                      <img src=" assets/img/userico1n.png" alt="usr"/>
                  </div>
               </div>
               <div class="col-md-6">
                  <div class="right_img pull-right">
                      <img src=" assets/img/u-back.png" alt="usr" />
                  </div>
               </div>
               
           </div>
           </div>
       </div>
       </div>
   </div>
   
        </div>
    )
}
export default Dashboard;