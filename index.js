const fs = require('fs')


var handler = (function(){

    function readFile(){
        return  fs.readFileSync('./dummyText.txt', 'utf8').split('\n')
    }

    return {
        readFile : readFile
    }

})();


module.exports = handler