import React from 'react'
import {
	TransitionGroup,
	Transition as ReactTransition
} from 'react-transition-group'

const timeout = 750

const getTransitionStyles = {
	entering: {
		position: `absolute`,
		top: 0,
		left: 0,
		right: 0,
		overflow: `hidden`,
		position: `absolute`,
		opacity: 0,
	},
	entered: {
		position: `absolute`,
		top: 0,
		left: 0,
		right: 0,
		overflow: `hidden`,
		transition: `opacity ${ timeout }ms ease-in-out`,
		opacity: 1,
	},
	exiting: {
		position: `absolute`,
		top: 0,
		left: 0,
		right: 0,
		overflow: `hidden`,
		transition: `opacity ${ timeout }ms ease-in-out`,
		opacity: 0,
	},
}

class PageTransition extends React.PureComponent {
	render () {
		const { children, location } = this.props
		return (
			<TransitionGroup>
				<ReactTransition
					key={location.pathname}
					timeout={{
						enter: timeout,
						exit: timeout,
					}}
				>
					{status => (
						<div
							style={{
								...getTransitionStyles[status],
							}}
						>
							{children}
						</div>
					)}
				</ReactTransition>
			</TransitionGroup>
		)
	}
}
export default PageTransition
