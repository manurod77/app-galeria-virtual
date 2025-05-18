import React, { useState } from 'react';
import ARInstructions from './components/ARInstructions';

export default function App() {
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);

  const resetRotation = () => {
    setRotation(0);
    alert('Rotación reseteada');
  };

  const resetScale = () => {
    setScale(1);
    alert('Escala reseteada');
  };

  return (
    <div>
      <ARInstructions onResetRotation={resetRotation} onResetScale={resetScale} />
      {/* Aquí iría la lógica AR / Three.js / WebXR */}
      <div style={{textAlign: 'center', color: '#eee', marginTop: 40}}>
        <p>Estado actual:</p>
        <p>Rotación: {rotation}°</p>
        <p>Escala: {scale}x</p>
      </div>
    </div>
  );
}