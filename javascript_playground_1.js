// // flatmap replace filter+map
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers.map(a => a%2 !== 0 ? [a*a]:[]));
// console.log(numbers.flatMap(a => a%2 !== 0 ? [a*a]:[]));

// // flatmap replace filter+map+reduce
// const words = ['apple', 'banana', 'grape', 'cherry'];
// var result = words
//   .map(word => word.startsWith('b') ? word.slice(0, 2) : null)
//   .filter(item => item !== null)
//   .reduce((acc, curr) => acc + curr, '');

// console.log(result);
// var result = words.flatMap(word => word.startsWith('b') ? [word.slice(0, 2)] : []);
// console.log(result.toString()); // 'ba'

// reduce use cases
// const a = [1, "", [], 3, 4]
// const aResult = a.reduce((acc, val) => {
//     console.log(acc);
//     if(val) {
//         acc[val] = val;
//     }
//     return acc;
// }, {})

// console.log(aResult);
// console.log(Object.values(aResult).filter(Boolean));

// const parseQuery = (search = window.location.search) => {
//     const query = {};
//     search
//         .slice(1)
//         .split("&")
//         .forEach((it) => {
//             const [key, value] = it.split("=");
//             query[key] = decodeURIComponent(value);
//         });
//     return query;
// };
// console.log(parseQuery("?name=devpoint&id=100")); // { name: 'devpoint', id: '100' }

// const parseQuery2 = (search) => {
//     search.slice(1)
//         .split("&")
//         .reduce((acc, val) => {
//             const [key, value] = val.split("=");
//             acc[key] = decodeURIComponent(value);
//             return acc;
//         }, {})

// }

// const searchObj = {
//     name: "devpoint",
//     id: 100,
//     age: 50
//     // ...
// };
// const strLink = `https://www.devpoint.cn/index.shtml?name=${searchObj.name}&age=${searchObj.id}`;
// console.log(strLink); // https://www.devpoint.cn/index.shtml?name=devpoint&age=100

// const strResult = Object.keys(searchObj).reduce((acc, key) => {
//     return `${acc}${key}=${searchObj[key]}&`
// }, 'https://www.devpoint.cn/index.shtml?')

// console.log(strResult);


// const array = [1, 1, 1, 2, -1, 0, "0", 10, "10"];
// const count = (arr) => {
//     return arr.reduce((acc, val) => acc.set(val, (acc.get(val) || 0) + 1), new Map())
// }
// console.log(count(array));

