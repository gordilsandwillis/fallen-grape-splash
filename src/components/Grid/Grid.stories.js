import _ from 'lodash'
import React from 'react'
import { storiesOf } from '@storybook/react'
import Grid from './Grid'
import styled from '@emotion/styled'

const Column = styled.div`
	background: rgba(220, 220, 220, 0.8);
	border: 1px solid rgba(0,0,0,0.3);
	border-radius: 3px;
	margin: 8px 0;
	min-height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
`

class GridStory extends React.Component {
  state = {
  	showOverlay: false
  }

  render () {
  	const { title, ...rest } = this.props
  	const { showOverlay } = this.state
  	return (
  		<div>
  			<header
  				style={{
  					display: 'flex',
  					justifyContent: 'space-between',
  				}}
  			>
  				<h4>
  					{title}
  				</h4>

  				<label>
  					<input
  						type="checkbox"
  						checked={showOverlay}
  						onClick={e =>
  							this.setState({ showOverlay: e.target.checked })
  						}
  					/>
            Show Overlay
  				</label>
  			</header>

  			<Grid
  				showOverlay={showOverlay}
  				{...rest}
  			/>

  			<br />
  			<hr />
  			<br />
  		</div>
  	)
  }
}

storiesOf(`Styleguide`, module).add(`Grid`, () => (
	<div>
		<GridStory
			title="All Columns"
			small="[1] [1] [1] [1] [1] [1] [1] [1] [1] [1] [1] [1]"
			medium="[1] [1] [1] [1] [1] [1] [1] [1] [1] [1] [1] [1] [1] [1] [1] [1]"
			large="[1] [1] [1] [1] [1] [1] [1] [1] [1] [1] [1] [1] [1] [1] [1] [1] [1] [1] [1] [1] [1] [1] [1] [1]"
		>
			{_.range(24).map(i => (
				<Column
					key={i}
				>
					{i + 1}
				</Column>
			))}
		</GridStory>

		<GridStory
			title="4 → 2 → 1"
			small="[12]"
			medium="[8] [8]"
			large="[6] [6] [6] [6]"
		>
			<Column>
        1
			</Column>
			<Column>
        2
			</Column>
			<Column>
        3
			</Column>
			<Column>
        4
			</Column>
		</GridStory>

		<GridStory
			title="Offsets"
			small="[4] 4 [4]"
			medium="[6] 4 [6]"
			large="[8] 8 [8]"
		>
			<Column>
        large 8
			</Column>

			<Column>
        large 8
			</Column>
		</GridStory>

		<GridStory
			title="Multiple Offsets"
			small="3 [3] 3 [3]"
			medium="4 [4] 4 [4]"
			large="6 [6] 6 [6]"
		>
			<Column>
        large 6
			</Column>

			<Column>
        large 6
			</Column>
		</GridStory>

		<GridStory
			title="Centered"
			small="1 [10] 1"
			medium="3 [8] 3"
			large="6 [12] 6"
		>
			<Column>
        large 12
			</Column>
		</GridStory>

		<GridStory
			title="Centered"
			small="[1]"
			medium="[6] [6]"
			large="[6] [6]"
			colGap={['0.5rem', '1rem', '2rem']}
			rowGap={['0.5rem']}
		>
			<Column>
        12 columns
			</Column>
			<Column>
        12 columns
			</Column>
		</GridStory>

	</div>
))
