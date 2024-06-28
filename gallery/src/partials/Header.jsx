import { Link } from 'react-router-dom';

function Header () {
    return (
        <div className='header'>
                <Link to={"/"}><h1 className="logo">THE GALLERY.</h1></Link>
                <div className='header_buttons'>
                    <Link to={"/items/all/"}><button className='cbutton'>ART</button></Link>
                    <Link to={"/events/"}><button className='cbutton'>EVENTS</button></Link>
                </div>
        </div>
    )
}

export default Header