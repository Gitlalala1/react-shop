import React, { Component } from "react";
import { connect } from "react-redux";

import "./products-list.css";
import ProductsItem from "../products-item";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import { fetchProducts } from "../../redux/actions";
class ProductsList extends Component {
	componentDidMount() {
		this.props.fetchProducts();
	}
	render() {
		const { loading, error } = this.props;
		const { products } = this.props.products;
		if (loading) {
			return <Spinner />;
		}
		if (error) {
			return <ErrorIndicator />;
		}
		console.log(products);
		return (
			<div className="block-products">
				{products.map((item, idx) => {
					return (
						<div key={item.id} className="box-products">
							<ProductsItem product={item} />
						</div>
					);
				})}
			</div>
		);
	}
}
const mapStateToProps = ({ products, loading, error }) => {
	return { products, loading, error };
};
const mapDispatchToProps = (dispatch, { shopService }) => {
	return {
		fetchProducts: fetchProducts(dispatch, shopService),
	};
};
connect(mapStateToProps);
export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
