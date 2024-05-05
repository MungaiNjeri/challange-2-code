import React from 'react';
const YourBotArmy = ({ army, releaseBot, dischargeBot }) => {
  const handleCardClick = (bot) => {
    console.log(`Clicked on ${bot.name}`);
  };

  return (
    <div className='d-flex justify-content-center flex-wrap ' style={{gap:'1rem'}} >
    {army.map(bot => (
      <div key={bot.id} className="card" style={{width: '18rem'}}>
      <img src={bot.avatar_url}className="card-img-top" alt="..." onClick={()=> releaseBot(bot)}/>
      <div className="card-body">
        <h5 className="card-title">{bot.name}</h5>
        <p className="card-text">{bot.catchphrase}</p>
        <p className="card-text"> ❤️{bot.health } ⚡{bot.damage} 🛡️{bot.armor}</p>
        <button onClick={()=> dischargeBot(bot)}>discharge</button>
      </div>
    </div>
      
    ))}
  </div>
  );
};

export default YourBotArmy;
