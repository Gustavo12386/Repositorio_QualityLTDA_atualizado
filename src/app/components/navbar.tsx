import Image from "next/image";
import logo from "../../../public/logo.png";

export default function Navbar() {
  return(
    <header>
        <div className="interface">
            <div className="logo">
                <a href="#">
                <Image
                    src={logo}
                    alt="Logo"
                />
                </a>
            </div>
            <nav className="menu desktop">
                <ul>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Especialidades</a></li>
                    <li><a href="#">Atuações</a></li>
                    <li><a href="#">Portfólio</a></li>
                    <li><a href="#">Clientes</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
            <div className="btn-contact">
            <a href="#">
                <button>Trabalhe Conosco</button>
            </a>  
            </div>
        </div>
    </header>
  );   
}    