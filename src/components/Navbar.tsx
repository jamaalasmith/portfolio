'use client';

import { Menu } from 'antd';
import { useState } from 'react';

const Navbar = () => {
  const [current, setCurrent] = useState('home');

  const handleClick = (e: any) => {
    setCurrent(e.key);
  };

  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="backdrop-blur-md bg-white/30">
        <Menu
          onClick={handleClick}
          selectedKeys={[current]}
          mode="horizontal"
          theme="light"
          className="justify-center bg-transparent"
        >
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="about">About</Menu.Item>
          <Menu.Item key="contact">Contact</Menu.Item>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;