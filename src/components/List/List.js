import React, { Component } from 'react'
import styled from '@emotion/styled'
import { mediaQueries, colors, typography } from 'src/styles'
import Container from 'src/components/Container'
import Grid from 'src/components/Grid'
import Link from 'src/components/Link'
import ContentBlock from 'src/components/ContentBlock'
import Hr from 'src/components/Hr'
import VideoEmbed from 'src/components/VideoEmbed'

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

const Title = styled.h3``

const ContainerRow = styled(Container)`
	display: flex;
	flex-direction: row;
	align-items: baseline;
	justify-content: space-between;
`

const Padding = styled.div`
	padding: 36px 0;
	width: 100%;
`

const List = ({ title, gridSettings, items, linkText, showHr, showTitleHr, externalLink }) => (
	<Wrapper>
		<ContentBlock>
			<ContainerRow>
				<h3>{title}</h3>
				{externalLink && <Link external to={externalLink.href}>{externalLink.name}</Link>}
			</ContainerRow>
			{showTitleHr && <Hr full color={colors.black} />}
			{items &&
				items.map(({ id, logo, title, text, link, image, video }, index) => (
					<React.Fragment>
						{(showHr && index !== 0) && <Hr color={colors.black} />}
						<Container>
							<Padding>
								<Grid
									showOverlay={false}
									{...gridSettings}
								>
									<LogoContainer key={id}><div><img src={logo} /></div></LogoContainer>
									<div key={id + '_div'}>
										<Title>{title}</Title>
										{text}
										<p>
											<Link external to={link}>{linkText}</Link>
										</p>
										{image && <Padding>
											<Grid
												showOverlay={false}
												small='[6]'
												medium='[4] 4'
												large='[4] 4'
											>
												<img src={image} />
											</Grid>
										</Padding>}
										{video && <Padding>
											<VideoEmbed
												gridSettings={{ small: '[6]', medium: '[4] 4', large: '[4] 4' }}
												{...video}
											/>
										</Padding>}
									</div>
								</Grid>
							</Padding>
						</Container>
					</React.Fragment>
				))
			}
		</ContentBlock>
	</Wrapper >
)

export default List
