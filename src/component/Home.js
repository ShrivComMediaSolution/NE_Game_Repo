import React, { useState,useEffect } from 'react';
import { NavLink,Link, Redirect } from 'react-router-dom';
import { useTimerConsumerUpdate } from './MyComponent/TimerContext'

import {

  Container,
  Row,
  Col,
 
} from 'reactstrap';
import Get from './Get';


import react from   "./header.css";
import Post from './Post';


const Home = (props) => {

console.log("Home rendring")
    const {setIsActive}=useTimerConsumerUpdate()

         const onClick=()=>{
           // console.log("onClick Home ")
                setIsActive(true)
        } 
  
  return (
  
<h-me>
    
<header class="mt-2 to_P">
        <div class="container">

            <div class="row">
                <div class="col-md-2 col-2">
                    <div class=" text-center">
                        <img class="t_image" src="assets/img/images.jpg" alt="logo" />
                    </div>
                </div>
                <div class="col-md-8  col-8">
                    <div class=" text-center">
                       <h1 class="text-white hed">Never Ending Game</h1>
                    </div>
                </div>
                <div class="col-md-2  col-2">
                    <div class=" text-center">
                       <NavLink to="/setting"> <img class="t_image" src="assets/img/settings.png" alt="logo" /></NavLink>
                    </div>
                </div>
            {/* <!-- top-input--> */}
         
        </div>
    </div>
    </header>

<Post/>
<br/>
{/* <Get/> */}
{/* <!----banner-sectopn---> */}
   <div class="section_card">
       <div class="container">
       <div class=" row">
           <div class="col-md-4">
                   <div class="card man1 card1 ">
                            <div class=" row m-1">          

                       <div class="col-md-8">
                           <div class="left">
                               <h3 class="play_heading">Play Onlone </h3>
                               <a class="play_btn" href="#">Play</a>
                           </div>
                       </div>
                       <div class="col-md-4">
                           <div class="image_r">
                               <img class="earth1" src="assets/img/earth.jpg" alt="" />
                           </div>
                       </div>
                   </div>
               </div>
               </div>
                 <div class="col-md-4">
                   <div class=" card man1 card2 ">
                            <div class=" row m-1">          

                       <div class="col-md-8">
                           <div class="left">
                               <h3 class="play_heading_n">Play Width Friends </h3>
                                  <p class="text-white m_p">Play width you own people</p>
                               <NavLink class="play_btn" to="/playfrind">Play</NavLink>
                           </div>
                       </div>
                       <div class="col-md-4">
                           <div class="image_r">
                               <img class="earth" src="assets/img/friend.png" alt="" />
                           </div>
                       </div>
                   </div>
               </div>
               </div>
                 <div class="col-md-4">
                   <div class=" card man1 card3 ">
                            <div class=" row m-1">          

                       <div class="col-md-8">
                           <div class="left">
                               <h3 class="play_heading_n">VS Computer </h3>
                               <p class="text-white  m_p">Play width Computer</p>
                                <NavLink class="play_btn" to="/main" onClick={onClick}>Play</NavLink> 
                           </div>
                       </div>
                       <div class="col-md-4">
                           <div class="image_r">
                               <img class="earth" src="assets/img/desk.png" alt="" />
                           </div>
                       </div>
                   </div>
               </div>
               </div> 
           </div>
      
       </div>
   </div>
   <section class="botom">
       <div class="container">
           <div class="row">
               <div class="col-md-12">
                    <div class="botam">
           <div class="row">
                  <div class="col-md-6">
                  <div class="lef_img">
                      <img src="assets/img/userico1n.png" alt="usr" />
                  </div>
               </div>
               <div class="col-md-6">
                  <div class="right_img pull-right">
                      <img src="assets/img/u-back.png" alt="usr" />
                  </div>
               </div>
               
           </div>
           </div>
          
               </div>
           </div>
       </div>
   </section>
   
    
</h-me>


  );


}

export default Home;