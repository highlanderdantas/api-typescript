import * as express from "express";

import DbConfig from "./src/infra/dbConfig";
import Middler from "./src/infra/middler";
import NewsRouter from "./src/router/newsRouter";
import Auth from "./src/security/auth";
import uploads from "./src/infra/upload";

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
    this.app.route("/uploads").post(uploads.single("file"), (req, res) => {
      try{
        res.send("arquivo enviado com sucesso!");
      } catch (error){
        console.error(error);
      }
    });

    this.app.use(Auth.validate);
    NewsRouter.routes(this.app);
  }
}

export default new StartUp();
