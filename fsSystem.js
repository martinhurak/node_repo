const fs = require("fs");
const path = require("path")

const read = () => {
 const copyedText = fs.readFileSync(path.join(__dirname,"subFolder","someText.txt"),{encoding:"utf-8"})
    fs.writeFileSync(path.join(__dirname,"subFolder","copyText.txt"),copyedText)
}

module.exports = {read}