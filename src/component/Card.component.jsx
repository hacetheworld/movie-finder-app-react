import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './Card.style.scss'
class Card extends Component {

    constructor(props) {
        super(props)
        this.state = {
            gener: []
        }
    }

    getGeners(isids, gener = [12, 18, 878]) {
        if (isids) {
            fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=209e42e2c66ab2cba7c280981a877ace&language=en-US').then(data => data.json()).then(data => {
                // console.log(data['genres'][id]);
                let generData = [];
                let i = 0;
                data['genres'].map((data) => {
                    if (data.id === gener[i]) {
                        generData.push(data.name);
                        i++;
                    }
                });

                this.setState({ gener: generData });

            }

            )
        } else {
            let generData = [];

            gener.map((data) => {
                generData.push(data.name);

            });

            this.setState({ gener: generData });

        }

    }

    componentDidMount() {

        let isids;
        if (this.props.data.genre_ids) {
            this.getGeners(isids = true, this.props.data.genre_ids)
        } else {
            this.getGeners(isids = false, this.props.data.genres)
        }

    }

    render() {
        let data = this.props.data;
        let backdropIMG = 'https://image.tmdb.org/t/p/original';

        return (

            <div className="movie_card">
                <div className="movie_header">
                    <img className="locandina" src={backdropIMG + data.poster_path} alt={data.title ? data.title : data.original_name} />
                    <div className="movie_header_content">
                        <Link to={`/movie/${data.id}`}><h1>{data.title ? data.title : data.original_name}</h1></Link>
                        <h4>Released : {data.release_date ? data.release_date.split('-')[0] : 'Unknown'}</h4>
                        {data.runtime ? (<span className="minutes"> Runtime :  {data.runtime} min</span>) : ''}
                        <p className="type">{this.state.gener.map(gener => (`${gener} , `))} </p>
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