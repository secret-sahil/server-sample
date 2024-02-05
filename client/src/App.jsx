import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/** import all components */
import Upload from './components/upload'
import Products from './components/products'

/** root routes */
const router = createBrowserRouter([
	{
		path: '/',
		element: <Upload></Upload>,
	},
	{
		path: '/products',
		element: <Products></Products>,
	},
])

export default function App() {
	return (
		<main>
			<RouterProvider router={router}></RouterProvider>
		</main>
	)
}
