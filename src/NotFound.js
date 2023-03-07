import {Link} from 'react-router-dom';
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1 className="not-found-title">404</h1>
            <p className="not-found-msg">Page Not Found</p>
            <Link to='/'>Back to home</Link>
        </div>
     );
}
 
export default NotFound;