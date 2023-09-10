import { publicRequest, userRequest } from "../requestMethods";
import { addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess } from "./productRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const login = async (dispatch, user) => {

    console.log(user);

    dispatch(loginStart());

    try {
        
        const res = await publicRequest.post("/auth/login", user);

        dispatch(loginSuccess(res.data));

    } catch (err) {
        dispatch(loginFailure);
    }

};

export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        
        const res = await publicRequest.get("/products");

        dispatch(getProductSuccess(res.data));

    } catch (err) {
        dispatch(getProductFailure());
    }
};

export const deleteProducts = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
        await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id));
    } catch (err) {
        dispatch(deleteProductFailure());
    }
};

export const updateProducts = async (productId, product, dispatch) => {
    dispatch(updateProductStart());
    try {
        await publicRequest.put(`/products/${productId}`, product);
        dispatch(updateProductSuccess({ id: productId, product }));
    } catch (err) {
        dispatch(updateProductFailure());
    }
};

export const addProducts = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
        await publicRequest.post('/products', product);
        dispatch(addProductSuccess(product));
    } catch (err) {
        dispatch(addProductFailure());
    }
};