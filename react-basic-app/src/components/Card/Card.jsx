// Styling with External Style
// ------------------------------------------
// This is where we import the style from our external css style sheet
// and pass over the styles to each specified class.
// 
// It is easy to use with simple project. However can lead to naming conflict,
// especially working with large numbr of classes and components.
// 
// Use "import './location-of-stylesheet'"



import './Card.css'
import AvatarPic from '../../assets/images/SampleAvatar.png'

function Card(){
    return(
        <div className='card'>
            <img className='card-image' src={AvatarPic} alt="Profile Picture"></img>
            <h2 className='card-title'>Tharith Yeak</h2>
            <p className='card-description'>A software engineering student at Monash.</p>
        </div>
    );
}

export default Card