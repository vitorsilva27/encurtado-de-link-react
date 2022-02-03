import './error.css';
import { Link } from 'react-router-dom';

export default function Error(){
    return(
        <div className='container-error'>
            <img src='notfound.png' alt='Pagina Não Encontrada' />
            <h1>Pagina Não Encontrada!</h1>
            <Link to="/">
                Voltar Para a Home
            </Link>

        </div>
    )
}