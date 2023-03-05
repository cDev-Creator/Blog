import {Link} from 'react-router-dom';
const Navbar = () => {
    return ( 
    <nav className="navbar">
        <h1 style={{fontSize:'25px'}}>Nat Blog</h1>
        <div className="links">
            {/* using Links in react prevents sending a request to the server every time 
            a new path is clicked, React intercepts and injects the correct data to the 
            DOM which allows for faster speeds than making those requests
            directly to the server every time*/}
            <Link to ="/">Home</Link>
            <Link to ="/create">New Blog</Link>
        </div>
    </nav>
    );
}
 
export default Navbar;