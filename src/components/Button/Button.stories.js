import React from 'react'
import styled from '@emotion/styled'
import { storiesOf } from '@storybook/react'
import Button from './Button'
import Link from 'src/components/Link'
import TestIcon from 'src/assets/images/mosaic_wordmark_black.svg'

const SpaceOut = styled.div`
	margin: 1rem 0 3rem;
	display: flex;
	> * {
		margin-right: 1.5rem;
	}
`

storiesOf('Styleguide', module)
	.add('Buttons', () => (
		<div>
			<h4>Default Button</h4>
			<SpaceOut>
				<Button>Button</Button>
				<Button to="/">Button Link</Button>
			</SpaceOut>
			<h4>Button States</h4>
			<SpaceOut>
				<Button loading>loading</Button>
				<Button error>Error</Button>
				<Button success>Success</Button>
				<Button disabled>disabled</Button>
			</SpaceOut>
			<h4>Button Sizes</h4>
			<SpaceOut>
				<Button size="small">Button</Button>
				<Button to="/">Button Link</Button>
				<Button size="large">Button</Button>
				<Button to="/" shape="circle" size="small" icon="check" />
				<Button to="/" shape="circle" icon="check" />
				<Button to="/" shape="circle" size="large" icon="check" />
				<Button to="/" shape="square" size="small" icon={<TestIcon />} />
				<Button to="/" shape="square" icon={<TestIcon />} />
				<Button to="/" shape="square" size="large" icon={<TestIcon />} />
			</SpaceOut>
			<h4>Button Shapes</h4>
			<SpaceOut>
				<Button to="/" shape="circle" icon="check" />
				<Button to="/" shape="square" icon={<TestIcon />} />
			</SpaceOut>
			<h4>Links</h4>
			<SpaceOut>
				<Link to="/">Internal Link</Link>
				<Link to="/" shape="square">Square Button</Link>
				<Link to="http://gdubs.nyc/" external>EXTERNAL LINK</Link>
			</SpaceOut>
		</div>
	))
