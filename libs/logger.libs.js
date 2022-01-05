const fs = require("fs")
const path = require("path")

module.exports = new class Logger {
    ok(message) {
        this.#writeToFile("[OK] " + message)
    }

    warning(message) {
        this.#writeToFile("[WARN] " + message)
    }

    danger(message) {
        this.#writeToFile("[DANGER] " + message)
    }

    info(message) {
        this.#writeToFile("[INFO] " + message)
    }

    debug(message) {
        this.#writeToFile("[DEBUG] " + message)
    }

    #createFile() {
        const fileName = this.#getFileName()

        if(!fs.existsSync(fileName)) {
            fs.writeFile(fileName, "------ Start of this log ------", (error) => {
                if (error) console.error(error)
            })
        }
    }

    #writeToFile(message) {
        this.#createFile()

        const fileName = this.#getFileName()
        const time = this.#getTime()

        fs.appendFile(fileName, `\n[${time}] ${message}`, (error) => {
            if (error) console.error(error)
        })
    }

    #getFileName() {
        const currentDate = new Date();
        return path.join(__dirname, "..", "logs") + `/${currentDate.getDate()}-${currentDate.getMonth()+1}-${currentDate.getFullYear()}.log`
    }

    #getTime() {
        const currentDate = new Date();
        return currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    }
}