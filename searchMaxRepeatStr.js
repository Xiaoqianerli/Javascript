function searchMaxRepeatStr(str) {
    let arrStr = str.split('');
    let newStr = '';
    let maxStr = '';
    let obj = {};
    let lastkey = '';

    // for (let i = 0; i < arrStr.length; i++) {
    //     if(obj.hasOwnProperty(arrStr[i])) {
    //         if(arrStr[i] === arrStr[i-1]) {
    //             if(lastkey) {
    //                 obj[`${arrStr[i]}-${i}`] += 1;
    //             }
    //             obj[arrStr[i]] += 1; 
    //         } else {
    //             lastkey = `${arrStr[i]}-${i}`;
    //             obj[`${lastkey}`] = 1; 
    //         }
            
    //         // newStr = newStr.slice(newStr.indexOf(arrStr[i])) + arrStr[i];
    //         // if(newStr.length > maxStr.length) {
    //         //     maxStr = newStr
    //         // }
    //         // maxStr = maxStr + arrStr[i]
    //     } else {
    //         obj[arrStr[i]] = 1;

    //     }
        
    // }
    // console.log(obj)

    // return maxStr;

    str.replace(/(.)\1*/g, function(...rest) {

        // if(rest[0].length > maxStr.length) {
        //     maxStr = rest[0]
        // }

        if(obj.hasOwnProperty(rest[1])) {
            if(obj[rest[1]] < rest[0].length) {
                obj[rest[1]] = rest[0].length
            }
        } else {
            obj[rest[1]] = rest[0].length;
            maxStr = rest[0];
        }
    })

    // return maxStr;
    return obj
    
}

console.log(searchMaxRepeatStr('abbbbbbbccdddddddedd'));
