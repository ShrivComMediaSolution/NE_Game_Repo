import React  from 'react';
import react from   "./header.css";
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Signup( {name , title }) {
    return(
<div >
<ToastContainer />

<section class="login">     
    
    <div class="container">
        <div class="row">
            <div class="col-md-8 offset-md-2">
        <div class="man">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="logo lp_top text-center">
                        <img src="assets/img/logo.png" alt="logo" />
                        <h3 class=" text-white">Login</h3>
                    </div>
                </div>
            {/* <!-- top-input--> */}
                <div class="col-md-12">
                    <div class="input-form w70">
                        <input type="text" class="form-control" placeholder="Email" />
                        
              <input id="password-field" type="password" class="form-control" name="password" value="Password" />
              <span toggle="#password-field" class="fa fa-eye field-icon toggle-password"></span>
                    
                    <div class="forgot trxt-right">
                        <NavLink exact class="text-white" tag="a" to="/forgot">Forgot Password?</NavLink>
                    </div>
                    </div>
                </div>
                {/* <!-- bottom-input--> */}
                   <div class="col-md-12">
                    <div class="input-form_l w70">
                        <a href="dashboard.html"><input type="text" class="form-control text-center border-0 f text-white btn bg-primary1" value="Login"/></a>
                       
                    </div>
                    
                    
                    <div class="or text-center">
                        <strong class="text-white bold">OR</strong>
                    </div>
                    
                </div>
                
                
                    {/* <!--  facebookbtn--> */}
                            <div class="col-md-12">
                    <div class="input-form_l w70">
                        <input type="text" class="text-center form-control border-0 f text-white facebook" value="Facebook"/>
                       
                    </div>
                    
                     <div class="input-form_l w70 pt-3">
                        <input type="text" class="text-center  form-control border-0 f text-white google" value="Google" />
                       
                    </div>
                </div>
                
                            <div class="col-md-12">
                    <div class="input-form_l w70 text-center">
                    
                     <p>New user? ckick here for  <NavLink  class="text-white s_ingup"  tag="a"  to="/update" ><b> Sign Up</b></NavLink></p>
                  
                    </div>
                  
            </div>
        </div>
    </div>
    
            </div>
        </div>
    </div> 
    </div>   
    </section>

</div>


    );

}
export default Signup;