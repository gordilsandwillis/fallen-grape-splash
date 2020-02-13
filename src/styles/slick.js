export const slick = `
  .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }
  .slick-list {
    position: relative;
    overflow: hidden;
    display: block;
    margin: 0;
    padding: 0;
    transition: height .3s ease-in-out;

    &:focus {
      outline: none;
    }

    &.dragging {
      cursor: pointer;
      cursor: hand;
    }
  }
  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    left: 0;
    top: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;

    &:before,
    &:after {
      content: "";
      display: table;
    }

    &:after {
      clear: both;
    }

    .slick-loading & {
      visibility: hidden;
    }
  }
  .slick-slide {
    float: left;
    height: 100%;
    min-height: 1px;
    [dir="rtl"] & {
      float: right;
    }
    > div {
      outline: none;
      > * {
        outline: none;
      }
    }
    img {
      display: block;
    }
    &.slick-loading img {
      display: none;
    }

    display: none;

    &.dragging img {
      pointer-events: none;
    }

    .slick-initialized & {
      display: block;
    }

    .slick-loading & {
      visibility: hidden;
    }

    .slick-vertical & {
      display: block;
      height: auto;
      border: 1px solid transparent;
    }
  }
  .slick-arrow.slick-hidden {
    display: none;
  }
`
