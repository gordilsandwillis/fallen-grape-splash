import React from 'react'
import styled from '@emotion/styled'
import { colors, typography } from 'src/styles'
import Container from 'src/components/Container'
import Grid from 'src/components/Grid'
import Link from 'src/components/Link'
import ContentBlock from 'src/components/ContentBlock'
import Image from 'src/components/Image'
import Hr from 'src/components/Hr'
import RichText from 'src/components/RichText'
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
    max-width: 250px;
  };
	img {
		height: auto !important;
	}
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
	padding: 20px 0;
`

const LinkContainer = styled.div`
	transform: translate(0, -3px);
`
const Padding = styled.div`
	${ typography.responsiveStyles('padding-top', 40, 40, 40, 35) }
	${ typography.responsiveStyles('padding-bottom', 40, 40, 40, 35) }
	width: 100%;
	padding: 10px 0px;
`
const ImageStyled = styled(Image)`
	width: 100%;
	${ typography.responsiveStyles('margin-top', 0, 0, 0, 20) }
	${ typography.responsiveStyles('margin-bottom', 0, 0, 20, 28) }
`

const Title = styled.div`
${ typography.h2 }
padding-bottom: 10px;
`

const PressList = ({ title, showTitle, pressContactLink, items }) => (
	<Wrapper>
		<ContentBlock>
			<ScrollEntrance>
				<ContainerRow>
					{(title && showTitle) && <Title>{title}</Title>}
					{pressContactLink && <LinkContainer><Link external to={pressContactLink.url}>{pressContactLink.text}</Link></LinkContainer>}
				</ContainerRow>
				<HrFullContainer><Hr full color={colors.black} /></HrFullContainer>
				{items &&
					items.map(({ id, title, mediaOrganizationsLogo, description, link, inlineVideo, inlineImage }, index) => (
						<React.Fragment key={id}>
							{(index !== 0) && <Hr color={colors.black} />}
							<Container>
								<Padding>
									<Grid large='[2] 1 [8] 1' medium='[2] 1 [9]' small='[2] [4]'>
										<LogoContainer>{mediaOrganizationsLogo && <ImageStyled image={mediaOrganizationsLogo} />}</LogoContainer>
										<div>
											{title && <Title>{title}</Title>}
											{description && RichText(description)}
											{link && <p><Link external to={link.url}>{link.text}</Link></p>}
										</div>
									</Grid>
									{inlineImage && <Padding>
										<Grid large='3 [4] 5' medium='3 [5] 4' small='[6]'>
											{inlineImage && <ImageStyled src={inlineImage} />}
										</Grid>
									</Padding>}
									{inlineVideo && <Padding>
										<Grid large='3 [4] 5' medium='3 [5] 4' small='[6]'>
											{inlineVideo && <VideoEmbed url={inlineVideo.url} coverImage={inlineVideo.coverImage} />}
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
export default PressList
