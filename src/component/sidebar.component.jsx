import React, { Component } from 'react';
import author from '../ajay.jpg';

import './sidebar.style.scss';

class Sidebar extends Component {

    render() {
        return (
            <div className='sidebar'>
                <div className='about'>
                    <img src={author} alt='Author' />
                    <div>
                        <h1>Ajay Meena</h1>
                        <p>Yes, I Love building Stuff with Technology</p>
                    </div>
                </div>
                <ul className='sidebar-nav'>
                    <li>Trending</li>
                    <li>Top Hits</li>
                    <li>New in {new Date().getFullYear()} </li>
                    <li>Popular </li>
                </ul>

                <ul className='sidebar-social-nav'>
                    <li><a href='mailto:majay1638@gmail.com?Subject=Hi' target='_top'>Say Hello</a></li>
                    <li><a href='https://hacetheworld.github.io/'>About Me</a></li>
                    <li><a href='https://github.com/hacetheworld'>Github</a></li>
                </ul>
            </div>



        )
    }
}

export default Sidebar;