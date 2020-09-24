import React from 'react';
import { Link } from 'gatsby';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <a>Hot Now</a>
          </Link>
        </li>
        <li>
          <Link to="/pizzas">
            <a>Pizza Menu</a>
          </Link>
        </li>
        <li>
          <Link to="/">
            <a>LOGO</a>
          </Link>
        </li>
        <li>
          <Link to="/slicemasters">
            <a>SliceMasters</a>
          </Link>
        </li>
        <li>
          <Link to="/order">
            <a>Order Ahead!</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
