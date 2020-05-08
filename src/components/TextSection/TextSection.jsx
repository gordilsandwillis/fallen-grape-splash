import React from 'react'
import styled from '@emotion/styled'
import Section from 'src/components/Section'
import TextLockup from 'src/components/TextLockup'
import Grid from 'src/components/Grid'

const Wrapper = styled(Section)``

const TextSection = ({ className, nextTheme, prevTheme, theme, text }) => (
  <Wrapper
  	className={className}
  	prevTheme={prevTheme}
  	setTheme={theme}
  	nextTheme={nextTheme}
  >
  	<Grid small="1 [12] 1">
	  	<TextLockup
	  		eyebrow={text.eyebrow}
	  		headline={text.headline}
	  		text={text.text}
	  		headlineSize={text.headlineSize}
	  		textSize={text.textSize}
	  	/>
  	</Grid>
  </Wrapper>
)

export default TextSection
