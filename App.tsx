
import React from 'react';
import { 
  Header, 
  Ticker,
  Hero, 
  About, 
  VerifiedContract, 
  Tokenomics, 
  Roadmap, 
  FAQ, 
  Footer 
} from './components/Sections';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-purple-600 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Ticker />
        <About />
        <VerifiedContract />
        <Tokenomics />
        <Roadmap />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
