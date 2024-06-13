import './Card.css'
import AvatarPic from '../../assets/images/SampleAvatar.png'
import PropTypes from 'prop-types'

// Function component using prop
// Props has default value using JS Default instead of defaultProps
function StudentCard({imageSrc= AvatarPic, name = "Student Name", description= "This is an empty example of student card."}){
    return(
        <div className='card'>
            <img className='card-image' src={imageSrc} alt="Profile Picture"></img>
            <h2 className='card-title'>{name}</h2>
            <p className='card-description'>{description}</p>
        </div>
    );
}

// Set the default prop types
StudentCard.propTypes = {
    imageSrc: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
}

export default StudentCard