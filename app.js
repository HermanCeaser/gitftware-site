import Error404Page from "./pages/error404.js";
import Homepage from "./pages/home.js";
import ItemDetailPage from "./pages/item_detail.js";
import CartPage from './pages/cart.js'
import { parseRequestUrl } from "./utils.js";

const routes = {
    "/": Homepage,
    "/item/:id": ItemDetailPage,
    "/cart/:id": CartPage,
    '/cart': CartPage,
};
const router = async () => {
    const request = parseRequestUrl();
    const parseUrl = (request.resource ? `/${request.resource}` : '/') +
    (request.id ? '/:id' : '') + 
    (request.verb ? `/${request.verb}` : '');

    const page = routes[parseUrl]? routes[parseUrl]: Error404Page;
    const content = document.querySelector('#content');
    content.innerHTML = await page.render();
    await page.after_render();
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router)
