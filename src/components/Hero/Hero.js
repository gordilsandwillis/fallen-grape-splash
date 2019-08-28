import React from 'react'
import styled from '@emotion/styled'
import Image from 'src/components/Image'

const Block = styled.div`
  display: flex;
  align-items: center;
  height: 400px;
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 1;
  padding: 36px 0;
`

const BgImage = styled(Image)`
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
`

const Hero = ({ image, testImage }) => (
	<Block>
		{testImage
			? <img src={testImage} />
			: <BgImage image={image} />
		}
	</Block>
)

export default Hero
