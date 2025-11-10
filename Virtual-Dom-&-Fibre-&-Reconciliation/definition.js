// virtual dom
// reconciliation algorithm [extra]
// react fiber [extra]
// diffing algorithm [extra]
// how render works

// DOM:
// DOM, or Document Object Model, is a programming interface that represents the structure of an HTML or XML document
// as a tree of objects. It allows scripting languages like JavaScript to access and manipulate the content, structure, and
// style of a web page dynamically, making web pages interactive

// Virtual DOM:
// A Virtual DOM is a lightweight, in-memory representation of the real DOM. It's used by modern JavaScript frameworks
// like React to improve performance by efficiently updating the user interface. When a state change occurs, the framework
// first updates the Virtual DOM, then uses a "diffing" process to compare the new version with the old one to find the
// differences, and finally, updates only the necessary parts of the actual DOM.

// Hydration:
// hydration is the process by which a server-rendered HTML page is transformed into an interactive React application
// on the client side. This typically occurs in applications utilizing Server-Side Rendering (SSR) or Static Site
// Generation (SSG). So this happens when UI components are seen but when we click or do something on them, it won't work
// as Javascript files are not loaded yet. So loading and injecting of JS files in UI components is Hydration
