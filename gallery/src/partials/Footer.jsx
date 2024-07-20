import { Link } from 'react-router-dom';

function Footer () {
    const email = 'info@thegallery.zest';
    const tele = '555555555'
    return (
        <div className='footer'>
            <div className='foot'>
                <h3 className='footer_h3'>THE GALLERY.</h3>
                <Link className="footer_nav" to={"/items/all/"}>ART</Link>
                <Link className="footer_nav" to={"/creators/all/"}>CREATORS</Link>
                <Link className="footer_nav" to={"/events/"}>EVENTS</Link>
            </div>
            <div className='foot'>
                <h3 className="footer_h3">GET IN TOUCH.</h3>
                <Link className="footer_nav" to={`https://www.google.com/maps/search/411+Yabba+Zabba+Blvd,+Houston,+Texas+77003/@29.7490957,-95.3541626,15z/`}>411 Yabba Zabba Blvd, Houston, Texas 77003</Link>
                <Link className="footer_nav" to={`mailto:${email}`}>Email Us</Link>
                <Link className="footer_nav" to={`tel:${tele}`}>Call Us</Link>
                <Link to={"http://www.instagram.com/thegallerythegallerythegallery/"}>
                    <img className='iglogo' src="https://i.imgur.com/SILGJAg.png" alt="ig logo" />
                </Link>
            </div>
            <div className='foot'>
                <h3 className='footer_h3'> HOURS. </h3>
                <p className='footer_nav'>MONDAY - SATURDAY: 10am - 5pm </p>
                <p className='footer_nav'>SUNDAY: Closed</p>
            </div>
               
        </div>
    )
}

export default Footer