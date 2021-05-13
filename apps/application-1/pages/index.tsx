import { GetStaticProps } from 'next';
import React from 'react';
import Image from 'next/image';

import styles from './index.module.css';

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.jikan.moe/v3/manga/1/characters');
  const data = await response.json();

  return {
    props: data,
    revalidate: 1,
  };
};

function Index(props) {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   * Note: The corresponding styles are in the ./index.css file.
   * Note: The corresponding styles are in the ./index.css file.
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <h2>Resources &amp; Tools</h2>
      <p>Thank you for using and showing some ♥ for Nx.</p>
      <div className="flex github-star-container">
        <a
          href="https://github.com/nrwl/nx"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          If you like Nx, please give it a star:
          <div className="github-star-badge">
            <img src="/star.svg" className="material-icons" alt="" />
            Star
          </div>
        </a>
      </div>
      <p>Here are some links to help you get started.</p>
      <ul className="resources">
        <li className="col-span-2">
          <a
            className="resource flex"
            href="https://egghead.io/playlists/scale-react-development-with-nx-4038"
          >
            Scale React Development with Nx (Course)
          </a>
        </li>
        <li className="col-span-2">
          <a
            className="resource flex"
            href="https://nx.dev/latest/react/tutorial/01-create-application"
          >
            Interactive tutorial
          </a>
        </li>
        <li className="col-span-2">
          <a className="resource flex" href="https://nx.app/">
            <svg
              width="36"
              height="36"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M120 15V30C103.44 30 90 43.44 90 60C90 76.56 76.56 90 60 90C43.44 90 30 103.44 30 120H15C6.72 120 0 113.28 0 105V15C0 6.72 6.72 0 15 0H105C113.28 0 120 6.72 120 15Z"
                fill="#0E2039"
              />
              <path
                d="M120 30V105C120 113.28 113.28 120 105 120H30C30 103.44 43.44 90 60 90C76.56 90 90 76.56 90 60C90 43.44 103.44 30 120 30Z"
                fill="white"
              />
            </svg>
            <span className="gutter-left">Nx Cloud</span>
          </a>
        </li>
      </ul>

      {props.characters &&
        props.characters.map((char) => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Image src={char.image_url} height={100} width={100} />
            <p>{char.name}</p>
          </div>
        ))}
    </div>
  );
}

export default Index;
