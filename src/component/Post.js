

import React, {Component, useEffect, useState } from 'react';
import axios from 'axios';
  

function Apiform() {

    const [email,setEmail]=useState("");
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");

const saveUser=async()=>{
    console.warn({name,email,password})
    let data = {name,email,password}
    console.log("My data=",data)
    /*  const config={
        headers:{
            'Content-type':'application/json'
        }
    }
    const body=data

    const res=await axios.post('https://jsonplaceholder.typicode.com/posts',body,config) 

    console.log("Resonce==>",res.data) */
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
        .then(response => response.json())
        .then(data => console.log("MyData=",data));
}
/* fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => console.log(json))
.then((result) =>{
    //console.warn("result",result);
    result.json().then((resp)=>{
console.warn("resp",resp)
    })
})

}
   */            
            
       
        return (
            <>
        
    
           <div class="container">
              <div class="row">
                    <div class="col-md-12 text-center" > 

                    <h1>API HITT</h1>

                    <input type="text"  value={name} onChange={(e)=>{setName(e.target.value)}} name=" Name" placeholder="Name" /><br/><br/>
                    <input type="text"  value={email} onChange={(e)=>{setEmail(e.target.value)}} name=" email" placeholder="Email" /><br/><br/> 
                        <input type="password"  value={password} onChange={(e)=>{setPassword(e.target.value)}} name="password" placeholder="Password"/><br/><br/>
                      
                        <button type="button" onClick={saveUser}>Save new User</button>

                    <p></p>

                    </div> 
                </div>
           </div>
           </>
        )
    
        }
    export default Apiform;
    