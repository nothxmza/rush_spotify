import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/genres">Genre</Link>
			<Link to="/artists">Artists</Link>
			<Link to="/albums">Albums</Link>
			<Link to="/search">Search</Link>
        </nav>
    )
}

export default Header