export const initialState = {
  basket: [],
};

export const getSubtotal = (basket) =>
  basket?.reduce((acc, currentValue) => acc + currentValue.price, 0);

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET": {
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    }
    case "REMOVE_FROM_BASKET": {
      const index = state.basket.findIndex((item) => item.id === action.itemId);

      let newBasket = [...state.basket];

      if (index !== -1) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Unable to remove the product with the Id of ${action.itemId}`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };
    }

    case "SET_USER": {
      return {
        ...state,
        currentUser: action.authUser,
      };
    }
    default: {
      return state;
    }
  }
};
