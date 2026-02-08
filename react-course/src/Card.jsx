
import profilePicture from './assets/2by2.jpg'

function Card() {
    return (
        <div className="card">
            <img className='card-image' src={profilePicture} alt="Profile Picture"></img>
            <h2 className='card-title'>Andrew B. Malubag</h2>
            <p className='card-text'>I am Learning the React JS.</p>
        </div>
    );
}

export default Card