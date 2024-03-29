const UserModel = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Create [v]
exports.회원가입 = async (req, res) => {
  try {
    const { email, password, passwordVerify } = req.body;

    if (!email || !password || !passwordVerify) {
      return res.status(400).json({
        errorMessage: "입력하지 않은 값이 있습니다.",
      });
    }

    // 비밀번호 조건식은 그냥 앞으로 정규식으로 처리하자 => 노션에 따로 정리, 이것은 페이스북 강의에서 착안
    if (password.length < 6)
      return res.status(400).json({
        errorMessage: "6자리 이상 입력하세요.",
      });

    if (password !== passwordVerify)
      return res.status(400).json({
        errorMessage: "비밀번호값이 일치하지 않습니다.",
      });

    // make sure no account exists for this eamil
    const existingUser = await UserModel.findOne({ email });
    if (existingUser)
      return res.status(400).json({
        errorMessage: "이미 해당 아이디가 있습니다.",
      });

    // hash the password

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // save the user in the database

    const newUser = new UserModel({
      email,
      passwordHash,
    });

    const savedUser = await newUser.save();

    // JWT 토큰 생성

    const jwtData = {
      id: savedUser._id,
      email: savedUser.email,
    };

    const token = jwt.sign({ jwtData }, process.env.JWT_SECRET);

    /**  쿠키는 브라우저및 프론트에 데이터를 전달하는 방식이다. 주로 token 보낼때 씀 , 쿠키는 브라우저가 쭉 들고다니는것이다.
     토크은 바코드 , 쿠키는 클럽에 달고 다니는 손팔찌*/
    res.cookie("token", token, { httpOnly: true }).send({ savedUser, token });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.로그인 = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        errorMessage: "입력하지 않은 값이 있습니다.",
      });
    }

    // get user account

    const existingUser = await UserModel.findOne({ email });
    if (!existingUser)
      return res.status(400).json({
        errorMessage: "이메일이 없습니다.",
      });

    const correctPassword = await bcrypt.compare(
      password,
      existingUser.passwordHash
    );

    if (!correctPassword)
      return res.staus(401).json({
        errorMessage: "이메일과 비번값이 일치하지 않습니다.",
      });

    // JWT 토큰 생성

    const jwtData = {
      id: existingUser._id,
      email: existingUser.email,
    };

    const token = jwt.sign({ jwtData }, process.env.JWT_SECRET);

    /**  쿠키는 브라우저및 프론트에 데이터를 전달하는 방식이다. 주로 token 보낼때 씀 , 쿠키는 브라우저가 쭉 들고다니는것이다.
     토크은 바코드 , 쿠키는 클럽에 달고 다니는 손팔찌*/
    res.cookie("token", token, { httpOnly: true }).send({
      existingUser,
      token,
      message: `${existingUser.email} 로그인 됨`,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
