
const DataHandler = require('../index')


// trying to follow strict TDD process, so first step is 
// checking that readfile calls fs. 
// id like to stubb fs to return a set of data  or else 
// the test suite becomes dependent on fs module and therfore its dependency
// to the ./dummyText
describe('handler module',()=> {

    it('#readlFile should return data from a file as an array', ()=>{
        let result = DataHandler.readFile();
        expect(result).toEqual(dummyData)
    })
})