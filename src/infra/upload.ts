import * as multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./src/uploads/");
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

const uploads = multer({storage: storage});

export default uploads;
