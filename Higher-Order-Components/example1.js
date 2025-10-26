// Example: 

function withStyles(Component) {
  return props => {
    const style = { padding: '0.2rem', margin: '1rem' }
    return <Component style={style} {...props} />
  }
}

const Button = () => <button>Click me!</button>
const Text = () => <p>Hello World!</p>

const StyledButton = withStyles(Button)
const StyledText = withStyles(Text)

// Here we are reusing the logic of withStyles in multiple components.
// This is the main benefit of Higher Order Components.
// Passing component as an argument to the higher order component.
// Now 'withStyles' can be used in multiple components. Making it reusable.