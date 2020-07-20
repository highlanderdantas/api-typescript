import {
  LFService,
} from "typescript-logging";

export const factory = LFService.createNamedLoggerFactory("LoggerFactory");

class Logging {

    private _log;

    build(name) {
        this._log = factory.getLogger(name);
    }

    info(message: string) {
        this._log.info(() => message);
    }

    error(message: string) {
        this._log.info(() => message);
    }

}

export default new Logging();