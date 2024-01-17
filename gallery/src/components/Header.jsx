

function Header () {

    return (
        <div>
            <nav>
                <h1 class="text-3xl font-bold underline">THE GALLERY</h1>
                <ul>
                    <li><a href={"/items/all/"}>ART</a></li>
                    <li><a href={"/creators/all/"}>CREATORS</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header