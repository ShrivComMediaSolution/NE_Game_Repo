import React from 'react';


const Upadte = () => {
    return(
        <div>
            <div class="man">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="logo lp_top text-center">
                        <img src="assets/img/logo.png" alt="logo"/>
                        <h3 class=" text-white ">
                        
                        <p class="up_pro">Update Profile</p>
                       <div class="image-upload pos">
                         
                          <label for="file-input">
                            <img src="assets/img/usericon.png"/>
                          </label>

                          <input id="file-input" type="file"/>
                          <i class="fa fa-camera cm" aria-hidden="true"></i>
                        </div>
                       
                        </h3>
                    </div>
                </div>
            {/* <!-- top-input--> */}
                <div class="col-md-12">
                    <div class="input-form w70">
                        <input type="text" class="form-control" placeholder="Full Name "/>
                          <input type="text" class="form-control" placeholder="Mobile(Optional)"/>
                        <input type="text" class="form-control" placeholder="Bio"/>
                        <input type="date" class="form-control"/>
                      <select class="select">
                          <option>1</option>
                          <option>1</option>
                          <option>1</option>
                          <option>1</option>
                      </select>
                        
                      
                        
                      
                        
             
                   </div>
                </div>
                
                       <div class="col-md-12">
                    <div class="input-form_l res w70">
                        <input type="text" class="form-control text-center border-0 f text-white " value="Update Profile"/>
                       
                    </div>
                   
                    
                </div>
            
        </div>
    </div>
    
    
   

</div>
        </div>
    )
}

export default Upadte;