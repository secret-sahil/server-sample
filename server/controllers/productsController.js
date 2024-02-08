import productSchema from '../model/Products.model.js'

/** GET: http://localhost:8080/api/products */
export async function products(req, res) {
	try {
		const products = await productSchema.find({})
		res.status(200).json(products)
	} catch (err) {
		res.status(500).send('Internal Server Error')
	}
}

/** GET: http://localhost:8080/api/products/Rice */
export async function getProductsByCategroy(req, res) {
	const { category } = req.params
	console.log(category);

	try {
		if (!category)
			return res.status(501).send({ error: 'Invalid category' })

		try {
			const products = await productSchema.find({parent_category_name: category})
			res.status(200).json(products)
		} catch (err) {
			res.status(500).send('Internal Server Error')
		}
		
	} catch (error) {
		return res.status(404).send({ error: 'Cannot Find Category Data' })
	}
}

/** GET: http://localhost:8080/api/products/Rice/Khushbu-E-Basmati */
export async function getProductsBySubCategroy(req, res) {
	const { category, subcategory } = req.params
	console.log(category, subcategory);

	try {
		if (!category || !subcategory)
			return res.status(501).send({ error: 'Invalid parameters provided.' })

		try {
			const products = await productSchema.find({parent_category_name: category, sub_category_name:subcategory})
			res.status(200).json(products)
		} catch (err) {
			res.status(500).send('Internal Server Error')
		}
		
	} catch (error) {
		return res.status(404).send({ error: 'Cannot Find Category Data' })
	}
}