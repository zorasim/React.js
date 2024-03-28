import React from "react";
import PropTypes from 'prop-types';
import "./assets/css/Movie.css"

export const Movies=({movies})=>{
    return(
        <div id="movies">
            {movies.map((movie,i)=>{
                return(
                    <div key={i}>
                        <img src={movie.imgUrl} alt={movie.name} />
                        <h2>{movie.name}</h2>
                        <p>Date: {movie.date}</p>
                        <p>Plot: {movie.plot}</p>
                        <a href={movie.imdblink} target="_blank">IMDb Link</a>
                    </div>
                )
            })
            }
        </div>
    )
}
Movies.propTypes={
    movies:PropTypes.arrayOf(PropTypes.object).isRequired
}
export default Movies;