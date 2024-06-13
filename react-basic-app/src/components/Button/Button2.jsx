// Styling with Inline Styling
// -----------------------------------------------
// Pros:
// - Convenient and easy to understand
// - Prevent global style conflicts because no class name is involved
// - Great for isolate component with minimal styling such as like button
//   or subscribe button.
//
// Cons:
// - Less maintainable in large application
// - Reduce readability of the component especially when css properties are
//   crowded
// - Not great for complex styling such as responsive css

function Button2() {
    
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        margin: "5px",
    }

    return(
        <button style={styles}>Click Me</button>
    );
}

export default Button2;