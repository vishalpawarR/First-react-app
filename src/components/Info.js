import React from 'react';
import ReactDOM from 'react-dom';

export default function Info() {
    return (
        <nav className="nav">
            <img className="nav__image" src="https://unsplash.it/317/317" alt="profile img" />
            <h1 className="nav__name">Vishal Pawar</h1>
            <p className="nav__prof">Frontend Developer</p>
            <a className="nav__site" href="http://vishalpawar.netlify.app/">My site</a>
            <div className="nav__social">
                <a className="nav__social--email" href="http://vishalpawar.netlify.app/"><i className="fa fa-envelope"></i>   Email</a>
                <a className="nav__social--linkedin" href="http://vishalpawar.netlify.app/"><i className="fa fa-linkedin"></i>   Linkedin</a>
            </div>
        </nav>
    )
}