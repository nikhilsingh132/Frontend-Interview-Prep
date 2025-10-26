// Example:

import { Suspense, lazy } from "react";

// Lazy load the component
const UserProfile = lazy(() => import("./UserProfile"));

function App() {
  return (
    <div>
      <h1>Welcome!</h1>

      {/* Suspense shows fallback while UserProfile is loading */}
      <Suspense fallback={<p>Loading profile...</p>}>
        <UserProfile />
      </Suspense>
    </div>
  );
}

export default App;

// Explanation of example:
// We are using lazy loading to load the UserProfile component only when it is needed.
// We are using Suspense to show a fallback UI while the UserProfile component is loading.
// This is useful for improving the performance of an application by reducing the initial bundle size.