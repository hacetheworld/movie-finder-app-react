import React, { Component } from 'react'
import Card from './Card.component';
import './cardList.style.scss'
class CardList extends Component {


    render() {
        let Moviedata = this.props.data;
        return (
            <section className="movies">
                {Moviedata.map(data => <Card key={data.id} data={data} isSinglePage={false} genersId={data.genre_ids} />)}
            </section>
        )
    }
}

export default CardList;