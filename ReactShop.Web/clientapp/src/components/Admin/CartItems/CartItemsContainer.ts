import { connect } from "react-redux";
import {
  addCartItemThunk,
  deleteCartItemThunk,
  editCartItemThunk,
} from "store/action-creators/cartItems";
import { RootStateType } from "store";
import CartItems from "./CartItems";
import { ThunkDispatch } from "redux-thunk";
import { ActionTypes } from "types/actionCreators";
import { RowType } from "types/admin";
import { CartItem } from "types/cartItems";

export type CartItemsProps = {
  cartItems: Array<CartItem>;
  isLoading: boolean;
  error: string | undefined;
  onAddCartItemClick: (cartItem: RowType) => void;
  onEditCartItemClick: (id: number, item: RowType) => void;
  onDeleteCartItemClick: (id: number) => void;
};

export type CreateCartItemProps = {
  onAdd: (cartItem: CartItem) => void;
};

const mapStateToProps = (state: RootStateType) => {
  return {
    cartItems: state.cartItems.cartItems,
    isLoading: state.cartItems.isLoading,
    error: state.cartItems.error,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootStateType, void, ActionTypes>
) => {
  return {
    onAddCartItemClick: (item: RowType) => {
      dispatch(addCartItemThunk(item as CartItem));
    },
    onEditCartItemClick: (id: number, item: RowType) => {
      dispatch(editCartItemThunk(id, item as CartItem));
    },
    onDeleteCartItemClick: (id: number) => {
      dispatch(deleteCartItemThunk(id));
    },
  };
};

const CartItemsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItems);

export default CartItemsContainer;
