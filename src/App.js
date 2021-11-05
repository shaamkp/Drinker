import logo from './logo.svg';
import './App.css';
import Spotlight from './components/screens/Spotlight';
import Store from './components/screens/Store';
import Contact from './components/screens/Contact';
import Testimonial from './components/screens/Testimonial';
import Footer from './components/screens/Footer';
import Footer2 from './components/screens/Footer2';

function App() {
  return (
    <>
      <Spotlight />
      <Store />
      <Contact />
      <Testimonial />
      <Footer />  
      <Footer2 />
    </>
  );
}

export default App;
