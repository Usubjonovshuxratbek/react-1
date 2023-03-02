import './App.scss';
import Asiad from './components/Asaid/Asaid';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Students from './components/Students/Student';
import Trending from './components/Trending/Trending';
import Work from './components/Work/Work';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {



return (
    <div className="App">
      <Header/>
      <Hero/>
      <Asiad/>
      <Trending/>
      <Students/>
      <Work/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App;