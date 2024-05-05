
import React from 'react';
import { useNavigate } from 'react-router-dom';
  
export default function BotCollection ({ bots, enlistBot }) {
  const navigate = useNavigate();
  return (
    <div className='d-flex justify-content-center flex-wrap ' style={{gap:'1rem'}} >
      {bots.map(bot => (
        <div key={bot.id} className="card" style={{width: '18rem'}}>
        <img src={bot.avatar_url}className="card-img-top" alt="..."  onClick={()=>navigate(`/${bot.id}`)}/>
        <div className="card-body">
          <h5 className="card-title">{bot.name}</h5>
          <p className="card-text">{bot.catchphrase}</p>
          <p className="card-text"> ❤️{bot.health } ⚡{bot.damage} 🛡️{bot.armor}</p>
          <button onClick={()=> enlistBot(bot)}>enlist</button>
        </div>
      </div>
        
      ))}
    </div>
  )
};

