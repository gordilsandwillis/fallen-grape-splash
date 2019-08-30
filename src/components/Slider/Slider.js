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
  justify-content: ${ ({ centered }) => centered ? 'center' : 'flex-end' };
  align-items: flex-start;
  outline: none;
  height: 100%;
  ${ ({ height }) => height && 'height: 400px' };
  padding: 40px;
  ${ typography.responsiveStyles('padding-top', 0, 0, 0, 20) }
  background: url(${ ({ src }) => src }) no-repeat center center;
    background-size: cover;
`

const LargeName = styled.div`
  ${ typography.h2 }
  padding-bottom: 10px;
`

const Slider = ({ items, windowWidth, windowHeight, height, title, dots = true, arrows = false, collapseToArrows = false, centered = true }) => {
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
						<ContainerStyled height={height} key={name + announcement} centered={centered}>
							<CenteredText>
								{name && <Name>{name}</Name>}
								{announcement && <h2>{announcement}</h2>}
							</CenteredText>
						</ContainerStyled>
					) : (
						<ContainerStyled height={height} src={slideshow}>
							<Grid
								showOverlay={true}
								small="[4] 2"
								medium="[12]"
								large="[12]"
							>
								{name && <LargeName>{name}</LargeName>}
								<LinkStyled external white to={links[0].href}>LEARN MORE</LinkStyled>
							</Grid>
						</ContainerStyled>
					)
				))}
			</SlickSliderDark>
		</Wrapper >
	)
}

export default withSizes(({ width, height }) => ({ windowWidth: width, windowHeight: height }))(Slider)
