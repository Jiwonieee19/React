function Header() {
    return (
        <header>
            <h1>
                HATDOG
            </h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>House</li>
                    <li ><a href="#">A link to somewhere, basic html only</a></li>
                </ul>
            </nav>
        </header>
        //make sure to always return only 1, so wrap  it like this one wrapped in header
    );
}

export default Header