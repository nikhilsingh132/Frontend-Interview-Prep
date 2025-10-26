// Definition:

// 1. componentDidMount: This method is invoked immediately after a component is mounted
// (that is, inserted into the DOM tree). It is commonly used to perform initial setup,
// such as fetching data from an API or setting up event listeners.

// 2. componentDidUpdate: This method is invoked immediately after updating occurs. It is
// triggered whenever the component's props or state changes. It is commonly used to
// perform actions based on the updated state or props, such as making additional API calls.

// 3. componentWillUnmount: This method is invoked immediately before a component is
// unmounted and destroyed. It is commonly used to perform cleanup, such as removing
// event listeners or cancelling any ongoing tasks.


//                            Client React Life Cycle
//                                       │
// Initial Render (Mount)        Update (Re-render)              Exit (Unmount)
//         │                             │                             │
// - Run all code inside          - Run all code inside        - Release all values from memory
//     function body                  function body                (useSate, useMemo,...)
//         │                             │                             │
// - Initialize all values        - Update all values          - Runs all cleanup code(useEffect)
//   (useState, useMemo,...)        (useState, useMemo,...)
//         │                             │                             │
// - JSX is returned              - JSX is returned            - Virtual DOM is destroyed
//         │                             │                             │
// - Virtual DOM is created       - Virtual DOM is created     - DOM is destroyed
//         │                             │                             │
// - DOM is updated               - DOM is updated               - Browser paint
//         │                             │                             
// - Browser paint                - Browser paint                
//         │                             │                             
// - Schedule all re-render       - Schedule all re-render
//         │                             │                             
// - Schedule all cleanup         - Schedule all cleanup
                                