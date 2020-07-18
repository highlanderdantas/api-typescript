"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatus = require("http-status");
const newsService_1 = require("../service/newsService");
const helper_1 = require("../infra/helper");
const logging_1 = require("../infra/logging");
class NewsController {
    constructor() {
        logging_1.default.build("NewsController");
    }
    get(req, res) {
        newsService_1.default.get()
            .then((news) => {
            helper_1.default.sendResponse(res, HttpStatus.OK, news);
            logging_1.default.info("buscando todas noticias");
        })
            .catch((error) => logging_1.default.error(`Erro ${error}`));
    }
    getById(req, res) {
        const _id = req.params.id;
        newsService_1.default.getById(_id)
            .then((news) => {
            helper_1.default.sendResponse(res, HttpStatus.OK, news);
            logging_1.default.info(`buscando noticia de id: ${_id}`);
        })
            .catch((error) => logging_1.default.error(`Erro ${error}`));
    }
    create(req, res) {
        let news = req.body;
        newsService_1.default.create(news)
            .then(() => {
            helper_1.default.sendResponse(res, HttpStatus.CREATED, "Noticia cadastrada com sucesso!");
            logging_1.default.info("criando uma noticia");
        })
            .catch((error) => logging_1.default.error(`Erro ${error}`));
    }
    update(req, res) {
        const _id = req.params.id;
        let news = req.body;
        newsService_1.default.update(_id, news)
            .then(() => {
            helper_1.default.sendResponse(res, HttpStatus.OK, "Notícia foi atualiza com sucesso!");
            logging_1.default.info(`atualizando noticia de id: ${_id}`);
        })
            .catch((error) => logging_1.default.error(`Erro ${error}`));
    }
    delete(req, res) {
        const _id = req.params.id;
        newsService_1.default.delete(_id)
            .then(() => {
            helper_1.default.sendResponse(res, HttpStatus.NO_CONTENT, "Noticia deletada com sucesso!");
            logging_1.default.info(`deletando noticia de id: ${_id}`);
        })
            .catch((error) => logging_1.default.error(`Erro ${error}`));
    }
}
exports.default = new NewsController();
