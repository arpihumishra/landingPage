
import './App.css';
// import Header from './Header/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHeadphonesSimple, faRocket } from '@fortawesome/free-solid-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faPinterest} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {faFolderPlus} from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons';
import Headerdown from './Components/Headerdown/Headerdown';
import Paragraph from './Components/Paragraph/Paragraph';
import Card from './Components/Card/Card';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
// import Footercards from './Components/Footercards/Footercards';




function App() {
  return (
    <div className='page'>
      <div className="app">
      <hr/>
      <div className='upperhead'>
        <div className='lefticon'>
          <p ></p>
          <FontAwesomeIcon icon={faTwitter} />
          <p></p>
          <FontAwesomeIcon icon={faInstagram} />
          <p></p>
          <FontAwesomeIcon icon={faFacebook} />
          <p></p>
          <FontAwesomeIcon icon={faYoutube} />
          <p></p>
          <FontAwesomeIcon icon={faPinterest} />
          <p></p>
          <FontAwesomeIcon icon={faLinkedin} />
          <p></p>
        </div>
        <div className='middleicons'>
          <FontAwesomeIcon icon={faPhone} />
          <p>012-154-1387</p>| 
          <FontAwesomeIcon icon={faEnvelope} />
          <p>demolanding@gmail.com</p>
        </div>
        <div className='button'>
         <button className='b3'>REQUEST A CONSULT</button>
        </div>
      </div>
      
      <Headerdown/>
     
      <Paragraph/>
      <div className='cards'>
        <Card icons={faRocket} heading="LAUNCH BUSSINESS" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, in?"/>
        <Card icons={faHeadphonesSimple} heading="ONLINE SUPPORT SYSTEM" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, in?"/>
        <Card icons={faClock} heading="TIME MANAGEMENT" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, in?"/>
      </div>
     
   </div>
   <About/>
   <div>
   <Footer/>
   </div>
  </div>
  );
}

export default App;
