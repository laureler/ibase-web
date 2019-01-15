let propertyFilter = function (val) {
	if (val) {
		let name = val.split(',');
		if (name.length == 1) {
			return name[0]
		} else {
			return name[name.length - 2];
		}
	}
};
export default propertyFilter;
