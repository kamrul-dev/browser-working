/* 
    setInterval() : continuously execute the code.
*/

/* console.log('first');
setInterval(() => {
    console.log('tik tok tik tok');
}, 1000);
console.log('second'); */


/* console.log('first');
// setInterval(() => {
//     console.log('tik tok tik tok');
// }, 1000);

let seconds = 0;

const timeId = setInterval(() => {
    seconds++;
    console.log(seconds);
    if(seconds > 15){
        clearInterval(timeId);
    }
}, 1000)
console.log('second'); */



console.log('first');
// setInterval(() => {
//     console.log('tik tok tik tok');
// }, 1000);

let seconds = 0;

const timeId = setInterval(() => {
    // seconds++;
    console.log(++seconds);
    if(seconds > 15){
        clearInterval(timeId);
    }
}, 1000)
// console.log('second');