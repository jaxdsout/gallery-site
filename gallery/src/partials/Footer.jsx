import { Link } from 'react-router-dom';

function Footer () {
    const email = 'info@thegallery.zest';
    const tele = '555555555'
    return (
        <div className='footer'>
            <div className='foot'>
                <h3 className='footer_logo'>THE GALLERY.</h3>
                <Link className="nav_item" to={"/items/all/"}>ART</Link>
                <Link className="nav_item" to={"/creators/all/"}>CREATORS</Link>
                <Link className="nav_item" to={"/events/"}>EVENTS</Link>
            </div>
            <div className='foot'>
                <h3 className="getin_touch"> GET IN TOUCH. </h3>
                <Link to={`https://www.google.com/maps/search/411+Yabba+Zabba+Blvd,+Houston,+Texas+77003/@29.7490957,-95.3541626,15z/`}><p className='nav_item'> 411 Yabba Zabba Blvd, Houston, Texas 77003 </p></Link>
                <Link to={`mailto:${email}`}><p className='nav_item'>Email Us</p></Link>
                <Link to={`tel:${tele}`}><p className='nav_item'>Call Us</p></Link>
                <Link to={"http://www.instagram.com/thegallerythegallerythegallery/"}>
                    <img className='iglogo' src="https://i.imgur.com/SILGJAg.png" alt="ig logo" />
                </Link>
            </div>
            <div className='foot'>
                <h3 className='getin_touch'> HOURS. </h3>
                <p className='nav_item'>MONDAY - SATURDAY: 10am - 5pm </p>
                <p className='nav_item'>SUNDAY: Closed</p>
            </div>
               
        </div>
    )
}

export default Footer