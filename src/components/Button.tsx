  // Typing events

 const Button = (props) => {
    return <button onClick={event => props.handleClick(event)}>Click</button>
  }

  export default Button