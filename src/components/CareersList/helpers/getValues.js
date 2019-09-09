export default ({ jobs, key }) => {
	const set = new Set(Object.values(jobs).map(value => value[key]).filter(x => x))
	return Array.from(set).map(x => ({ label: x, value: x }))
}
