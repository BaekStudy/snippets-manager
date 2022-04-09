const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();
require("./Config/db")();

// setup express server

const app = express();

// express josn 쓰는 이유 : json으로 들어오는 데이터 서버에서 보이게 하려고
app.use(express.json());

// cors 쓰는 이유 : react 프론트에게 api 콜 보내게 하려고
app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);

//쿠키파서 쓰는 이유 : jsonwebtoken에서 Auth 쓴다는 증거
//쿠키의 개념 차차 더 익혀보자.
app.use(cookieParser());

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// set up routers
app.use("/snippet", require("./routers/snippetRouter"));
