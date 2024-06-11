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