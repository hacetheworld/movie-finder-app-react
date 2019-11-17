import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './Card.style.scss'
class Card extends Component {

    // getGeners(ids){
    //     fetch('')
    // }

    render() {
        let data = this.props.data;
        console.log(data);

        let backdropIMG = 'https://image.tmdb.org/t/p/original';
        return (

            <div className="movie_card">
                <div className="movie_header">
                    <img className="locandina" src={backdropIMG + data.poster_path} alt={data.title ? data.title : data.original_name} />
                    <div className="movie_header_content">
                        <Link to={`/movie/${data.id}`}><h1>{data.title ? data.title : data.original_name}</h1></Link>
                        <h4>Released : {data.release_date ? data.release_date.split('-')[0] : 'Unknown'}</h4>
                        {data.runtime ? (<span className="minutes"> Runtime :  {data.runtime} min</span>) : ''}
                        <p className="type">Action, Crime, Fantasy</p>
                    </div>
                </div>
                <div className="movie_desc">
                    <p className="text">
                        {data.overview}
                    </p>
                </div>
                {this.props.isSinglePage ? '' : (<div className="movie_social">
                    <ul>
                        <Link to={`/movie/${data.id}`}>
                            <li>
                                <i className="movie_social_icon">Read More</i>
                            </li>
                        </Link>
                        <Link to={`/movie/${data.id}`}>
                            <li>
                                <i className="movie_social_icon">Watch Now</i>
                            </li>
                        </Link>
                    </ul>
                </div>)}
            </div>



        )
    }
}

export default Card;