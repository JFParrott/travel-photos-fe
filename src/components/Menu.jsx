import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

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

export default function Menu() {
  const [locations, setLocations] = useState([]);
  const [showDestinations, setShowDestinations] = useState(false);

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
    <div id="menu-container">
      <div id="mobile-dest-list">
        {locations.map(({ name }) => {
          if (name === 'Hong+Kong') {
            return (
              <NavLink
                to="/destinations/Hong+Kong"
                className="destination"
                key={name}
              >
                <div className="destination-item">Hong Kong</div>
              </NavLink>
            );
          }
          return (
            <NavLink
              to={`/destinations/${name}`}
              className="destination"
              key={name}
            >
              <div className="destination-item">{name}</div>
            </NavLink>
          );
        })}
      </div>
      <button
        className="sidebar-button"
        onClick={() => {
          if (showDestinations === true) setShowDestinations(false);
          else setShowDestinations(true);
        }}
      >
        Destinations
      </button>
      {showDestinations ? (
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
        <button className="sidebar-button">About</button>
      </Link>
    </div>
  );
}
