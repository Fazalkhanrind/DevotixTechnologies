import React from 'react';
import Header from '../features/Header';
import Footer from '../features/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
