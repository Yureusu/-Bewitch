import { useState, useEffect } from 'react'

export default function Popup(){

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 480);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const closePopup = () => {

    }
  
    return(
      <div id='popup'style={{height: 'auto', width: '100%', backgroundColor: 'transparent', position: 'absolute', 
      top: isMobile ? 'calc(2vw + 8rem)' : 'calc(2vw + 6rem)', display: 'flex', flexWrap: 'row', alignItems: 'center', justifyContent: 'center', zIndex: '1'}}>
  
        <div id='popup-wrapper' style={{height: 'calc(14vw + 16rem)', width: 'calc(14vw + 16rem)', backgroundColor: '#fff', boxShadow: '0px 0px 0px 100vmax rgb(0, 0, 0, 0.4)',
        borderRadius: 'calc(0.6vw + 1rem) 0 calc(0.6vw + 1rem) calc(0.6vw + 1rem)', display: 'flex', flexWrap: 'column', alignItems: 'flex-start'}}>
          <i id='close-popup' className="fa-solid fa-circle-xmark" onClick={() => closePopup()} style={{fontSize: 'calc(0.6vw + 1.4rem)', color: '#655D8A', cursor: 'pointer', marginLeft: 'auto', marginRight: '-8px', marginTop: '-8px'}}></i>
        </div>
  
      </div>
    );
}