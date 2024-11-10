import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// tambahin provider untuk chakra
import { Provider } from './components/ui/provider'; // pastikan path sudah benar

createRoot(document.getElementById('root')).render(
  <StrictMode>
    // tambahin provider pada bagian ini
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);
