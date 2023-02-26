import './App.scss';
import ContentBlock from './components/content-block/contentBlock.component';
import CookieConsent from "react-cookie-consent";



function App(props) {
 
  return (
    <div className="App">
        <ContentBlock/>
        <CookieConsent style={{ background: "rgba(000,000,000, 0.5", color: "#fff", fontSize: "20px" }} buttonText="Гаразд" buttonStyle={{ backgroundColor: "#5c821a", color: "#fff", fontSize: "13px", borderRadius: "25px"  }}>Користуючись нашим сайтом, ви погоджуєтесь з тем, що ми використовуємо cookies</CookieConsent>
    </div>
  
  );
}

export default App;
