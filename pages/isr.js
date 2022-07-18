import Seo from '../components/Seo';
import Image from 'next/image';

function Isr(props) {
  return (
    <>
      <Seo title="Isr" />
      <h1>This is Isr</h1>
      <Image
        src="/vercel.svg"
        width="100"
        height="100"
        alt="logo"
        placeholder="blur"
        blurDataURL="/test.jpg"
      />
    </>
  );
}

export default Isr;
