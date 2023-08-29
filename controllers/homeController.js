const HomeController = (req, res, next) => {
  res.send(200, { Content: "Hello world!" });
};

module.exports = { HomeController: HomeController };
