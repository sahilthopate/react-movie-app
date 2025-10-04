import { Link } from "react-router-dom"
import "./Header.css";

export default function Header(){
    return(
        <>
            <div className="headerContent">
                <div className="upload">
                    <Link to="/uploadMovie">Upload New Movie</Link>
                </div>
                <div className="toprated">
                    <Link to="/toprated">Top Rated Movies</Link>
                </div> 
            </div>
        </>
    )
}