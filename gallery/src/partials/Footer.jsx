import { Link } from 'react-router-dom';

function Footer () {
    const email = 'info@thegallery.zest';
    const tele = '555555555'
    return (
        <div className='footer'>
            <div className='info'>
                 <div className='skeleton'>
                    <h3 className='footer_logo'>THE GALLERY.</h3>
                        <ul className='nav_list'>
                            <li><Link className="nav_item" to={"/items/all/"}>ART</Link></li>
                            <li><Link className="nav_item" to={"/creators/all/"}>CREATORS</Link></li>
                            <li><Link className="nav_item" to={"/events/"}>EVENTS</Link></li>
                        </ul> 
                </div>
                <div className='contact_info'>
                    <h3 className="getin_touch"> GET IN TOUCH. </h3>
                    <Link to={`https://www.google.com/maps/search/411+Yabba+Zabba+Blvd,+Houston,+Texas+77003/@29.7490957,-95.3541626,15z/`}><p className='map_link'> 411 Yabba Zabba Blvd, Houston, Texas 77003 </p></Link>
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
               
        </div>
    )
}

export default Footer