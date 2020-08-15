import React, { useState, Component } from 'react'
import styled from '@emotion/styled'
import withSizes from 'react-sizes'

import { validateEmail } from 'src/utils/validations'

import Button from 'src/components/Button'
import Input from 'src/components/Input'
import Grid from 'src/components/Grid'
import MaterialIcon from 'src/components/MaterialIcon'

import { mq, typography } from 'src/styles'

const FormWrapper = styled.div`
	color: inherit;
`

const SplashInput = styled(Input)`
	color: inherit;
	input {
		color: inherit;
		border-color: currentcolor;
		&:focus, &:hover, &:focus:hover {
			border-color: currentcolor;
		}
	}
	label.focused {
		color: inherit;
	}
`

const SubmitButton = styled(Button)`
	padding-left: 1.2em;
	padding-right: ${ ({ loading }) => loading ? `1.3em` : `1em` };
	width: 100%;
	> div {
		justify-content: space-between;
		${ typography.bodyMedium }
	}
`

const CustomForm = ({ 
	status,
	onSubmit,
	className,
	placeholder,
	label,
	size,
	buttonTheme,
	id,
	buttonText,
	setSuccessState
}) => {

	const [email, setEmail] = useState('')

	const submit = () => {
		email && validateEmail(email) && onSubmit(email)
		// run setSuccessState() to put the page into the success state
	}

	const renderButtonText = buttonStatus => {
		let text = 'Submit'
		if (buttonStatus === 'sending') {
			// text = <Loader />
			text = 'Sending'
		} else if (buttonStatus === 'success') {
			text = 'Thank You'
		} else if (buttonStatus === 'error') {
			text = 'Oh No!'
		} else {
			text = 'Submit'
		}
		return text
	}

	return (

		<FormWrapper className={className}>
			<Grid
    		small='[1]'
    		medium='[8] [4]'
    		large='[11] [7] 6'
    		larger='[8] [5] 11'
    		rowGap='16px'
    		colGap='16px'
    	>
    		<div>
    			<SplashInput
        		label={label || 'Enter email'}
        		type="email"
        		name="email"
        		size={size}
        		value={email}
        		onChange={event => setEmail(event.target.value)}
        	/>
    		</div>
    		<div>
        	<SubmitButton
        		// onClick={submit}
        		onClick={setSuccessState}
        		loading={status === 'sending'}
        		disabled={status === 'sending'}
        		setTheme={buttonTheme}
        		iconPosition='right'
        		icon='arrow_forward'
        		size={size}
        	>
        		{buttonText || 'Let me know'}
        	</SubmitButton>
    		</div>
    	</Grid>
		</FormWrapper>
	)
}

class KlaviyoSignup extends Component {
	state = {
		status: null
	}

	subscribe = email => {
		const { listId } = this.props
		const data = {
			$fields: '$source,$email,$consent_method,$consent_form_id,$consent_form_version',
			email: email,
			g: listId,
			$consent_method: 'Klaviyo Form',
			$source: 'Newsletter Signup',
			$consent_form_id: 'Y2pnRT',
			$consent_form_version: 1108660
		}

		const params = new URLSearchParams(data).toString()
		const endpoint = `https://a.klaviyo.com/ajax/subscriptions/subscribe`

		const options = {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			},
			method: 'POST',
			body: params
		}

		fetch(endpoint, options).then(res => {
			return res.json()
		}).then(json => {
			if (json.errors.length === 0) {
				this.setState({ status: 'success' })
			} else {
				this.setState({ status: 'error' })
			}
		})
	}

	render () {
		const {
			buttonTheme,
			className,
			winWidth,
			size,
			label,
			placeholder,
			buttonText,
			setSuccessState
		} = this.props

		const { message, status } = this.state

		return (
		<div>
			<CustomForm
				id="klaviyo-subscribe"
				buttonTheme={buttonTheme || 'default'}
				status={status}
				message={message}
				onSubmit={this.subscribe}
				className={className}
				placeholder={placeholder}
				label={label}
				buttonText={buttonText}
				setSuccessState={setSuccessState}
				size={size || 'small'}
			/>
			{/* <div class="klaviyo-form-Y2pnRT"></div> */}
		</div>

		)
	}
}

const sizesToProps = ({ width, height }) => ({
	winWidth: width
})

export default KlaviyoSignup
