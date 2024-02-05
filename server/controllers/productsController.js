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