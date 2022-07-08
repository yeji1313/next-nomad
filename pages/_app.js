import Layout from '../components/Layout';
import '../styles/globals.scss';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <Component key={router.asPath} {...pageProps} />
    </Layout>
  );
}

export default MyApp;
