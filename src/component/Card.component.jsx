import React, { Component } from 'react'
import './Card.style.scss'
class Card extends Component {


    render() {
        let data = this.props.data;
        let backdropIMG = 'https://image.tmdb.org/t/p/original';
        return (
            <div key={data.id} className="movie">
                <div className='movie-img'>
                    <img className='poster' src={backdropIMG + data.backdrop_path} alt={data.title} className="poster" />
                    <p className="star">{data.vote_average}</p>
                </div>
                <div className='movie-info'>
                    <h1 className='movie-title'>{data.title}</h1>
                    <p className='movie-year'>Released Year : {data.release_date ?
                        data.release_date.split('-')[0] : 'no date'
                    }</p>
                </div>
            </div>
        )
    }
}

export default Card;