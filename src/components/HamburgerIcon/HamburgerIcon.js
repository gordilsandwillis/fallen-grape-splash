import React from 'react'
import styled from '@emotion/styled'
import { animations } from 'src/styles'

const MenuLink = styled.div`
  display: inline-block;
  &.active {
  outline: none;
  }
  &.clicked {
    .menu-icon {
      opacity: 1;
      transform: rotate(-180deg);
      &:before {
        transform: translate3d(-100%, 5px, 0);
        opacity: 0;
        width: 0;
      }
      &:after {
        transform: translate3d(100%, -5px, 0);
        opacity: 0;
        width: 0;
      }
      .center {
        transform: rotate(-45deg);
        &:before {
          transform: rotate(-90deg);
        }
      }
    }
  }
`

const MenuIcon = styled.div`
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 30px;
  height: 20px;
  transition: transform ${ animations.mediumSpeed } ease-in-out;
  color: currentColor;

  &:before,
  &:after,
  .center,
  .center:before {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    position: absolute;
    background-color: currentColor;
    /* transition: transform ${ animations.mediumSpeed } ease-in-out, */
                /* opacity ${ animations.mediumSpeed } ease-in-out, */
                /* width ${ animations.mediumSpeed } ease-in-out, */
                /* background-color ${ animations.mediumSpeed } ease-in-out; */
  }
  &:before {
    top: 0;
    left: 0;
  }
  &:after {
    bottom: 0;
    right: 0;
  }
`

const Center = styled.div`
box-sizing: border - box;
top: 50%;
margin-top: -1px;
`

const HamburgerIcon = ({ scrolled, hasAtf, clicked }) => (
	<MenuLink className={clicked && 'clicked'}>
		<MenuIcon scrolled={scrolled} hasAtf={hasAtf} scrolled={scrolled} clicked={clicked} className="menu-icon">
			<Center className="center" />
		</MenuIcon>
	</MenuLink>
)

export default HamburgerIcon
