const express = require("express");
const cors = require("cors");

// has to be used in conjunction with a database
// session id is store client-side within a cookie
// session data is store in a database (we can use connect-redis, connect-mongo)
const session = require("express-session");
// stores session data on a client within a cookie
const cookieSession = require("cookie-session");

const router = require("./routes");

const originWhiteList = ["http://localhost:8080"];
const corsOptions = {
  origin: function(origin, callback) {
    if (originWhiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};

// allows requests from some origins
app.use(cors(corsOptions));

// parses body of POST requests
app.json();

// create client-side cookie
// will be available as req.session
app.use(
  cookieSession({
    name: "session",
    maxAge: 1000 * 60 * 60 * 24 // one day
  })
);

app.use("/", router);

const app = express();

app.listen(3000);
