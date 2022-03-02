
// setTimeout() method work as asynchronous
// fetch() work as asynchronous
console.log(11111111111);
console.log(22222222222);
setTimeout(() => console.log('bababab'), 5000);
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
console.log(33333333333);
console.log(44444444444);
for (let i = 0; i < 10000; i++) {
    console.log(i);
}