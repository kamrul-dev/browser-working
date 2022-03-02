//Synchronous
/* function dosomething() {
    console.log('I am coding Javascript');
}
console.log('Fist: I am the first person');
console.log('Second: I am the second person');
dosomething();
console.log('Third: I am the third person');
console.log('Fourth: I am the fourth person'); */



/* 
    setTimeout(): works as asynchronous , it defines which time code will be executed by the set time.
*/
function dosomething() {
    console.log('I am coding Javascript');
}
console.log('Fist: I am the first person');
console.log('Second: I am the second person');
// setTimeout(dosomething, 5000);
setTimeout(function(){
    console.log('I am using VS code');
}, 5000);
setTimeout( () => {
    console.log('Exploring js code');
}, 4000);
console.log('Third: I am the third person');
console.log('Fourth: I am the fourth person');

