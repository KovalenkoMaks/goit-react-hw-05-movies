import { Link, useParams, Outlet } from 'react-router-dom';

import { useEffect, useState } from 'react';

import { getMovieById } from 'components/utils/API';
import { Container, LinkContainer } from './MoviesDetails.styled';

function MoviesDetails() {
  const [film, setFilm] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    getMovieById(moviesId).then(resp => {
      setFilm(resp);
    });
  }, [moviesId]);
  if (film.length === 0) return null;
  return (
    <>
      <Container>
        <img
          src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
          alt={film.title}
          width="300"
        />
        <div>
          <h1>
            {film.title} ({film.release_date.slice(0, 4)})
          </h1>
          <p>
            <span>User score:</span> {film.vote_average}
          </p>
          <h2>Overview</h2>
          <p>{film.overview}</p>
          <p>
            <span>Genres: </span>
            {film.genres
              .map(e => {
                return e.name;
              })
              .join(', ')}
          </p>
        </div>
      </Container>
      <LinkContainer>
        <Link to={'cast'} id={moviesId}>
          Cast
        </Link>
        <Link to={'reviews'} id={moviesId}>
          Reviews
        </Link>
      </LinkContainer>
      {/* 
      <Routes>
        <Route path="cast" element={<Cast />} />
      </Routes> */}
      <Outlet />
    </>
  );
}
export default MoviesDetails;
