
import './App.css';
// import ShortenLink from './components/ShortenLink';
import Header from './components/Header'
import MiddleComponent from './components/MiddleComponent';
import Title from './components/Title';
import Url from './components/Url';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
    <Header/>
    <Title />
    <Url/>
    <MiddleComponent/>
    <Footer/>
    {/* <ShortenLink/> */}
    </div>
  );
}

export default App;
