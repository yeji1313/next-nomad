import Link from 'next/link';

function Dynamic({ mockData }) {
  return (
    <>
      <h1>This page is Dynamic Page</h1>
      {mockData.map((data) => (
        <div key={data.id}>
          <Link href={`/dynamic/${data.id}`}>
            <a>id : {data.id}</a>
          </Link>
        </div>
      ))}
      <style jsx>
        {`
          a {
            color: green;
          }
        `}
      </style>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://62a9a2043b3143855437844b.mockapi.io/user`);
  const mockData = await res.json();

  return {
    props: {
      mockData,
    },
  };
};

export default Dynamic;
