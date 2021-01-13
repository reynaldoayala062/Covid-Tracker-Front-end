import React from 'react';
import { NavLink } from  'react-router-dom'

const Header = () => {
    return (
        <div>

            <NavLink to='/home'> Home </NavLink>

            <NavLink to='/map'> Map </NavLink>

            <NavLink to='/user-profile'> User Profile </NavLink>

            <NavLink to='/login'> Login </NavLink>

            <NavLink to='/signup'> Sign Up </NavLink>

        </div>
    )
}

export default Header;