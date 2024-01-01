import React from 'react';

import Header from './components/Header';
import Column from './components/Column';
import Footer from './components/Footer';
import EventProvider from './EventProvider';
import './App.css';

function App() {
  return (
    <EventProvider>
      <div className="App">
        <Header dogName="Scrappy" />
        <div className="columnWrapper">
          <Column columnTitle="Walks" eventType="Walk" />
          <Column columnTitle="Food" eventType="Food" />
        </div>
        <Footer />
      </div>
    </EventProvider>
  );
}

export default App;
