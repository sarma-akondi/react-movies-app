import React, { Component } from 'react';
import Header from '../../common/header/Header';
import moviesData from '../../common/movieData';

class Details extends Component {

    constructor() {
        super();
        this.state = {
            movie: {}
        }
    }

    componentDidMount() {
        let currentState = this.state;
        currentState.movie = moviesData.filter((mov) => {
            return mov.id === this.props.movieId
        });
        this.setState({currentState})
    }

    render() {
        return (
            <div className="details">
                <Header />
                <div className="flex-containerDetails">
                    <div className="leftDetails">
                        <div className="middleDetails">
                            <div className="rightDetails">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Details;