
import './App.css';
import React, { useState, useEffect } from'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import SortBar from './components/SortBar';
import FilterBar from './components/FilterBar';

function App() {
  const [bots, setBots] = useState(['']);
  const [army, setArmy] = useState([]);
  const [filteredBots, setFilteredBots] = useState(['']);
  const [activeSort, setActiveSort] = useState(['']); 
  const [filter, setFilter] =useState ('')
  useEffect(() => {
    fetch('https://json-server-sg8o.onrender.com/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.log(error));
  }, []);
function handleActiveSort(option) {
  setActiveSort(option);
}
  const handleSort = (sortOption) => {
    if(sortOption==="health"){
      return (a,b)=>b.health-a.health
    }
    else if(sortOption === "armor"){
      return (a,b) => b.armor-a.armor
    }
    else if(sortOption === "damage" ){
      return (a,b) => b.damage-a.damage
    }
    else{
      return ()=>0
    }
    
  };
function applyFilter(filter){
setFilter(filter)
}
  const enlistBot = (bot) => {
    setArmy([...army, bot]);
    setBots(bots.filter(b => b.id !== bot.id));
  };

  const releaseBot = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
    setBots([...bots, bot]);
  };

  const dischargeBot = (bot) => {
    console.log (bot)
    fetch(`https://json-server-sg8o.onrender.com/bots/${bot.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(() => {
        setArmy(army.filter(b => b.id !== bot.id));
        console.log ('delete')
      })
      .catch(error => console.log(error));
  };
const newBots = bots.filter(bot =>{
  if(filter) {
    return bot.bot_class === filter
  }
  else{
    return true
  }
})
  return (
    <>
      <div className="App">
        <h1>BOT BATTLE</h1>
        <YourBotArmy army={army} releaseBot={releaseBot} dischargeBot={dischargeBot} />
        <FilterBar  applyFilter={applyFilter}/>
        <SortBar handleSort={handleActiveSort} activeSort={activeSort} /> {/* Pass handleSort and activeSort as props */}
        <BotCollection bots={newBots.sort (handleSort(activeSort))} enlistBot={enlistBot} />
      </div>
    </>
  );
}

export default App;
