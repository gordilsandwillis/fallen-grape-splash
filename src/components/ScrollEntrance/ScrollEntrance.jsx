import React from 'react'
import styled from '@emotion/styled'
import { useInView } from 'react-intersection-observer'

const transitionTiming = 'cubic-bezier(0.44, 0.24, 0.16, 1.00)'
const transitionSpeed = '.65s'
const transitionDelay = 0.075

const EnteranceWrap = styled.div`
  > * {
    transition: transform ${ transitionSpeed } ${ transitionTiming },
      opacity ${ transitionSpeed } ${ transitionTiming };
    ${ ({ 'data-in-view': inView, transform }) =>
		inView
			? `
			transform: none;
			opacity: 1;
		`
			: `
			transform: ${ transform || `translate3d(0, 40px, 0)` };
			opacity: 0;
		` }

    ${ ({ children }) =>
		Array.isArray(children)
			? `
			${ children.map(
		(item, index) => `
				&:nth-of-type(${ index + 1 }) {
					transition-delay: ${ transitionDelay * (index + 1) }s;
				}
			`
	) }
		`
			: `` }
  }
`

const ScrollEntrance = ({ children, className, transform }) => {
	const [ref, inView] = useInView({ triggerOnce: true })

	return (
		<EnteranceWrap
			ref={ref}
			data-in-view={inView}
			className={className}
			transform={transform}
		>
			{children}
		</EnteranceWrap>
	)
}

export default ScrollEntrance
