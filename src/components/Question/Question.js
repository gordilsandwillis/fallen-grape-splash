
import React from 'react'
import styled from '@emotion/styled'
import { colors, typography, animations } from 'src/styles'
import Dropdown from 'src/components/Dropdown'
import Dropzone from 'react-dropzone'

const Input = styled.input`
		background: none;
		width: 100%;
		max-width:650px;
    border: none;
    border-bottom: 2px solid black;
    padding: 10px 0;
		${ typography.body }
`

const FullInput = styled.textarea`
	background: none;
	width: 100%;
	max-width: 650px;
	min-height: 300px;
	border: 2px solid black;
	padding: 10px 0;
	margin: 10px 0;
	${ typography.body }
`
const LinkStyles = `
	cursor: pointer;	
	font-size: inherit;
	text-decoration: none;
	transition: color ${ animations.mediumSpeed } ease-in-out;
`
const FakeLink = styled.div`
	white-space:nowrap;
  ${ LinkStyles }
  color: ${ ({ white }) => white ? colors.white : colors.brightBlue };
	span {
		border-bottom: 2px solid currentColor;
	}
  &:hover {
    color: ${ ({ white }) => white ? colors.unofficialLightGrey : colors.grey };
  }

&::after {
		content: '↗';
		color: currentColor;
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

	// htmlDecode (input) {
	// 	let e = document.createElement('div')
	// 	e.innerHTML = input
	// 	return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue
	// }

	render () {
		const { onChange, required, label, description, fields } = this.props
		const placeholder = label + (required ? '*' : '')
		return (
			<div style={{ padding: '20px 0px' }}>
				{/* {label && <div>{label}</div>} */}
				{fields && fields.map(({ type, name, values }, index) => (
					<div key={name + index}>
						{type === 'input_text' &&
				<Input name={name} placeholder={placeholder} required={required} type={name === 'email' ? 'email' : 'text'}></Input>
						}
						{type === 'textarea' &&
						(!this.state.file && <FullInput name={name} placeholder={label + ' Text'} type={'textarea'}/>)
						}
						{type === 'input_file' && (
							<div style={{ display: 'inline-block' }}>
								<label htmlFor={name}>{label}</label>
								<Dropzone multiple={false} onDrop={acceptedFiles => this.setState({ file: acceptedFiles[0] })}>
									{({ getRootProps, getInputProps }) => (
										<section style={{ outline: 'none' }}>
											<div {...getRootProps()}>
												<input name={name} {...getInputProps()} />
												<FakeLink><span>ATTACH</span></FakeLink>
												{this.state.file && this.state.file.name}
											</div>
										</section>
									)}
								</Dropzone>
							</div>
						)}
						{type === 'multi_value_single_select' && (
							<div>
								<label htmlFor={name}>{label}</label>
								<div style={{ padding: '10px 0' }}>
									<Dropdown left name={name} title={'Select Value'} items={values} onChange={x => onChange({ label, name, x })} value={this.props.dropdownValues && this.props.dropdownValues[name]}/>
								</div>
							</div>
						)}
						{type === 'multi_value_multi_select' && (
							<div>
								<label htmlFor={name}>{label}</label>
								<div style={{ padding: '10px 0' }}>
									<Dropdown left name={name} isMulti title={'Select Values'} items={values} onChange={x => onChange({ label, name, x })} value={this.props.dropdownValues && this.props.dropdownValues[name]}/>
								</div>
							</div>
						)}
					</div>
				))}
				{description && <div dangerouslySetInnerHTML={{ __html: decodeURI(description) }} />}
			</div>
		)
	}
}

export default Question
