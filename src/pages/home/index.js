import { useState } from 'react';
import {FiLink} from 'react-icons/fi';
import './home.css';

import Menu from '../../components/menu';
import LinkItem from '../../components/LinkItem';

import api from '../../services/api'
import { saveLink } from '../../services/storeLink'

export default function Home() {
  const [link, setLink] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({})


  async function handleLink(){
    try{
      const response = await api.post('/shorten', {
        long_url: link
      })

      setData(response.data);
      setShowModal(true);

      saveLink('@encurtaLink', response.data)

      setLink('')

    }catch{
      alert("Ops Parece que Algo deu Errado!");
      setLink('')
    }
  }

  return (
    <div className='container-home'>
      <div className='logo'>
        <img src="/logo.png" alt="Sujeito Link Logo" />
        <h1>Encurta Link</h1>
        <span>Cole seu Link para Encurtar</span>
      </div>

      <div className='area-input'>
        <div className=''>
          <FiLink size={24} color="#FFF"/>
          <input 
            placeholder='Cole seu Link aqui'
            value={link}
            onChange={(e)=> setLink(e.target.value)}
          
          />
        </div>

        <button onClick={handleLink}>Encurtar Link</button>
      </div>

      <Menu/>

      {showModal && (
        <LinkItem 
          closeModal={() => setShowModal(false)}
          content={data}
        />
      )}
    </div>
  );

}
