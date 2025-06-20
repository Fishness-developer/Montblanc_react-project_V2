import React from 'react';
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar.jsx";
import allProducts from "../../data/package_products.json";
import Product from "../../components/Product/Product.jsx";
import { useParams } from "react-router-dom";

const Products = () => {
	const { category } = useParams();

	// Фильтрация товаров по категории
	const filteredProducts = allProducts.filter(
		(item) =>
			item.category
				.toLowerCase()
				.replace(/\s+/g, '-') === category?.toLowerCase()
	);
	// Преобразование категории для отображения (замена дефисов на пробелы и капитализация)
	const displayCategory = category
		?.toLowerCase()
		.replace(/-/g, ' ')
		.replace(/\b\w/g, (char) => char.toUpperCase());

	return (
		<section className="section_catalog">
			<div className="section_catalog__container">
				<div className="left_sidebar">
					<h3>Каталог</h3>
					<LeftSidebar />
				</div>
				<div className="right_sidebar">
					<h3>{displayCategory || category}</h3>
					<ul className="section_01__promotions">
						{filteredProducts.map((item) => (
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

export default Products;