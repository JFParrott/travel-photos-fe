import React from 'react';
import { Link } from '@reach/router';

export default function Header() {
  return (
    <header>
      <Link to={'/'} className="initials">
        <h1 className="header">JONATHAN PARROTT</h1>
      </Link>
    </header>
  );
}
