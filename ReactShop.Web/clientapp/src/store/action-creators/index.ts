import * as authCreators from "./auth";
import * as cartItemsCreators from "./cartItems";
import * as categoriesCreators from "../action-creators/categories";
import * as productsCreators from "./products";
import * as usersCreators from "./users";

const rootCreator = {
  ...authCreators,
  ...cartItemsCreators,
  ...categoriesCreators,
  ...productsCreators,
  ...usersCreators,
};

export default rootCreator;
