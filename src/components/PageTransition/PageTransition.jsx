import React, { Component, Fragment } from 'react'
import { TransitionGroup, Transition } from 'react-transition-group'
import styled from '@emotion/styled'
import { colors } from 'src/styles'

const timeout = 750
const hang = 500

const PageContent = styled.div`
  ${ props => props.transitionStatus === 'entering' ? 'position: absolute; top: 0; left: 0; right: 0; overflow: hidden;' : '' }
  ${ props => props.transitionStatus === 'exiting' ? 'position: absolute; top: 0; left: 0; right: 0; overflow: hidden;' : '' }
  ${ props => props.transitionStatus === 'exited' ? 'position: absolute; top: 0; left: 0; right: 0; overflow: hidden;' : '' }
`

const TransitionOverlay = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  background: ${ props => props.bgColor };
  transition: opacity ${ timeout }ms ease-in-out;
  opacity: 1;
  ${ ({ overlay }) => !overlay ? 'opacity: 0;' : 'opacity: 1' }
`

class PageTransition extends Component {
  state = {
  	overlay: true,
  	pathname: null
  }

  handleEntered = (node, isAppearing) => {
  	setTimeout(() => {
  		this.setState({ overlay: false })
  	}, hang)
  }

  static getDerivedStateFromProps (nextProps, prevState) {
  	if (nextProps.location.pathname !== prevState.pathname || !prevState.pathname) {
  		return { overlay: true, pathname: nextProps.location.pathname }
  	} else {
  		return null
  	}
  }

  render () {
  	const { location } = this.props
  	const { overlay } = this.state

  	let overlayColor = colors.offwhite

  	return (
  		<Fragment>
  			<TransitionGroup>
  				<Transition
  					key={location.pathname}
  					timeout={{
  						enter: 0,
  						exit: timeout
  					}}
  				>
  					{transitionStatus => {
  						return (
  							<Fragment>
  								<PageContent transitionStatus={transitionStatus}>
  									{this.props.children}
  								</PageContent>
  							</Fragment>
  						)
  					}}
  				</Transition>
  			</TransitionGroup>

  			<Transition
  				in={overlay}
  				appear={true}
  				timeout={{
  					enter: timeout,
  					exit: timeout,
  					appear: timeout * 2
  				}}
  				onEntered={this.handleEntered}
  			>
  				{status => (<TransitionOverlay overlay={overlay} transitionStatus={status} bgColor={overlayColor}/>)}
  			</Transition>
  		</Fragment>
  	)
  }
}

export default PageTransition
