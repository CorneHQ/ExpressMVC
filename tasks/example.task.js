const Task = require("../libs/task.libs");

module.exports = new class ExampleTask extends Task {
  constructor() {
    super('* * * * *')
  }

  handle() {
    console.log("ExampleTask runs now")
  }
}