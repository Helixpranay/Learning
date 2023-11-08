import React, { ReactNode } from 'react';
import Header from '../header/Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>{children}</main>
      <footer>
        {/* Your footer content */}
      </footer>
    </div>
  );
};

export default Layout;
