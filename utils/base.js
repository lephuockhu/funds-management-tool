let bases = {};

console.log("object");

bases.convert_string_id = (rows = []) => {
	if (Array.isArray(rows)) {
		return rows.map((r) => {
			if (r._id) r._id = r._id.toString();
			return r;
		});
	} else {
		if (rows._id) rows._id = rows._id.toString();

		return rows;
	}
};

export default bases;
