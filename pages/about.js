import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/navbar.js';

export default function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Navbar />
      <h1>About</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
      </>
  );
}