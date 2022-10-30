import React from "react";
import Home from './Home.js'
import About from "./About.js"


function NavBar() {
  // update the JSX being returned!
  return (
    <div>
      <nav>NavBar
        <a href="#home">{Home}</a>
        <a href='#about'>{About}</a>
      </nav>
    </div>
  )
}

export default NavBar;
