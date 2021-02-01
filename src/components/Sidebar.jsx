import React from 'react';
import Header from './Header';
import Menu from './Menu';

export default function Sidebar() {
  return (
    <ul className="menu">
      <Header />
      <Menu />
    </ul>
  );
}
