let keepTwoDecFilter = function (val) {
	if (val || val === 0) {
		val = parseFloat(val).toFixed(2);
	}
	return val;
};
export default keepTwoDecFilter;
