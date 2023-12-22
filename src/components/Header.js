function Header(props) {
    return (
            <header className="App-header">
                <h1 className="Scrappy-header">
                    <span className="text">{props.dogName}</span>
                    <span className="text">Tracker</span>
                </h1>
            </header>
    );
}

export default Header;