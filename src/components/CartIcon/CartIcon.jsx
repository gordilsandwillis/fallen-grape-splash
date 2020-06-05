import React from 'react'
import styled from '@emotion/styled'
import CartSvg from 'src/assets/images/cart-icon.svg'
import { typography } from 'src/styles'

const Wrapper = styled.div`
	position: relative;
`

const StyledCartIcon = styled(CartSvg)`
	color: inherit;
	display: block;
	* {
		fill: currentcolor;
	}
	.bar {
		${ ({ count }) => count > 0 ? `
			display: none;
		` : `` }
	}
`

const CartCount = styled.span`
	position: absolute;
	color: inherit;
	position: absolute;
	top: -5%;
	left: 20%;
	right: 0;
	text-align: center;
	${ typography.bodySmall }
	${ ({ count }) => count > 9 ? `
	` : `` }
	line-height: 10px;
`

const CartIcon = ({ className, count }) => (
  <Wrapper className={className}>
		{count > 0 && (<CartCount count={count}>{count}</CartCount>)}
		<StyledCartIcon count={count} />
  </Wrapper>
)

CartIcon.defaultProps = {
	count: 0
}

export default CartIcon
