import React from 'react'
import styled from '@emotion/styled'
import Section from 'src/components/Section'
import Grid from 'src/components/Grid'
import ColumnRenderer from 'src/components/ColumnRenderer'
import ScrollEntrance from 'src/components/ScrollEntrance'
import { mq } from 'src/styles'

const Wrapper = styled(Section)`
  text-align: ${ ({ alignment }) => alignment };
`

const Column = styled.div`
  ${ mq.largerAndBelow } {
    ${ mq.largeAndUp } {
      ${ ({ colCount, index, alignment }) => colCount === 5 && index + 1 === 4 && alignment === 'center' ? `
        grid-column: 4 / span 4 !important;
      ` : `` }
      ${ ({ colCount, index, alignment }) => colCount === 5 && index + 1 === 5 && alignment === 'center' ? `
        grid-column: 8 / span 4 !important;
      ` : `` }
    }
  }
`

const ColumnContent = styled.div`
  ${ ({ firstItem }) => !firstItem ? `
    margin-top: 24px;
  ` : `` }
`

const TextItem = styled.div`
  p {
    max-width: 26em;
  }
`

const gridSetup = {
  1: {
    small: "1 [12] 1",
    medium: "2 [10] 2",
    large: "3 [8] 3",
    larger: "3 [8] 3"
  },
  2: {
    small: "1 [12] 1",
    medium: "1 [6] [6] 1",
    large: "1 [6] [6] 1",
    larger: "1 [6] [6] 1"
  },
  3: {
    small: "1 [12] 1",
    medium: "1 [4] [4] [4] 1",
    large: "1 [4] [4] [4] 1",
    larger: "1 [4] [4] [4] 1"
  },
  4: {
    small: "1 [12] 1",
    medium: "1 [6] [6] 1",
    large: "1 [3] [3] [3] [3] 1",
    larger: "1 [3] [3] [3] [3] 1"
  },
  5: {
    small: "1 [12] 1",
    medium: "1 [12] 1",
    large: "1 [4] [4] [4] 1",
    larger: "2 [5] [5] [5] [5] [5] 2"
  },
  6: {
    small: "1 [12] 1",
    medium: "1 [4] [4] [4] 1",
    large: "1 [2] [2] [2] [2] [2] [2] 1",
    larger: "1 [2] [2] [2] [2] [2] [2] 1"
  }
}

const Columns = ({ className, theme, prevTheme, nextTheme, columns, alignment }) => (
  <Wrapper
  	className={className}
  	setTheme={theme}
    prevTheme={prevTheme}
    nextTheme={nextTheme}
    alignment={alignment === null ? 'left' : alignment}
  >
  	<Grid
      small={gridSetup[columns.length].small}
      medium={gridSetup[columns.length].medium}
      large={gridSetup[columns.length].large}
      larger={gridSetup[columns.length].larger}
      colGap={["16px", "30px", "30px"]}
      rowGap={["7vw", "7vw", "80px"]}
    >
  			{columns.map((column, index) => (
          <Column
            alignment={alignment === null ? 'left' : alignment}
            index={index}
            colCount={columns.length}
            key={column.id}
          >
            {column.content.map((item, index) => {
              item.alignment = alignment === null ? 'left' : alignment
              return (
                <ColumnContent
                  key={item.id}
                  firstItem={index === 0}
                  lastItem={index === column.content.length - 1}
                >
                  {item.__typename !== 'ContentfulText' ? (
                    <ScrollEntrance>
                      <div>
                        <ColumnRenderer
                          item={item}
                          columnCount={columns.length}
                        />
                      </div>
                    </ScrollEntrance>
                  ) : (
                    <TextItem>
                      <ColumnRenderer item={item} columnCount={columns.length} />
                    </TextItem>
                  )}
                </ColumnContent>
              )
            })}
          </Column>
        ))}
  	</Grid>
  </Wrapper>
)

export default Columns
