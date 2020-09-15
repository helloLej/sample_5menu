import React from 'react'
import { NavLink } from "react-router-dom";
import './header.css'
import menus from './menuData'

const activeStyle = {
  padding: "10px",
  background: "#56d5fa",
  color: "white"
};

function Header() {
  return (
    <nav>
      <ul className="ul_menuWrap">
        {menus.map(el => 
          <li className="li_menuItem" key={el.name}>
            <NavLink activeStyle={activeStyle} className="a_menu" exact to={el.path} title={el.name}>
              {el.name}
            </NavLink>
          </li>)}
      </ul>
    </nav>
  )
}

export default React.memo(Header)
