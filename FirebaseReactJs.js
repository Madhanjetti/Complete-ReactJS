//App.jsx
import React, { useState } from 'react'
import axios from './axios'
const About = () => {
  const [data,setData]=useState({
    username:'',
    password:'',
    confirmPassword:'',
    email:'',
    
  })
  const {username,password,confirmPassword,email}=data;
  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submit=(data)=>{
    data.preventDefault;
    if(password===confirmPassword){
axios.post('Firebaseurl/register.json',data).then(()=>alert("Data Submitted Successfully"))
    console.log(data);
    }
    else{
      alert('Incorrect Password Recheck')
    }
  }
  return (
    <div>
      <form onSubmit={submit}>
    <input type="text" name='username' value={username} placeholder='username' onChange={handleChange}/>
    <br />
    <input type="password" name='password' value={password} placeholder='password' onChange={handleChange}/>
      <br />
      <input type="password" name='confirmPassword' value={confirmPassword} placeholder='confirmPassword' onChange={handleChange}/>
        <br />
        <input type="email" name='email' value={email} placeholder='email' onChange={handleChange}/>
          <br />
          <button>Submit</button>
      </form>
    </div>
  )
}

export default App
