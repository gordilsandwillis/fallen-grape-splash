import React from 'react'
import styled from '@emotion/styled'
import { colors, typography } from 'src/styles'
import Container from 'src/components/Container'
import Grid from 'src/components/Grid'
import Link from 'src/components/Link'
import ContentBlock from 'src/components/ContentBlock'
import Hr from 'src/components/Hr'
import VideoEmbed from 'src/components/VideoEmbed'
import ScrollEntrance from 'src/components/ScrollEntrance'

const Wrapper = styled.div`
  background-color: ${ colors.offwhite };
color: ${ colors.black };
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  div {
    max-width: 300px;
  };
`

const ContainerRow = styled(Container)`
	display: flex;
	flex-direction: row;
	align-items: baseline;
	justify-content: space-between;
	@media (max-width: 400px) {
		flex-direction:column;
	}
`

const HrFullContainer = styled.div`
	margin: 20px 0;
`

const LinkContainer = styled.div`
	transform: translate(0, -3px);
`
const Padding = styled.div`
	${ ({ notFirst }) => notFirst && typography.responsiveStyles('padding-top', 40, 40, 40, 35) }
	${ ({ notLast }) => notLast && typography.responsiveStyles('padding-bottom', 40, 40, 40, 35) }
	width: 100%;
	padding: 10px 0px;
`
const ImgStyled = styled.img`
	${ typography.responsiveStyles('margin-top', 0, 0, 0, 20) }
	${ typography.responsiveStyles('margin-bottom', 0, 0, 20, 28) }
`

const Title = styled.div`
${ typography.h2 }
padding-bottom: 10px;
`

const H2 = styled.div`
	${ typography.h2 }
	padding-bottom: 30px;
`
const List = ({ title, gridSettings, items, linkText, showHr, showTitleHr, externalLink, data }) => (
	<Wrapper>
		<ContentBlock>
			<ScrollEntrance>
				<ContainerRow>
					{showTitleHr ? <Title>{title}</Title> : <H2>{title}</H2>}
					{externalLink && <LinkContainer><Link external to={externalLink.href}>{externalLink.name}</Link></LinkContainer>}
				</ContainerRow>
				{showTitleHr && <HrFullContainer><Hr full color={colors.black} /></HrFullContainer>}
				{items &&
					items.map(({ id, logo, title, text, link, image, video }, index) => (
						<React.Fragment key={index + '_fragment'}>
							{(showHr && index !== 0) && <Hr key={index + '_hr'} color={colors.black} />}
							<Container key={index + '_container'}>
								<Padding notFirst={index} notLast={index !== items.length - 1}>
									<Grid
										showOverlay={false}
										{...gridSettings}
									>
										<LogoContainer><div>{logo && <ImgStyled src={logo} />}</div></LogoContainer>
										<div>
											{title && <Title>{title}</Title>}
											{text && <p>{text}</p>}
											{link && <p><Link external to={link}>{linkText}</Link></p>}
										</div>
									</Grid>
									{(image || video) && <Padding>
										<Grid
											showOverlay={false}
											large='3 [4] 5'
											medium='3 [5] 4'
											small='[6]'
										>
											{image && <ImgStyled src={image} />}
											{video && <VideoEmbed gridSettings={{ small: '[6]', medium: '[6]', large: '[6]' }} {...video} />}
										</Grid>
									</Padding>}
								</Padding>

							</Container>
						</React.Fragment>
					))
				}
			</ScrollEntrance>
		</ContentBlock>
	</Wrapper >
)
export default List
