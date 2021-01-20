import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? '#66BBCC' : 'black',
        },
      };
    }}
  />
);

export default function Sidebar() {
  const [locations, setLocations] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    async function getLocations() {
      const {
        data: { locations },
      } = await axios.get(
        'https://travel-photos-jp.herokuapp.com/api/locations'
      );
      setLocations(locations);
    }
    getLocations();
  }, []);

  return (
    <ul className="menu">
      <header>
        <Link to={'/'} className="initials">
          <h1 className="header">JONATHAN PARROTT</h1>
        </Link>
      </header>
      <button
        className="sidebar-button"
        onClick={() => {
          if (showMenu === true) setShowMenu(false);
          else setShowMenu(true);
        }}
      >
        Destinations
      </button>
      {showMenu ? (
        <ul className="destination-list">
          {locations.map(({ name }) => {
            if (name === 'Hong+Kong') {
              return (
                <NavLink
                  to="/destinations/Hong+Kong"
                  className="destination"
                  key={name}
                >
                  <li className="destination-item">Hong Kong</li>
                </NavLink>
              );
            }
            return (
              <NavLink
                to={`/destinations/${name}`}
                className="destination"
                key={name}
              >
                <li className="destination-item">{name}</li>
              </NavLink>
            );
          })}
        </ul>
      ) : null}

      <Link to={'/about'}>
        <button className="sidebar-button" id="about-button">
          About
        </button>
      </Link>
    </ul>
  );
}
