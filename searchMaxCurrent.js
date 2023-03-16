var str = 'aabccdeefasdaeddadaccccc';
let obj = {};
for (let item of str) {
   if(obj[item]) {
       obj[item] = obj[item]+item
   } else {
     obj[item] = item
   }
}
console.log(obj)


var max = Object.keys(obj).reduce((pre, cur) => {
    if(obj[pre].length < obj[cur].length) {
        return cur
    } 
    return pre; 
}, Object.keys(obj)[0]);

var maxStr = Object.keys(obj).reduce((pre, cur) => {
    
    return `${pre}${cur}${obj[cur].length === 1 ? '': obj[cur].length}`;
    
}, "");

console.log(max)
console.log(maxStr)

