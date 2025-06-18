import React from 'react';
import allProducts from '../../data/package_products.json'
import Product from "../../components/Product/Product.jsx";

const Main = () => {
	return (
		<section className="section_01">
			<h2>special offers</h2>

			<ul className="section_01__promotions">
				{allProducts.map((item) => (
					<Product
						key={item.id}
						product={item}
					/>
				))}
			</ul>
		</section>
	);
};

export default Main;
