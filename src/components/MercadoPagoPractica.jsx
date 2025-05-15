import React from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

// Inicializa Mercado Pago con tu public key
initMercadoPago('TEST-395ed7dd-638a-4f35-b726-57eece7c243e');

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>Botón de Pago</h1>
      <p>Haz clic en el botón para realizar el pago.</p>
      {/* Renderiza el botón de pago */}
      <div style={{ width: '300px' }}>
        <Wallet initialization={{ preferenceId: 'TEST-395ed7dd-638a-4f35-b726-57eece7c243e' }} />
      </div>
    </div>
  );
};

export default App;