// Event loop:
// The event loop is a core concept in JavaScript that handles the execution of code
// and the management of asynchronous operations. It is responsible for processing
// tasks in a specific order, ensuring that tasks are executed in the correct sequence.

// Event loop consists of call stack, callback queue and microtask queue.
// Call stack is where the code is executed.
// Callback queue is where the callbacks are stored.
// Microtask queue is where the microtasks are stored.

// Event loop works as follows:
// 1. JavaScript code is executed in the call stack.
// 2. If the code is synchronous, it is executed immediately.
// 3. If the code is asynchronous, it is moved to the callback queue.
// 4. If the call stack is empty, the event loop takes the first callback from the callback queue and moves it to the call stack.
// 5. The callback is executed.
// 6. If the callback is synchronous, it is executed immediately.
// 7. If the callback is asynchronous, it is moved to the callback queue.
// 8. If the call stack is empty, the event loop takes the first callback from the callback queue and moves it to the call stack.
// 9. The callback is executed.
// 10. This process continues until the callback queue is empty.

// Microtasks have higher priority than callbacks.
// Microtasks are executed before callbacks.

// Event loop works as follows:
// 1. Firstly event loop checks if call stack is empty.
// 2. If call stack is empty, it checks microtask queue.
// 3. If microtask queue is not empty, it executes all microtasks in the queue.
// 4. Then it checks callback queue.
// 5. If callback queue is not empty, it executes the first callback in the queue.
// 6. This process continues until the callback queue is empty.

// Example of microtask: Promise and MutationObserver
// Example of callback: setTimeout and setInterval

/*-----------------------------------------------------------------------------------*/

// Web APIs:
// Web APIs are built-in functions and objects provided by the browser that allow
// JavaScript to interact with the browser environment. They provide functionality
// for tasks such as making HTTP requests, accessing the DOM, and handling events.

// Example of Web API: 
// 1. setTimeout and setInterval
// 2. fetch API
// 3. DOM API
// 4. console API
// 5. localStorage API
// 6. location API

/*-----------------------------------------------------------------------------------*/

// Starvation:
// Starvation occurs when some things are coming in microtask queue and they are not 
// getting executed because of high priority of callbacks. This affects the performance of 
// the application as callbacks are not getting executed.