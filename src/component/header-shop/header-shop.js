import React from "react";
import { Link } from "react-router-dom";
import "./header-shop.css";
const HeaderShop = () => {
	return (
		<div className="header-shop">
			<Link to="/">
				<img
					src="https://pp.userapi.com/c638829/v638829698/66551/OD7He2C9Kl0.jpg"
					alt=""
					className="header-logo"
				/>
			</Link>
			<ul>
				<Link to="/products">Products</Link>
			</ul>
		</div>
	);
};

export default HeaderShop;
