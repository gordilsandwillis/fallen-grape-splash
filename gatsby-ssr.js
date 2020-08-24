/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react'

export const onRenderBody = ({ setPostBodyComponents, setHeadComponents }) => {
	const klaviyoCompanyId = process.env.GATSBY_KLAVIYO_COMPANY_ID

  if (process.env.NODE_ENV === `production`) {
    setHeadComponents([
      <script
				async
				type="text/javascript"
				key={`tiktok-tracking`}
				src='https://analytics.tiktok.com/i18n/pixel/sdk.js?sdkid=BSUQI7PBAFSQRGNC8D00'
			/>
    ])

    setPostBodyComponents([
			<script
				async
				type="text/javascript"
				key={`gatsby-plugin-klaviyo`}
				src={`//static.klaviyo.com/onsite/js/klaviyo.js?company_id=${ klaviyoCompanyId }`}
			/>
  	])
  }
}