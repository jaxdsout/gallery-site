import './partials.css';
import { Link } from 'react-router-dom';

function Footer () {
    const email = 'info@thegallery.com';
    const tele = '2815550000'
    return (
        <div className='footer'>
                <div className='skeleton'>
                    <h3>THE GALLERY</h3>
                        <ul>
                            <li><Link to={"/items/all/"}>ART</Link></li>
                            <li><Link to={"/creators/all/"}>CREATORS</Link></li>
                            <li><Link to={"/events/"}>EVENTS</Link></li>
                        </ul> 
                </div>
                <div className='contact_info'>
                    <h2> GET IN TOUCH </h2>
                    <p> 4411 Montrose Boulevard, Suite A, Houston, Texas 77006 </p>
                    <Link to={`mailto:${email}`}><p>Email Us</p></Link>
                    <Link to={`tel:${tele}`}><p>Call Us</p></Link>
                    <Link to={"http://www.instagram.com/thegallerythegallerythegallery/"}>
                        <img className='iglogo' src="https://i.imgur.com/SILGJAg.png" alt="ig logo" /></Link>
                </div>
                <div className='hours'>
                    <h2> HOURS </h2>
                        <ul>
                            <li>MONDAY - SATURDAY 10am - 5pm </li>
                            <li> SUNDAY Closed</li>
                        </ul> 
                </div>
        </div>
    )
}

export default Footer