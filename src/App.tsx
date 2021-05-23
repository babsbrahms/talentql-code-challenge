import React from 'react';
import AppPage from './pages/AppPage';
import AppContextProvider, { AppContext } from "../src/context/AppContext"
import Header from './components/Header';
import {AuthNote} from "./components/AuthNote"
import "./styles/style.css"

function App() {
  return (
    <AppContextProvider>
      <AppContext.Consumer>
        {({ token }) => (
          <>
            <Header />
            {!!token && <AppPage />}
            {!token && <AuthNote />}
          </>
        )}
      </AppContext.Consumer>
    </AppContextProvider>
    
  );
}

export default App;
