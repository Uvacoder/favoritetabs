import Link from 'next/link';

import Logo from '../../public/background/logo.svg';
import * as S from './_styles';

export default function Landing() {
  return (
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
  );
}
