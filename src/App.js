import React, { useEffect } from 'react';
import './App.css';
import ppImage from './pp.png'; // Use relative path
import button1 from './call-icon.png'; // Import your button images
import button2 from './whatsapp-icon.png';
import button3 from './email-icon.png';
import button4 from './save-contact-icon.png'; // This will be the new button
import contactVCard from './vcard.vcf';
import button5 from './address-icon.png';
import button6 from './office-call.png';
import tagy from './tagy.png'; // Import the tagy image

// Custom hook to disable pinch zoom
const useDisablePinchZoomEffect = () => {
  useEffect(() => {
    const disablePinchZoom = (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    document.addEventListener("touchmove", disablePinchZoom, { passive: false });

    return () => {
      document.removeEventListener("touchmove", disablePinchZoom);
    };
  }, []);
};

function App() {
  useDisablePinchZoomEffect(); // Call the custom hook

  return (
    <div className="app-container">
      <h1>Yuvaneesh Ravi</h1>
      <h2>IT Infrastructure Engineer</h2>
      <h3>Connect with me on</h3>
      
      {/* Button Container */}
      <div className="button-container">
        <a href="tel:+60126055273" target="_blank" rel="noopener noreferrer">
          <img src={button1} alt="Call" className="button" />
        </a>
        <a href="tel:+60122205649" target="_blank" rel="noopener noreferrer">
          <img src={button6} alt="Office Call" className="button" />
        </a>
        <a href="https://wa.me/+60126055273" target="_blank" rel="noopener noreferrer">
          <img src={button2} alt="WhatsApp" className="button" />
        </a>
        <a href="mailto:yuvaneeshravishanker@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={button3} alt="Email" className="button" />
        </a>
      </div>
      
      {/* New Button Below the Other Buttons */}
      <div className="button-container">
        <a href={contactVCard} download>
          <img src={button4} alt="Download vCard" className="button button4" />
        </a>
      </div>

      <p className="locate-me">Locate Me</p>

      {/* Add Button 5 Below Locate Me */}
      <div className="button-container">
        <a href="https://maps.app.goo.gl/qhxw523DnVePV5gY8?g_st=com.google.maps.preview.copy" target="_blank" rel="noopener noreferrer">
          <img src={button5} alt="Locate Me" className="button" />
        </a>
      </div>

      {/* Add the tagy image at the far right */}
      <img src={tagy} alt="Tagy" className="tagy-image" />
    </div>
  );
}

export default App;