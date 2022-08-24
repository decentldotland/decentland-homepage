import Navbar from '../src/components/navbar'
import Hero from '../src/components/alt-hero'
import Features from '../src/components/features'
import Footer from '../src/components/footer'
import LogoBar from './components/logo-bar'
import Callout from './components/callout'

function App() {
  const week = new Date("Thu Sep 01 2022 12:00:00 GMT-0700 (Pacific Daylight Time)");

  return (
    <div>
      <div className="w-full">
        <Navbar />
        {week > new Date() && (
          <div className="bg-gray-900">
            <div className="py-4 w-full bg-gradient-to-r from-purple-900/30 to-green-600/30 text-white text-bold text-2xl text-center">Our first official mint is now live! Get yourself a settler pass <a href="https://mint.decent.land" className="text-green-400 hover:text-green-400/40">here</a>!</div>
          </div>
        )}
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
