const API_URL = "http://178.62.221.120";

const API = {
    PRODUCTS: "products",
};

export const API_METHOD = {
    PRODUCT: {
        GET: `${API_URL}/api/${API.PRODUCTS}`,
        POST: `${API_URL}/api/${API.PRODUCTS}/create/`,
        PUT: `${API_URL}/api/${API.PRODUCTS}/update`,
        DELETE: `${API_URL}/api/${API.PRODUCTS}/delete`,
    },
};
