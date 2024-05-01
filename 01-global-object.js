let interval = global.setInterval(function () {
    console.log('hello');
}, 1000);

global.setTimeout(() => {
    clearInterval(interval)
}, 5000);

console.log(__dirname);
console.log(__filename);