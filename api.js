import data from './data.js'

const {products} = data;
export const getProduct =  (id) => {
    // alert(id);
    try {
      const response = products.find(product => product.id == id)
      console.log(response);
      return response ? response: null;
    } catch (err) {
      console.log(err);
      return { error: err.response.data.message || err.message };
    }
  };