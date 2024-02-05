import productSchema from '../model/Products.model.js'
import xlsx from 'xlsx'
import multer from 'multer'

// Multer middleware for handling file uploads
const storage = multer.memoryStorage()
const uploadFile = multer({ storage: storage })

/** Custom middleware to handle file upload */
export async function handleFileUpload(req, res, next) {
	uploadFile.single('file')(req, res, function (err) {
		if (err instanceof multer.MulterError) {
			return res.status(400).send('Multer error: ' + err.message)
		} else if (err) {
			return res.status(500).send('Internal Server Error')
		}

		const file = req.file
		console.log(file)

		if (!file) {
			return res.status(400).send('No file uploaded.')
		}

		const workbook = xlsx.read(file.buffer, { type: 'buffer' })
		const sheetName = workbook.SheetNames[0]
		const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName])

		req.sheetData = sheetData // Store sheet data in request object
		next()
	})
}

/** POST: http://localhost:8080/api/upload 
* @param : {
    "file":file.xlsx
}
*/

export async function upload(req, res) {
	const sheetData = req.sheetData
	try {
		// Insert data into MongoDB using Mongoose model
		await productSchema.insertMany(sheetData)
		res.status(200).send('File uploaded successfully.')
	} catch (err) {
		res.status(500).send('Internal Server Error')
	}
}
