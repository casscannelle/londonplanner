import './App.css';
import { Body } from './components/body';
import { Header } from './components/header';
import { Main } from './components/main';
import { Footer } from './components/footer';
import { DownloadButton } from './components/DownloadButton/DownloadButton';
import React, { useRef } from 'react';

function App() {
  const mainRef = useRef(null);

  const handleDownloadClick = () => {
    if (mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="App">
      <Header/>
      <Main ref={mainRef}/>
      <Body/>
      <div className="body-button" >
            <DownloadButton
                variant="contained" 
                size="medium"
                text="Quero meu planner"
                onClick={handleDownloadClick}
            />
            </div>
      <Footer/>
    </div>
  );
}

export default App;
