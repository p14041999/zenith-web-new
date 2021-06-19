import React, { Component } from 'react'
import logo from '../assets/logo.svg';
import '../styles/Navbar.scss';
export default class Navabar extends Component {
    render() {
        return (
            <div className="container py-3">
                <div className="nav-top">
                    <div>
                        <span className="hamburger"></span>
                    </div>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div></div>
                </div>
            </div>
        )
    }
}
