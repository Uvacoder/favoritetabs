import 'react-toastify/dist/ReactToastify.css';

import PropTypes from 'prop-types';

import ThemeContextProvider from '../context/useTheme';
import { GlobalStyles } from '../styles/global';

function App({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
};

export default App;
