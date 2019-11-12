import React, { Component } from 'react';
import Header from './header.component';
import Sidebar from './sidebar.component';
import CardList from './cardList.component';


class Main extends Component {


    constructor(props) {
        super(props);
        this.state = {
            searchResults: [{ "adult": false, "backdrop_path": "/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg", "belongs_to_collection": null, "budget": 165000000, "genres": [{ "id": 12, "name": "Adventure" }, { "id": 18, "name": "Drama" }, { "id": 878, "name": "Science Fiction" }], "homepage": "http://www.interstellarmovie.net/", "id": 157336, "imdb_id": "tt0816692", "original_language": "en", "original_title": "Interstellar", "overview": "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.", "popularity": 52.042, "poster_path": "/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg", "production_companies": [{ "id": 923, "logo_path": "/5UQsZrfbfG2dYJbx8DxfoTr2Bvu.png", "name": "Legendary Entertainment", "origin_country": "US" }, { "id": 9996, "logo_path": "/3tvBqYsBhxWeHlu62SIJ1el93O7.png", "name": "Syncopy", "origin_country": "GB" }, { "id": 13769, "logo_path": null, "name": "Lynda Obst Productions", "origin_country": "" }], "production_countries": [{ "iso_3166_1": "GB", "name": "United Kingdom" }, { "iso_3166_1": "US", "name": "United States of America" }], "release_date": "2014-11-05", "revenue": 675120017, "runtime": 169, "spoken_languages": [{ "iso_639_1": "en", "name": "English" }], "status": "Released", "tagline": "Mankind was born on Earth. It was never meant to die here.", "title": "Interstellar", "video": false, "vote_average": 8.3, "vote_count": 19964 }],

            byDefault: true
        }

    }


    trending = () => {
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=209e42e2c66ab2cba7c280981a877ace`).then(res => res.json())
            .then(res => {


                const searchResults = [];
                let count = 0;
                while (res.results[count] !== undefined && res.results[count] && count < 10) {

                    if (res.results[count].vote_average > 6.5) {
                        searchResults.push(res.results[count])
                    }
                    count++;
                }
                this.setState({ searchResults: searchResults, byDefault: false })

            });

    }

    latest = () => {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=209e42e2c66ab2cba7c280981a877ace`).then(res => res.json())
            .then(res => {


                const searchResults = [];
                let count = 0;
                while (res.results[count] !== undefined && res.results[count] && count < 10) {

                    if (res.results[count].vote_average > 3.5) {
                        searchResults.push(res.results[count])
                    }
                    count++;
                }
                this.setState({ searchResults: searchResults, byDefault: false })

            });

    }


    popularity = () => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=209e42e2c66ab2cba7c280981a877ace`).then(res => res.json())
            .then(res => {


                const searchResults = [];
                let count = 0;
                while (res.results[count] !== undefined && res.results[count] && count < 10) {

                    if (res.results[count].vote_average > 6.5) {
                        searchResults.push(res.results[count])
                    }
                    count++;
                }
                this.setState({ searchResults: searchResults, byDefault: false })

            });

    }

    fetchSearchData = (QUERY = 'Interstellar') => {


        fetch(`https://api.themoviedb.org/3/search/movie?query=${QUERY}&api_key=209e42e2c66ab2cba7c280981a877ace`).then(res => res.json())
            .then(res => {
                const searchResults = [];
                let count = 0;
                while (res.results[count] !== undefined && res.results[count] && count < 10) {

                    if (res.results[count].vote_average > 6.5) {
                        searchResults.push(res.results[count])
                    }
                    count++;
                }
                this.setState({ searchResults: searchResults, byDefault: false })

            });


    }


    render() {

        return (
            <>
                <Header latest={this.latest} fetchSearchData={this.fetchSearchData} />
                <div className='main'>
                    <Sidebar trending={this.trending} popularity={this.popularity} latest={this.latest} />
                    <CardList data={this.state.searchResults} />
                </div>
            </>
        )
    }
}



export default Main;