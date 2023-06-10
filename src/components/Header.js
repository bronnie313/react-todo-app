import '../styles/Header.css'

const Header = () => {
    const headerStyle = {
        padding: '20px 0',
        lineHeight:'1.5em',
        color: '#aeadad',
        textAlign: 'center',
    }
    return (
        <header style={headerStyle} className='header' >
            <h1>todos</h1>
            <p>Items will persists in the browser local storage</p>
        </header>
    )
};

export default Header;