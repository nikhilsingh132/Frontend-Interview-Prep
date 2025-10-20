// Example: Microtask Queue vs Callback Queue Priority

/**
 * This example demonstrates the difference between Microtask Queue and Callback Queue:
 *
 * KEY CONCEPT: Microtask Queue has HIGHER PRIORITY than Callback Queue
 * - Microtask Queue: Promises (.then, .catch, .finally), async/await, queueMicrotask()
 * - Callback Queue: setTimeout, setInterval, setImmediate, I/O operations
 *
 * Execution Flow:
 * 1. "Start" is logged (synchronous - Call Stack)
 * 2. setTimeout callback (cb) is registered and sent to Web APIs (5000ms timer)
 * 3. fetch() is called, Promise callback (cbF) is registered and sent to Web APIs
 * 4. "End" is logged (synchronous - Call Stack)
 * 5. When fetch resolves (~50ms), cbF moves to MICROTASK QUEUE
 * 6. When setTimeout completes (5000ms), cb moves to CALLBACK QUEUE
 * 7. Event Loop checks: Call Stack empty? Yes → Check Microtask Queue first!
 * 8. "CB Netflix" is logged (from Microtask Queue - higher priority)
 * 9. Then "CB SetTimeout" is logged (from Callback Queue)
 *
 * Output:
 * Start
 * End
 * CB Netflix            (after ~50ms, from fetch promise)
 * CB SetTimeout         (after 5000ms, from setTimeout)
 */

console.log("Start");

setTimeout(function cb() {
  console.log("CB SetTimeout");
}, 5000);

fetch("https://api.netflix.com").then(function cbF() {
  console.log("CB Netflix");
});

console.log("End");
