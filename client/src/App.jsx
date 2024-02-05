import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/** import all components */
import Upload from './components/upload'

/** root routes */
const router = createBrowserRouter([
	{
		path: '/',
		element: <Upload></Upload>,
	},
])

export default function App() {
	return (
		<main>
			<RouterProvider router={router}></RouterProvider>
		</main>
	)
}
