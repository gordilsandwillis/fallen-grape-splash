import React from 'react'
import styled from '@emotion/styled'

import { storiesOf } from '@storybook/react'
import * as typography from './typography'

const qbf = 'The quick brown fox jumps over the lazy dog'
const lorem = `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.`
const longLorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et iaculis nisi, vel auctor ipsum. Integer finibus, sem id fringilla tincidunt, quam quam auctor leo, hendrerit accumsan neque metus eu sapien. In suscipit sapien id orci tempor ornare. Nullam nunc velit, molestie quis leo ac, ultrices tempus nulla. Pellentesque finibus nibh vel dui tempus suscipit. Nullam justo sapien, ullamcorper at augue sit amet, pellentesque lobortis ex. Integer in nunc sapien. Aliquam eu elit sagittis odio tristique tristique. Aenean vel neque mattis, pellentesque ipsum sit amet, condimentum felis. Suspendisse ac molestie ex. Proin tristique lorem eu pharetra molestie.`

const Button = styled.span`
  ${ typography.button }
`

const Hr = styled.hr`
  margin: 2em auto;
  max-width: 75%;
  border: 0;
  border-bottom: 2px solid #dadada;
`

storiesOf('Styleguide', module)
	.add('Typography', () => (
		<div>
			<h1>
				H1 {qbf}
			</h1>

			<Hr />

			<h2>
				H2 {qbf} and some <em>italicized</em> text.
			</h2>

			<Hr />

			<h3>
				H3 {qbf}
			</h3>

			<Hr />

			<h4>
				H4 {qbf}
			</h4>

			<Hr />

			<h5>
				H5 {qbf}
			</h5>

			<Hr />

			<h6>
				H6 {qbf}
			</h6>

			<Hr />

			<h4>
				Body copy
			</h4>

			<p>
				{lorem}
			</p>

			<p>
				{longLorem}
			</p>

			<h4>
				Body copy with inline styles
			</h4>

			<p>
				Here is some <strong>bold text</strong>.
			</p>

			<p>
				Here is some <em>italic text</em>.
			</p>

			<p>
				Here is some <strong><em>bold and italic</em></strong> text.
			</p>

			<Hr />

			<h4>
				Caption
			</h4>

			<figcaption>
				Caption: {qbf}
			</figcaption>

			<Hr />

			<h4>
				Button
			</h4>

			<Button>
				Button: {qbf}
			</Button>

			<Hr />

			<h4>
				Text Link
			</h4>

			<a href="http://ginlane.com">Text Link</a>

			<Hr />

			<h4>
				Unordered List
			</h4>

			<ul>
				<li>
					Foo lorem ipsum
				</li>
				<li>
					Bar dolor sit amet
				</li>
			</ul>

			<Hr />

			<h4>
				Ordered List
			</h4>

			<ol>
				<li>
					Foo lorem ipsum
				</li>
				<li>
					Bar dolor sit amet
				</li>
			</ol>

			<Hr />

			<h4>
				Block Quote
			</h4>

			<blockquote>
				{longLorem}
			</blockquote>
		</div>
	))
