import React from 'react'
import styled from '@emotion/styled'
import Section from 'src/components/Section'
import Grid from 'src/components/Grid'
import Image from 'src/components/Image'
import Video from 'src/components/Video'
import ScrollEntrance from 'src/components/ScrollEntrance'
import Column from 'src/components/Column'
import { util, mq } from 'src/styles'

const FFSection = styled(Section)``

const ColumnWrapper = styled.div`
  ${ ({ isMedia, vPadded, hPadded, sectionPadded, gutters, index, gridDirection }) => !isMedia ? `
    ${ vPadded ? `` : `` }
    ${ hPadded ? `
      padding-left: ${ 100/14 }vw;
      padding-right: ${ 100/14 }vw;
      ${ mq.mediumAndUp } {
        padding-left: 0;
        padding-right: 0;
        ${ index === 0 ? `
          ${ gridDirection === 'ltr' ? `
            padding-left: ${ 100/14 }vw;
          ` : `
            padding-right: ${ 100/14 }vw;
          ` }
        ` : ``}
        ${ index === 1 ? `
          ${ gridDirection === 'ltr' ? `
            padding-right: ${ 100/14 }vw;
          ` : `
            padding-left: ${ 100/14 }vw;
          ` }
        ` : ``}
      }
    ` : `` }
  ` : `` }
`

const gridSetup = (layout, gutter) => {
  const layouts = {
    '50/50': {
      // medium: "[1] " + gutter + " [1]",
      medium: "[1]",
      large: "[1] " + gutter + " [1]",
      larger: "[1] " + gutter + " [1]"
    },
    '60/40': {
      // medium: "[6] " + gutter + " [5]",
      medium: "[1]",
      large: "[6] " + gutter + " [5]",
      larger: "[6] " + gutter + " [4] 1"
    },
    '40/60': {
      // medium: "[5] " + gutter + " [6]",
      medium: "[1]",
      large: "[5] " + gutter + " [6]",
      larger: "1 [4] " + gutter + " [6]"
    }
  }

  return layouts[layout]
}

const gutterSetup = {
  narrow: 'g',
  wide: 'm',
  none: ''
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
  columnOrder,
  isFirstSection
}) => {
  
  // Set defaults if value is null
  if (!gutters) { gutters = 'wide' }
  if (!width) { width = 'margins' }
  if (!padding) { padding = 'padded' }
  if (!layout) { layout = '50/50' }
  if (!verticalAlignment) { verticalAlignment = 'center' }
  if (!columnOrder) { columnOrder = 'leftToRight' }

  let fullWidth = false
  if (width === 'fullWidth') {
    fullWidth = true
  }

  // Flip layout to keep consistent when order is rtl
  if (columnOrder === 'rightToLeft') {
    const firstSide = layout.split('/')[1]
    const secondSide = layout.split('/')[0]
    layout = firstSide + '/' + secondSide
  }

  let padded = true
  if (padding === 'notPadded') {
    padded = false
  }

  return (
    <FFSection
      className={className}
      setTheme={theme}
      prevTheme={prevTheme}
      nextTheme={nextTheme}
      padded={padded}
      isFirstSection={isFirstSection}
    >
      <Grid small={fullWidth ? '[1]' : '1 [12] 1'}>
        <Grid
          small="[1]"
          medium={gridSetup(layout, gutterSetup[gutters]).medium}
          large={gridSetup(layout, gutterSetup[gutters]).large}
          larger={gridSetup(layout, gutterSetup[gutters]).larger}
          rowGap={["7vw", "7vw", "80px"]}
          vAlign={verticalAlignment}
          gridDirection={gridDirection[columnOrder]}
          // showOverlay={true}
        >
          {columns.map((column, index) => {
            const columnIndex = index
            return (
              <ColumnWrapper
                isMedia={!column.content}
                vPadded={column.content && fullWidth}
                hPadded={column.content && fullWidth}
                sectionPadded={padded}
                gutters={gutterSetup[gutters]}
                index={index}
                gridDirection={gridDirection[columnOrder]}
              >
                {column.content ? (
                  <Column
                    delay={index}
                    items={column.content}
                    type={column.type}
                  />
                ) : false }

                {column.__typename === 'ContentfulVideo' && (
                  <ScrollEntrance delay={index}>
                    <Video video={column.video} posterImage={column.posterImage} />
                  </ScrollEntrance>
                )}

                {column.__typename === 'ContentfulImage' && (
                  <ScrollEntrance delay={index}>
                    <Image
                      image={column.image}
                      medium={column.medium}
                      small={column.small}
                      sizes={"(max-width: " + mq.smallBreakpoint + "px) 100vw, 50vw"}
                      loading={isFirstSection ? 'eager' : 'lazy'}
                    />
                  </ScrollEntrance>
                )}
              </ColumnWrapper>
            )
          })}
        </Grid>
      </Grid>
    </FFSection>
  )
}

export default FiftyFifty
