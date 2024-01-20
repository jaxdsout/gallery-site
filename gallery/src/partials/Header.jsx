import './partials.css';
import { Link } from 'react-router-dom';

function Header () {

    return (
        <div>
            <nav className='navbar'>
                <Link to={"/"}><h1 class="logo">THE GALLERY</h1></Link>
                <div className='buttons'>
                    <Link to={"/items/all/"}><button>ART</button></Link>
                    <Link to={"/events/"}><button>EVENTS</button></Link>
                </div>
            </nav>
        </div>
    )
}

export default Header