import mongoose from 'mongoose'

export const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true,'Please Provide a product name.'],
	},
	description: {
		type: String,
		required: [true, 'Please Provide a product description.'],
	},
	price: {
		type: Number,
		required: [true, 'Please Provide product price'],
	},
	category: {
		type: String,
		required: [true, 'Please Provide product category'],
	},
	manufacturer: {
		type: String,
		required: [true, 'Please Provide product Manufacturer'],
	},
	stock: {
		type: Number,
		default: 0,
	},
})

export default mongoose.model.Products || mongoose.model('Product', productSchema)
