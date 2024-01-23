import './partials.css';
import { Link } from 'react-router-dom';

function Footer () {
    const email = 'info@thegallery.com';
    const tele = '2815550000'
    return (
        <div className='footer'>
                <div className='skeleton'>
                    <h3 className='footer_logo'>THE GALLERY</h3>
                        <ul className='nav_list'>
                            <li><Link className="nav_item" to={"/items/all/"}>ART</Link></li>
                            <li><Link className="nav_item" to={"/creators/all/"}>CREATORS</Link></li>
                            <li><Link className="nav_item" to={"/events/"}>EVENTS</Link></li>
                        </ul> 
                </div>
                <div className='contact_info'>
                    <h3 className="getin_touch"> GET IN TOUCH. </h3>
                    <p> 4411 Montrose Boulevard, Suite A, Houston, Texas 77006 </p>
                    <Link to={`mailto:${email}`}><p className='contact_links'>Email Us</p></Link>
                    <Link to={`tel:${tele}`}><p className='contact_links'>Call Us</p></Link>
                    <Link to={"http://www.instagram.com/thegallerythegallerythegallery/"}>
                        <img className='iglogo' src="https://i.imgur.com/SILGJAg.png" alt="ig logo" /></Link>
                </div>
                <div className='hours'>
                    <h3 className='getin_touch'> HOURS. </h3>
                        <ul className='hours'>
                            <li className='nav_item'>MONDAY - SATURDAY: 10am - 5pm </li>
                            <li className='nav_item'>SUNDAY: Closed</li>
                        </ul> 
                </div>
        </div>
    )
}

export default Footer