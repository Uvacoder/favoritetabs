const fontTypes = `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`;

const darkTheme = {
  body: '#1d2227',
  text: '#e0e0e0',
  textLow: '#a1a1a1',
  primary: '#00D594',
  disabled: '#C0E4C5',
  primaryHover: '#00BC93 ',
  toggleBorder: '#6B8096',
  toggle: '#f1f1f1',
  title: '#df7296',
  button_primary:
    'linear-gradient(90deg, rgba(255,0,204,1) 0%, rgba(51,51,153,1) 90%)',
  button_hover:
    'linear-gradient(90deg, rgba(255,0,204,0.7) 0%, rgba(51,51,153,0.7) 90%)',
  fontPrimary: `Inter, ${fontTypes}`,
  fontSecondary: `InterBold, ${fontTypes}`,
  Poppins_bold: `Poppins_Bold, ${fontTypes}`,
  borderShadow: 'rgba(250, 250, 250, 0.5)',
  box: '#262d34',
  input: '#262d34',
  inputBackground: '#e8f0fe',
  error: '#972f3d',
  toast: '#fff',
};

const lightTheme = {
  body: '#f6f7f9',
  text: '#1F1F1F',
  textLow: '#a1a1a1',
  primary: '#00D594',
  disabled: '#C0E4C5',
  primaryHover: '#00BC93 ',
  toggleBorder: '#FFF',
  toggle: '#262d34',
  title: '#c14c6f',
  button_primary:
    'linear-gradient(90deg, rgba(255,0,204,1) 0%, rgba(51,51,153,1) 90%)',
  button_hover:
    'linear-gradient(90deg, rgba(255,0,204,0.7) 0%, rgba(51,51,153,0.7) 90%)',
  fontPrimary: `Inter, ${fontTypes}`,
  fontSecondary: `InterBold, ${fontTypes}`,
  Poppins_bold: `Poppins-Bold, ${fontTypes}`,
  borderShadow: 'rgba(0, 0, 0, 0.3)',
  box: '#efefef',
  input: '#1d2227',
  inputBackground: '#e4f4fe',
  error: '#b00020',
  toast: '#262d34',
};

export { lightTheme, darkTheme };
