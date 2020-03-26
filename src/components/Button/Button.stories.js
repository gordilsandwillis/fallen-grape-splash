import React from 'react'
import styled from '@emotion/styled'
import { storiesOf } from '@storybook/react'
import Button from './Button'
import TextLink from 'src/components/TextLink'
import { MdVolumeUp as TestIcon } from 'react-icons/md'
import { typography, themes } from 'src/styles'
import { optionsKnob } from '@storybook/addon-knobs'

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

let themeOptions = {}
Object.keys(themes.buttonThemes).map((theme) => {
  const key = theme.toString()
  themeOptions[key] = theme
})

storiesOf(`Styleguide`, module)
	.add('Buttons', () => (
		<div style={{ padding: '5%' }}>
			<h4>Default Button</h4>
			<SpaceOut>
				<Button setTheme={ optionsKnob('Theme', themeOptions, 'buttonDefault', { display: 'select' }) }>Button</Button>
				<Button setTheme={ optionsKnob('Theme', themeOptions, 'buttonDefault', { display: 'select' }) } to="/">Button Link</Button>
			</SpaceOut>
			<hr/>
			<h4>Button States</h4>
			<SpaceOut>
				<Button setTheme={ optionsKnob('Theme', themeOptions, 'buttonDefault', { display: 'select' }) } loading={true} icon="close" iconPosition="left">loading</Button>
				<Button setTheme={ optionsKnob('Theme', themeOptions, 'buttonDefault', { display: 'select' }) } error>Error</Button>
				<Button setTheme={ optionsKnob('Theme', themeOptions, 'buttonDefault', { display: 'select' }) } success>Success</Button>
				<Button setTheme={ optionsKnob('Theme', themeOptions, 'buttonDefault', { display: 'select' }) } disabled>disabled</Button>
			</SpaceOut>
			<hr/>
			<h4>Button Sizes & Themes</h4>
			<Notes>
				<p>The <code>size</code> props can be <code>tiny</code>, <code>small</code>, <code>medium</code>, or <code>large</code> and the <code>setTheme</code> prop take the name of any color variable as a string (ie: 'mainColor')</p>
			</Notes>
			<SpaceOut>
				<Button setTheme={ optionsKnob('Theme', themeOptions, 'buttonDefault', { display: 'select' }) } size="tiny">Tiny</Button>
				<Button
					setTheme={ optionsKnob('Theme', themeOptions, 'buttonDefault', { display: 'select' }) }
					size="small">Small</Button>
				<Button setTheme={ optionsKnob('Theme', themeOptions, 'buttonDefault', { display: 'select' }) } to="/">Default</Button>
				<Button
					setTheme={ optionsKnob('Theme', themeOptions, 'buttonDefault', { display: 'select' }) }
					size="large">Large</Button>
			</SpaceOut>
			<SpaceOut>
				<Button setTheme={ optionsKnob('Theme', themeOptions, 'buttonDefault', { display: 'select' }) } to="/" shape="square" size="tiny" icon={<TestIcon size={18}/>}/>
				<Button setTheme={ optionsKnob('Theme', themeOptions, 'buttonDefault', { display: 'select' }) } to="/" shape="square" size="small" icon={<TestIcon size={18}/>}/>
				<Button setTheme={ optionsKnob('Theme', themeOptions, 'buttonDefault', { display: 'select' }) } to="/" shape="square" icon={<TestIcon size={18}/>}/>
				<Button setTheme={ optionsKnob('Theme', themeOptions, 'buttonDefault', { display: 'select' }) } to="/" shape="square" size="large" icon={<TestIcon size={18}/>}/>
			</SpaceOut>
			<SpaceOut>
				<Button setTheme={ optionsKnob('Theme', themeOptions, 'buttonDefault', { display: 'select' }) } to="/" shape="circle" size="tiny" icon="check"/>
				<Button setTheme={ optionsKnob('Theme', themeOptions, 'buttonDefault', { display: 'select' }) } to="/" shape="circle" size="small" icon="check"/>
				<Button setTheme={ optionsKnob('Theme', themeOptions, 'buttonDefault', { display: 'select' }) } to="/" shape="circle" icon="check"/>
				<Button setTheme={ optionsKnob('Theme', themeOptions, 'buttonDefault', { display: 'select' }) } to="/" shape="circle" size="large" icon="check"/>
			</SpaceOut>
			<hr/>
			<h4>Button Shapes</h4>
			<SpaceOut>
				<Button setTheme={ optionsKnob('Theme', themeOptions, 'buttonDefault', { display: 'select' }) } to="/" shape="circle" icon="check"/>
				<Button setTheme={ optionsKnob('Theme', themeOptions, 'buttonDefault', { display: 'select' }) } to="/" shape="square" icon={<TestIcon size={18}/>}/>
			</SpaceOut>
			<hr/>
			<h4>Links</h4>
			<SpaceOut>
				<TextLink to="/">Text Link</TextLink>
				<TextLink to="/" shape="square">With Theme</TextLink>
				<TextLink to="http://gdubs.nyc/" external>External Link</TextLink>
			</SpaceOut>

		</div>
	))
