import './partials.css';

function Footer () {
    const email = 'info@thegallery.com';
    const tele = '2815550000'
    return (
        <div className='footer'>
                <div className='skeleton'>
                    <h3>THE GALLERY</h3>
                        <ul>
                            <li><a href={"/items/all/"}>ART</a></li>
                            <li><a href={"/creators/all/"}>CREATORS</a></li>
                            <li><a href={"/events/"}>EVENTS</a></li>
                        </ul> 
                </div>
                <div className='contact_info'>
                    <h2> GET IN TOUCH </h2>
                    <p> 4411 Montrose Boulevard, Suite A, Houston, Texas 77006 </p>
                    <p><a href={`mailto:${email}`}>Email Us</a></p>
                    <p><a href={`tel:${tele}`}>Call Us</a></p>
                    <a href="http://www.instagram.com/thegallerythegallery/">
                        <img className='iglogo' src="https://i.imgur.com/SILGJAg.png" alt="ig logo" />
                    </a>                
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