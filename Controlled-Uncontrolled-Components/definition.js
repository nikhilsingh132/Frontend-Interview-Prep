// Definition:

// Controlled Components:

// Data Management: In a controlled component, the form data is handled by the React 
// component's state. The component acts as the "single source of truth" for the input's value.

// Value and Event Handlers: The value prop of the input element is tied to a state variable, 
// and an onChange event handler updates this state whenever the input changes.

// Predictability and Control: This approach offers high predictability and control over the 
// input's behavior. You can easily implement features like real-time validation, input formatting,
// or enabling/disabling based on other state.

/*-----------------------------------------------------------------------------------*/

// Uncontrolled Components:

// Data Management: In an uncontrolled component, the form data is handled by the DOM itself, 
// similar to traditional HTML forms. React interacts with the element indirectly using refs.

// Refs for Access: You use a ref to get the current value of the input element directly from 
// the DOM when needed, typically on form submission.

// Simplicity for Basic Cases: Uncontrolled components can be simpler to implement for very 
// basic forms where you don't need real-time validation or complex state management.