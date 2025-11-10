// Definition:

// What is Server-Side Rendering (SSR)?
// 1. SSR is the process where HTML pages are rendered on the server instead of the client.
// 2. The server generates a fully rendered HTML page, which is sent directly to the browser.
// 3. This improves initial load performance and is great for Search Engine Optimization (SEO).
// 4. Search engines can crawl and index the content before the JavaScript is loaded.

/*-----------------------------------------------------------------------------------*/

// How SSR works?
// 1. User Requests a Page
// 2. Server Fetches Data
// 3. Server Renders HTML
// 4. Browser Gets Fully Rendered HTML
// 5. JavaScript Downloads & Runs
// 6. Hydration Happens(attach interactivity to the existing HTML by injecting JS in html+css)

/*-----------------------------------------------------------------------------------*/

// How CSR works?
// 1. User Requests a Page
// 2. Server sends empty HTML and JS
// 3. Browser Displays Loading Screen
// 4. JavaScript Downloads & Runs
// 5. JS Builds UI with data

/*-----------------------------------------------------------------------------------*/

// Performance & UX Differences (SSR vs CSR):
// 1. First Contentful Paint
// [SSR] Very Fast — HTML already rendered
// [CSR] Slower — waits for JS to render content

// 2. Time to Interactivity (TTI)
// [SSR] Slightly slower due to hydration
// [CSR] Can be fast if JS loads quickly

// 3. SEO Friendliness
// [SSR] Excellent — crawlers see full content
// [CSR] Poorer — requires extra setup (e.g., pre-rendering)

// 4. Initial Page Load
// [SSR] Faster perceived performance
// [CSR] Blank screen until JS loads

// 5. Complexity
// [SSR] Higher server load, needs server logic per route
// [CSR] Heavier client load, simpler backend