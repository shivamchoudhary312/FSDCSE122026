import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function Registration(regdata) {
  const[name,setName]=React.useState();
  const[email,setEmail]=React.useState();
  const[password,setPassword]=React.useState();
  function registerUser(e){
    e.preventDefault();
    regdata = {name,email,password}
    // alert(name+email+password)
  }
  return (
    <div><h2>Registration</h2>
    <form onSubmit={registerUser}>
      <div class="form-group">
    <label for="exampleInputEmail1"> Name</label>
    <input type="text" onChange={(e)=>setName(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"/>
    <h2>{name}</h2>
    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your name with anyone else.</small> */}
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" onChange={(e)=>setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    <h2>{email}</h2>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" onChange={(e)=>setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Password"/>
    <h2>{password}</h2>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary" onClick={registerUser}>Submit</button>
</form></div>
  )
}

export default Registration