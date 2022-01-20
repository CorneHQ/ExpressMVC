const nodemailer = require("nodemailer")
const mailConfig = require("../config/mail.config")
const logger = require("./logger.libs")

module.exports = class Mail {
    #transport
    #message = {
        from: null,
        to: null,
        subject: null,
        text: null,
        html: null,
        attachments: []
    };

    constructor() {
        this.#transport = nodemailer.createTransport({
            host: mailConfig.host,
            port: mailConfig.port,
            auth: {
                user: mailConfig.username,
                pass: mailConfig.password
            }
        })

        this.#message.from = mailConfig.from
    }

    addRecipient(mailAddress) {
        if(this.#message.to === null) {
            this.#message.to = mailAddress
        } else {
            this.#message.to += `, ${mailAddress}`
        }
    }

    addSubject(subject) {
        this.#message.subject = subject
    }

    addText(text) {
        this.#message.text = text
    }

    addHTML(html) {
        this.#message.html = html
    }

    addAttachment(name, content) {
        this.#message.attachments.push({ filename: name, content: content })
    }

    send() {
        this.#transport.sendMail(this.#message, (error, info) => {
            if (error) {
                logger.danger("Sending mail failed with the following error: " + error)
                return
            }
        })
    }

}