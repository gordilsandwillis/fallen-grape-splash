import React from 'react'
import styled from '@emotion/styled'
import { useInView } from 'react-intersection-observer'

const EnteranceWrap = styled.div`
	> * {
		${ ({ timing, speed }) => `
			transition: transform ${ speed + 'ms' } ${ timing }, opacity ${ speed + 'ms' } ${ timing };
		` }
		${ ({ 'data-in-view': inView, transform }) => inView ? `
			transform: none;
			opacity: 1;
		` : `
			transform: ${ transform };
			opacity: 0;
		` }

		${ ({ delay, speed }) => delay > 0 && `
			transition-delay: ${ (speed * .115) * (delay) }ms;
		` }
		
		${ ({ items, delay, speed }) => Array.isArray(items) ? `
			${ items.map((item, index) => `
				&:nth-child(${ index }) {
					transition-delay: ${ (speed * .115) * (index + delay) }ms;
				}
			`) }
		` : `` }
	
	}
`

const ScrollEntrance = ({ children, className, transform, speed, delay, timing }) => {
	const [ref, inView] = useInView({ triggerOnce: true })

	if (!children) {
		return false
	}

	return (
		<EnteranceWrap
			ref={ref}
			delay={delay}
			data-in-view={inView}
			transform={transform}
			className={className}
			items={children}
			timing={timing}
			speed={speed}
		>
			{children}
		</EnteranceWrap>
	)
}

ScrollEntrance.defaultProps = {
	transform: 'translate3d(0, 40px, 0)',
	delay: 0,
	timing: 'cubic-bezier(0.44, 0.24, 0.16, 1.00)',
	speed: 650
}

export default ScrollEntrance
