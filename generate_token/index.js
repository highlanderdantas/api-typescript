const jwt = require("jsonwebtoken");

let payload = {
    iss: "highdantas",
    iat: new Date().getSeconds(),
    exp: new Date().setMinutes(60),
    name: "Highlander Dantas",
    email: "haylander60@gmail.com"
};

var token = jwt.sign(payload, "ba22d23d-9f12-472a-bda3-1ff45f65c9fc");

console.log(token);