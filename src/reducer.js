export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const initialState = {
  basket: [],
};

function reducer(state, action) {
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    //logic to add items to cart

    case "REMOVE_FROM_BASKET": {
      //logic to remove item from cart
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        //enter the code
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove the product(id:${action.id} as its not in basket )`
        );
      }
      return { ...state, basket: newBasket };
    }
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
}

export default reducer;
