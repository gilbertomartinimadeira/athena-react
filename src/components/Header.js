import { Link } from "react-router-dom";

export default function Header() {

    return (
    
         <nav>
            <div className="nav-wrapper">
            <Link to="/App" className="brand-logo">Athena</Link>        
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
            </div>
        </nav>
    );
}