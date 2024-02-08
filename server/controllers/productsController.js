import productSchema from '../model/Products.model.js'

/** GET: http://localhost:8080/api/products */
export async function products(req, res) {
	let {category,subcategory,sort,price_min,price_max} = req.query
	// console.log(category,subcategory,sort,price_min,price_max);
	try {
		let query = {};

		// Add category and subcategory to the query if provided
		if (category) {
			query.parent_category_name = category;
		}
		if (subcategory) {
			query.sub_category_name = subcategory;
		}

		// Add price range to the query if provided
		if (price_min !== undefined && price_max !== undefined) {
			query.variants1_mrp_price = { $gte: price_min, $lte: price_max };
		} else if (price_min !== undefined) {
			query.variants1_mrp_price = { $gte: price_min };
		} else if (price_max !== undefined) {
			query.variants1_mrp_price = { $lte: price_max };
		}

		// Build the sort object based on the 'sort' parameter
		let sortObj = {};
		if (sort === 'price_asc') {
			sortObj.variants1_mrp_price = 1;
		} else if (sort === 'price_desc') {
			sortObj.variants1_mrp_price = -1;
		}
		
		const products = await productSchema.find(query).sort(sortObj)
		res.status(200).json(products)
	} catch (err) {
		res.status(500).send('Internal Server Error')
	}
}