export const ProductListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "PRODUCT_LIST_REQUEST": {
      return {
        loading: true,
        products: [],
      };
    }
    case "PRODUCT_LIST_FAIL": {
      return {
        loading: false,
        message: action.message,
      };
    }
    case "PRODUCT_LIST_SUCCESS": {
      return {
        loading: false,
        products: action.payload,
      };
    }
    default:
      return state;
  }
};

export const ProductItemReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case "PRODUCT_ITEM_REQUEST": {
      return {
        loading: true,
        product: {},
      };
    }
    case "PRODUCT_ITEM_SUCCESS": {
      return {
        loading: false,
        product: action.payload,
      };
    }
    case "PRODUCT_ITEM_FAIL": {
      return {
        loading: false,
        message: action.message,
      };
    }

    default:
      return state;
  }
};
