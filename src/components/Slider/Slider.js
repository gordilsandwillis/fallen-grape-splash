import React from 'react'
import styled from '@emotion/styled'
import SlickSlider from 'react-slick'
import withSizes from 'react-sizes'

import Container from 'src/components/Container'
import Link from 'src/components/Link'
import ContentBlock from 'src/components/ContentBlock'
import { typography, colors, gridSettings, mediaQueries as mq } from 'src/styles'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const Wrapper = styled.div`
  background-color: ${ colors.black };
  color: ${ colors.white };
`

const Title = styled.div`
${ typography.h3 }
padding-bottom: 15px;
${ typography.responsiveStyles('padding-top', 40, 40, 40, 30) }
`

const SlickSliderDark = styled(SlickSlider)`
  outline: none;
  ${ ({ centered }) => (!centered) && `position: relative;` };
  
  .slick-dots li.slick-active button:before {
    color: ${ colors.white };
  }
  .slick-dots li button:before {
    ${ typography.responsiveStyles('font-size', 10, 10, 9, 8) };
  }
  .slick-dots li button:before {
    color: ${ colors.white };
  }
  .slick-dots li {
    margin: 0px;
  }
  
  .slick-dots {
    position: static;
    padding-bottom: 40px;
    ${ ({ centered }) => (!centered) && `
    position: absolute;
    padding-bottom: 40px;
    display: flex !important;
    justify-content: flex-end;
    padding-right: ${ gridSettings.containerLargeMargins };
    ${ mq.largeAndBelow } {
      padding-right: ${ gridSettings.containerMediumMargins };
    }

    ${ mq.mediumAndBelow } {
      padding-right: ${ gridSettings.containerMediumMargins };
    }

    ${ mq.smallAndBelow } {
      padding-right: ${ gridSettings.containerSmallMargins };
    }

` }
  }

  .slick-arrow.slick-next, .slick-arrow.slick-prev {
    ::before {
      content: '';
      border: solid white;
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 10px;
      bottom: 30px;
    }
    z-index: 2;
  }
  .slick-list {
    z-index: 0;
  }

  .slick-next {
    right: 25px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
  .slick-prev {
    left: 25px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }
`

const CenteredText = styled.div`
  text-align: center;
  align-self: center;
  justify-self: center;
`

const CoverImage = styled.div`
  width: 100%;
  z-index: -4;
  display: flex;
    img {
    position: absolute;
  }
`

const Name = styled.div`
  ${ typography.h5 };
  color: ${ colors.grey };
`

const Announcement = styled.div`
font-family: ${ typography.bodyFontFamilyLight };
  ${ typography.responsiveStyles('font-size', 24, 24, 24, 28) };
`

const LinkStyled = styled(Link)`
  ${ typography.responsiveStyles('font-size', 14, 14, 14, 18) };
`

const ContainerStyled = styled(Container)`
  display: flex !important;
  flex-direction: column;
  justify-content: ${ ({ centered }) => centered ? 'center' : 'flex-end' };
  align-items: flex-start;
  outline: none;
  height: 100%;
  min-height: 300px;
  background: url(${ ({ src }) => src }) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`

const Block = styled.div`
  padding: 40px 0;
`

const Slider = ({ items, windowWidth, windowHeight, title, dots = true, arrows = false, collapseToArrows = false, centered = true }) => {
	if (collapseToArrows && windowWidth < mq.mediumBreakpoint) {
		dots = false
		arrows = true
	}
	const settings = {
		dots,
		arrows,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	}
	return (
		<Wrapper>
			{title && (
				<Container>
					<Title>{title}</Title>
				</Container>
			)}
			<SlickSliderDark accessibility centered={centered} {...settings}>
				{items && items.map(({ name, announcement, byline, links, icon, slideshow }) => (
					centered ? (
						<ContainerStyled key={name + announcement} centered={centered}>
							<CenteredText>
								<Name>{name}</Name>
								<Announcement>{announcement}</Announcement>
							</CenteredText>
						</ContainerStyled>
					) : (
						<ContainerStyled src={slideshow}>
							<Container>
								<Block>
									<Announcement>{name}</Announcement>
									<LinkStyled external white to={links[0].href}>LEARN MORE</LinkStyled>
								</Block>
							</Container>
						</ContainerStyled>
					)
				))}
			</SlickSliderDark>
		</Wrapper >
	)
}

export default withSizes(({ width, height }) => ({ windowWidth: width, windowHeight: height }))(Slider)
