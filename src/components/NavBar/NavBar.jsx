import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="nav">
            <Link className="nav-link" to='/'>
                <h3 className="nav-title">Ecommerce</h3>
            </Link>
            <div className="nav-section">
                <NavLink to={`/category/celular`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Celular</NavLink>
                <NavLink to={`/category/tablet`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tablet</NavLink>
                <NavLink to={`/category/notebook`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Notebook</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar