import Homepage from "./pages/home.js";
import ItemDetailPage from "./pages/item_detail.js";
import { parseRequestUrl } from "./utils.js";

const routes = {
    "/": Homepage,
    "/item/:id": ItemDetailPage,
};
const router = () => {
    const request = parseRequestUrl();
    const parseUrl = (request.resource ? `/${request.resource}` : '/') +
    (request.id ? '/:id' : '') + 
    (request.verb ? `/${request.verb}` : '');

    const page = routes[parseUrl]? routes[parseUrl]: Homepage
    const content = document.querySelector('#content');
    content.innerHTML =  page.render();
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router)
