import React, { Component } from 'react';
import './header.style.scss';
import { Link } from 'react-router-dom'
class Header extends Component {

    handleChange = (e) => {
        let query = e.target.search.value;
        this.props.fetchSearchData(query);
        e.preventDefault();
    }

    handleLatest = () => {
        this.props.latest();
    }

    render() {
        return (

            <header className='header'>
                <h1><a href='/'>Movies<strong>Finder</strong></a></h1>
                <form onSubmit={this.handleChange}>
                    <input type="search" name="search" id="input" className="Input-text" placeholder="Movie name, e.g. Intersteller" />
                    <button>Search </button>
                </form>

                <ul className='header-nav'>
                    <li onClick={this.handleLatest}>Trending</li>

                    <li onClick={this.handleLatest}>Top Hits</li>
                    <li onClick={this.handleLatest}>New in {new Date().getFullYear()} </li>
                    <li><a href='mailto:majay1638@gmail.com'>Contact me</a></li>
                </ul>

            </header>



        )
    }
}

export default Header;