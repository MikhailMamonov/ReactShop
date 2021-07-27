const initialState = {
  products: [
    { id: 1, name: "rakza", price: 1000 },
    { id: 2, name: "ma lin", price: 10000 },
  ],
  isLoading: false,
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [
        ...state,
        {
          id: state.length + 1,
          name: action.newProduct.name,
          price: action.newProduct.price,
        },
      ];
    case "DELETE_PRODUCT":
      return [...state.filter((p) => p.id !== action.idForDelete)];
    default:
      return state;
  }
}
