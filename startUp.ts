import * as express from "express";

import DbConfig from "./src/infra/dbConfig";
import Middler from "./src/infra/middler";
import NewsRouter from "./src/router/newsRouter";
import Auth from "./src/security/auth";

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
    
    this.app.use(Auth.validate);
    NewsRouter.routes(this.app);
  }
}

export default new StartUp();
