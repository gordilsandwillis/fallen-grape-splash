import React from 'react'
import styled from '@emotion/styled'
// import { colors, typography, mediaQueries as mq } from 'src/styles'
import Dropdown from 'src/components/Dropdown'

const DropdownContainer = styled.div`
  width: 250px;
`

class Question extends React.Component {
	constructor (props) {
		super(props)
		this.state = { value: null }
	}
	render () {
		const { required, name, description, values, label, type } = this.props
		const descriptionMarkup = createMarkup(description)
		const placeholder = label + (required ? '*' : '')
		return (this.props.private ? ''
			: <div style={{ padding: 10 }}>
				{descriptionMarkup && <div style={{ color: 'red' }} dangerouslySetInnerHTML={descriptionMarkup} />}
				{type === 'short_text' && <input id={name} placeholder={placeholder} required={required} type="text"></input>}
				{type === 'attachment' && (
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<label htmlFor={name}>{label}</label>
						<input type="file" name={name} id={name} required={required}></input>
					</div>
				)}
				{type === 'boolean' && (
					<div>
						<label htmlFor={name}>{label}</label>
						<DropdownContainer>
							<Dropdown id={name} title={'Yes / No'} items={values.reverse()} onChange={x => this.setState({ value: x })} value={this.state.value}/>
						</DropdownContainer>
					</div>
				)}
				{type === 'multi_select' && (
					<div>
						<label htmlFor={name}>{label}</label>
						<DropdownContainer>
							<Dropdown isMulti id={name} title={'Select Values'} items={values.reverse()} onChange={x => this.setState({ value: x })} value={this.state.value}/>
						</DropdownContainer>
					</div>
				)}
			</div>
		)
	}
}

const createMarkup = string => string ? { __html: string } : null

export default Question
