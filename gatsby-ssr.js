/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react'

export const onRenderBody = ({ setPostBodyComponents, setHeadComponents }) => {
  if (process.env.NODE_ENV === `production`) {
    return setHeadComponents([
      <script
				async
				type="text/javascript"
				key={`tiktok-tracking`}
				src='https://analytics.tiktok.com/i18n/pixel/sdk.js?sdkid=BSUQI7PBAFSQRGNC8D00'
			/>
    ])
  }
}