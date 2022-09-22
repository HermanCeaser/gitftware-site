import data from "../data.js";

// const { products }= data;

// const Homepage = products;
const Homepage = {
    render: function () {
        const { products } = data;
        return `
        <div class="columns">
            ${products.map((product) => `
                <div class="card">
                    <article class="shadow-sm rounded bg-white border border-gray-200">
                        <a href="/#/item/${product.id}" class="block relative p-1">
                            <img src="${product.image}" class="mx-auto w-auto"
                                alt="${product.name}" height="240">
                        </a>
                        <div class="p-4 border-t border-t-gray-200">
                            <p class="font-semibold">${product.price}</p>
                            <a href="/#/item/${product.id}" class="block text-gray-600 mb-3 hover:text-blue-500">
                                ${product.name}
                            </a>
                            <div class="cta">
                                <a class="cta1" href="#">
                                    Add to cart
                                </a>
                                <a class="cta2" href="#">
                                    <i class="fa fa-heart"></i>
                                </a>
                            </div>
                        </div>
                    </article>
                </div>`
            ).join('\n')}
            
        </div>`;
    }

};

export default Homepage;