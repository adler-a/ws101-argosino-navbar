
import { Link, useMatch, useResolvedPath} from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">
            <ul>
                <CustomLink to="/home" image="home.png">Home</CustomLink>
                <CustomLink to="/about" image="information.png">About</CustomLink>
                <CustomLink to="/contact" image="call-phone.png">Contact</CustomLink>
            </ul>
        <img src="web2.png" alt="Logo" />
        </div>

    );
}

function CustomLink({ image, to, children, ...props }) {
    const resolvePath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvePath.pathname, end: true });
  
    return (
      <li className={isActive ? "active" : ""}>
        <img src={image} alt={children} />
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
}


export default NavBar;