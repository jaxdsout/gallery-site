import './partials.css';

function Header () {

    return (
        <div>
            <nav className='navbar'>
                <h1 class="logo"><a href={"/"}>THE GALLERY</a></h1>
                <div className='buttons'>
                    <button><a href={"/items/all/"}>ART</a></button>
                    <button><a href={"/events/"}>EVENTS</a></button>
                </div>
            </nav>
        </div>
    )
}

export default Header