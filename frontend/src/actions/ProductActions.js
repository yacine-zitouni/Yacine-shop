import axios from "axios"

export const getProducts = () => async (dispatch) => {

    dispatch({ type: "PRODUCT_LIST_REQUEST" });
    try {
        const { data } = await axios.get("/api/products");
        dispatch({
            type: "PRODUCT_LIST_SUCCESS",
            payload: data.products,
        })
    } catch (err) {
        dispatch({
            type: "PRODUCT_LIST_FAIL",
            message: err
        })
    }

}

export const getProduct = (id) => async (dispatch) => {
    dispatch({ type: "PRODUCT_ITEM_REQUEST" })
    try {
        const { data } = await axios.get(`/api/products/${id}`)

        dispatch({
            type: "PRODUCT_ITEM_SUCCESS",
            payload: data.product
        })
    } catch (err) {
        dispatch({
            type: "PRODUCT_ITEM_FAIL",
            message: err
        })

    }
}