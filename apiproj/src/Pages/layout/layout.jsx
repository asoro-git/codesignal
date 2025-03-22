import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import "./layout.css";
export default function Layout() {
  return (
    <>
      <nav className="navbar">
        <section>
          <div className="logo">Logo</div>
        </section>
        <section>
          <ul className="item-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/about">More info</Link>
            </li>
          </ul>
        </section>
      </nav>
      <Outlet />
    </>
  );
}
