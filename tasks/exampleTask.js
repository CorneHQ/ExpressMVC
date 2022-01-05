module.exports = new (class ExampleTask {
  cron() {
    return "* * * * *";
  }

  handle() {
    console.log("Example Task");
  }
})();
