import React from 'react'
import styled from '@emotion/styled'
import Section from 'src/components/Section'
import Grid from 'src/components/Grid'
import ScrollEntrance from 'src/components/ScrollEntrance'
import ColumnRenderer from 'src/components/ColumnRenderer'

const Column = styled.div``
const ColumnContent = styled.div`
  ${ ({ firstItem }) => !firstItem ? `
    margin-top: 24px;
  ` : `` }
`

const gridSetup = {
  '50/50_margins': {
    small: "1 [12] 1",
    large: "1 [6] [6] 1",
    larger: "1 [6] [6] 1"
  },
  '50/50_fullWidth': {
    small: "[1]",
    large: "[1] [1]",
    larger: "[1] [1]"
  },
  '60/40_margins': {
    small: "1 [12] 1",
    large: "1 [8] [4] 1",
    larger: "1 [8] [4] 1"
  },
  '60/40_fullWidth': {
    small: "[1]",
    large: "[9] [5]",
    larger: "[9] [5]"
  },
  '40/60_margins': {
    small: "1 [12] 1",
    large: "1 [4] [8] 1",
    larger: "1 [4] [8] 1"
  },
  '40/60_fullWidth': {
    small: "[1]",
    large: "[5] [9]",
    larger: "[5] [9]"
  }
}

const gutterSetup = {
	narrow: ["16px", "30px", "40px"],
	wide: (100/14) + 'vw',
	none: 0
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

	return (
		<Section
			className={className}
			setTheme={theme}
			prevTheme={prevTheme}
			nextTheme={nextTheme}
			padded={padding === 'notPadded' ? false : true}
		>
			<Grid
	      small={gridSetup[layout + "_" + width].small}
	      large={gridSetup[layout + "_" + width].large}
        larger={gridSetup[layout + "_" + width].larger}
	      colGap={gutterSetup[gutters]}
	      rowGap={["7vw", "7vw", "80px"]}
	      vAlign={verticalAlignment}
	      gridDirection={gridDirection[columnOrder]}
	    >
  			{columns.map((column, index) => (
          <Column>
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
