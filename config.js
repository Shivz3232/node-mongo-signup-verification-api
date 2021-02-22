const keys = require("./keys.dev");

module.exports = {
    "connectionString": keys.MONGO_URI,
    "secret": keys.secret,
    "emailFrom": "bornanomalouscorp@gmail.com",
    "smtpOptions": {
        "service": "gmail",
        "auth": {
            "user": "bornanomalouscorp@gmail.com",
            "pass": keys.GMAIL_PASSWORD
        }
    }
}