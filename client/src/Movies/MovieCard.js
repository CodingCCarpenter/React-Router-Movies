import React from 'react';

function MovieCard ({title, director, metascore, stars}) {
  return(
    <div className="movie-card">
      <h2>{title}</h2>
    <div className="movie-director">
      <p>Director: <em>{director}</em></p>
    </div>
    <div className="movie-metascore">
      <p>Metascore: <strong>{metascore}</strong></p>
    </div>
    <h3>Actors</h3>

    {stars.map((star) => (
      <div key={star} className="movie-star">
        {star}
      </div>
    ))}
  </div>
);
}
    
    

export default MovieCard;
