import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Analytical Full Stack Developer</p>
        <p>
          You can find some of my work here: {' '} 
          <a href="https://www.github.com/sdar30">github</a>
        </p>
      </section>
    </Layout>
  );
}