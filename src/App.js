import Home from './Components/Home';
import './App.css';
import {SliderData} from './Components/SliderData';
import ImageSlider from './Components/ImageSlider';

function App() {
  return  (
    <div>
    <Home/>
    <ImageSlider slides={SliderData}/> 
    </div>
  
)}

export default App;
