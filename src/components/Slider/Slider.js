import React from 'react'
import styled from '@emotion/styled'
import SlickSlider from 'react-slick'
import withSizes from 'react-sizes'

import Container from 'src/components/Container'
import Link from 'src/components/Link'
import Grid from 'src/components/Grid'
import { typography, colors, gridSettings, mediaQueries as mq } from 'src/styles'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const Wrapper = styled.div`
  background-color: ${ colors.black };
  color: ${ colors.white };
`

const Title = styled.div`
${ typography.h2 }
padding-bottom: 15px;
${ typography.responsiveStyles('padding-top', 40, 40, 40, 30) }
`

const SlickSliderDark = styled(SlickSlider)`
  outline: none;
  ${ ({ horizontalTextAlignCentered }) => (!horizontalTextAlignCentered) && `position: relative;` };
  
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
    ${ ({ horizontalTextAlignCentered }) => (!horizontalTextAlignCentered) && `
    position: absolute;
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

const Name = styled.p`
  ${ typography.body };
  color: ${ colors.grey };
`

const LinkStyled = styled(Link)`
  ${ typography.responsiveStyles('font-size', 14, 14, 14, 18) };
`

const ContainerStyled = styled(Container)`
  display: flex !important;
  flex-direction: column;
  justify-content: ${ ({ horizontalTextAlignCentered }) => horizontalTextAlignCentered ? 'center' : 'flex-end' };
  align-items: flex-start;
  outline: none;
  height: 100%;
  ${ ({ imageSlideshow }) => imageSlideshow && 'height: 400px' };
  padding: 40px;
  ${ typography.responsiveStyles('padding-top', 0, 0, 0, 20) }
  background: url(${ ({ src }) => src }) no-repeat center center;
    background-size: cover;
`

const LargeName = styled.div`
  ${ typography.h2 }
  padding-bottom: 10px;
`

const Slider = ({ items, windowWidth, imageSlideshow, title, dots = true, arrows = false, horizontalTextAlignCentered = true }) => {
	if (imageSlideshow && windowWidth < mq.mediumBreakpoint) {
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
			<SlickSliderDark accessibility horizontalTextAlignCentered={horizontalTextAlignCentered} {...settings}>
				{items && items.map(({ name, announcement, links, slideshow }, index) => (
					horizontalTextAlignCentered ? (
						<ContainerStyled key={name + announcement + index + '_containerstyled'} imageSlideshow={imageSlideshow} key={name + announcement} horizontalTextAlignCentered={horizontalTextAlignCentered}>
							<CenteredText>
								{name && <Name>{name}</Name>}
								{announcement && <h2>{announcement}</h2>}
								{links && <LinkStyled external white to={links[0].href}>LEARN MORE</LinkStyled>}
							</CenteredText>
						</ContainerStyled>
					) : (
						<ContainerStyled key={name + announcement + index + '_containerstyled'} imageSlideshow={imageSlideshow} src={slideshow}>
							<Grid showOverlay={false} small="[4] 2" medium="[12]" large="[12]">
								{name && <LargeName>{name}</LargeName>}
								{announcement && <h2>{announcement}</h2>}
								{links && <LinkStyled external white to={links[0].href}>LEARN MORE</LinkStyled>}
							</Grid>
						</ContainerStyled>
					)
				))}
			</SlickSliderDark>
		</Wrapper >
	)
}

export default withSizes(({ width, height }) => ({ windowWidth: width, windowHeight: height }))(Slider)
