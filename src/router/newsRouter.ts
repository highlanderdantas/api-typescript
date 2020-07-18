import NewsController from "../controller/newsController";

class NewsRouter {
  routes(app) {
    const URL_NEWS = "/api/news";
    app.route(URL_NEWS).get(NewsController.get);
    app.route(`${URL_NEWS}/:id`).get(NewsController.getById);
    app.route(URL_NEWS).post(NewsController.create);
    app.route(`${URL_NEWS}/:id`).put(NewsController.update);
    app.route(`${URL_NEWS}/:id`).delete(NewsController.delete);
  }
}

export default new NewsRouter();
