'use client';

import { Button } from 'antd';
import { Typography } from "antd";

export const Hero = () => {
  const { Title } = Typography;
  return (
    <>
      <Title>Welcome to My World</Title>
        <p>
          Crafting experiences through design
        </p>
        <p className="mb-8 text-xl lg:text-2xl">
          My personal web playground
        </p>
          <p className="mb-8 text-xl lg:text-2xl">
          Keep in mind that this web site is under construction
        </p>
    </>
  );
};