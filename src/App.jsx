import crowImg from './assets/img/crow.png'
import bagImg from './assets/img/bag.png'
import modeImg from './assets/img/light-mode.png'
import catalogImg from './assets/img/catalog.png'
import contractsImg from './assets/img/contracts.png'
import shopImg from './assets/img/shop.png'
import { useState, useEffect } from 'react'

import Contracts from './Contracts.jsx'
import Catalog from './Catalog.jsx'
import Shop from './Shop.jsx'

import Inventory from './Inventory.jsx'
import Tutorial from './Tutorial.jsx'

export default function App() {

  return (
    <>
      <Header /> 
      <Content />  
      <Footer /> 
    </>
  )
}

function Header(){

  const [showInventory, setShowInventory] = useState(false);

  const openInvetory = () => {
    setShowInventory(true)
  }

  const closeInventory = () => {
    setShowInventory(false)
  }

  return(
    <div id='header' style={{height: 'calc(3vw + 3rem)', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', 
        justifyContent: 'flex-start', gap: 'calc(1vw + 0.6rem)', backgroundColor: '#39375B', paddingInline: 'calc(1vw + 1rem)', position: 'fixed', zIndex: '2'}}>
      
      <img src={crowImg} id='header-logo' style={{height: 'calc(2vw + 2rem)', width: 'calc(2vw + 2rem)', cursor: 'pointer'}} alt=''/>
      <a href='' id='header-title' style={{textDecoration: 'none', color: '#E2DFD0', cursor: 'pointer', fontSize: 'calc(1vw + 1.4rem)', fontWeight: 'bold'}}>Bewitch</a>
      <span id='header-space' style={{flex: '1'}}></span>
      <img src={bagImg} id='player-bag' onClick={() => openInvetory()} style={{height: 'calc(2vw + 1.6rem)', width: 'calc(2vw + 1.6rem)', cursor: 'pointer'}} alt=''/>
      
      <Inventory trigger={showInventory}>
        <div id='popup-wrapper' style={{height: 'calc(14vw + 16rem)', width: 'calc(14vw + 16rem)', backgroundColor: '#fff', boxShadow: '0px 0px 0px 100vmax rgb(0, 0, 0, 0.4)',
          borderRadius: 'calc(0.6vw + 1rem) 0 calc(0.6vw + 1rem) calc(0.6vw + 1rem)', display: 'flex', flexWrap: 'column', alignItems: 'flex-start'}}>
          <i id='close-popup' className="fa-solid fa-circle-xmark" onClick={() => closeInventory()} style={{fontSize: 'calc(0.6vw + 1.4rem)', color: '#655D8A', cursor: 'pointer', marginLeft: 'auto', marginRight: '-8px', marginTop: '-8px'}}></i>
        </div>
      </Inventory>

      <img src={modeImg} id='switch-mode' style={{height: 'calc(2vw + 1.6rem)', width: 'calc(2vw + 1.6rem)', cursor: 'pointer'}} alt=''/>

    </div>
  );
}

function Content(){

  const [items] = useState([
    catalogImg, contractsImg, shopImg
  ]);

  const nameArr = [
    'Catalog', 'Contracts', 'Shop'
  ];

  const [showHome, setShowHome] = useState(true);
  const [showCatalog, setShowCatalog] = useState(false);
  const [showContracts, setShowContracts] = useState(false);
  const [showShop, setShowShop] = useState(false);

  const handleClick = (index) => {
    if(nameArr[index] == 'Catalog'){
      setShowCatalog(true)
      setShowHome(false)
    }
    else if(nameArr[index] == 'Contracts'){
      setShowContracts(true)
      setShowHome(false)
    }
    else if(nameArr[index] == 'Shop'){
      setShowShop(true)
      setShowHome(false)
    }
  };

  const closeCatalog = () => {
    setShowCatalog(false)
    setShowHome(true)
  }
  const closeContracts = () => {
    setShowContracts(false)
    setShowHome(true)
  }
  const closeShop = () => {
    setShowShop(false)
    setShowHome(true)
  }

  const intro = `In a world where the threads of magic weave reality itself, witches reign supreme. 
    Each commands unique and powerful spells, their knowledge passed down through secret rituals and dangerous 
    pacts. Yet, deep within the arcane archives, whispers speak of a legendary magic—the ultimate force 
    that could crown its wielder as the greatest sorcerer of all time.`;

  return(
    <>
      {showHome && <Home />}

      <Catalog trigger={showCatalog}>
        <div id='top-nav' style={{height: 'auto', width: '96%', display: 'flex', flexDirection: 'row', marginTop: 'calc(3vw + 3rem)',
            alignItems: 'center', justifyContent: 'flex-start', borderBottom: '2px solid white', gap: 'calc(1vw + 0.4rem)', padding: 'calc(1.4vw + 0.6rem)'}}>

          <i onClick={() => closeCatalog()} id="back-btn" className="fa-solid fa-chevron-left" style={{color: '#E2DFD0', fontSize: 'calc(0.4vw + 0.8rem)', cursor: 'pointer'}}></i>
          <p onClick={() => closeCatalog()} id="back-text" style={{color: '#E2DFD0', fontSize: 'calc(0.4vw + 0.8rem)', cursor: 'pointer'}}> Go Back</p>

        </div>
      </Catalog>

      <Contracts trigger={showContracts}>
        <div id='top-nav' style={{height: 'auto', width: '96%', display: 'flex', flexDirection: 'row', marginTop: 'calc(3vw + 3rem)',
            alignItems: 'center', justifyContent: 'flex-start', borderBottom: '2px solid white', gap: 'calc(1vw + 0.4rem)', padding: 'calc(1.4vw + 0.6rem)'}}>

          <i onClick={() => closeContracts()} id="back-btn" className="fa-solid fa-chevron-left" style={{color: '#E2DFD0', fontSize: 'calc(0.4vw + 0.8rem)', cursor: 'pointer'}}></i>
          <p onClick={() => closeContracts()} id="back-text" style={{color: '#E2DFD0', fontSize: 'calc(0.4vw + 0.8rem)', cursor: 'pointer'}}> Go Back</p>

        </div>
      </Contracts>

      <Shop trigger={showShop}>
        <div id='top-nav' style={{height: 'auto', width: '96%', display: 'flex', flexDirection: 'row', marginTop: 'calc(3vw + 3rem)',
            alignItems: 'center', justifyContent: 'flex-start', borderBottom: '2px solid white', gap: 'calc(1vw + 0.4rem)', padding: 'calc(1.4vw + 0.6rem)'}}>

          <i onClick={() => closeShop()} id="back-btn" className="fa-solid fa-chevron-left" style={{color: '#E2DFD0', fontSize: 'calc(0.4vw + 0.8rem)', cursor: 'pointer'}}></i>
          <p onClick={() => closeShop()} id="back-text" style={{color: '#E2DFD0', fontSize: 'calc(0.4vw + 0.8rem)', cursor: 'pointer'}}> Go Back</p>

        </div>
      </Shop>
    </>
  );

  function Home(){

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 480);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [showTutorial, setShowTutorial] = useState(false);

    const openTutorial = () => {
      setShowTutorial(true);
    }

    const closeTutorial = () => {
      setShowTutorial(false);
    }

    return(

      <div id='content' style={{height: isMobile ? 'auto' : '100vh', width: '100%', backgroundColor: '#655D8A',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
  
        <div id='top-nav' style={{height: 'auto', width: '96%', display: 'flex', flexDirection: 'row', marginTop: 'calc(3vw + 3rem)',
          alignItems: 'center', justifyContent: 'space-around', borderBottom: '2px solid white', gap: 'calc(0.4vw + 1.6rem)', padding: 'calc(1.4vw + 0.6rem)'}}>
  
          <p id='tutorial' style={{color: '#E2DFD0', fontSize: 'calc(0.6vw + .6rem)', cursor: 'pointer', filter: 'brightness(80%)', textTransform: 'uppercase'}} 
          onMouseEnter={(btn) => (btn.target.style.filter = 'brightness(100%)')}
          onMouseLeave={(btn) => (btn.target.style.filter = 'brightness(80%)')} onClick={() => openTutorial()}>Tutorial</p>

          <Tutorial trigger={showTutorial}>
            <div id='popup-wrapper' style={{height: 'calc(460px)', width: 'calc(1080px)', backgroundColor: '#fff', boxShadow: '0px 0px 0px 100vmax rgb(0, 0, 0, 0.4)',
            borderRadius: 'calc(0.6vw + 1rem) 0 calc(0.6vw + 1rem) calc(0.6vw + 1rem)', display: 'flex', flexWrap: 'column', alignItems: 'flex-start'}}>
              <i id='close-popup' className="fa-solid fa-circle-xmark" onClick={() => closeTutorial()} style={{fontSize: 'calc(0.6vw + 1.4rem)', color: '#655D8A', cursor: 'pointer', marginLeft: 'auto', marginRight: '-8px', marginTop: '-8px'}}></i>
            </div>
          </Tutorial>
  
          <p id='tutorial' style={{color: '#E2DFD0', fontSize: 'calc(0.6vw + .6rem)', cursor: 'pointer', filter: 'brightness(80%)', textTransform: 'uppercase'}}
          onMouseEnter={(btn) => (btn.target.style.filter = 'brightness(100%)')}
          onMouseLeave={(btn) => (btn.target.style.filter = 'brightness(80%)')}>Achievements</p>
  
          <p id='tutorial' style={{color: '#E2DFD0', fontSize: 'calc(0.6vw + .6rem)', cursor: 'pointer', filter: 'brightness(80%)', textTransform: 'uppercase'}}
          onMouseEnter={(btn) => (btn.target.style.filter = 'brightness(100%)')}
          onMouseLeave={(btn) => (btn.target.style.filter = 'brightness(80%)')}>Donate</p>
  
        </div>
  
        <div id='content-wrapper' style={{height: 'auto', width: '100%', display: 'flex', flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center', justifyContent: 'center', gap: isMobile ? 'calc(1vw + 1rem)' : '0', padding: 'calc(1.4vw + 0.6rem)'}}>

          {items.map((src, index) => (
              <div id='img-wrapper'style={{height: 'auto', width: 'auto', display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'flex-start', gap: 'calc(0.6vw + 0.6rem)'}}>
                <img key={index} src={src} id='content-img' alt='' onClick={() => handleClick(index)} style={{
                  height: 'calc(8vw + 6rem)', width: 'calc(8vw + 6rem)', cursor: 'pointer', marginInline: 'calc(1vw + 2rem)', filter: 'brightness(80%)'
                }}
                onMouseEnter={(btn) => (btn.target.style.filter = 'brightness(100%)')}
                onMouseLeave={(btn) => (btn.target.style.filter = 'brightness(80%)')}
                />
                <p id='img-title' style={{color: '#E2DFD0', fontSize: 'calc(0.2vw + 1rem)', cursor: 'pointer'}}>{nameArr[index]}</p>
              </div>
          ))}
  
        </div>
  
        <div id='introduction' style={{height: 'auto', width: '96%', display: 'flex', flexDirection: 'row',
          alignItems: 'center', justifyContent: 'center', gap: 'calc(0.4vw + 1.6rem)', padding: 'calc(1.4vw + 0.6rem)', borderTop: '2px solid white'}}>
  
            <p id='intro-text'  style={{color: '#E2DFD0', fontSize: 'calc(0.6vw + 0.6rem)', cursor: 'pointer', textAlign: 'center', paddingInline: 'calc(1vw + 1rem)'}}>
             {intro}
            </p>
  
        </div>
  
      </div>
    );

  }
}

function Footer(){
  return(
    <div id='footer' style={{height: 'auto', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', 
        justifyContent: 'flex-start', gap: 'calc(1vw + 0.6rem)', backgroundColor: '#39375B', padding: 'calc(1vw + 1rem)'}}>
      <div id='footer-wrapper' style={{height: 'auto', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', 
        justifyContent: 'flex-start', gap: 'calc(1vw + 0.6rem)'}}>
        <img src={crowImg} id='footer-logo' style={{height: 'calc(2vw + 1.4rem)', width: 'calc(2vw + 1.4rem)', cursor: 'pointer'}} alt=''/>
        <a href='' id='footer-title' style={{textDecoration: 'none', color: '#E2DFD0', fontSize: 'calc(1vw + 1.2rem)', fontWeight: 'bold'}}>Bewitch</a>
      </div>
      <div id='footer-credits' style={{
        height: 'auto', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', 
        justifyContent: 'space-between', gap: 'calc(1vw + 0.6rem)'
      }}>
      <p id='credits-text' style={{color: '#E2DFD0', fontSize: 'calc(0.6vw + 0.6rem)', textTransform: 'capitalize'}}>
        A solo project by Jutsy, made with love.
      </p>
        <p id='credits-text' style={{color: '#E2DFD0', fontSize: 'calc(0.6vw + 0.6rem)'}}>&copy; Bewitch.</p>
      </div>
    </div>
  );
}



