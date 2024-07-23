import React, { useState } from 'react'

const Home = () => {
  const [data,setData]=useState({
    username:'',
    password:'',
  })
  const {username,password}=data;
  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submit=(data)=>{
    data.preventDefault;
    console.log(data);
  }
  return (
    <div>
      <center>
        <form onSubmit={submit}>
          <input type="text" placeholder='name' name='username' value={username} onChange={handleChange}/>
 <br />
 <input type="email" placeholder='password' value={password} name='password' onChange={handleChange}/>
       <button>Submit</button>
        </form>
      </center>
    </div>
  )
}

export default Home
