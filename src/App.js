import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Image from './components/Image';
import Signup from './components/Signup';
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <Image src="https://zerodha.com/static/images/landing.png" />
      <Signup head="Invest in everything" para="Online platform to invest in stocks, derivatives, mutual funds, and more" button="Sign Up Now"/>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
