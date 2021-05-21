// Define Colors for themes
export const black = '#000'
export const white = '#fff'
export const transparent = 'transparent'
export const currentcolor = 'currentcolor'
export const bgColor = '#fff'
export const mainColor = '#FF4438'
export const alert = '#FF4438'
export const notify = '#FACC02'
export const success = '#00C771'
export const textColor = '#000'
export const lightGrey = '#F2F2F2'

// Set up themes to appear in the Contentful UI
export const themes = [
	{
		title: 'default',
		color: textColor,
		background: bgColor,
	},
	{
		title: 'black', 
		color: bgColor,
		background: black,
	},
	{
		title: 'white', 
		color: textColor,
		background: white,
	},
	{
		title: 'lightGrey',
		color: textColor,
		background: lightGrey,
	},
	{
		title: 'mainColor',
		color: bgColor,
		background: mainColor,
	},
	{
		title: 'textColor',
		color: bgColor,
		background: textColor,
	}
]

export default themes