import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import * as PropTypes from 'prop-types'

import SEO from 'src/components/SEO'
import Link from 'src/components/Link'
import SplashHeader from 'src/components/SplashHeader'
import WideMedia from 'src/components/WideMedia'
import Button from 'src/components/Button'
import Grid from 'src/components/Grid'
import ThemeSelector from 'src/components/ThemeSelector'
import ScrollEntrance from 'src/components/ScrollEntrance'
import KlaviyoSignup from 'src/components/KlaviyoSignup'
import { colors, typography, mq, util } from 'src/styles'
import ContentfulRichText from 'src/components/ContentfulRichText'
import themes from 'src/styles/themes'
import { MdMail } from 'react-icons/md'
import { FaFacebook } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'

import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton
} from 'react-share'

import { Transition } from 'react-transition-group'

const timeout = 400
const timingFunction = 'cubic-bezier(0.710, 0.005, 1.000, 0.995)'

const propTypes = {
	data: PropTypes.object.isRequired,
}

const PPLink = styled(Link)`
	margin-top: 20px;
	display: inline-block;
	font-weight: 600;
	font-size: 12px;
	border-bottom: 1px solid currentColor;
	padding-bottom: .1em;
	line-height: 1em;
	opacity: .75;
	&:hover {
		opacity: 1;
	}
	${ mq.largeAndUp } {
		position: fixed;
		${ util.responsiveStyles('bottom', 100, 60, 66, 52) }
		right: ${ 100 / 26 }vw;
	}
`

const StyledKlaviyoSignup = styled(KlaviyoSignup)`
	margin-top: 16px;
`

const SuccessPanel = styled(ThemeSelector)`
	position: fixed;
	top: 100%;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: 2;
	transition: top ${ timeout }ms ${ timingFunction };
	${ ({ transitionStatus }) => transitionStatus === 'exited' ? `
		top: 100%;
	` : `` }
	${ ({ transitionStatus }) => transitionStatus === 'entered' ? `
		top: 0;
	` : `` }
`

const SuccessContent = styled.div`
	text-align: center;
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: 13;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	p {
		${ typography.bodyLarge }
	}
	h6 {
		margin-bottom: 0;
	}
`

const ShareButtons = styled(Grid)`
	max-width: 500px;
	margin-left: auto;
	margin-right: auto;
	button, a {
		width: 100%;
	}
`

class SplashPageTemplate extends React.Component {
	state = {
		submitSuccess: false
	}

	setSuccessState = () => {
		this.setState({ submitSuccess: true })
	}

	render () {
		const site = this.props.data.allContentfulSiteSettings && this.props.data.allContentfulSiteSettings.edges.filter(edge => !edge.node.title.includes('PLACEHOLDER'))[0].node
		const page = this.props.data.allContentfulPage.edges[0].node

		const splashPages = this.props.data.allContentfulSplashPage.edges
		// Select random of the splash pages
		const splashPage = splashPages[Math.floor(Math.random() * splashPages.length)].node

		const { sections } = page
		const hasAtf = sections && sections[0].__typename === 'ContentfulWideMedia' && sections[0].width === 'fullWidth'
		const seo = page.seo
		const { submitSuccess } = this.state

		return (
			<Fragment>
				<SEO
					title={splashPage.title || page.title}
					description={seo.description && seo.description.description}
					siteSettings={site}
					keywords={seo.keywords}
					shareImage={seo.shareImage && 'https:' + seo.shareImage.file.url}
				/>
				<SplashHeader color={submitSuccess ? themes[splashPage.successTheme].color : colors[splashPage.textColor]} />
				<WideMedia
					width='fullWidth'
					height='fullHeight'
					overlayPlacement='bottom left'
					overlayTextAlignment='left'
					overlayComponent={{
		        __typename: 'ContentfulColumn',
		        id: 'splash-overlay-content',
		        content: [
		          {
		            __typename: 'ContentfulText',
		            id: 'splash-overlay-text',
		            text: <div style={{ color: colors[splashPage.textColor] }}>
		            	<h1>{splashPage.largeText}</h1>
		            	<p>{splashPage.smallText || 'Find out when you can take control of your skincare.'}</p>
		            	<StyledKlaviyoSignup
										size='large'
										buttonText={splashPage.buttonText}
										buttonTheme={splashPage.textColor}
										label={splashPage.inputPlaceholder}
										listId={process.env.GATSBY_KLAVIYO_LIST_ID}
										setSuccessState={this.setSuccessState}
									/>
									<PPLink to='/privacy-policy'>Privacy Policy</PPLink>
		            </div>
		          },
		        ]
		      }}
					media={[splashPage.media]}
				/>

				<Transition
		      in={submitSuccess}
		      timeout={{
		        enter: 1,
		        exit: timeout
		      }}
		      unmountOnExit
		      mountOnEnter
		    >
		    	{transitionStatus => (
						<SuccessPanel setTheme={splashPage.successTheme} transitionStatus={transitionStatus}>
							<SuccessContent transitionStatus={transitionStatus}>
								<Grid small='1 [12] 1' medium='3 [18] 3' larger='4 [6] 4'>
									<ScrollEntrance delay={4}>
										<div><h1 style={{ marginBottom: '16px' }}>{splashPage.successHeadline || 'Thank you.'}</h1></div>
										<div><ContentfulRichText richText={splashPage.successText.json} /></div>
										<div><h6 style={{ padding: '30px 0 1em' }}>Share on...</h6></div>
										<div>
											<ShareButtons small='[1]' medium='[1] [1] [1]' colGap="14px" rowGap="14px">
												<div>
													<EmailShareButton
														subject={splashPage.emailSubject}
														body={splashPage.emailBody}
													>
														<Button htmlElement='a' size='large' icon={<MdMail/>} iconPosition="left">Email</Button>
													</EmailShareButton>
												</div>
												<div>
													<TwitterShareButton
														title={splashPage.twitterShareText}
														hashtags={splashPage.twitterShareTags || []}
														url='https://atticus.vercel.app/'
														style={{ outline: 'none' }}
													>
														<Button htmlElement='a' size='large' icon={<IoLogoTwitter/>} iconPosition="left">Twitter</Button>
													</TwitterShareButton>
												</div>
												<div>
													<FacebookShareButton
														quote={splashPage.facebookShareText}
														url='https://atticus.vercel.app/'
														style={{ outline: 'none' }}
													>
														<Button htmlElement='a' size='large' icon={<FaFacebook/>} iconPosition="left">Facebook</Button>
													</FacebookShareButton>
												</div>
											</ShareButtons>
										</div>
									</ScrollEntrance>
								</Grid>
							</SuccessContent>
						</SuccessPanel>
					)}
				</Transition>
			</Fragment>
		)
	}
}

SplashPageTemplate.propTypes = propTypes

export const pageQuery = graphql`
  query($id: String!) {
		allContentfulSiteSettings(filter: {internalName: {nin: "PLACEHOLDER Site Settings"}}) {
	    edges {
	      node {
	        ...SiteSettings
	      }
	    }
	  }
	  allContentfulSplashPage(filter: {internalName: {nin: "PLACEHOLDER Splash Page"}}) {
	  	edges {
	  		node {
	  			id
	  			title
	  			media {
	  				...Image
	  			}
	  			textColor
	  			largeText
	  			smallText
					inputPlaceholder
					buttonText
					successTheme
					successHeadline
					emailSubject
					emailBody
					twitterShareText
					twitterShareTags
					facebookShareText
					successText {
						json
					}
	  		}
	  	}
	  }
    allContentfulPage(filter: {id: {eq: $id}}) {
			edges {
				node {
					id
					title
					slug
					seo {
						description {
							description
						}
						keywords
						shareImage {
							file {
								url
							}
						}
					}
				}
			}
    }
	}
`

export default SplashPageTemplate
