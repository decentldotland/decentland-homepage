import Navbar from '../src/components/navbar'
import Hero from '../src/components/alt-hero'
import Features from '../src/components/features'
import Footer from '../src/components/footer'
import LogoBar from './components/logo-bar'
import Callout from './components/callout'

function App() {
  return (
    <div>
      <div className="w-full">
        <Navbar />
        <Hero />
      </div>
      <Features />
      <LogoBar />
      <Callout />
      <Footer />
    </div>
  );
}

export default App;
