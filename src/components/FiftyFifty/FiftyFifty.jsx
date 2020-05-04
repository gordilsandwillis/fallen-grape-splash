import React from 'react'
import styled from '@emotion/styled'
import Section from 'src/components/Section'
import Grid from 'src/components/Grid'
import ScrollEntrance from 'src/components/ScrollEntrance'
import ColumnRenderer from 'src/components/ColumnRenderer'
import { util } from 'src/styles'

const Column = styled.div`
  ${ ({ vPadded }) => vPadded ? `
    ${ util.responsiveStyles('padding-top', 91, 51, 66, 52) }
    ${ util.responsiveStyles('padding-bottom', 91, 51, 66, 52) }
  ` : `` }
  ${ ({ hPadded }) => hPadded ? `
    padding-left: ${ 100/14 }vw;
    padding-right: ${ 100/14 }vw;
  ` : `` }
`

const ColumnContent = styled.div`
  ${ ({ firstItem }) => !firstItem ? `
    margin-top: 24px;
  ` : `` }
`

const gridSetup = {
  '50/50': {
    small: "[12]",
    large: "[6] [6]",
    larger: "[6] [6]"
  },
  '60/40': {
    small: "[12]",
    large: "[8] [4]",
    larger: "[8] [4]"
  },
  '40/60': {
    small: "[12]",
    large: "[4] [8]",
    larger: "[4] [8]"
  }
}

const gutterSetup = {
	narrow: ["16px", "30px", "40px"],
	wide: 100/14 + 'vw',
	none: 0
}

const marginSetup = {
  margins: 1,
  fullWidth: ''
}

const gridDirection = {
	leftToRight: 'ltr',
	rightToLeft: 'rtl'
}

const FiftyFifty = ({
	className,
	theme,
	prevTheme,
	nextTheme,
	columns,
	gutters,
	width,
	padding,
	layout,
	verticalAlignment,
	columnOrder
}) => {
	
	// Set defaults if value is null
	if (!gutters) { gutters = 'wide' }
	if (!width) { width = 'margins' }
	if (!padding) { padding = 'padded' }
	if (!layout) { layout = '50/50' }
	if (!verticalAlignment) { verticalAlignment = 'center' }
	if (!columnOrder) { columnOrder = 'leftToRight' }

  let padded = true
  if (padding === 'notPadded') {
    padded = false
  }

	return (
		<Section
			className={className}
			setTheme={theme}
			prevTheme={prevTheme}
			nextTheme={nextTheme}
			padded={padded}
		>
			<Grid
	      small={marginSetup[width] + ' ' + gridSetup[layout].small + ' ' + marginSetup[width]}
	      large={marginSetup[width] + ' ' + gridSetup[layout].large + ' ' + marginSetup[width]}
        larger={marginSetup[width] + ' ' + gridSetup[layout].larger + ' ' + marginSetup[width]}
	      colGap={gutterSetup[gutters]}
	      rowGap={width === 'fullWidth' ? 0 : ["7vw", "7vw", "80px"]}
	      vAlign={verticalAlignment}
	      gridDirection={gridDirection[columnOrder]}
	    >
  			{columns.map((column, index) => (
          <Column
            vPadded={column.content && !padded}
            hPadded={column.content && gutters === 'none'}
          >
            {column.content ? column.content.map((item, index) => (
              <ColumnContent
                key={item.id}
                firstItem={index === 0}
                lastItem={index === column.content.length - 1}
              >
              	{item.__typename !== 'ContentfulText' ? (
              		<ScrollEntrance>
              			<div>
	              			<ColumnRenderer item={item} columnCount={2} />
              			</div>
              		</ScrollEntrance>
              	) : (
	                <ColumnRenderer item={item} columnCount={2} />
                )}
              </ColumnContent>
            )) : (
            	<ColumnRenderer item={column} columnCount={2} />
            )}
          </Column>
        ))}
	  	</Grid>
		</Section>
	)
}

export default FiftyFifty
