const Navbar = () => {
    return ( 
    <nav className="navbar">
        <h1 style={{fontSize:'25px'}}>Nat Blog</h1>
        <div className="links">
            <a href ="/">Home</a>
            <a href ="/allPosts">All Posts</a>
            <a href ="/myPosts">My Posts</a>
            <a href ="/create">New Blog</a>
        </div>
    </nav>
    );
}
 
export default Navbar;