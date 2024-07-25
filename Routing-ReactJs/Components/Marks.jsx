import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
export function Semmarks(){
    return (
        <div>
        <h1>Semmarks</h1>
        </div>
    )
    
}
export function Studentinfo(){
    return(
        <div>
        <h1>Student Info</h1>
        </div>
    )
}

const Marks = () => {
  return (
    <div>
      <button><Link to="Semmarks">Marks Sem Wise</Link></button>
      <button><Link to="Studentinfo">Studentinfo</Link></button>
      <Outlet />
    </div>
  )
}

export default Marks
