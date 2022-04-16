const fs = require('fs')

const writeLogFile = content => {
    const path = './my_log.log';
    try {

        fs.appendFileSync(path, content);
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    writeLogFile
}