import React from 'react';
import {useParams} from 'react-router-dom';
import allProducts from "../../data/package_products.json";
import Amount from "../../components/Amount/Amount.jsx";

const ProductPage = () => {
	const {category, productId} = useParams();
	const product = allProducts.find(item =>
		item.id === parseInt(productId) &&
		item.category.toLowerCase().replace(/\s+/g, '-') === category?.toLowerCase()
	);

	if (!product) {
		return <div>Товар не найден</div>;
	}

	return (
		<section className="section_catalog">
			<div className="section_catalog__container_product">
				<div className="container_top">
					<div className="foto">
						<img
							src={product.image}
							alt={product.title}
						/>
					</div>
					<div className="description">
						<h3>{product.title}</h3>
						<p>{product.description}
						</p>

					</div>
				</div>
				<div className="container_bottom">
					<div className="amount">
						<h3>Amount:</h3>
						<Amount />

					</div>
					<div className="price">
						<h3>Price:</h3>
						<span className="extra">{product.price.toFixed(2)}</span> ₪
					</div>
					<button
						className="section_01__promotions-item-button button"
						data-cart
					> add to cart
					</button>
				</div>

			</div>
		</section>
	);
};

export default ProductPage;