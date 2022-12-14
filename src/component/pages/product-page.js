import React, { Component } from "react";
import { connect } from "react-redux";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import { fetchProductsByID } from "../../redux/actions";
import { WithShopService } from "../hoc";
import ProductBoxDescription from "../products/product-box-description";
import ProductBoxImages from "../products/product-box-images";
import compose from "../../utils/compose";
import "./css/product-page.css";
class ProductPage extends Component {
	componentDidMount() {
		this.props.fetchProductsByID(this.props.match.params.id);
	}

	render() {
		const { product, loading, error } = this.props;
		const images = product.images;
		if (loading) return <Spinner />;
		if (error) return <ErrorIndicator />;
		return <BlockProduct images={images} product={product} />;
	}
}

const BlockProduct = ({ images, product }) => {
	return (
		<section className="section-product">
			<h1>{`${product.title},(${product.category})`}</h1>
			<div className="wrap-product-block">
				<ProductBoxImages images={images} />
				<ProductBoxDescription descriptionProduct={product} />
			</div>
		</section>
	);
};

const mapStateToProps = ({ onceProduct: { product, loading, error } }) => {
	return { product, loading, error };
};

const mapDispatchToProps = (dispatch, { shopService }) => {
	return {
		fetchProductsByID: (id) => fetchProductsByID(dispatch, shopService)(id),
	};
};
export default compose(
	WithShopService(),
	connect(mapStateToProps, mapDispatchToProps)
)(ProductPage);
