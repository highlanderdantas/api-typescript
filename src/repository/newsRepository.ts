import * as mongoose from "mongoose";
import News from "../model/news";


export default mongoose.model("news", News);
