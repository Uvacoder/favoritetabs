import Link from 'next/link';
import React from 'react';

import Logo from '../../public/background/logo.svg';
import Background from '../../public/background/vincentiu-solomon-ln5drpv_ImI-unsplash@3x.jpg';
import * as S from './_styles';

function Landing() {
  return (
    <>
      <S.Background>
        <svg
          viewBox="0 0 1280 235"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M626.757 76.492C894.792 146.824 1280.01 20.4368 1308 0V254H-18V126.708C149.937 96.3448 277.389 -15.1816 626.757 76.492Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="644.75"
              y1="53"
              x2="644.693"
              y2="254"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF79F2" stopOpacity="0.6" />
              <stop offset="1" stopColor="#281AC8" />
            </linearGradient>
          </defs>
        </svg>
        <img className="background" src={Background} alt="Background image" />
      </S.Background>

      <S.Container>
        <S.Main>
          <section className="welcome">
            <h1>
              <span>WELCO</span>ME
            </h1>
          </section>
          <section className="go-app">
            <p>
              Favorite Tabs helps you manage tabs in the browser you are not
              currently using.
            </p>
            <S.Button>
              <Link href="/app">GO NOW</Link>
            </S.Button>
          </section>
        </S.Main>
        <S.Footer>
          <img src={Logo} />
        </S.Footer>
      </S.Container>
    </>
  );
}

export { Landing };
