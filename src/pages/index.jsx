import React, { useState } from "react"
import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/core"
import { graphql, useStaticQuery } from "gatsby"
import * as PropTypes from "prop-types"

import SEO from "src/components/SEO"
import Link from "src/components/Link"
import Logo, { Logomark } from "src/components/Logo"
import WideMedia from "src/components/WideMedia"
import Button from "src/components/Button"
import Grid from "src/components/Grid"
import Img from "gatsby-image/withIEPolyfill"
import ThemeSelector from "src/components/ThemeSelector"
import ResponsiveComponent from "src/components/ResponsiveComponent"
import ScrollEntrance from "src/components/ScrollEntrance"
import KlaviyoSignup from "src/components/KlaviyoSignup"
import { colors, typography, mq, util, animations } from "src/styles"
import ContentfulRichText from "src/components/ContentfulRichText"
import themes from "src/styles/themes"
import { AiFillMail } from "react-icons/ai"
import { FaFacebook } from "react-icons/fa"
import { IoLogoTwitter } from "react-icons/io"
import { use100vh } from "react-div-100vh"
import BalanceText from "react-balance-text"

import {
	EmailShareButton,
	FacebookShareButton,
	TwitterShareButton,
} from "react-share"

import { Transition } from "react-transition-group"

const timeout = 400
const timingFunction = "cubic-bezier(0.710, 0.005, 1.000, 0.995)"

export const verticalTextIn = keyframes`
  100% {
    transform: rotate(-90deg);
    opacity: 1;
  }
`

const Header = styled.div`
	text-align: center;
	svg {
		margin: 0 -10px 0 0;
		transform: translateY(-40px);
		opacity: 0;
		animation: ${animations.transformIn} 0.8s 1.6s
			cubic-bezier(0.44, 0.24, 0.16, 1) forwards;
	}
	> div.vertical-text {
		opacity: 0;
		transform: rotate(-90deg) translateX(40px);
		animation: ${verticalTextIn} 0.8s 1.6s cubic-bezier(0.44, 0.24, 0.16, 1)
			forwards;
	}
	${mq.largeAndBelow} {
		position: absolute;
		top: ${100 / 14}vw;
		left: 2.5vw;
		right: ${100 / 14}vw;
		text-align: right;
		margin: 0 -2px 0 0;
		svg {
			margin: -5vw -4.5vw 0 0;
		}
	}
	${mq.smallAndBelow} {
		left: ${100 / 14}vw;
		svg {
			margin: -3px -2px 0 0;
		}
	}
`

const BottleCanvas = styled.div`
	position: relative;
	height: 100%;
	${mq.smallAndBelow} {
		z-index: 0;
		height: auto;
		margin: 0 25%;
		height: 100vw;
		position: sticky;
		top: ${100 / 14}vw;
	}
`

const BackgroundImage = styled(Img)`
	position: absolute !important;
	z-index: 0;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`

const BottleImage = styled(Img)`
	position: absolute !important;
	z-index: 1;
	top: 5%;
	left: 15%;
	bottom: 5%;
	right: 15%;
	img {
		object-fit: contain !important;
	}
`

const SignupCol = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	z-index: 3;
	${mq.smallAndBelow} {
		z-index: 10;
		padding-bottom: ${100 / 14}vw;
	}
`

const SplashContent = styled(Grid)`
	min-height: ${({ height }) => height};
	padding: ${100 / 14}vw;
	${mq.largerAndUp} {
		padding: ${100 / 32}vw;
	}
	${mq.extraLargeAndUp} {
		padding: ${100 / 40}vw;
	}
`

const InnerGrid = styled(Grid)`
	height: 100%;
	${mq.smallAndBelow} {
		height: auto;
	}
`

const SuccessPanel = styled(ThemeSelector)`
	position: fixed;
	top: 100%;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: 999;
	transition: top ${timeout}ms ${timingFunction};
	${({ transitionStatus }) =>
		transitionStatus === "exited"
			? `
		top: 100%;
	`
			: ``}
	${({ transitionStatus }) =>
		transitionStatus === "entered"
			? `
		top: 0;
	`
			: ``}
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
		${typography.bodyLarge}
	}
	h6 {
		margin-bottom: 0;
	}
`

const ShareButtons = styled(Grid)`
	max-width: 650px;
	margin-left: auto;
	margin-right: auto;
	button,
	a {
		width: 100%;
	}
`

const StaggeredHeadline = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	padding-bottom: 24px;
	${mq.largeAndBelow} {
		padding-bottom: 10px;
		height: 40vw;
	}
	${mq.smallAndBelow} {
		position: relative;
		z-index: 3;
		flex-shrink: 0;
		height: 100vw;
		justify-content: center;
		margin-top: -100vw;
		margin-bottom: ${100 / 14}vw;
	}
`

const HeadlineRow = styled(ScrollEntrance)`
	${typography.h2}
	line-height: .85em;
	display: flex;
	min-height: 0.7em;
	${({ lastItem, offset }) => !lastItem && `flex-grow: ${offset / 3};`}
	&:before {
		content: "";
		display: block;
		flex-grow: ${({ offset = 0 }) => offset};
	}
`

const SplashPageTemplate = () => {
	const { allContentfulSiteSettings, allContentfulSplashPage } = useStaticQuery(
		graphql`
			query {
				allContentfulSiteSettings(
					filter: { internalName: { nin: "PLACEHOLDER Site Settings" } }
				) {
					edges {
						node {
							...SiteSettings
						}
					}
				}
				allContentfulSplashPage(
					filter: { internalName: { nin: "PLACEHOLDER Splash Page" } }
				) {
					edges {
						node {
							id
							title
							mediaBackground {
								fluid(maxWidth: 1000, quality: 100) {
									...GatsbyContentfulFluid_withWebp_noBase64
								}
							}
							mediaForeground {
								fluid(maxWidth: 1000, quality: 100) {
									...GatsbyContentfulFluid_withWebp_noBase64
								}
							}
							largeText
							smallText
							inputCtaText
							inputPlaceholder
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
			}
		`
	)

	const [submitSuccess, setSuccessState] = useState(false)

	const site =
		allContentfulSiteSettings &&
		allContentfulSiteSettings.edges.filter(
			(edge) => !edge.node.title.includes("PLACEHOLDER")
		)[0].node

	const splashPage = allContentfulSplashPage.edges[0].node
	// Select random of the splash pages
	const seo = allContentfulSiteSettings.edges[0].node

	console.log(splashPage)

	const winHeight = use100vh()
	const fullHeight = winHeight ? winHeight + "px" : "100vh"

	const RenderHeader = (mobile) => (
		<Header mobile={mobile}>
			<div
				className="vertical-text"
				css={css`
					${typography.bodySmall}
					position: absolute;
					transform-origin: 0% 0%;
					transform: rotate(-90deg);
					width: 15em;
					top: 15em;
					left: -0.15em;
					text-align: right;
				`}
			>
				Santa Ynez, California
			</div>
			<Logomark
				css={css`
					width: 90px;
					${util.responsiveStyles("width", 96, 90, 60, 50)}
					display: inline-block;
					vertical-align: top;
				`}
			/>
		</Header>
	)

	return (
		<>
			<SEO
				title={splashPage.title || page.title}
				description={seo.description && seo.description.description}
				siteSettings={site}
				keywords={seo.keywords}
				shareImage={seo.shareImage && "https:" + seo.shareImage.file.url}
			/>
			<ResponsiveComponent
				large={<span style={{ display: "none" }} />}
				small={RenderHeader(true)}
			/>
			<SplashContent
				small="[1]"
				medium="[1]"
				large="[2] [1]"
				vAlign="top"
				colGap={[100 / 14 + "vw", 100 / 32 + "vw", 100 / 40 + "vw"]}
				rowGap={[100 / 14 + "vw", 100 / 14 + "vw", 100 / 40 + "vw"]}
				height={fullHeight}
				gridDirection="rtl"
			>
				<InnerGrid
					small="[1]"
					medium="[1] [2]"
					large="[1] [1]"
					colGap={[100 / 14 + "vw", 100 / 32 + "vw", 100 / 40 + "vw"]}
					rowGap={0}
				>
					<BottleCanvas>
						<BackgroundImage
							fluid={splashPage.mediaBackground.fluid}
							loading="eager"
							fadeIn={false}
						/>
						<BottleImage
							fluid={splashPage.mediaForeground.fluid}
							loading="eager"
							fadeIn={false}
						/>
					</BottleCanvas>
					<ResponsiveComponent
						medium={<span style={{ display: "none" }} />}
						small={
							<StaggeredHeadline>
								<HeadlineRow
									offset={0.25}
									delay={3}
									css={css`
										flex-grow: 0;
									`}
								>
									<div>You're a</div>
								</HeadlineRow>
								<HeadlineRow offset={0.8} delay={4}>
									<div>natural</div>
								</HeadlineRow>
								<HeadlineRow
									offset={0.25}
									delay={5}
									css={css`
										flex-grow: 0;
									`}
								>
									<div>So are</div>
								</HeadlineRow>
								<HeadlineRow offset={0.6} lastItem delay={6}>
									<div>we</div>
								</HeadlineRow>
							</StaggeredHeadline>
						}
					/>
					<SignupCol>
						<ResponsiveComponent
							small={<span style={{ display: "none" }} />}
							medium={
								<StaggeredHeadline>
									<HeadlineRow delay={3} speed={750}>
										<div>You're a</div>
									</HeadlineRow>
									<HeadlineRow
										offset={1}
										delay={4}
										speed={750}
										css={css`
											flex-grow: 0.4;
										`}
									>
										<div>natural</div>
									</HeadlineRow>
									<HeadlineRow
										offset={0.4}
										delay={20}
										speed={750}
										css={css`
											flex-grow: 0;
										`}
									>
										<div>So are</div>
									</HeadlineRow>
									<HeadlineRow offset={0.8} lastItem delay={21} speed={750}>
										<div>we</div>
									</HeadlineRow>
								</StaggeredHeadline>
							}
						/>
						<ScrollEntrance delay={18} speed={750}>
							<div
								css={css`
									${mq.smallAndBelow} {
										text-align: center;
									}
								`}
							>
								<p style={{ marginTop: 0 }}>
									<BalanceText>{splashPage.smallText}</BalanceText>
								</p>
								<p style={{ marginBottom: "10px" }}>
									{splashPage.inputCtaText}
								</p>
							</div>
							<KlaviyoSignup
								size="large"
								label={splashPage.inputPlaceholder}
								listId={process.env.GATSBY_KLAVIYO_LIST_ID}
								setSuccessState={() => setSuccessState(true)}
							/>
						</ScrollEntrance>
					</SignupCol>
				</InnerGrid>
				<div
					css={css`
						height: 100%;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						position: relative;
						z-index: 1;
					`}
				>
					<ResponsiveComponent
						small={<span style={{ display: "none" }} />}
						large={RenderHeader()}
					/>
					<ResponsiveComponent
						small={
							<ScrollEntrance speed={750}>
								<Logo />
							</ScrollEntrance>
						}
						large={
							<ScrollEntrance delay={16} speed={750}>
								<Logo />
							</ScrollEntrance>
						}
					/>
				</div>
			</SplashContent>

			<Transition
				in={submitSuccess}
				timeout={{
					enter: 1,
					exit: timeout,
				}}
				unmountOnExit
				mountOnEnter
			>
				{(transitionStatus) => (
					<SuccessPanel setTheme="orange" transitionStatus={transitionStatus}>
						<SuccessContent transitionStatus={transitionStatus}>
							<Grid small="1 [12] 1" medium="3 [18] 3" larger="3 [8] 3">
								<ScrollEntrance delay={4}>
									<div>
										<Logomark
											css={css`
												width: 90px;
												display: inline-block;
												vertical-align: top;
												margin-right: -8px;
												margin-top: -40px;
												color: ${colors.textColor};
											`}
										/>
										<h1
											css={css`
												${util.responsiveStyles("margin-top", 40, 36, 34, 40)}
												${util.responsiveStyles(
													"margin-bottom",
													40,
													36,
													34,
													40
												)}
											`}
										>
											{splashPage.successHeadline || "Thank you."}
										</h1>
									</div>
									<div>
										<ContentfulRichText
											css={css`
												p {
													${typography.bodyMedium}
												}
											`}
											richText={splashPage.successText.json}
										/>
									</div>
									<div>
										<p
											css={css`
												margin: 0 0 16px 0;
												${util.responsiveStyles("margin-top", 40, 36, 34, 40)}
											`}
										>
											Share on...
										</p>
									</div>
									<div>
										<ShareButtons
											small="[1]"
											medium="[1] [1] [1]"
											colGap="16px"
											rowGap="16px"
										>
											<div>
												<EmailShareButton
													subject={splashPage.emailSubject}
													body={splashPage.emailBody}
													url={"https://google.com" || process.env.GATSBY_HOST}
												>
													<Button
														htmlElement="a"
														size="large"
														icon={<AiFillMail size="1em" />}
														iconPosition="left"
													>
														Email
													</Button>
												</EmailShareButton>
											</div>
											<div>
												<TwitterShareButton
													title={splashPage.twitterShareText}
													hashtags={splashPage.twitterShareTags || []}
													url={"https://google.com" || process.env.GATSBY_HOST}
													style={{ outline: "none" }}
												>
													<Button
														htmlElement="a"
														size="large"
														icon={<IoLogoTwitter size="1em" />}
														iconPosition="left"
													>
														Twitter
													</Button>
												</TwitterShareButton>
											</div>
											<div>
												<FacebookShareButton
													quote={splashPage.facebookShareText}
													url={"https://google.com" || process.env.GATSBY_HOST}
													style={{ outline: "none" }}
												>
													<Button
														htmlElement="a"
														size="large"
														icon={<FaFacebook size="1em" />}
														iconPosition="left"
													>
														Facebook
													</Button>
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
		</>
	)
}

export default SplashPageTemplate
