import * as typography from './typography'
import * as mediaQueries from './mediaQueries'
import * as colors from './colors'
import * as fonts from './fonts'

const { responsiveStyles } = typography

//
/**
 * All global styles
 */
export default `

  ${ fonts.MaterialIconsFont }

  ${ fonts.SuisseIntlLightFont }
  ${ fonts.SuisseIntlRegularFont }
  ${ fonts.SuisseIntlSemiBoldFont }
  ${ fonts.LyonDisplayLightFont }

  * {
    box-sizing: border-box;
  }

  html {
    -webkit-font-smoothing: antialiased;
    font-display: block;
    background: ${ colors.offwhite };
    &.page-lock {
      position: relative;
      overflow: hidden;
      height: 100%;
    }
    ${ mediaQueries.mediumAndBelow } {
      &.m-page-lock, &.m-page-lock body {
        position: relative;
        overflow: hidden;
        height: 100%;
      }
    }
  }

  body {
    ${ typography.body }
    color: ${ colors.primaryColor };
  }

  b, strong {
    font-family: ${ typography.bodyFontFamilyBold };
    font-weight: bold;
  }

  h1, h2, h3, h4, h5, h6, blockquote, p, ul, ol {
    font-weight: normal;
    margin: 0 0 0.5em;
  }

  p {
    ${ typography.body }
    ${ responsiveStyles('margin-top', 24, 16, 14, 8) }
    ${ responsiveStyles('margin-bottom', 8, 8, 6, 8) }
  }

  h1, .h1 {
    ${ typography.h1 }
    ${ responsiveStyles('margin-top', 32, 24, 16, 8) }
    ${ responsiveStyles('margin-bottom', 8, 8, 6, 8) }
  }

  h2, .h2 {
    ${ typography.h2 }
    ${ responsiveStyles('margin-top', 32, 24, 16, 8) }
    ${ responsiveStyles('margin-bottom', 8, 8, 6, 8) }
  }

  h3, .h3 {
    ${ typography.h3 }
    ${ responsiveStyles('margin-top', 32, 24, 16, 8) }
    ${ responsiveStyles('margin-bottom', 0, 0, 6, 8) }
  }

  h4, .h4 {
    ${ typography.h4 }
    ${ responsiveStyles('margin-top', 24, 16, 16, 8) }
    ${ responsiveStyles('margin-bottom', 0, 0, 0, 4) }
  }

  h5, .h5 {
    ${ typography.h5 }
    ${ responsiveStyles('margin-top', 24, 16, 16, 8) }
    margin-bottom: 0;
  }

  h6, .h6 {
    ${ typography.h6 }
    margin-top: 0;
    ${ responsiveStyles('margin-bottom', 0, 0, 0, 8) }
  }

  figcaption {
    ${ responsiveStyles('margin-top', 20, 12, 10, 4) }
    ${ responsiveStyles('margin-bottom', 4, 4, 2, 4) }
    ${ typography.caption }
    color: ${ colors.link };
    text-transform: uppercase;
    font-weight: bold;
    &.black {
      color: ${ colors.black };
      text-transform: none;
    }
  }

  hr {
    margin: 2em auto;
    border: 0;
    border-bottom: 1px solid ${ colors.grey };
  }

  a {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
    .notouch &:hover,
    .pointerevents &:hover {
      color: ${ colors.black };
    }
    &.text-link {
      font-size: 14px;
      line-height: 16px;
      font-weight: bold;
      text-decoration: none;
      letter-spacing: 1.75px;
      border-bottom: 1px solid ${ colors.link };
      text-transform: uppercase;
      color: ${ colors.link };
      padding-bottom: 3px;
    }
  }

  // Remove grey rectangle from iOS taps
  a, input, button {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  img {
    max-width: 100%;
  }

  time {
    color: ${ colors.grey };
  }

  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;  /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: 'liga';
  }

  .material-icons.md-18 { font-size: 18px; }
  .material-icons.md-24 { font-size: 24px; }
  .material-icons.md-36 { font-size: 36px; }
  .material-icons.md-48 { font-size: 48px; }


 em {
   border: 1px solid currentColor;
   padding: 0 .28em;
   font-style: normal !important;
 }
  
`
