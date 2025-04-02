import { useState, useEffect } from 'react'

export default function Inventory(props){

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 480);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return( props.trigger) ? (
      <div id='popup'style={{height: 'auto', width: '100%', backgroundColor: 'transparent', position: 'absolute', 
        top: isMobile ? 'calc(2vw + 8rem)' : 'calc(2vw + 6rem)', display: 'flex', flexWrap: 'row', alignItems: 'center', justifyContent: 'center', zIndex: '1'}}>

        {props.children}

      </div>
    ) : "";
  }