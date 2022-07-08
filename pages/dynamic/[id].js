import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Dynamic.module.scss';

function Dynamic({ mockData }) {
  const [num, setNum] = useState(1);
  const router = useRouter();

  const handleDynamic = (id) => {
    router.push({
      pathname: '/dynamic/[id]',
      query: { id },
    });
  };

  return (
    <>
      <h1>This page is Dynamic Page</h1>
      <h2>dynamic id : {mockData.id}</h2>
      <div className={styles.num}>
        <h4 style={{ margin: '0px' }} className={styles.size}>
          {num}
        </h4>
        <button onClick={() => setNum((pre) => pre + 1)}>+</button>
      </div>
      <div className={styles.link}>
        <div>아래의 router는 Link를 통해 이동</div>
        <Link href="/dynamic/2">
          <a>dynamic/2</a>
        </Link>
        <Link href="/dynamic/3">
          <a>dynamic/3</a>
        </Link>
      </div>
      <div>----------------------------------------</div>
      <div className={styles.router}>
        <div>아래의 router는 useRouter.push를 통해 이동</div>
        <div onClick={() => handleDynamic(4)}>dynamic/4</div>
        <div onClick={() => handleDynamic(5)}>dynamic/5</div>
      </div>
    </>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://62a9a2043b3143855437844b.mockapi.io/user/${context.params.id}`
  );
  const mockData = await res.json();

  return {
    props: {
      mockData,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch('https://62a9a2043b3143855437844b.mockapi.io/user');
  const posts = await res.json();

  const ids = posts.map((post) => post.id);
  const paths = ids.map((id) => {
    return { params: { id: id.toString() } };
  });

  return {
    paths: paths,
    fallback: 'blocking',
  };
};

export default Dynamic;
