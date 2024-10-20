
import './Welcome.css';
const Welcome = () => {
  return (
    <div className="app">
    <div className="crypto-section">
      <div className="crypto-header">
        <h1>Transfer Crypto Globally with Ease</h1>
        <p>Dive into the Crypto Universe. Effortlessly trade cryptocurrencies on Krypto.</p>
      </div>
      <button className="wallet-button">Connect Wallet</button>
      <div className="crypto-card">
        <div className="crypto-card-header">
          <span className="address-label">Address</span>
          <span className="crypto-name">Ethereum</span>
        </div>
      </div>
      <div className="form">
        <input type="text" placeholder="Address To" className="input-field" />
        <input type="text" placeholder="Amount (ETH)" className="input-field" />
        <input type="text" placeholder="Keyword (Gif)" className="input-field" />
        <textarea placeholder="Enter Message" className="input-field message-field"></textarea>
        <button className="wallet-button">Send Now</button>
      </div>
    </div>
    <div className="info-section">
        <div>
      <div className="info-box">Reliability</div>
      <div className="info-box">Security</div>
      <div className="info-box">Ethereum</div>
      </div>
      <div>
      <div className="info-box">Web 3.0</div>
      <div className="info-box">Low fees</div>
      <div className="info-box">Blockchain</div>
      </div>
   
    </div>
  </div>
  )
}

export default Welcome