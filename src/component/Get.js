

import React, {Component, useEffect, useState } from 'react';
import axios from 'axios';
  

function Get() {

// const [data, setDtata]=useState([])

    fetch("https://testdmcconsultancy.com/demo/fjs_plant/api/getSalesOrders?user_id=101").then((result)=>{

        result.json().then((resp)=>{
            console.warn("result",resp)
        })
    // result.json().then((resp)=>{
        //     console.warn("result", resp)
        //     setDtata(resp)
        // })
    })
      


 console.warn('data')
    

       
        return (
            <>
          
    
           <div class="container">
              <div class="row">
                    <div class="col-md-12 text-center"> 

                    <h1> GetAPI HITT</h1>

                 <p>Lorem   ipsoum Text</p>
                        <button type="button" >Save new User</button>

                    <p></p>

                    </div> 
                </div>
           </div>
           </>
        )
    
    }
    export default Get;
    