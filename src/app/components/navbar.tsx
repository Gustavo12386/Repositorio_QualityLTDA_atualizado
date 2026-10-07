import Image from "next/image";
import logo from "../../../public/logo.png";
import styles from "../styles/navbar.module.scss";

export default function Navbar() {
  return(
    <header className={styles.header}>
        <div className={styles.interface}>
            <div className={styles.logo}>
                <a href="#">
                <Image
                    src={logo}
                    alt="Logo"
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
        </div>
    </header>
  );   
}    