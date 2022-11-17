import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="notfound">
            <h2>WHy you do this</h2>
            <p>Search a proper page please , that page was not found :{'('}</p>
            <Link to='/'>Back To Homepage...</Link>
        </div>
    );
}

export default NotFound;