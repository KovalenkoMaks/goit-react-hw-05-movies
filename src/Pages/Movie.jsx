import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSearchMovie } from 'components/utils/API';
import { DebounceInput } from 'react-debounce-input';
import { FilmListEl, FilmItem, FormEl } from './Movie.styled';

// import  tesst  from './Movie.styled';
// import { FilmListEl, FilmItem } from './FilmList.styled';

function Movie({ search, setSearch }) {
  const [searchFilm, setSearchFilm] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const search = searchParams.get('name');
    if (search === null) return;
    getSearchMovie(search).then(resp => {
      setSearchFilm(resp.results);
    });
  }, [searchParams]);

  const updateQueryString = query => {
    console.log(query);
    // if (query.nativeEvent.data === 'Enter') return;
    query.preventDefault();
    const name = query.target.value;
    const nextParams = name !== '' && { name };
    setSearchParams(nextParams);
  };
  // const handelbtn = e => {
  //   console.log(e);
  // };
  return (
    <>
      <FormEl action="" onSubmit={event => event.preventDefault()}>
        <label htmlFor="">
          <p>Search</p>
        </label>
        <DebounceInput
          // forceNotifyByEnter={false}
          type="text"
          debounceTimeout={500}
          value={searchParams.get('name')}
          onChange={updateQueryString}
          placeholder="Search movies"
        />
        {/* <button type="button" onClick={handelbtn}>
          Enter
        </button> */}
      </FormEl>

      <Outlet />

      {searchFilm.length > 0 ? (
        <FilmListEl>
          {searchFilm?.map(e => (
            <FilmItem key={e?.id}>
              <Link
                to={`${e.id}`}
                id={e.id}
                cover={`https://image.tmdb.org/t/p/w500/${e.poster_path}`}
              >
                {e?.title}
              </Link>
            </FilmItem>
          ))}
        </FilmListEl>
      ) : null}
    </>
  );
}

export default Movie;
