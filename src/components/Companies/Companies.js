import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { colors, typography } from 'src/styles'
import Container from 'src/components/Container'
import Grid from 'src/components/Grid'
import Link from 'src/components/Link'
import Image from 'src/components/Image'
import RichText from 'src/components/RichText'
import ContentBlock from 'src/components/ContentBlock'
import ScrollEntrance from 'src/components/ScrollEntrance'

const Wrapper = styled.div`
  background-color: ${ colors.offwhite };
	color: ${ colors.black };
`

const LogoContainer = styled.div`
	overflow: hidden;
	flex-grow: 0;
	flex-shrink: 0;
	max-width: 250px;
	img {
		display: block;
		margin: 0;
	}
	${ typography.responsiveStyles('margin-top', 0, 0, 0, 20) }
	${ typography.responsiveStyles('margin-bottom', 0, 0, 20, 28) }
	width: 100%;
	margin:auto;

`

const Padding = styled.div`
	${ ({ notFirst }) => notFirst && typography.responsiveStyles('padding-top', 50, 45, 45, 40) }
	${ ({ notLast }) => notLast && typography.responsiveStyles('padding-bottom', 50, 45, 45, 40) }
	width: 100%;
	padding: 10px 0px;
`
const ImageStyled = styled(Image)`
	/* width: 100%;	 */
`

const H2 = styled.div`
	${ typography.h2 }
	padding-bottom: 50px;
`

const Body = styled.div`
	${ typography.body }
	
`
const Companies = ({ title, items, showTitle }) => (
	<Wrapper>
		<ContentBlock>
			<ScrollEntrance>
				<Container>
					{(title && showTitle) && <H2>{title}</H2>}
				</Container>
				{items && items.map(({ logo, description, linkToSite }, index) => (
					<Container key={index + '_container'}>
						<Padding notFirst={index} notLast={index !== items.length - 1}>
							<Grid large='[4] 1 [7]' medium='[4] 1 [7]' small='[6]'>
								<LogoContainer>{logo && <ImageStyled image={logo} />}</LogoContainer>
								<div>
									{description && <Body>{RichText(description)}</Body>}
									{linkToSite && <p><Link external to={linkToSite.url}>LEARN MORE</Link></p>}
								</div>
							</Grid>
						</Padding>
					</Container>
				))}
			</ScrollEntrance>
		</ContentBlock>
	</Wrapper >
)
export default Companies

Companies.defaultProps = {
	// title,
	// items
	// linkText
}

Companies.propTypes = {
	title: PropTypes.string,
	items: PropTypes.array,
	linkText: PropTypes.string
}
