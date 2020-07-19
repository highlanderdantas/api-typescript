import * as jwt from "jsonwebtoken";
import Config from "./config";
import * as HttpStatus from "http-status";

class Auth {

  validate(req, res, next) {
    var token = req.headers["x-access-token"];

    if (token) {
      jwt.verify(token, Config.secret, this.nextOrFailed(res, next));
    } else {
      return res.status(HttpStatus.UNAUTHORIZED).send({
        success: false,
        message: "401 - UNAUTHORIZED",
      });
    }
  }

  private nextOrFailed(res: any, next: any): jwt.VerifyCallback {
    return function (err) {
      if (err) {
        return res.status(HttpStatus.UNAUTHORIZED).send({
          success: false,
          message: "401 - UNAUTHORIZED",
        });
      } else {
        next();
      }
    };
  }
}

export default new Auth();
