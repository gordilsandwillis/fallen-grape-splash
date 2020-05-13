import React from 'react'
import styled from '@emotion/styled'
import Section from 'src/components/Section'
import TextLockup from 'src/components/TextLockup'
import Grid from 'src/components/Grid'
import ScrollEntrance from 'src/components/ScrollEntrance'
import ColumnRenderer from 'src/components/ColumnRenderer'

const Wrapper = styled(Section)`
  ${ ({ alignment }) => alignment !== 'right' ? `
    text-align: ${ alignment };
  ` : `` }
`

const TextSection = ({ className, nextTheme, prevTheme, theme, text, alignment }) => {
  console.log(text)
  const item = text[0]
  const align = {
    left: {
      medium: "1 [9] 4",
      large: "1 [9] 4",
      larger: "1 [9] 4"
    },
    center: {
      medium: "2 [10] 2",
      large: "3 [8] 3",
      larger: "4 [6] 4"
    },
    right: {
      medium: "7 [6] 1",
      large: "7 [5] 2",
      larger: "7 [5] 2"
    }
  }
  return (
    <Wrapper
    	className={className}
    	prevTheme={prevTheme}
    	setTheme={theme}
    	nextTheme={nextTheme}
      alignment={alignment}
    >
    	<Grid
        small="1 [12] 1"
        medium={align[alignment].medium}
        large={align[alignment].large}
        larger={align[alignment].larger}
      >
        {item.__typename === 'ContentfulText' && (
    	  	<TextLockup
    	  		eyebrow={item.eyebrow}
    	  		headline={item.headline}
    	  		text={item.text}
    	  		headlineSize={item.headlineSize}
    	  		textSize={item.textSize}
    	  	/>
        )}
        {item.__typename === 'ContentfulColumn' && (
          <ColumnRenderer
            items={item.content}
          />
        )}
    	</Grid>
    </Wrapper>
  )
}

export default TextSection
