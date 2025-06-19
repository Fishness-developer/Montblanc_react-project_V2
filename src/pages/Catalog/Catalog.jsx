import React from 'react';
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar.jsx";

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
						<li
							className="section_01__promotions-item"
							data-product-name="Oil Costa d’Oro"
						><a href="/">
							<div className="item-image"><img
								src="images/products/Costa_dOro.png"
								width="137"
								height="156"
								alt=""
							/>
							</div>
							<p className="price"><span className="extra">45.00</span> ₪</p>
							<p className="offer">58.00₪<span className="percent">-23%</span>
							</p>
							<p className="item-description">Olive oil Extra Virgin, Costa
								d’Oro
							</p>
						</a>
							<div className="amount">
								<button data-amount-decrease>-</button>
								<input
									type="number"
									value="1"
									className="amount-input"
								/>
								<button data-amount-increase>+</button>
							</div>
							<button
								className="section_01__promotions-item-button button"
								data-cart
							> add to cart
							</button>
						</li>
						<li
							className="section_01__promotions-item"
							data-product-name="Chips San Carlo"
						><a href="/">
							<div className="item-image"><img
								src="images/products/chips.jpg"
								width="149"
								height="170"
								alt=""
							/></div>
							<p className="price"><span className="extra">16.00</span> ₪</p>
							<p className="offer">21.00₪<span className="percent">-15%</span>
							</p>
							<p
								className="item-description"
								data-product-name
							>Potato chips Classic, San Carlo
							</p>
						</a>
							<div className="amount">
								<button data-amount-decrease>-</button>
								<input
									type="number"
									value="1"
									className="amount-input"
								/>
								<button data-amount-increase>+</button>
							</div>
							<button
								className="section_01__promotions-item-button button"
								data-cart
							> add to cart
							</button>
						</li>
						<li
							className="section_01__promotions-item"
							data-product-name="Tuna ARTIGIANO"
						><a href="/">
							<div className="item-image"><img
								src="images/products/Tuna.jpg"
								width="149"
								height="170"
								alt=""
							/></div>
							<p className="price"><span className="extra">24.00</span> ₪</p>
							<p className="offer">30.00₪<span className="percent">-15%</span>
							</p>
							<p className="item-description">Tuna striped fillet-slices in oil
								tin, ARTIGIANO
							</p>
						</a>
							<div className="amount">
								<button data-amount-decrease>-</button>
								<input
									type="number"
									value="1"
									className="amount-input"
								/>
								<button data-amount-increase>+</button>
							</div>
							<button
								className="section_01__promotions-item-button button"
								data-cart
							> add to cart
							</button>
						</li>
						<li
							className="section_01__promotions-item"
							data-product-name="Cheese LeSuperbe"
						><a href="/">
							<div className="item-image"><img
								src="images/products/cheese.jpg"
								width="149"
								height="170"
								alt=""
							/></div>
							<p className="price"><span className="extra">56.00</span> ₪</p>
							<p className="offer">68.00₪<span className="percent">-21%</span>
							</p>
							<p className="item-description">Tet de Moine cheese, LeSuperbe</p>
						</a>
							<div className="amount">
								<button data-amount-decrease>-</button>
								<input
									type="number"
									value="1"
									className="amount-input"
								/>
								<button data-amount-increase>+</button>
							</div>
							<button
								className="section_01__promotions-item-button button"
								data-cart
							> add to cart
							</button>
						</li>
						<li
							className="section_01__promotions-item"
							data-product-name="Ketchup Mutti"
						><a
							href="/"
							className="item_link"
						>
							<div className="item-image"><img
								src="images/products/ketchup.jpg"
								width="149"
								height="170"
								alt=""
							/></div>
							<p className="price"><span className="extra">18.00</span> ₪</p>
							<p className="offer">23.00₪<span className="percent">-15%</span>
							</p>
							<p className="item-description">Tomato ketchup, Mutti</p>
						</a>
							<div className="amount">
								<button data-amount-decrease>-</button>
								<input
									type="number"
									value="1"
									className="amount-input"
								/>
								<button data-amount-increase>+</button>
							</div>
							<button
								className="section_01__promotions-item-button button"
								data-cart
							> add to cart
							</button>
						</li>
					</ul>
				</div>
			</div>


		</section>

	);
};

export default Catalog;
