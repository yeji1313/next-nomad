import React from 'react';
import Link from 'next/link';
import styles from '../styles/Nav.module.scss';
import { useRouter } from 'next/router';

function Nav(props) {
  const router = useRouter();

  return (
    <div className={styles.nav}>
      <Link href="/">
        <a className={router.pathname === '/' ? styles.home : ''}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === '/about' ? styles.about : ''}>
          about
        </a>
      </Link>
      <Link href="/isr">
        <a className={router.pathname === '/isr' ? styles.isr : ''}>isr</a>
      </Link>
      <Link href="/dynamic">
        <a className={router.pathname === '/dynamic' ? styles.dynamic : ''}>
          dynamic
        </a>
      </Link>
    </div>
  );
}

export default Nav;
