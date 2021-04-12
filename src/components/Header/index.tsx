import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div style={{padding : '0 30px' ,display:'flex' , justifyContent:'space-between' , height:"100px" ,alignItems:'center' , backgroundColor:"rgb(161, 208, 197)" , position:'sticky',top:0, zIndex:999, width :'100%'}}>
      <div className="left">
        <span>Jeon-Ju Lental Studio</span>
      </div>
      <div className="right" style={{display:'flex'}}>
        <NavLink activeClassName="main" to='/' style={{textDecoration:'none', fontSize : "1.5rem",color:'white', fontWeight:700}}>메인페이지</NavLink>
        <NavLink activeClassName="calendar" to='/calendar' style={{textDecoration:'none', fontSize : "1.5rem",color:'white' ,marginLeft:'1em', fontWeight:700}}>예약현황</NavLink>
      </div>
    </div>
  )
}

export default Header
