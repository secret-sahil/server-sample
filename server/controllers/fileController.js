import productSchema from '../model/Products.model.js'
import xlsx from 'xlsx'
import multer from 'multer'

/** POST: http://localhost:8080/api/upload 
* @param : {
    "file":file.xlsx
}
*/

export async function upload(req,res) {
    const file = req.file

	if (!file) {
		return res.status(400).send('No file uploaded.')
	}

	const workbook = xlsx.read(file.buffer, { type: 'buffer' })
	const sheetName = workbook.SheetNames[0]
	const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName])

	try {
		// Insert data into MongoDB using Mongoose model
		await productSchema.insertMany(sheetData)
		res.status(200).send('File uploaded successfully.')
	} catch (err) {
		res.status(500).send('Internal Server Error')
	}
}