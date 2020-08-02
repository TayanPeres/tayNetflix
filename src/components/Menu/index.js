import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
        <Link to="/">TayFlix</Link>
        <Button as={Link} className="ButtonLink" to="/cadastro/video">Novo video</Button>
        </nav>
        )
    }
export default Menu
//alt na frase muda o posicionamento
//"as" se comporta como vc escolhe 