import './App.css';
import Navbar from './navbar_comp/Navbar';
import Carousel from './body/sections/Carousel';
import AllSection from './body/sections/allSection';
import Section2 from './body/sections/section2';

export default function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <AllSection />
      {/* <Section2 /> */}
    </>
  );
}
