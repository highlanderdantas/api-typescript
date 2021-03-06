import * as HttpStatus from "http-status";
import * as redis from "redis";

import NewsService from "../service/newsService";
import Helper from "../infra/helper";
import Logging from "../infra/logging";
import RedisConfig from "../infra/redisConfig";

class NewsController {

  constructor() {
    Logging.build("NewsController");
  }

  get(req, res) {
    let client = RedisConfig.createConnection();
    client.get("news", function (err, cache) {
      if (cache) {
        let newsCache = JSON.parse(cache);
        Helper.sendResponse(res, HttpStatus.OK, newsCache);
      } else {
        NewsService.get()
          .then((news) => {
            let newsCache = JSON.stringify(news);
            client.set("news", newsCache);
            Helper.sendResponse(res, HttpStatus.OK, news);
          })
          .catch((error) => Logging.error(`Erro ${error}`));
      }
    });
  }

  getById(req, res) {
    const _id = req.params.id;
    NewsService.getById(_id)
      .then((news) => {
        Helper.sendResponse(res, HttpStatus.OK, news);
      })
      .catch((error) => Logging.error(`Erro ${error}`));
  }

  create(req, res) {
    let news = req.body;

    RedisConfig.createConnection()
      .invalidate("news");

    NewsService.create(news)
      .then(() => {
        Helper.sendResponse(
          res,
          HttpStatus.CREATED,
          "Noticia cadastrada com sucesso!"
        );
      })
      .catch((error) => Logging.error(`Erro ${error}`));
  }

  update(req, res) {
    const _id = req.params.id;
    let news = req.body;

    RedisConfig.createConnection()
      .invalidate("news");

    NewsService.update(_id, news)
      .then(() => {
        Helper.sendResponse(
          res,
          HttpStatus.OK,
          "Notícia foi atualiza com sucesso!"
        );
      })
      .catch((error) => Logging.error(`Erro ${error}`));
  }

  delete(req, res) {
    const _id = req.params.id;

    RedisConfig.createConnection()
      .invalidate("news");

    NewsService.delete(_id)
      .then(() => {
        Helper.sendResponse(
          res,
          HttpStatus.NO_CONTENT,
          "Noticia deletada com sucesso!"
        );
      })
      .catch((error) => Logging.error(`Erro ${error}`));
  }
}

export default new NewsController();
