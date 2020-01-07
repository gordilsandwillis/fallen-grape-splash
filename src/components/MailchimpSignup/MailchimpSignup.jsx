import React, { Component } from 'react'
import Button from 'src/components/Button'
import Input from 'src/components/Input'
import MaterialIcon from 'src/components/MaterialIcon'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

const McUrl = '//gordilsandwillis.us18.list-manage.com/subscribe/post?u=59f368fb0e0e947c191b3b89d&amp;id=265fbc6b5b'

// a basic form
const CustomForm = ({ status, message, onValidated, inputClassName, inputPlaceholder }) => {
	let email
	const submit = () =>
		email &&
		email.value.indexOf('@') > -1 &&
		onValidated({
			EMAIL: email.value,
		})

	let buttonStatus = status

	const renderIcon = buttonStatus => {
		let icon = <MaterialIcon>arrow_forward</MaterialIcon>
		if (buttonStatus === 'sending') {
			// icon = <Loader />
			icon = <MaterialIcon>more</MaterialIcon>
		} else if (buttonStatus === 'success') {
			icon = <MaterialIcon>check</MaterialIcon>
		} else if (buttonStatus === 'error') {
			icon = <MaterialIcon>close</MaterialIcon>
		} else {
			icon = <MaterialIcon>arrow_forward</MaterialIcon>
		}
		return icon
	}

	return (

		<div style={{ display: 'flex' }}>
			<div>
				{/* <input
					ref={node => (email = node)}
					type="email"
					placeholder={inputPlaceholder ? inputPlaceholder : "Email"}
				/> */}
				<Input
					size="small"
					ref={node => (email = node)}
					type="email"
					placeholder={inputPlaceholder || 'Email'}
				/>
			</div>
			<Button onClick={submit} shape="simple square" theme="brown" size="small">
				<div>
					{renderIcon(status)}
				</div>
			</Button>
		</div>
	)
}

class MailchimpSignup extends Component {
	render () {
		return (
			<MailchimpSubscribe
				url={McUrl}
				render={({ subscribe, status, message }) => (
					<CustomForm
						status={status}
						message={message}
						onValidated={formData => subscribe(formData)}
						inputClassName={this.props.inputClassName}
						inputPlaceholder={this.props.placeholder}
					/>
				)}
			/>
		)
	}
}

export default MailchimpSignup
