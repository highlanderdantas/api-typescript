import * as bodyParser from "body-parser";
import * as cors from "cors";

class Middler {
  private bodyParser;

  enableCors(app) {
    const options: cors.CorsOptions = {
      methods: "GET,OPTIONS,PUT,POST,DELETE",
      origin: "*",
    };
    app.use(cors(options));
  }

  configure(app) {
    this.enableCors(app);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new Middler();
