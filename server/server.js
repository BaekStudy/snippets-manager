const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();
require("./Config/db")();

// setup express server
const app = express();

app.use(express.json()); // express josn 쓰는 이유 : json으로 들어오는 데이터를 서버로 보이게 하려고
app.use(
  cors({
    origin: ["http://localhost:3001"], // 연결하려고 하는 프론트 서버 주소 , cors 쓰는 이유 :  React 프론트도킹와 API 연결하려고
    credentials: true,
  })
);
app.use(cookieParser()); //쿠키파서 쓰는 이유 : jsonwebtoken에서 Auth 쓴다는 증거 , //쿠키의 개념 차차 더 익혀보자.

// set up routers
app.use("/snippet", require("./routers/snippetRouter"));

app.listen(process.env.PORT, () =>
  console.log(`Server started on port ${process.env.PORT}`)
);
