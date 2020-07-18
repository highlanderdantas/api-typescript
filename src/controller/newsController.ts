import * as HttpStatus from "http-status";

import NewsService from "../service/newsService";
import Helper from "../infra/helper";
import Logging from "../infra/logging";

class NewsController {
  constructor() {
    Logging.build("NewsController");
  }

  get(req, res) {
    NewsService.get()
      .then((news) => {
        Helper.sendResponse(res, HttpStatus.OK, news);
        Logging.info("buscando todas noticias");
      })
      .catch((error) => Logging.error(`Erro ${error}`));
  }

  getById(req, res) {
    const _id = req.params.id;

    NewsService.getById(_id)
      .then((news) => {
        Helper.sendResponse(res, HttpStatus.OK, news);
        Logging.info(`buscando noticia de id: ${_id}`);
      })
      .catch((error) => Logging.error(`Erro ${error}`));
  }

  create(req, res) {
    let news = req.body;

    NewsService.create(news)
      .then(() => {
        Helper.sendResponse(
          res,
          HttpStatus.CREATED,
          "Noticia cadastrada com sucesso!"
        );
        Logging.info("criando uma noticia");
      })
      .catch((error) => Logging.error(`Erro ${error}`));
  }

  update(req, res) {
    const _id = req.params.id;
    let news = req.body;

    NewsService.update(_id, news)
      .then(() => {
        Helper.sendResponse(
          res,
          HttpStatus.OK,
          "Notícia foi atualiza com sucesso!"
        );
        Logging.info(`atualizando noticia de id: ${_id}`);
      })
      .catch((error) => Logging.error(`Erro ${error}`));
  }

  delete(req, res) {
    const _id = req.params.id;

    NewsService.delete(_id)
      .then(() => {
        Helper.sendResponse(
          res,
          HttpStatus.NO_CONTENT,
          "Noticia deletada com sucesso!"
        );
        Logging.info(`deletando noticia de id: ${_id}`);
      })
      .catch((error) => Logging.error(`Erro ${error}`));
  }
}

export default new NewsController();
