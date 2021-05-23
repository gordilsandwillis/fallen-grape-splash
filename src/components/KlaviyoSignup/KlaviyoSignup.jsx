import React, { useEffect, useState, Component } from "react"
import styled from "@emotion/styled"
import withSizes from "react-sizes"
import { subscribe } from "klaviyo-subscribe"
import Arrow from "src/assets/images/arrow-right.svg"

import { validateEmail } from "src/utils/validations"

import Button from "src/components/Button"
import Input from "src/components/Input"

import { mq, typography, colors } from "src/styles"

const FormWrapper = styled.div`
  color: inherit;
  position: relative;
`

const SplashInput = styled(Input)`
  color: inherit;
  label {
    ${({ validEmail }) => (validEmail ? `color: ${colors.orange2};` : ``)}
  }
  input {
    color: inherit;
    padding-right: 76px;
    &:focus,
    &:hover,
    &:focus:hover {
      border-color: currentcolor;
    }
  }
`

const SubmitButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 12px;
  &[disabled],
  &:disabled {
    opacity: 0;
    transform-origin: 0% 50%;
    transform: translateX(-10px);
  }
`

const ButtonArrow = styled(Arrow)`
  width: 44px;
  height: 18px;
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
  setSuccessState,
}) => {
  const [email, setEmail] = useState("")

  const submit = () => {
    email && validateEmail(email) && onSubmit(email)
    // run setSuccessState() to put the page into the success state
  }

  const renderButtonText = (buttonStatus) => {
    let text = "Submit"
    if (buttonStatus === "sending") {
      // text = <Loader />
      text = "Sending"
    } else if (buttonStatus === "success") {
      text = "Thank You"
    } else if (buttonStatus === "error") {
      text = "Oh No!"
    } else {
      text = "Submit"
    }
    return text
  }

  return (
    <FormWrapper className={className}>
      <div>
        <div>
          <SplashInput
            label={label || "Enter email"}
            type="email"
            name="email"
            size={size}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            validEmail={validateEmail(email)}
          />
        </div>
        <div>
          <SubmitButton
            onClick={submit}
            loading={status === "sending"}
            disabled={status === "sending" || !validateEmail(email)}
            setTheme="transparent"
            iconPosition="right"
            icon={<ButtonArrow />}
            shape="square"
            size={size}
            type="submit"
          />
        </div>
      </div>
    </FormWrapper>
  )
}

class KlaviyoSignup extends Component {
  state = {
    status: null,
  }

  handleSubscribe = (email) => {
    const { listId } = this.props
    console.log({ listId, email })
    subscribe(
      listId,
      email
      // { any optional traits }
    ).then((response) => {
      console.log({ response })
      if (response && response.success) {
        this.setState({ status: "success" })
        this.props.setSuccessState()
      } else {
        this.setState({ status: "error" })
      }
    })

    // const data = {
    //  $fields: '$source,$email,$consent_method,$consent_form_id,$consent_form_version',
    //  email: email,
    //  g: listId,
    //  $consent_method: 'Klaviyo Form',
    //  $source: 'Newsletter Signup',
    //  $consent_form_id: 'Y2pnRT',
    //  $consent_form_version: 1108660
    // }

    // const params = new URLSearchParams(data).toString()
    // const endpoint = `https://a.klaviyo.com/ajax/subscriptions/subscribe`

    // const options = {
    //  headers: {
    //    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    //  },
    //  method: 'POST',
    //  body: params
    // }

    // fetch(endpoint, options).then(res => {
    //  return res.json()
    // }).then(json => {
    //  if (json.errors.length === 0) {
    //     this.setState({ status: 'success' })
    //     this.props.setSuccessState()
    //  } else {
    //    this.setState({ status: 'error' })
    //  }
    // })
  }

  render() {
    const {
      buttonTheme,
      className,
      winWidth,
      size,
      label,
      placeholder,
      buttonText,
      setSuccessState,
    } = this.props

    const { message, status } = this.state

    return (
      <div>
        <CustomForm
          id="klaviyo-subscribe"
          buttonTheme="default"
          status={status}
          message={message}
          onSubmit={this.handleSubscribe}
          className={className}
          placeholder={placeholder}
          label={label}
          buttonText={buttonText}
          setSuccessState={setSuccessState}
          size={size || "small"}
        />
        {/* <div class="klaviyo-form-Y2pnRT"></div> */}
      </div>
    )
  }
}

const sizesToProps = ({ width, height }) => ({
  winWidth: width,
})

export default KlaviyoSignup
