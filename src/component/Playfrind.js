
import React  from 'react';
import { NavLink } from 'react-router-dom';
import {
    
  Container,
  Row,
  Col,
 
} from 'reactstrap';


import react from   "./header.css";


const Playfrind = () => {
  
  return (
  
<h-me>
    
<div class=" setting ">

{/* <!----banner-sectopn--->

<!----banner-sectopn---> */}
<div class="section_card frin_d">
<div class="container">
  <div class="row">
    <div class="col-8 offset-md-2">
      <div class="card mt-3 tab-card">


        <nav>
                            <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">My Friend</a>
                                <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Friend Request</a>
                                <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Sent Request</a>
                            </div>
                        </nav>
<div class="contant_sec">
      

          <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <h5 class="card-title">No Friend</h5>
                            </div>
                            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <h5 class="card-title">You have No Friend request</h5>
                            </div>
                            
                            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                            <h5 class="card-title">You have No Panding request</h5>
                            </div>
                        </div>

        </div>
      </div>
    </div>
  </div>
</div>

</div>


</div>

</h-me>


  );


}

export default Playfrind;