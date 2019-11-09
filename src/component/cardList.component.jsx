import React, { Component } from 'react'
import Card from './Card.component';
import './cardList.style.scss'
class CardList extends Component {


    render() {
        let data = this.props.data;

        return (
            <section className="movies">
                {data.map(data => <Card key={data.id} data={data} />)}
            </section>
        )
    }
}

export default CardList;