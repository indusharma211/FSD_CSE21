//visualize the  event loop using setTimeout ,setImmediate and process.nextTick
console.log('1. Synchronous Main Line');

setTimeout(() => {
    console.log('5. setTimeout (Timers Phase)');
}, 0);

setImmediate(() => {
    console.log('6. setImmediate (Check Phase)');
});

process.nextTick(() => {
    console.log('2. process.nextTick (Microtask)');
    
    process.nextTick(() => {
        console.log('3. Nested process.nextTick');
    });
});

Promise.resolve().then(() => {
    console.log('4. Promise.then (Microtask)');
});

console.log('7. Synchronous Main Line End');
