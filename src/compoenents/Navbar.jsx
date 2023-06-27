import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header>
        <nav>
            <div className="navlink">
                <Link to="/array">Array Assigment</Link>
                <Link to="/arrayobject">Array of Objects Assignment</Link>
                <Link to="/object">Single Object Assigment</Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar