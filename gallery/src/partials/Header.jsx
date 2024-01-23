import './partials.css';
import { Link } from 'react-router-dom';

function Header () {

    return (
        <div className='header'>
                <Link to={"/"}><h1 class="logo">THE GALLERY.</h1></Link>
                <div className='buttons'>
                    <Link to={"/items/all/"}><button className='nav_button'>ART</button></Link>
                    <Link to={"/events/"}><button className='nav_button'>EVENTS</button></Link>
                </div>
        </div>
    )
}

export default Header