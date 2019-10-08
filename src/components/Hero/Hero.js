import React from 'react'
import styled from '@emotion/styled'
import Image from 'src/components/Image'
import { typography } from 'src/styles'

const Block = styled.div`
  display: flex;
  align-items: center;
  ${ typography.responsiveStyles('height', 900, 500, 400, 400) }
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 1;
`

const BgImage = styled(Image)`
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
`

const Hero = ({ image, margin, testImage }) => (
	<Block margin={margin}>
		{testImage
			? <img src={testImage} />
			: <BgImage image={image} />
		}
	</Block>
)

export default Hero
