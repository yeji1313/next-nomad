import { useRouter } from 'next/router';
import React from 'react';

function MovieItem(props) {
  const router = useRouter();
  console.log(router);

  return <div>movie item</div>;
}

export const getServerSideProps = (ctx) => {
  console.log(ctx);
  console.log('getServerSideProps');

  return {
    props: {},
  };
};

export default MovieItem;
