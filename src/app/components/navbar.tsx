"use client";
import { useState} from 'react';
import Image from "next/image";
import logo from "../../../public/logo.png";
import menumobile from "../../../public/menu-mobile.svg";
import styles from "../styles/navbar.module.scss";

export default function Navbar() {

  const [menunav, setMenuNav] = useState(true);

  const menushow = () => {
    if(menunav){
      setMenuNav(false)
    } else{
      setMenuNav(true)  
    }
    
  }

  return(
    <header className={styles.header}>
        <div className={styles.interface}>
            <div className={styles.headerTop}>

      <div className={styles.divlogo}>
        <a href="#inicio">
          <Image
            src={logo}
            alt="Logo"
            className={styles.logo}
          />
        </a>
      </div>

     
      <nav className={styles.menu}>
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#especialidades">Especialidades</a></li>
          <li><a href="#atuacoes">Atuações</a></li>
          <li><a href="#portfolio">Portfólio</a></li>
          <li><a href="#clientes">Clientes</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>

      <button
        type="button"
        onClick={menushow}
        className={styles['mobile-menu-icon']}
        aria-label={menunav ? "Abrir menu" : "Fechar menu"}
        aria-expanded={!menunav}
      >
        <Image
          src={menumobile}
          alt=""
          width={30}
          height={30}
        />
      </button>

     
      <div className={styles['btn-contact']}>
        <a href="#trabalheconosco">
          <button>Trabalhe Conosco</button>
        </a>
      </div>
            
      

    </div>

    
    {!menunav && (
      <nav className={styles.menu2}>
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#especialidades">Especialidades</a></li>
          <li><a href="#atuacoes">Atuações</a></li>
          <li><a href="#portfolio">Portfólio</a></li>
          <li><a href="#clientes">Clientes</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    )}
           
   </div>     
    </header>
  );   
 
}    