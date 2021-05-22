import React from 'react';
import AppPage from './pages/AppPage';
import AppContextProvider from "../src/context/AppContext"
import Header from './components/Header';

function App() {
  return (
    <AppContextProvider>
      <>
        <Header />
        <AppPage />
      </>
    </AppContextProvider>
    
  );
}

export default App;
