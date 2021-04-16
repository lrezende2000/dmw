import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --space: 4px;
    --space-2x: 8px;
    --space-3x: 12px;
    --space-4x: 16px;
    --space-6x: 24px;
    --space-8x: 32px;
    --space-12x: 48px;
    --space-16x: 64px;
    --space-32x: 128px;

    --text-xs: 12px;
    --text-sm: 14px;
    --text-md: 16px;
    --text-lg: 18px;
    --text-xl: 24px;

    --gray: #252729;
    --black: #000;
    --white: #fff;
    --primary-color: #67bde2;
    --header: #0e0e10;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    height: 100%;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    position: relative;
    min-height: 100%;
    height: 100%;
    margin: 0;
    line-height: 1.65;
    font-size: var(--text-md);
    font-weight: 400;
    min-width: 320px;
    direction: ltr;
  }

  html,
  body {
    color: #fff;
    background-color: #111;
  }

  h1,
  h2,
  h3 {
    margin: 0;
  }
  
  a {
    text-decoration: none;
    transition: color 0.2s ease;
    color: var(--primary-color);
  }
`;
