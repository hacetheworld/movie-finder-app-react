import React, { Component } from 'react'
import './header.style.scss'
class Header extends Component {

    handleChange = (e) => {
        let query = e.target.search.value;
        this.props.fetchSearchData(query);
        e.preventDefault();
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
                    <li>Trending</li>
                    <li>Top Hits</li>
                    <li>New in {new Date().getFullYear()} </li>
                    <li>Popular </li>
                </ul>

            </header>



        )
    }
}

export default Header;