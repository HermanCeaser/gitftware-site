import data from './data.js'

const {products} = data;

// const response = await fetch('http://localhost:5001/api/products', {
//   headers: {
//     'Content-Type': 'application/json',

//   }
// });

// if(!response || !response.ok){
//   return `<div> Error in fetching product data</div>`;
// }
// const products = await response.json();

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