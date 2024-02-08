import React, { useState, useEffect } from 'react'
import { FetchProducts } from '../helper/helper'

export default function Products() {
	let [getProducts, setProducts] = useState([])

	useEffect(() => {
		let FetchProductsPromise = FetchProducts()
		FetchProductsPromise.then((data) => {
			setProducts(data?.data)
		})
	}, [])

	return (
		<div className={getProducts ? "relative overflow-x-auto" : "hidden"}>
			<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" className="px-6 py-3">
							Product name
						</th>
						<th scope="col" className="px-6 py-3">
							Description
						</th>
						<th scope="col" className="px-6 py-3">
							Price
						</th>
						<th scope="col" className="px-6 py-3">
							Category
						</th>
						<th scope="col" className="px-6 py-3">
							Manufacturer
						</th>
					</tr>
				</thead>
				<tbody>
					{getProducts.map((product, index) => {
						return (
							<tr
								className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
								key={index}
							>
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									{product.name}
								</th>
								<td className="px-6 py-4">
									{product.description}
								</td>
								<td className="px-6 py-4">{product.price}</td>
								<td className="px-6 py-4">
									{product.category}
								</td>
								<td className="px-6 py-4">
									{product.manufacturer}
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}
