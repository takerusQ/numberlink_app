import React, { useState } from 'react';

function App() {
  const [activeNumber, setActiveNumber] = useState(null);
  const [lockedNumber, setLockedNumber] = useState(null);

  const colorDict = {
    '1': 'red',
    '2': 'green',
    '3': 'blue',
    '4': 'yellow',
    '5': 'purple',
    '6': 'cyan',
    '7': 'gray' // Add an additional color for number 7
  };

  const handleButtonClick = (number) => {
    if (activeNumber === number) {
      setActiveNumber(null);
    } else {
      setActiveNumber(number);
    }
  };

  const handleCellClick = (cellNumber) => {
    if (activeNumber && cellNumber === ' ') {
      // Make API request to update the grid with the selected number
      console.log(`Clicked on cell ${cellNumber}`);
    }
  };

  // レンダリングのためのJSXを返す
  return (
    <div>
      {/* グリッドを表示 */}
      <div className="grid-container">
        <div className="grid-cell" onClick={() => handleCellClick(1)}>1</div>
        <div className="grid-cell" onClick={() => handleCellClick(2)}>2</div>
        {/* 必要なセルを追加 */}
      </div>

      {/* ボタンを表示 */}
      <button
        className={`number-button ${activeNumber === '1' ? 'active' : ''}`}
        onClick={() => handleButtonClick('1')}
      >
        1
      </button>
      <button
        className={`number-button ${activeNumber === '2' ? 'active' : ''}`}
        onClick={() => handleButtonClick('2')}
      >
        2
      </button>
      {/* 必要なボタンを追加 */}
    </div>
  );
}

export default App;
