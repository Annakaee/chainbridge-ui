import React from 'react';
import './index.css';

export default function App() {
  return (
    <div className="bridge-container">
      <div className="bridge-header">
        <h2>Cross-Chain Bridge</h2>
        <span style={{ cursor: 'pointer' }}>⚙️</span>
      </div>

      <div className="input-group">
        <span className="input-label">From: Stellar Network</span>
        <div className="input-row">
          <input className="amount-input" type="number" placeholder="0.0" />
          <div className="token-selector">
            <span style={{ background: '#000', borderRadius: '50%', width: 24, height: 24, display: 'inline-block', textAlign: 'center' }}>S</span>
            XLM
          </div>
        </div>
      </div>

      <div className="bridge-arrow">
        <button className="bridge-arrow-btn">↓</button>
      </div>

      <div className="input-group">
        <span className="input-label">To: Ethereum Network</span>
        <div className="input-row">
          <input className="amount-input" type="number" placeholder="0.0" disabled />
          <div className="token-selector">
            <span style={{ background: '#627EEA', borderRadius: '50%', width: 24, height: 24, display: 'inline-block', textAlign: 'center' }}>E</span>
            W-XLM
          </div>
        </div>
      </div>

      <button className="submit-btn">Connect Wallet to Bridge</button>
    </div>
  );
}
