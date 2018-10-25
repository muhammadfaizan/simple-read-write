const fs = require('fs');
const readline = require('readline');
class fileRW {

    /**
     * 
     * @param {String} filePath - file path to lookup
     * @param {Object} options
     * @param {Object} options.separator 
     */
    constructor(filePath, options) {
        this.filePath = filePath;
        this.options = Object.assign({
            separator: /\r\n?|\n/
        }, options);
        separator = options.separator || /\r\n?|\n/
        this.fileReadStream = fs.createReadStream(filePath);
        this.fileReadStream.on('readable', this._readableHandler)

    }
    _readableHandler() {
        
    }

    read() {
        this.fileReadStream.resume();
    }


}
module.exports = {
    /**
     * @param [string]  - path of file to read
     */
    openFile: (filepath, options) => {
        fs.readFileSync(filename);
    }
}

const rl = readline.createInterface({
  input: fs.createReadStream('test.js'),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
    rl.pause();
  console.log(`Line from file: ${line}`);
  rl.close();
});
