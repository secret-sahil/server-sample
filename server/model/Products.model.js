import mongoose from 'mongoose'

export const productSchema = new mongoose.Schema({
	"products_title":{
		type: String,
	},
    "products_description":{
		type: String,
	},
    "product_image_url":{
		type: String,
	},
    "tags":{
		type: String,
	},
    "parent_category_name":{
		type: String,
	},
    "parent_category_image":{
		type: String,
	},
    "sub_category_name":{
		type: String,
	},
    "sub_category_image":{
		type: String,
	},
    "variants1_id":{
		type: Number,
	},
    "variants1_sku":{
		type: String,
	},
    "variants1_weight":{
		type: String,
	},
    "variants1_mrp_price":{
		type: Number,
	},
    "variants1_discount%":{
		type: Number,
	},
    "variants1_sort":{
		type: Number,
	},
    "variants1_unit_type":{
		type: String,
	},
})

export default mongoose.model.inventories || mongoose.model('inventory', productSchema)
