import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link className="contrast" to="/">
            <strong>secret-escapes</strong>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
