class MyModel {
	constructor(c_db) {
		this.db = c_db;
	}

	async find(model_name, where = {}, fields = "", order = {}, limit = 20, skip = 0) {
		try {
			let rows = await this.db[model_name]
				.find(where, fields)
				.skip(skip)
				.sort(order)
				.limit(limit)
				.lean();

			return rows ? rows : null;
		} catch (e) {
			console.error("error", e);
			throw e;
		}
	}
}

export default MyModel;
