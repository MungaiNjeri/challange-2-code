import React, { useEffect, useState} from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const BotSpecs = ({ bots, enlistBot }) => {
  const navigate = useNavigate();
  const botId  = useParams();
  const [bot, setBot] = useState({});
  console.log (botId)
 useEffect(()=>{
 fetch(`https://json-server-sg8o.onrender.com/bots/${botId.id}`)
 .then(res=>res.json())
 .then(data=>setBot(data))
 },[])
  
 
    return (
      <div className='d-flex justify-content-center flex-wrap' style={{ gap: '1rem' }}>
        {bot && (
        <div key={bot.id} className="card" style={{width: '18rem'}}>
        <img src={bot.avatar_url}className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{bot.name}</h5>
          <p className="card-text">{bot.catchphrase}</p>
          <p className="card-text"> ❤️{bot.health } ⚡{bot.damage} 🛡️{bot.armor}</p>

        </div>
        <button onClick={() => navigate('/challange-2-code')} className="btn btn-secondary">Go back</button>
      </div>  
        )}
      </div>
    );
  }
 
export default BotSpecs;