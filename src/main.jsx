import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// ponytail: no StrictMode — its double-mount replays slide animations and
// double-fires the deck timer. A presentation deck wants single, clean mounts.
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
