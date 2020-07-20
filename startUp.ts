import * as express from "express";

import DbConfig from "./src/infra/dbConfig";
import Middler from "./src/infra/middler";
import NewsRouter from "./src/router/newsRouter";
import Auth from "./src/security/auth";
import ImageRouter from "./src/router/imageRouter";

class StartUp {
  public app: express.Application;
  private _dbConfig: DbConfig;

  constructor() {
    this.app = express();

    this._dbConfig = new DbConfig();
    this._dbConfig.createConnection();
    this.middler();
    this.routes();
  }

  middler() {
    Middler.configure(this.app);
  }

  routes() {
    this.app.route("/").get((req, res) => {
      res.send({ versao: "0.0.1" });
    });

    // ADICIONANDO AUTENTICAÇÃO JWT
    this.app.use(Auth.validate);
    NewsRouter.routes(this.app);
    ImageRouter.routes(this.app);
  }
}

export default new StartUp();
