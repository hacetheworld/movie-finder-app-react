import React, { Component } from 'react'
import Card from './Card.component';
import { Link } from 'react-router-dom';
import './cardList.style.scss'
class CardList extends Component {


    render() {
        let Moviedata = this.props.data;

        return (
            <section className="movies">
                {Moviedata.map(data => <Link key={data.id} to={`/movie/${data.id}`}><Card data={data} /></Link>)}
            </section>
        )
    }
}

export default CardList;