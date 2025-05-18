import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');

  body {
    margin: 0;
    background: #121212;
    font-family: 'Share Tech Mono', monospace;
  }
`;

const InstructionBox = styled.div`
  position: relative;
  max-width: 420px;
  margin: 2rem auto;
  padding: 20px 30px;
  background: linear-gradient(135deg, #1a1a1a 0%, #2b0a2a 100%);
  color: #e0faff;
  border: 3px solid #e91e63;
  border-radius: 12px 4px 12px 4px;
  box-shadow:
    0 0 6px #e91e63,
    4px 4px 8px #0ff;
  text-shadow: 1px 1px 0 #0ff, -1px -1px 0 #e91e63;
  user-select: none;
  letter-spacing: 1.2px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url('https://www.transparenttextures.com/patterns/pw-maze-white.png');
    opacity: 0.08;
    pointer-events: none;
    border-radius: inherit;
  }
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #ff00ff;
  text-shadow: 0 0 5px #ff00ff;
`;

const InstructionList = styled.ul`
  list-style-type: square;
  list-style-position: inside;
  margin: 0 0 1.5rem 0;
  padding: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #00fff7;
  text-shadow: 0 0 2px #00fff7;
`;

const Button = styled.button`
  font-family: 'Share Tech Mono', monospace;
  background: #ff00ff;
  color: #121212;
  font-weight: 700;
  border: none;
  padding: 10px 20px;
  border-radius: 6px 2px 6px 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 8px #ff00ff;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  user-select: none;
  margin-right: 15px;

  &:hover {
    background: #00fff7;
    color: #121212;
    box-shadow: 0 0 12px #00fff7;
    transform: scale(1.05) rotate(-2deg);
  }
`;

export default function ARInstructions({ onResetRotation, onResetScale }) {
  return (
    <>
      <GlobalStyle />
      <InstructionBox>
        <Title>Instrucciones AR:</Title>
        <InstructionList>
          <li>Toca para colocar la obra.</li>
          <li>Desliza con un dedo horizontalmente para rotar.</li>
          <li>Haz pinch con dos dedos para escalar.</li>
        </InstructionList>
        <div>
          <Button onClick={onResetRotation}>Resetear rotación</Button>
          <Button onClick={onResetScale}>Resetear escala</Button>
        </div>
      </InstructionBox>
    </>
  );
}