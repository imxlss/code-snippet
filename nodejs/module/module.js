let obj = {
    name: 'john'
}


module.exports = obj;
// exports.obj = obj;

console.log(module);
console.log(exports);





//require方能看到的只有module.exports这个对象

//exports对象实际上是对module.exports的引用