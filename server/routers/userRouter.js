const router = require("express").Router();
const { 회원가입, 로그인 } = require("../controller/userController");

/**회원가입 */
router.post("/register", 회원가입);
router.post("/login", 로그인);

module.exports = router;

/*
  app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "https://gallant-hodgkin-fb9c52.netlify.app",
    session: true,
  }),
  function (req, res) {
    res.redirect("https://gallant-hodgkin-fb9c52.netlify.app");
  }
);

app.get("/auth/twitter", passport.authenticate("twitter"));

app.get(
  "/auth/twitter/callback",
  passport.authenticate("twitter", {
    failureRedirect: "https://gallant-hodgkin-fb9c52.netlify.app",
    session: true,
  }),
  function (req, res) {
    res.redirect("https://gallant-hodgkin-fb9c52.netlify.app");
  }
);

app.get("/auth/github", passport.authenticate("github"));

app.get(
  "/auth/github/callback",
  passport.authenticate("github", {
    failureRedirect: "https://gallant-hodgkin-fb9c52.netlify.app",
    session: true,
  }),
  function (req, res) {
    res.redirect("https://gallant-hodgkin-fb9c52.netlify.app");
  }
);

app.get("/", (req, res) => {
  res.send("Helllo WOlrd");
});

app.get("/getuser", (req, res) => {
  res.send(req.user);
});

app.get("/auth/logout", (req, res) => {
  if (req.user) {
    req.logout();
    res.send("done");
  }
});

*/
