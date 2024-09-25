// components/Footer.tsx
'use client';

import {
  LinkedinFilled,
} from '@ant-design/icons';

const Footer = () => {
  return (
    <footer className="py-8 text-center bg-gray-900">
      <div className="mb-4 text-2xl text-white">
        <LinkedinFilled className="mx-2 cursor-pointer hover:text-blue-500" />
      </div>
      <p className="text-gray-400">
        © 2024{' '}
        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Jamaal Smith
        </span>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;