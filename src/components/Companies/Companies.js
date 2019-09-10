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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  div {
    max-width: 300px;
  };
`

const Padding = styled.div`
	${ ({ notFirst }) => notFirst && typography.responsiveStyles('padding-top', 40, 40, 40, 35) }
	${ ({ notLast }) => notLast && typography.responsiveStyles('padding-bottom', 40, 40, 40, 35) }
	width: 100%;
	padding: 10px 0px;
`
const ImageStyled = styled(Image)`
	width: 100%;
	height: 100%;
	${ typography.responsiveStyles('margin-top', 0, 0, 0, 20) }
	${ typography.responsiveStyles('margin-bottom', 0, 0, 20, 28) }
`

const H2 = styled.div`
	${ typography.h2 }
	padding-bottom: 30px;
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
									{description && <p>{RichText(description)}</p>}
									{linkToSite && <p><Link external to={linkToSite.url}>{linkToSite.text}</Link></p>}
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
