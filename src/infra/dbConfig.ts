import * as mongoose from "mongoose";

class DbConfig {
  private DB_URL = process.env.DB_URL || "mongodb://localhost:27017/db_portal";
  private options = { useNewUrlParser: true, useUnifiedTopology: true };

  createConnection() {
    mongoose.connect(this.DB_URL, this.options);
  }
}

export default DbConfig;
