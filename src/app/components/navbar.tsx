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
            <div className={styles.divlogo}>
                <a href="#">
                <Image
                    src={logo}
                    alt="Logo"
                    className={styles.logo}
                />
                </a>
            </div>
            <nav className={styles.menu}>
                <ul>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Especialidades</a></li>
                    <li><a href="#">Atuações</a></li> 
                    <li><a href="#">Portfólio</a></li>
                    <li><a href="#">Clientes</a></li>
                    <li><a href="#">Contato</a></li>                  
                </ul>              
            </nav>
            <div className={styles['btn-contact']}>
                <a href="#">
                    <button>Trabalhe Conosco</button>
                </a>  
            </div>
            
            <div className={styles['mobile-menu']}>               
               <button onClick={menushow} className={styles['mobile-menu-icon']}>
                  <Image src={menumobile} alt="menu" width='30'/>
                </button> 
             {!menunav && (
               <nav className={styles.menu2}>
                <ul>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Especialidades</a></li>
                    <li><a href="#">Atuações</a></li> 
                    <li><a href="#">Portfólio</a></li>
                    <li><a href="#">Clientes</a></li>
                    <li><a href="#">Contato</a></li>                  
                </ul>                 
               </nav>
             )}                
            </div>
            <div className={styles['btn-contact2']}>
                    <a href="#">
                        <button>Trabalhe Conosco</button>
                    </a>  
            </div>  
        </div>
    </header>
  );   
 
}    