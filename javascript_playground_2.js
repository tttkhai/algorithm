const prom = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve("prom")
    }, 1000)

    setTimeout(()=> {
        reject("!prom")
    }, 5000)
})

prom.then(function (arg) {
    console.log(arg);

    return new Promise((resolve, reject) => {
        reject(new Error("!arg"))
    }).catch((err) => {
        console.log(err.message);
    }).catch((err) => {
        console.log(err.message);
    })
})

// function calculate(arr, msg) {
//     arr[1] = 150
//     msg = "inside"
//     console.log(arr[0] + arr[1]);
//     console.log(msg);
// }

// const arr = [100]

// let msg = "outside"

// calculate(arr, msg)
// console.log(arr[0] + arr[1]);
// console.log(msg);

// const x = {

// }

// x['foo'] = 'bar'

// x.bar = {
//     'first': 100,
//     'second': 200
// }

// console.log(x.bar['first'] + x['bar'].second);

// function math(operation, x) {
//     const operations = {
//         '*': (a, b) => a*b,
//         '/': (a, b) => a/b,
//         '+': (a, b) => a+b,
//         '-': (a, b) => a-b,
//     }

//     return function(y) {
//         return operations[operation](x, y)
//     }
// }

// const mul = math('*', 5)
// const add = math('+', mul(2))

// console.log(typeof add);
// console.log(add(math('-', 25)(20)));

// function prefix(str) {
//     try {
//         return str.substring(0, 3)
//     } catch(err) {
//         throw err;
//         return "catch";
//     }
// }

// try {
//     console.log(prefix(5));
// }catch(err) {
//     console.log("error");
// }

// function foo(a) {
//     let returnValue = ""

//     try {
//         if(a==='bar') {
//             throw new Error('qux')
//         }
//         returnValue = "try"
//     } catch(err) {
//         returnValue = "catch"
//     } finally {
//         returnValue = "finally"
//     }

//     return returnValue
// }

// console.log(foo("bar"));
// console.log(foo("zzz"));