import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from '../src/components/navbar'
import Hero from '../src/components/alt-hero'
import Features from '../src/components/features'
import Footer from '../src/components/footer'
import LogoBar from './components/logo-bar'
import Callout from './components/callout'
import Roadmap from './components/roadmap'

function App() {
  // const news = (
  //   <div className="bg-gray-900">
  //     <div className="py-4 w-full bg-gradient-to-r from-purple-900/30 to-green-600/30 text-white text-bold text-2xl text-center">Our first official mint is now live! Get yourself a settler pass <a href="https://mint.decent.land" className="text-green-400 hover:text-green-400/40">here</a>!</div>
  //   </div>
  // )

  return (
    <>
      <div className="w-full">
        <Navbar />
      </div>
      <Router>
        <Routes>
          <Route exact path="/" element={
            <div>
              <div className="w-full">
                <Hero />
              </div>
              <Features />
              <LogoBar />
              <Callout />
              <Footer />
            </div>
            
          } />
          <Route path="/near" element={
            <div className="w-full h-screen bg-slate-800/95 text-white">
              <Roadmap />
            </div>
          } />
          <Route path="*" element={
            <div className="h-screen bg-slate-800/95 text-white">
              <h1 className="text-3xl text-center pt-20">404: not found</h1>
              <div className='text-center'>Were you searching for a <a className="text-green-500 underline decoration-green-500" href="https://leetyrrell.medium.com/a-decent-land-chapter-one-ae611cdd4e08" rel="noopener noreferrer" target="_blank" >decent land</a>?</div>
            </div>
          } />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
