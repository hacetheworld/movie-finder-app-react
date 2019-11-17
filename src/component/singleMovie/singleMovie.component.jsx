import React, { Component } from 'react'
import Header from '../header.component';
import Sidebar from '../sidebar.component';
import Card from '../Card.component';

export default class SingleMovie extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movie: []
        }

    }


    findMovieById = (movieId) => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=209e42e2c66ab2cba7c280981a877ace&language=en-US`).then(data => data.json()).then(res => {
            let data = [];
            for (const key in res) {
                data[key] = res[key];
            }
            this.setState({ movie: [data] })
        });
    }

    componentDidMount() {
        this.findMovieById(this.props.movieId);
    }

    render() {
        let data = this.state.movie[0]
        console.log(data);

        return (

            <div>
                <Header />

                <div className='main'>
                    <Sidebar />
                    <div className="movies">
                        {data ? <Card data={data} isSinglePage={true} /> : `<h1>Fetching...</h1>`}

                    </div>

                </div>
            </div>
        )
    }
}
