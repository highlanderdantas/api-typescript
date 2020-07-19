import * as express from "express";

import DbConfig from "./src/infra/dbConfig";
import Middler from "./src/infra/middler";
import NewsRouter from "./src/router/newsRouter";

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

    NewsRouter.routes(this.app);
  }
}

export default new StartUp();
