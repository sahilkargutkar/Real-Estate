import React from 'react'
 import Navbar from './components/Navbar'
import GlobalStyle from './GlobalStyles'
import Home from './components/Home'
import { slidingData } from './data/SlidingData';
import InfoSection from './components/InfoSection';
import { Infodata, InfodataThree, InfodataTwo } from './data/InfoData';

function App() {
  return (
    <>
    <GlobalStyle />
      <Navbar />
      
      <Home slides={slidingData }/>
      <InfoSection {...Infodata} /> 
      <InfoSection {...InfodataTwo} />
      <InfoSection {...InfodataThree} />
    </>
  );
}

export default App;
