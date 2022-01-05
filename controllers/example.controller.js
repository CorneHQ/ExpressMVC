module.exports = new (class ExampleController {
  samplePage(req, res) {
    res.render("example", {
      user: "Corné",
    });
  }
})();
