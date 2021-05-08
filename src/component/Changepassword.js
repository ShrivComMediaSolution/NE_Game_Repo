import {Cmponent} from 'react';



const Chanepassword = () => {
    return(
        <div>
              <div class="man change-pass">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="logo lp_top text-center">
                        <img src="assets/img/logo.png" alt="logo" />
                     <p class="chan_ge"><b>Change Password</b></p>
                     
                     
                     <div class="input-form w70 pt-3">
                        <input type="text" class="form-control" placeholder="Old Password  " />
                          <input type="text" class="form-control" placeholder="Enter New password" />
                        <input type="text" class="form-control" placeholder="Conform Password" />
                        
                        </div>
                        <div class="input-form_l res w70 update">
                        <input type="text" class="form-control text-center border-0 f text-white " value="Update " />
                       
                    </div>
                        
                </div>
             
                   
            </div>
        </div>
        </div>
        </div>
      
        </div>
    )
}
export default Chanepassword;