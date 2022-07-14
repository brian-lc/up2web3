import React from 'react';
import './App.css';
import ConnectButton from './components/connect_button'
import { Provider } from '@self.id/framework'
import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

function App() {
  return (
    <Provider client={{ ceramic: 'testnet-clay' }}>
    <div className="App">
      <header className="App-header">
        <ConnectButton />
        
      </header>
    </div>
    </Provider>
  );
}

export default App;
