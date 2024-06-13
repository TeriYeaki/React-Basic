// Styling with Module Styling
// -----------------------------------------------
// Pros:
// - This technique avoid naming conflict with other by automatically 
//   generating unique className using hasing algorithm.
// - It is convenient if each component has its own uniqe style.
//
// Cons: 
// - It require additional setup.
// - Global style does not apply easily needing complicated import.
// 
// Example: class="_button_1d29r_1"


import buttonStyles from './Button.module.css'

function Button() {
    return(
        <button className= {buttonStyles.button}>Click Me</button>
    );
}

export default Button;
