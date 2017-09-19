import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const styles = {
  active: { 
    textDecoration: "underline", 
    fontWeight: "bold",
    color: "black"
  }
}

const Navbar = () => {
  <nav>
    <NavLink activeStyle={styles.active} to="/">Home</NavLink>
    {' '}
    <NavLink activeStyle={styles.active} to="/about">About</NavLink>
  </nav>
} 

export default withRouter(Navbar);
