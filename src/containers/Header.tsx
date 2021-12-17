const Header = () => {
    return (
        <div className="ui fixed menu">
            <div className="ui container center">
                <h2 style={{ color: 'white' }}>FakeShop</h2>
                <i className="shopping cart icon" style={{
                    'marginLeft': '800px', 'color': 'white', 'fontSize': '2rem'
                }}></i>
            </div>
        </div>
    )
}

export default Header;