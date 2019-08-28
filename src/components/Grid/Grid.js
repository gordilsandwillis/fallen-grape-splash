import React, { Component } from 'react'

import _ from 'lodash'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import gridSettings from 'src/styles/gridSettings'
import { mediaQueries, colors } from 'src/styles'

// Calculate how many columns the grid has
const numberOfCols = gridSettings => {
	let myString = gridSettings.replace(/\D/g, ' ')

	let sum = (text, regex) => {
		let match = text.match(regex || /\d+/g)
		return match ? match.reduce(function (prev, curr) {
			return +prev + +curr
		}) : 0
	}

	return (sum(myString))
}

// is it wrapped with brackets?
const isColumnDef = d => (
	/\[[\s]*[\d]+[\s]*\]/g.test(d)
)

// get the integer value the def
const parseSize = d => {
	const match = /([\d]+)/g.exec(d)
	const val = _.get(match, 1)

	return val ? parseInt(val, 10) : null
}

// parse a single grid item definition (eg. '1', '[3], etc.)
const parseGridItemDef = d => {
	const size = parseSize(d)
	return size !== null ? ({
		isColumn: isColumnDef(d),
		size,
	}) : null
}

// parse an entire grid definition (eg. '1 [4] 2 [8] 1')
const parseGridDef = gridDef => {
	const defs = gridDef
		.replace(/[\s]+/g, ' ') // remove extra whitespace
		.replace(/\[[\s]+/g, '[') // remove whitespace inside opening bracket
		.replace(/[\s]+\]/g, ']') // remove whitespace inside closing bracket
		.split(' ')

	return _.map(defs, parseGridItemDef).filter(_.identity)
}

const gridGapToCss = (gap, index) => {
	if (gap && typeof gap[index] !== 'undefined') {
		return gap[index]
	}
	return 'unset'
}

// convert grid def to css attributes for the grid parent
const gridDefToCss = gridDef => {
	const gridData = parseGridDef(gridDef)

	// while iterating, track where the next item should start
	// this is a grid-column-start css value (1 is the start of the grid)
	let colStart = 1

	// while iterating, track how many items in the grid
	let colCount = 1

	const numColumns = _.filter(gridData, ({ isColumn }) => isColumn).length

	const columnCssDefinitions = _.map(gridData, ({ isColumn, size }) => {
		let result = null
		if (isColumn) {
			// use nth-child to define the children styles so the children
			// don't have to
			result = `
				& > :nth-of-type(${ numColumns }n + ${ colCount }) {
					grid-column: ${ colStart } / span ${ size };
				}
			`
			colCount++
		}

		colStart += size
		return result
	}).filter(_.identity) // remove any nulls

	const gridWidth = gridData.reduce(
		(acc, { size }) => (acc + size),
		0
	)
	return `
		grid-template-columns: repeat(${ gridWidth }, minmax(0, 1fr));
		${ columnCssDefinitions.join(' ') }
	`
}

const StyledGrid = styled.div`
	display: grid;
	width: 100%;

	${ props => gridDefToCss(props.small) }
	${ props => ({ 'columnGap': gridGapToCss(props.colGap, 0) }) }
	${ props => ({ 'rowGap': gridGapToCss(props.rowGap, 0) }) }

	${ mediaQueries.largeAndUp } {
		${ props => gridDefToCss(props.medium) }
		${ props => ({ 'columnGap': gridGapToCss(props.colGap, 1) }) }
		${ props => ({ 'rowGap': gridGapToCss(props.rowGap, 1) }) }
	}

	${ mediaQueries.largerAndUp } {
		${ props => gridDefToCss(props.large) }
		${ props => ({ 'columnGap': gridGapToCss(props.colGap, 2) }) }
		${ props => ({ 'rowGap': gridGapToCss(props.rowGap, 2) }) }
	}

	${ props => props.showOverlay && `
		position: relative;
	` }
`

const GridOverlay = styled(StyledGrid)`
	height: 10px;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 100%;
	opacity: .5;
	pointer-events: none;
	> div {
		width: 100%;
		height: 100%;
		background: ${ colors.alert };
		opacity: .6;
		&:nth-child(odd) {
			opacity: .4;
		}
	}
`

class Grid extends Component {
	state = {
		windowWidth: null
	}

	componentDidMount () {
		if (this.props.showOverlay) {
			this.handleResize()
			window.addEventListener('resize', this.handleResize)
		}
	}

	componentWillUnmount () {
		if (this.props.showOverlay) {
			window.removeEventListener('resize', this.handleResize)
		}
	}

	handleResize = event => {
		const width = window.innerWidth
		this.setState({ windowWidth: width })
	}

	render () {
		const { small, medium, large, colGap, rowGap, showOverlay, children } = this.props
		const { windowWidth } = this.state

		if (showOverlay) {
			const OverlayColumnsSmall = _.range(numberOfCols(small)).map(() => { return '[1]' }).join(' ')
			const OverlayColumnsMedium = _.range(numberOfCols(medium)).map(() => { return '[1]' }).join(' ')
			const OverlayColumnsLarge = _.range(numberOfCols(large)).map(() => { return '[1]' }).join(' ')

			return (
				<div style={{ position: 'relative', width: '100%' }}>
					<StyledGrid
						small={small}
						medium={medium}
						large={large}
						colGap={colGap}
						rowGap={rowGap}
					>
						{children}
					</StyledGrid>
					<GridOverlay
						small={OverlayColumnsSmall}
						medium={OverlayColumnsMedium}
						large={OverlayColumnsLarge}
						colGap={colGap}
						rowGap={rowGap}
					>
						{_.range(numberOfCols(small)).map((item, index) => {
							if (windowWidth < mediaQueries.mediumBreakpoint) {
								return (<div key={'overlay-col-' + index} />)
							}
						})}
						{_.range(numberOfCols(medium)).map((item, index) => {
							if (windowWidth > mediaQueries.mediumBreakpoint && windowWidth < mediaQueries.largeBreakpoint) {
								return (<div key={'overlay-col-' + index} />)
							}
						})}
						{_.range(numberOfCols(large)).map((item, index) => {
							if (windowWidth > mediaQueries.largeBreakpoint) {
								return (<div key={'overlay-col-' + index} />)
							}
						})}
					</GridOverlay>
				</div>
			)
		}

		return (
			<StyledGrid
				small={small}
				medium={medium}
				large={large}
				colGap={colGap}
				rowGap={rowGap}
			>
				{children}
			</StyledGrid>
		)
	}
}

Grid.propTypes = {
	baseColCount: PropTypes.number,
	small: PropTypes.string.isRequired,
	medium: PropTypes.string.isRequired,
	large: PropTypes.string.isRequired,
	colGap: PropTypes.array,
	rowGap: PropTypes.array,
	showOverlay: PropTypes.bool,
}

Grid.defaultProps = gridSettings

export {
	parseGridItemDef,
	parseGridDef,
	gridDefToCss,
	StyledGrid,
	Grid as default
}
