class SiteController {
  // [GET] home
  index(req, res) {
    res.render("home");
  }

  // [GET] search
  search(req, res) {
    res.render("search");
  }

  // app.post("/search", (req, res) => {
  //   console.log(req.body);
  //   res.send("search");
  // });
}

module.exports = new SiteController();
