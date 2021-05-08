
import React  from 'react';
import { NavLink } from 'react-router-dom';
import {
    
  Container,
  Row,
  Col,
 
} from 'reactstrap';


import react from   "./header.css";


const Setting = () => {
  
  return (
  
<h-me>
    
<div class=" setting ">

{/* <!----banner-sectopn--->

<!----banner-sectopn---> */}
<div class="section_card">
    <div class="container">
        <div class=" row">
            <div class="col-md-8 offset-md-2 card p-5">
                <header1>
                    <h1 class="set_h">Setting</h1>
                    <div class="user-image">
                        <span>
                            <img class="w-100" src="assets/img/add-user.png" alt="add"/>
                        </span>

                    </div>
                </header1>
            </div>
        </div>

        <div class="row">
            <div class="col-md-8 offset-md-2 card p-5">
                <div class="top_sec">
                    <h3 class="h3_h">Sound</h3>
                    <div class="row">
                        <div class="col-md-7">
                            <div class="sound_li">
                                <ul>
                                   <a href=""> <li class="pt-2 pb-4">Sound Effect</li></a>
                                    <a href=""><li class="pt-2 pb-4">Background Music</li></a>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="sound_li text-center">
                                <ul>
                                    <li class="pt-2 pb-4"> <input class="switch" type="checkbox" checked /></li>
                                    <li class="pt-2 pb-4"> <input class="switch" type="checkbox" checked /></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div class="top_sec">
                    <h3 class="h3_h">Profile</h3>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="sound_li">
                                <ul>
                                 <li>
                                        <div class="imag_icon">
                                            <i class="fa fa-user-circle us" aria-hidden="true"></i>
                                        </div>
                                        <div class="text"><NavLink exact to="/update"><span>Edite Profile</span></NavLink></div>
                                    </li>
                                  

                                   <a href="change-pass.html">
                                    <li>
                                        <div class="imag_icon imag_icon1">
                                            <i class=" fa fa-key us" aria-hidden="true"></i>
                                        </div>
                                        <div class="text"><span>Change Password</span></div>
                                    </li>
                                      </a>  

                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                {/* <!---- Profile--> */}
                <div class="top_sec">
                    <h3 class="h3_h">Additional</h3>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="sound_li">
                                <ul><a href="notification.html">
                                        <li>
                                            <div class="imag_icon">
                                                <i class="fa fa-bell us" aria-hidden="true"></i>
                                            </div>
                                            <div class="text"><NavLink to="/notifiction">Notifiction</NavLink></div>
                                        </li>
                                    </a>
                                    <a href="#">
                                        <li>
                                            <div class="imag_icon imag_icon1">
                                                <i class=" fa fa-life-ring us" aria-hidden="true"></i>
                                            </div>
                                            <div class="text"><span>Support</span></div>
                                        </li>
                                    </a>
                                    <a href="#">
                                        <li>
                                            <div class="imag_icon imag_icon1">
                                                <i class=" fa fa-list-alt us" aria-hidden="true"></i>
                                            </div>
                                            <div class="text"><span>About Us</span></div>
                                        </li>
                                    </a>
                                    <a href="#">
                                        <li>
                                            <div class="imag_icon imag_icon1">
                                                <i class=" fa fa-file-text-o us" aria-hidden="true"></i>
                                            </div>
                                            <div class="text"><span>Terms &amp; Comdaction</span></div>
                                        </li>
                                            </a>
                                           <a href="#">
                                            <li>
                                                <div class="imag_icon imag_icon1">
                                                    <i class=" fa fa-user-secret us" aria-hidden="true"></i>
                                                </div>
                                                <div class="text"><span>Priacy Policy</span></div>
                                            </li>
                                             </a>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                {/* <!---- Regional--> */}
                <div class="top_sec">
                    <h3 class="h3_h">Regional</h3>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="sound_li">
                                <ul>
                                    <a href="#">
                                        <li>
                                            <div class="imag_icon">
                                                <i class="fa fa-language us" aria-hidden="true"></i>
                                            </div>
                                            <div class="text"><span>Language</span></div>
                                        </li>
                                    </a>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>


                <div class="version text-center mt-4">
                    <p><b>App Version 1.0</b></p>
                </div>

            </div>
        </div>



    </div>
</div>


</div>

</h-me>


  );


}

export default Setting;