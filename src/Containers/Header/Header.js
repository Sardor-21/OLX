import { faMoon, faSun, } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react'
import logo from "../../Images/olxlogo.png"
import ThemeContext from '../../ThemeContex';
import HeaderWrapper from "./HeaderWrapper";
import {Link} from "react-router-dom";
const Header = () => {
    const { theme, setTheme, colors } = useContext(ThemeContext);
    const toggle = () => {
        setTheme(theme == "light" ? "dark" : "light");
    }

    return (
        <HeaderWrapper className={'shadow'} colors={colors}>
            <div className="d-flex justify-content-between align-items-center w-100 py-3 container">
                <Link to="/">
                    <img className="logo" src={logo} alt="" />
                </Link>
                <div className={`nav__bar`}>
                    <span className="me-3">O'Z | RU</span>
                    <button className={`btn btn-${theme} shadow-none button me-3`} onClick={toggle}>
                        <FontAwesomeIcon icon={theme == "light" ? faSun : faMoon} />
                    </button>
                </div>
            </div>
        </HeaderWrapper>
    )
}

export default Header
