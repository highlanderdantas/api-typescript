"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newsController_1 = require("../controller/newsController");
class NewsRouter {
    routes(app) {
        const URL_NEWS = "/api/news";
        app.route(URL_NEWS).get(newsController_1.default.get);
        app.route(`${URL_NEWS}/:id`).get(newsController_1.default.getById);
        app.route(URL_NEWS).post(newsController_1.default.create);
        app.route(`${URL_NEWS}/:id`).put(newsController_1.default.update);
        app.route(`${URL_NEWS}/:id`).delete(newsController_1.default.delete);
    }
}
exports.default = new NewsRouter();
