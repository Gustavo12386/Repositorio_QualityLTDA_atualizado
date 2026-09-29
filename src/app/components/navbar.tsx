import Image from "next/image";
import logo from "../../../public/logo.png";

export default function Navbar() {
  return(
    <header>
        <div className="max-w-7xl m-auto">
            <div>
                <a href="#">
                <Image
                    src={logo}
                    alt="Logo"
                />
                </a>
            </div>
            <nav>
            <ul>
                <li><a href="#">Início</a></li>
                <li><a href="#">Especialidades</a></li>
                <li><a href="#">Atuações</a></li>
                <li><a href="#">Portfólio</a></li>
                <li><a href="#">Clientes</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
            </nav>
            <div>
            <a href="#">
                <button>Trabalhe Conosco</button>
            </a>  
            </div>
        </div>
    </header>
  );   
}    