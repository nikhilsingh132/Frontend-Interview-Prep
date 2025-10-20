// Example: Call Stack, Event Loop, and Callback Queue

/**
 * This example demonstrates how JavaScript's event loop handles asynchronous callbacks:
 *
 * Execution Flow:
 * 1. "Start" is logged immediately (synchronous)
 * 2. setTimeout is called, cb() callback is registered and handed off to Web APIs
 * 3. "End" is logged immediately (synchronous, main thread continues)
 * 4. After 5000ms, cb() moves from Web APIs → Callback Queue → Call Stack
 * 5. "Callback" is logged
 *
 * Output:
 * Start
 * End
 * Callback (after 5 seconds)
 */

console.log("Start");

setTimeout(function cb() {
  console.log("Callback");
}, 5000);

console.log("End");
