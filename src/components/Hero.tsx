'use client';

import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden bg-gradient-to-br from-purple-600 to-indigo-600">
      <div className="text-center text-white animate-fade-in-down">
        <h1 className="mb-4 text-6xl font-extrabold tracking-tight lg:text-8xl">
          Welcome to My World
        </h1>
        <p className="mb-8 text-xl lg:text-2xl">
          Crafting experiences through design.
        </p>
        <Button
          type="primary"
          size="large"
          className="flex items-center px-8 py-4 text-lg font-semibold bg-purple-500 border-none rounded-full shadow-lg hover:bg-purple-700"
        >
          Explore More <ArrowRightOutlined className="ml-2" />
        </Button>
      </div>
      <div className="absolute inset-0 bg-[url('/images/hero-bg.svg')] bg-cover opacity-10"></div>
    </section>
  );
};

export default Hero;