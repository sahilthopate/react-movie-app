import { Link } from "react-router-dom"
import "./Header.css";

export default function Header(){
    return(
        <>
            <div className="headerContent">
                    <Link to="/uploadMovie">Upload New Movie</Link>
            </div>
        </>
    )
}