

// import React, {useEffect, useState } from 'react';



// https://www.youtube.com/watch?v=-LqT50pBKNw
  

// function Apiform() {

// const [email,setEmail]=useState("");
// const [name,setName]=useState("");
// const [image,setImage]=useState("");
// function  saveUser()
// {
//     console.warn(email,name,image);
//     let data={email,name,image}
// fetch("https://reqres.in/api/users",{
//     method:'POST',
//     headers:{
//         'Accept':'applaction/json',
//         'Contant-Type':'applaction/json'
//     },
//     body:JSON.stringify(data)
// }).then((result)=>{
// console.warn("result",result)
// })

// }

//     return (
//         <>
//        <h1>API HITT</h1>

//        <div class="container">
//           <div class="row">
//                 <div class="col-md-12"> 
//                     <input type="text" value={email}  onChange={(e)=>{setEmail(e.target.value)}} name="Email"/> <br/><br/>
//                     <input type="text"  value={name} onChange={(e)=>{setName(e.target.value)}} name="first Name"/><br/><br/>
//                     <input type="file"  value={image} onChange={(e)=>{setImage(e.target.value)}} name="image"/><br/><br/>

//                     <button type="button" onClick={saveUser}>Save new User</button>
//                 </div> 
//             </div>
//        </div>
//        </>
//     )

// }
// export default Apiform;
