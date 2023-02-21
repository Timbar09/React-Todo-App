import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Home' },
  { path: 'about', text: 'About' },
  { path: 'profile', text: 'Profile' },
  { path: 'login', text: 'Login' },
];

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const ref = useRef();
  console.log(ref);

  return (
    <nav>
      <ul className="nav-links">
        {links.map((link) => {
          return (
            <li key={link.text}>
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? 'page-active' : undefined)}
              >
                {link.text}
              </NavLink>
            </li>
          );
        })}

        <li key="services" ref={ref}>
          <button onClick={() => setDropdown((prev) => !prev)}>
            Services <span>&#8595;</span>
          </button>
          {dropdown && (
            <ul>
              <li>Design</li>
              <li>Development</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
