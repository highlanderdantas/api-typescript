const jwt = require("jsonwebtoken");

let payload = {
    iss: "highdantas",
    iat: new Date().getSeconds(),
    exp: new Date().setMinutes(60),
    name: "Highlander Dantas",
    email: "haylander60@gmail.com"
};

var token = jwt.sign(payload, "338c59ac-455a-4331-ba76-dd4bb4a78861");

console.log(token);