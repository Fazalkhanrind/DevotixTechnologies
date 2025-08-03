
import './App.css';
import MainLayout from './layouts/MainLayout';
import Home from './features/Home';
import AboutUs from './components/AboutUs';
import Services from './features/Services';
import Portfolio from './features/Portfolio';
import WhyStartUS from './components/WhyStartUs';
import Team from './features/Team';
import WhatClientsSays from './components/WhatClientsSays';
import Prices from './features/Prices';
import LatestNews from './components/LatestNews';
import WantToWorkWithUs from './components/WantToWorkWithUs';
import Contect from './features/Contect';

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Home />
        <AboutUs />
        <Services />
        <Portfolio />
        <WhyStartUS />
        <Team />
        <WhatClientsSays />
        <Prices />
        <LatestNews />
        <WantToWorkWithUs />
        <Contect />
      </MainLayout>
    </div>
  );
}

export default App;
