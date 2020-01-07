import React, { Component } from 'react'
import { navigate } from 'gatsby'

class NotFound extends Component {
	componentDidMount () {
		setTimeout(() => {
			navigate('/')
		}, 500)
	}

	render () {
		return <div></div>
	}
}

export default NotFound
