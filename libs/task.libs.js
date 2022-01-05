module.exports = class Task {
    cron;
    
    constructor(time) {
        this.cron = time
    }

    handle() {}
}