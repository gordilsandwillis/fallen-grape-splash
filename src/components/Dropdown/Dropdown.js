import React from 'react'
import styled from '@emotion/styled'
import { colors, animations } from 'src/styles'
import Select from 'react-select'

// const TextAlign = styled.div`
//   text-align: ${ ({ align }) => align };
// `

// const DropdownArrowContainer = styled.div`
//   width: 12px;
//   height: 12px;
//   margin: -2px 5px 5px 15px;
//     svg {
//       transform: rotate(-45deg);
//     path, polygon {
//       fill: currentColor
//     }
//     display: block;
//     rect {
//      fill: transparent;
//     }
//   }
// `

const customStyles = {
	option: (provided, state) => ({
		cursor: 'pointer',
		backgroundColor: state.isSelected ? 'rgba(0, 0, 0, 0.1) !important' : colors.offwhite,
		color: colors.black,
		padding: 5,
		margin: 0
	}),
	control: provided => ({
		...provided,
		cursor: 'pointer',
		justifyContent: 'flex-end',
		background: 'none',
		border: 'none',
		borderRadius: 'none',
		boxShadow: 'none',
		color: colors.black,

	}),
	singleValue: (provided, state) => {
		const opacity = state.isDisabled ? 0.5 : 1
		const transition = 'opacity 300ms'
		return { ...provided, opacity, transition }
	}
}

const SelectStyled = styled(Select)`
  div {
    color: ${ colors.black };
		/* border: none; */
		/* border-radius: none; */
    transition: color ${ animations.mediumSpeed } ease-in-out;
    background-color: ${ colors.offwhite };
  }
  div:hover {
    color: ${ colors.grey }
  }
`

class Dropdown extends React.Component {
	componentWillReceiveProps (props) {
		if (props.clearValue) this.setState({ value: null })
	}
	render () {
		const { title, isMulti, items, onChange, value } = this.props
		return <div>
			<SelectStyled
				isMulti={isMulti}
				value={value}
				isClearable
				styles={customStyles}
				options={items}
				placeholder={title}
				onChange={onChange}
			/>
		</div>
	}
}
export { Dropdown as default }