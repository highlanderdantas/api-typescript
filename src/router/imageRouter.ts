import uploads from "../infra/upload";
import Logging from "../infra/logging";
import ImageController from "../controller/imageController";

class ImageRouter {
  routes(app) {
    app.route("/uploads").post(uploads.single("file"), ImageController.upload);
  }
}

export default new ImageRouter();
