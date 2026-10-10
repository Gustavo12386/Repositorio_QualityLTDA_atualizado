import styles from '../styles/footer.module.scss';
import Image from 'next/image';
import logo from "../../../public/logo.png";
import indicator from "../../../public/indicador(branco).png";
import phone from "../../../public/telefone.png";
import clock from "../../../public/relógio.png";

export default function Footer(){
    return(
      <footer>
        <div className={styles.interface}>
            <div className={styles.linefoot}>                
                <div className={styles.flex}>
                   <div className={styles.logo}>
                     <Image className={styles.logo} src={logo} alt='logo'/>
                   </div>
                   <div className={styles.division1}></div>
                   <div className={styles.topics1}>
                      <h1 className={styles.title}>Navegação</h1>
                       <div className={styles.topicslist}>
                         <a href='#inicio' className={styles.topic1}>Início</a>
                        <a href='#especialidades' className={styles.topic1}>Especialidades</a>
                        <a href='#atuacoes' className={styles.topic1}>Atuações</a>
                        <a href='#portfolio' className={styles.topic1}>Portfólio</a>
                        <a href='#clientes' className={styles.topic1}>Clientes</a>
                        <a href='#contato' className={styles.topic1}>Contato</a>
                        <a href='#trabalheconosco' className={styles.topic1}>Trabalhe Conosco</a>
                       </div>                     
                   </div>
                   <div className={styles.division2}></div>                     
                     <div className={styles.topics2}>         
                        <div className={styles.divtitle}>
                       <h1 className={styles.title}>Contato</h1> 
                     </div>                
                        <div className={styles.divaddress}>
                          <Image className={styles.indicator} src={indicator} alt='indicator'/>
                          <p className={styles.topicaddress}>Rua Dr. José Peroba, Edifício Metrópolis Empresarial Stiep - Cep
                          41.770-235</p>
                        </div>        
                        <div className={styles.divphone}>
                           <Image className={styles.phone} src={phone} alt='phone'/> 
                           <p className={styles.topicphone}>(71) 3341-1414</p>
                        </div>                
                        <div className={styles.divclock}>
                           <Image className={styles.clock} src={clock} alt='clock'/>
                           <p className={styles.topicclock}>Horários: Segunda a Sexta feira das 8:00 às 18:00</p> 
                        </div>                                           
                    </div>
                </div>
                <div className={styles.linefooter}>          
                  <div className={styles.division3}></div>
                  <p className={styles.text}>© 2026 Quality Engenharia e Consultoria. Todos os direitos reservados</p>
                </div>                
            </div>
        </div>
      </footer>  
    )
}