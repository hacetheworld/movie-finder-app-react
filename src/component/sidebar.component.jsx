import React, { Component } from 'react';
import author from '../ajay.jpg';

import './sidebar.style.scss';

class Sidebar extends Component {

    handleTrending = () => {
        this.props.trending();
    }

    handlePopularity = () => {
        this.props.popularity();
    }

    handleLatest = () => {
        this.props.latest();
    }

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
                    <li onClick={this.handleTrending}>Trending</li>
                    <li onClick={this.handleTrending}>Top Hits</li>
                    <li onClick={this.handleLatest}>New in {new Date().getFullYear()} </li>
                    <li onClick={this.handlePopularity}>Popular </li>
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