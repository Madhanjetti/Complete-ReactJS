import React, { useState } from 'react'
import { useContext } from 'react'
import {context} from '../App'
const Header = () => {

 let name=useContext(context)
 const [idName,setName]=useState('Dhoni');
    return (
    <div>
      <center>
        
        <h2>name:{name}</h2>
     
      </center>
    </div>
  )
}

export default Header
