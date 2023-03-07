import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSearchMovie } from 'components/utils/API';
import { DebounceInput } from 'react-debounce-input';

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
    const name = query.target.value;
    const nextParams = name !== '' && { name };
    setSearchParams(nextParams);
  };
  return (
    <>
      <form action="">
        <label htmlFor="">
          <p>Search</p>
        </label>
        <DebounceInput
          type="text"
          debounceTimeout={500}
          value={searchParams.get('name')}
          onChange={updateQueryString}
          placeholder="Search movies"
        />
      </form>

      <Outlet />

      {searchFilm.length > 0 ? (
        <ul>
          {searchFilm?.map(e => (
            <li key={e?.id}>
              <Link to={`${e.id}`} id={e.id}>
                {e?.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

export default Movie;
