import { useRouter } from 'next/router';
import Seo from '../components/Seo';

function About(props) {
  const router = useRouter();

  const handleRoute = () => {
    router.push('/dynamic');
    // router.push('/', null, { scroll: true, shallow: false });
  };

  return (
    <>
      <Seo title="about" />
      <h1>This is about</h1>
      <button onClick={handleRoute}>Go to dynamic page</button>
    </>
  );
}

export default About;
