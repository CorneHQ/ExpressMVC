const mail = require("../libs/mail.libs")

module.exports = new class ExampleController {
  samplePage(req, res) {
    res.render("example", {
      user: "Corné",
    });
  }

  sendMail(req, res) {
    try {
      const userMail = new mail()
      userMail.addSubject("wow123")
      userMail.addText("This is a test")
      userMail.addHTML("<h1>This is a test mail</h1>")
      userMail.addRecipient("cornedenbreejen@outlook.com")
      userMail.send()
      res.send("Done")
    } catch(error) {
      console.error(error)
    }
  }
};
