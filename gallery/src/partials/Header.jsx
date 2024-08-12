import { Link } from 'react-router-dom';

function Header () {
    return (
        <div className='navbar'>
            <Link to={"/"}><h1 className="logo">THE GALLERY.</h1></Link>
            <div className='navbar_buttons'>
                <Link to={"/items/all/"}><button className='cbutton nav'>ART</button></Link>
                <Link to={"/events/"}><button className='cbutton nav'>EVENTS</button></Link>
            </div>
        </div>
    )
}

export default Header