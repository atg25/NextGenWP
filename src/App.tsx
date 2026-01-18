import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import Process from './components/Process';
import Materials from './components/Materials';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <SelectedWork />
      <Process />
      <Materials />
      <About />
      <Contact />
    </div>
  );
}

export default App;
