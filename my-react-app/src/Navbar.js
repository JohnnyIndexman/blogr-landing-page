import { Link } from 'react-router-dom'

const Navbar = () => {
    return (  
       <nav className="Navbar">
            <h1>Index React <span className='blog'>Blog</span></h1>
            <div className='overall'>
              <div className="links">
                 <Link to="/">Home</Link>
                 <Link to="/create">New Blog</Link>
                 <Link to="/contact">Contact</Link>
              </div>
              <button className="login">Login</button>
              <button className="SignUp">Register</button>
            </div>

        </nav>
    );
}
 
export default Navbar;