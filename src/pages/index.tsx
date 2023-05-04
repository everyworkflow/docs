import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">EveryWorkflow Documentation</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons} style={{gap: 16}}>
          <Link
            className="button button--secondary button--lg"
            to="/setup">Setup</Link>
          <Link
            className="button button--secondary button--lg"
            to="/component">Component</Link>

        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      // title={`Hello from ${siteConfig.title}`}
      title={`Docs`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main style={{ minHeight: '50vh' }}>
      </main>
    </Layout>
  );
}
