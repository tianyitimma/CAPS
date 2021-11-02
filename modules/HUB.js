'use strict';

const { EventEmitter } = require('events');
// const faker = require('faker');
//const ac = new AbortController();

const eventPool = new EventEmitter(); 
// (async () => {
//   const ee = new EventEmitter();

//   // Emit later on
//   process.nextTick(() => {
//     ee.emit('foo', 'bar');
//     ee.emit('foo', 42);
//   });

//   for await (const event of on(ee, 'foo', { signal: ac.signal })) {
//     // The execution of this inner block is synchronous and it
//     // processes one event at a time (even with await). Do not use
//     // if concurrent execution is required.
//     console.log(event); // prints ['bar'] [42]
//   }
//   // Unreachable here
// })();

// process.nextTick(() => ac.abort());

module.exports = eventPool;