import React from 'react'
import styled from '@emotion/styled'
import { storiesOf } from '@storybook/react'
import Button from './Button'
import Link from 'src/components/Link'
import { MdVolumeUp as TestIcon } from 'react-icons/md'
import { typography } from 'src/styles'

const SpaceOut = styled.div`
	margin: 1rem 0 4rem;
	display: flex;
	> * {
		margin-right: 1.5rem !important;
	}
`

const Notes = styled.div`
	${ typography.storyNotes }
`

storiesOf('Styleguide', module)
	.add('Buttons', () => (
		<div style={{ padding: '5%' }}>
			<h4>Default Button</h4>
			<SpaceOut>
				<Button>Button</Button>
				<Button to="/">Button Link</Button>
			</SpaceOut>
			<h4>Button States</h4>
			<SpaceOut>
				<Button loading={true} icon="close" iconPosition="left">loading</Button>
				<Button error>Error</Button>
				<Button success>Success</Button>
				<Button disabled>disabled</Button>
			</SpaceOut>
			<h4>Button Sizes & Themes</h4>
			<Notes>
				<p>The <code>size</code> props can be <code>tiny</code>, <code>small</code>, <code>medium</code>, or <code>large</code> and the <code>setTheme</code> prop take the name of any color variable as a string (ie: 'mainColor')</p>
			</Notes>
			<SpaceOut>
				<Button size="tiny">Tiny</Button>
				<Button setTheme="textColor" size="small">Small</Button>
				<Button to="/">Default</Button>
				<Button setTheme="green" size="large">Large</Button>
			</SpaceOut>
			<SpaceOut>
				<Button to="/" shape="square" size="tiny" icon={<TestIcon size={18}/>}/>
				<Button to="/" shape="square" size="small" icon={<TestIcon size={18}/>}/>
				<Button to="/" shape="square" icon={<TestIcon size={18}/>}/>
				<Button to="/" shape="square" size="large" icon={<TestIcon size={18}/>}/>
			</SpaceOut>
			<SpaceOut>
				<Button to="/" shape="circle" size="tiny" icon="check"/>
				<Button to="/" shape="circle" size="small" icon="check"/>
				<Button to="/" shape="circle" icon="check"/>
				<Button to="/" shape="circle" size="large" icon="check"/>
			</SpaceOut>
			<h4>Button Shapes</h4>
			<SpaceOut>
				<Button to="/" shape="circle" icon="check"/>
				<Button to="/" shape="square" icon={<TestIcon size={18}/>}/>
			</SpaceOut>
			<h4>Links</h4>
			<SpaceOut>
				<Link to="/">Internal Link</Link>
				<Link to="/" shape="square">Square Button</Link>
				<Link to="http://gdubs.nyc/" external>External Link</Link>
			</SpaceOut>
		</div>
	))
