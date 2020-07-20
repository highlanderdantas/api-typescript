import Logging from "../infra/logging";

class ImageController {
  constructor() {
    Logging.build("ImageController");
  }

  upload(req, res) {
    try {
      res.send("Arquivo enviado com sucesso!");
    } catch (error) {
      Logging.error(`Erro ${error}`);
    }
  }
}
export default new ImageController();
