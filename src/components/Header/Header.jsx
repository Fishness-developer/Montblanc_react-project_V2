import '../../styles/header.scss'
import Logo from '../../assets/images/Logo.png';
import React from "react";
import PhoneIcon from "../icons/PhoneIcon/PhoneIcon.jsx";
import ClockIcon from "../icons/ClockIcon/ClockIcon.jsx";
import CartIcon from "../icons/CartIcon/CartIcon.jsx";
const iconStyle = {
	width: "20px",
	height: "20px",
	fill:"#ffffff"
}
const cartStyle = {
	width: "20px",
	height: "18px",
	fill:"#ffffff"
}

const Header = () => {
	return (
		<header className="header">
			<div className="header__inner">

				<a
					className="header__logo logo"
					href="/Montblanc_react-project_V2/public"
				> <img
					className="logo__image"
					src={Logo}
					alt="Mont Blank"
					width="250"
					height="84"
				/> </a>
				<div className="header__menu services">
					<ul>
						<li className="header__menu-item"><a href="/">Registration</a></li>
						<li className="header__menu-item"><a href="/">Login</a></li>
					</ul>
				</div>
				<div className="header__contact phone">
					{/*<Styled.PhoneIcon font={20}/>*/}
					<PhoneIcon {...iconStyle}/>
					<div>
						<p className="tel">050 145-28-41</p>
						<p className="time">support 0800 574 54 44</p>
					</div>

				</div>
				<div className="header__contact time">
					<ClockIcon {...iconStyle} />
					<div>
						<p className="tel">Store Opening</p>
						<p className="time">daily from 8.00 to 21.00</p>
					</div>

				</div>
				<div className="header__cart_container">

					<div className="header__cart">
						<button className="header__button button cart">
							<CartIcon {...cartStyle}/>
							<p>cart</p>
							<p
								className="amount-items-null"
								data-amount
							>0</p>
						</button>
					</div>
					<div className="header__drop-cart-container">
						<div className="header__drop-cart">
							<div className="drop-cart-inner">
								<p className="cart_header">Your order:</p>
								<p className="cart-amount">
									<span className="cart-amount-total">&nbsp;</span> ₪
								</p>
							</div>
							<div
								className="cart-item-container"
								data-items
							>

							</div>
							<a
								href="cart.html"
								className="header__drop-cart-button hide"
								data-cart-total
							> Order</a>

						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
export default Header;