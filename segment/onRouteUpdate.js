const onRouteUpdate = function ({ location }) {
	if (
		typeof window.analytics !== `undefined`
	) {
		window.analytics.page()
	}
}

export default onRouteUpdate
