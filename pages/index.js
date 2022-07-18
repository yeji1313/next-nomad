import { useEffect, useState } from 'react';
import Seo from '../components/Seo';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      // const response = await fetch(
      //   `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      // );
      const response = await fetch(`/api/movies`);
      const { results } = await response.json();
      setMovies(results);
      console.log(results);
    })();
  }, []);

  const handleMovieTitleClick = (movie) => {
    router.push(
      {
        pathname: `/movies/${movie.id}`,
        query: {
          title: movie.title,
          id: movie.id,
        },
      },
      `movies/${movie.id}`
    );
  };

  return (
    <>
      <Seo title="Home" />
      <h1>This is Home</h1>
      {!movies && <h4>loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4 onClick={() => handleMovieTitleClick(movie)}>
            {movie.original_title}
          </h4>
        </div>
      ))}
    </>
  );
}
