import React, { useState } from 'react'
import { UploadToDB } from '../helper/helper'
import toast, { Toaster } from 'react-hot-toast'
export default function Upload() {
	let [getFile, setFile] = useState(false)

	function getExtension(filename) {
		var parts = filename.split('.')
		return parts[parts.length - 1]
	}

	function isXlsx(filename) {
		var ext = getExtension(filename)
		switch (ext.toLowerCase()) {
			case 'xlsx':
				return true
		}
		return false
	}

	function handleUpload(data) {
		console.log('working')
		let File = data.target.files[0]
		if (isXlsx(File.name)) {
			setFile(File)
		} else {
			setFile(false)
		}
	}

	function uploadFile() {
        const formData = new FormData();
        formData.append('file', getFile);
        
		let uploadPromise = UploadToDB(formData)
		toast.promise(uploadPromise, {
			loading: 'Uploading...',
			success: <b>Uploaded Successfully...!</b>,
			error: <b>Could not Uploaded!</b>,
		})
	}

	function removeFile() {
		setFile(false)
	}

	return (
		<div className="h-screen font-sans text-gray-900 bg-gray-300 border-box">
			<Toaster position="top-right" reverseOrder={false}></Toaster>
			<div className="flex justify-center w-full mx-auto sm:max-w-lg">
				<div className="flex flex-col items-center justify-center w-full h-auto my-20 bg-white sm:w-3/4 sm:rounded-lg sm:shadow-xl">
					<div className="mt-10 mb-10 text-center">
						<h2 className="text-2xl font-semibold mb-2">
							Upload your files
						</h2>
						<p className="text-xs text-gray-500">
							File should be of format .xlsx
						</p>
					</div>
					<form
						action="#"
						className="relative w-4/5 h-32 max-w-xs mb-10 bg-white bg-gray-100 rounded-lg shadow-inner"
					>
						<input
							type="file"
							id="file-upload"
							className="hidden"
							onChange={handleUpload}
						/>
						<label
							htmlFor="file-upload"
							className="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer"
						>
							<p className="z-10 text-xs font-light text-center text-gray-500">
								{getFile
									? getFile.name
									: 'Drag & Drop your files here'}
							</p>
							<svg
								className="z-10 w-8 h-8 text-indigo-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
							</svg>
						</label>
						<div
							className={
								getFile ? 'flex justify-evenly' : 'hidden'
							}
						>
							<button
								onClick={uploadFile}
								type="button"
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[45%] mt-20"
							>
								Upload
							</button>
							<button
								onClick={removeFile}
								type="button"
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[45%] mt-20"
							>
								Remove File
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
