const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  try {
    const token = req.cookies.token;
    token ? console.log(token) : console.log("토큰 없음");

    if (!token)
      return res.staus(401).json({ errorMessage: "권한이 없습니다." });

    const validateUser = jwt.verify(token, process.env.JWT_SECRET);

    req.user = validateUser.jwtData.id;
    console.log(req.user);

    next();
  } catch (err) {
    res.status(401).send({ errorMessage: "오쓰 미들웨어 에러" });
  }
}

module.exports = auth;
