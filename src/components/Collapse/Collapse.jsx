import React from 'react'
import styled from '@emotion/styled'
import { colors, typography } from 'src/styles'

const collapseSpeed = 300

const InnerWrapper = styled.div`
  width: 100%;
`

const UnstyledButton = styled.button`
	display: block;
	appearance: none;
	line-height: unset;
  outline: none;
  width: 100%;
  border: none;
  background: inherit;
  font-size: inherit;
  text-decoration: inherit;
  font-weight: inherit;
  padding: 0;
  margin: 0;
  border-radius: unset;
  box-shadow: unset;
  background: unset;
  color: inherit;
  height: unset;
  cursor: pointer;
  transition: none;
`

const CollapseHeader = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
`

const DisplayName = styled.div`
  ${ typography.h6 }
`

const CollapsedContent = styled.div`
	transition: max-height ${ collapseSpeed + 'ms' } ease-in-out;
	max-height: ${ ({ contentHeight, open }) => open ? contentHeight : '0' };
	overflow: hidden;
`

const DetailsContainer = styled.div``

class Collapse extends React.Component {
	state = {
		open: !this.props.collapsed,
		contentHeight: null
	}
	constructor (props) {
		super(props)
		this.ItemContent = React.createRef()
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.collapsed !== prevProps.collapsed) {
			this.toggleOpen(prevProps.collapsed)
		}
	}

  toggleOpen = opening => {
		if (typeof window !== 'undefined') {
			this.updateDetailsHeight(opening)
			setTimeout(() => {
				this.setState((prevState) => ({ open: !prevState.open }))
			}, 10)
		}
  }

  updateDetailsHeight = (opening) => {
  	if (this.ItemContent && this.ItemContent.current) {
			const { scrollHeight } = this.ItemContent.current
			this.setState({ contentHeight: scrollHeight + 1 + 'px' })
		}
		if (opening) {
			setTimeout(() => {
				this.setState({ contentHeight: 'auto' })	
			}, collapseSpeed)
		}
  }

  render () {
		const { children, title, index, collapsed, className } = this.props
		const { contentHeight } = this.state
		let { open } = this.state

		if (children) {
			return (
				<InnerWrapper className={className}>
					{title && (
						<UnstyledButton onClick={() => this.toggleOpen(!open)} open={open} className={open ? "title open" : "title"}>
							<CollapseHeader>
								<DisplayName hasChildren={true}>
									<div>{title}</div>
								</DisplayName>
							</CollapseHeader>
						</UnstyledButton>
					)}
					<CollapsedContent contentHeight={contentHeight} open={open} className={open ? 'content open' : 'content'}>
						<DetailsContainer ref={this.ItemContent}>
							{children}
						</DetailsContainer>
					</CollapsedContent>
				</InnerWrapper>
			)
		} else {
			return (
				<InnerWrapper className={className}>
					<CollapseHeader>
						<DisplayName>
							<div>{title}</div>
						</DisplayName>
					</CollapseHeader>
				</InnerWrapper>
			)
		}
	}
}

Collapse.defaultProps = {
	index: null,
	collapsed: true
}

export default Collapse;