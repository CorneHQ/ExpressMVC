const schedule = require("node-schedule");
const path = require("path");
const fs = require("fs");
const taskPath = path.join(__dirname, "tasks");

fs.readdirSync(taskPath).forEach((file) => {
  const task = require("./tasks/" + file);

  schedule.scheduleJob(task.cron, task.handle);
});
