// app/layout.tsx
import { ReactNode } from 'react';
import {Navbar} from '../components/Navbar';
import {Footer} from '../components/Footer';

export const metadata = {
  title: 'Jamaal Smith - Portfolio',
  description: 'A showcase of my work and skills.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}