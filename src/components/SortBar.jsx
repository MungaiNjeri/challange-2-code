import React, { useState } from 'react';

const SortBar = ({ handleSort }) => {

  
  return (
    <div>
      <h3>Sort by:</h3>
      <button onClick={() => handleSort('health')} >Health</button>
      <button onClick={() => handleSort('damage')} >Damage</button>
      <button onClick={() => handleSort('armor')} >Armor</button>
    </div>
  );
};

export default SortBar;
