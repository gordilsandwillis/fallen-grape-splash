
import React from 'react'
import styled from '@emotion/styled'
import { colors, typography, animations } from 'src/styles'
import Dropdown from 'src/components/Dropdown'
import Grid from 'src/components/Grid'
import Dropzone from 'react-dropzone'
const DropdownContainer = styled.div`
`

const Input = styled.input`
		background: none;
		width: 100%;
		max-width:650px;
    border: none;
    border-bottom: 2px solid black;
    padding: 10px 0;
		${ typography.body }
`
const LinkStyles = `
	font-size: inherit;
	cursor: pointer;
  text-decoration: none;
  transition: color ${ animations.mediumSpeed } ease-in-out;
`
const FakeLink = styled.div`
	white-space:nowrap;
  ${ LinkStyles }
  color: ${ ({ white }) => white ? colors.white : colors.brightBlue };
	span{
		border-bottom: 2px solid ${ ({ white }) => white ? colors.white : colors.brightBlue };
		transition: border-bottom-color ${ animations.mediumSpeed } ease-in-out, color ${ animations.mediumSpeed } ease-in-out;
	}
  &:hover {
    color: ${ ({ white }) => white ? colors.unofficialLightGrey : colors.darkBlue };
		border-color: ${ ({ white, nohover }) => nohover ? (white ? colors.unofficialLightGrey : colors.darkBlue) : (white ? colors.white : colors.brightblue) };
  }

&::after {
    content: '↗';
    margin-left: 2px;
    line-height: 1em;
    font-size: 1.25em;
    display: inline-block
  }
`

class Question extends React.Component {
	constructor (props) {
		super(props)
		this.state = { value: null }
	}
	/* eslint-disable no-console */
	render () {
		const { required, name, description, values, label, type } = this.props
		const descriptionMarkup = createMarkup(description)
		const { onChange } = this.props
		const placeholder = label + (required ? '*' : '')
		return (this.props.private ? ''
			: <div style={{ padding: '10px 0px' }}>
				{descriptionMarkup && <div style={{ color: 'red' }} dangerouslySetInnerHTML={descriptionMarkup} />}
				{type === 'short_text' && <Input name={name} placeholder={placeholder} required={required} type={name === 'email' ? 'email' : 'text'}></Input>}
				{type === 'attachment' && (
					<div style={{ display: 'inline-block' }}>
						<label htmlFor={name}>{label}</label>
						<Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
							{({ getRootProps, getInputProps }) => (
								<section>
									<div {...getRootProps()}>
										<input name={name} {...getInputProps()} />
										<FakeLink><span>ATTACH</span></FakeLink>
									</div>
								</section>
							)}
						</Dropzone>
					</div>
				)}
				{type === 'boolean' && (
					<div>
						<label htmlFor={name}>{label}</label>
						<Grid small="[6]" medium="[8] 4" large="[8] 4">
							<Dropdown name={name} title={'Yes / No'} items={values.reverse()} onChange={x => onChange({ name, x })} value={this.props.dropdownValue}/>
						</Grid>
					</div>
				)}
				{type === 'multi_select' && (
					<div>
						<label htmlFor={name}>{label}</label>
						<DropdownContainer>
							<Dropdown name={name} isMulti title={'Select Values'} items={values.reverse()} onChange={x => onChange({ name, x })} value={this.props.dropdownValue}/>
						</DropdownContainer>
					</div>
				)}
			</div>
		)
	}
}

const createMarkup = string => string ? { __html: string } : null

export default Question
