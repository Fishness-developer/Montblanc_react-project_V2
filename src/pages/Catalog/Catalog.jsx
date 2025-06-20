import React from 'react';
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar.jsx";
import allProducts from "../../data/package_products.json";
import Product from "../../components/Product/Product.jsx";

const Catalog = () => {
	return (

		<section className="section_catalog">
			<div className="section_catalog__container">
				<div className="left_sidebar">
					<h3>Catalog</h3>
					<LeftSidebar/>
				</div>
				<div className="right_sidebar">
					<h3>All Products</h3>
					<ul className="section_01__promotions">
						{allProducts.map((item) => (
							<Product
								key={item.id}
								product={item}
							/>
						))}
					</ul>
				</div>
			</div>


		</section>

	);
};

export default Catalog;
