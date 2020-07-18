import * as bodyParser from "body-parser";

class Middler {
    private bodyParser;
    configure(app) {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended : false} ));
    }
}

export default new Middler();