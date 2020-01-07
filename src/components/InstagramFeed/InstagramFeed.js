import React, { Component } from 'react'
import styled from '@emotion/styled'
import Grid from 'src/components/Grid'
import Section from 'src/components/Section'
import instafeed from 'instafeed-lite'
import { colors, mediaQueries as mq } from 'src/styles'

const lineSpacing = 12
const lineWidth = 1
const doubleLineSpace = 4
const offSet = lineSpacing + lineWidth + doubleLineSpace

const Wrapper = styled.div`
	overflow: hidden;
`

const InstaGrid = styled(Grid)`
	margin-left: -${ offSet }px;
	margin-right: -${ offSet }px;
	width: auto;
`

const Border = styled.hr`
	width: ${ (100 / 14) * 12 }%;
	margin-left: auto;
	margin-right: auto;
	${ ({ position }) => position === 'bottom' && `
		margin-top: -${ lineSpacing + 'px' };
	` }
	${ ({ position }) => !position && `
		margin-bottom: -${ lineSpacing + 'px' };
	` }
	${ ({ position }) => position === 'middle' && `
		display: none;
		${ mq.mediumAndBelow } {
			display: block;
			position: absolute;
			top: 50%;
			left: 0;
			right: 0;
			margin: 0 auto;
		}
	` }
`

const ImageItem = styled.div`
	border-left: 1px solid ${ colors.hrColor };
	border-right: 1px solid ${ colors.hrColor };
	padding: ${ lineSpacing * 2 + 'px' } ${ lineSpacing + 'px' };
	margin-left: ${ doubleLineSpace / 2 + 'px' };
	margin-right: ${ doubleLineSpace / 2 + 'px' };
	${ ({ index }) => index === 0 && `
		border-left: none;
	` }
	${ ({ index }) => index === 3 && `
		border-right: none;
		${ mq.mediumAndBelow } {
			padding-top: 0;
		}
	` }
	${ ({ index }) => index === 1 && `
		${ mq.mediumAndBelow } {
			border-right: none;
		}
	` }
	${ ({ index }) => index === 2 && `
		${ mq.mediumAndBelow } {
			border-left: none;
			padding-top: 0;
		}
	` }
`

const InstaImage = styled.a`
	position: relative;
	padding-bottom: 100%;
	width: 100%;
	display: block;
	img {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

class InstagramFeed extends Component {
	state = {
		feed: null
	}

	componentWillMount () {
		const options = {
			accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
			clientId: process.env.INSTAGRAM_CLIENT_ID,
			get: 'user',
			locationId: null,
			sortBy: 'none',
			tagName: null,
			userId: process.env.INSTAGRAM_USER_ID,
			limit: 4
		}

		const request = instafeed(options)
		request.then(feed => {
			this.setState({ feed })
		})
	}

	render () {
		const { feed } = this.state
		const {
			theme,
			prevTheme,
			nextTheme,
			eyebrow,
			headline,
			headlineSize,
			buttons
		} = this.props

		if (!feed) {
			return false
		}

		return (
			<Section
				setTheme={theme}
				prevTheme={prevTheme}
				nextTheme={nextTheme}
				sectionid="insta"
				buttons={[
					{
						label: 'Follow Us',
						to: 'https://instagram.com/',
						theme: 'green',
						external: 'true',
						target: '_blank'
					}
				]}
			>
				<Wrapper>
					<Border />
					<div>eyebrow: {eyebrow}</div>
					<div>headline: {headline}</div>
					<div>headlineSize: {headlineSize}</div>
					<div>buttons: {buttons.toString()}</div>
					<InstaGrid
						small="1 [6] [6] 1"
						medium="1 [3] [3] [3] [3] 1"
						large="1 [3] [3] [3] [3] 1"
					>
						{ feed && feed.data && (
							feed.data.map((item, index) => (
								<ImageItem key={item.id} index={index}>
									<div>
										<InstaImage className="img-wrap" href={item.link} target="_blank">
											<img src={item.images.standard_resolution.url} alt={item.caption.text} />
										</InstaImage>
									</div>
								</ImageItem>
							))
						)}
					</InstaGrid>
					<Border position="middle" />
					<Border position="bottom" />
				</Wrapper>
			</Section>
		)
	}
}

export default InstagramFeed
