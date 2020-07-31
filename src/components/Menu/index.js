import React from 'react'; //importa o react
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';

function Menu() //função, mas também componente, devido a letra maiuscula no inicio da palavra
{
    return (
        <nav className="Menu">
            <Link to=""  href="/cadastro/video">   
            <img className="Logo" src={Logo} alt="Portiflix"/>
            </Link>
            
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>

        </nav>
    );
}

export default Menu; //exportando para por importar em outros lugares (devido a existirem outras telas com essa função)