import { connect } from "react-redux";

import Catalog from "./Catalog";

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    categories: state.categories.categories,
  };
};

const CatalogContainer = connect(mapStateToProps)(Catalog);

export default CatalogContainer;
